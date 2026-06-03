#!/usr/bin/env python3
"""
Post-process Next.js static export so the site works under a non-root
proxy URL (e.g. sites.pplx.app/sites/proxy/<token>/.../out/).

For each HTML file under out/, rewrite absolute paths to be relative to
the file's location:

  Assets:    /_next/...        -> ../../_next/...
  Pages:     /about/           -> ../about/    (depth aware)
  Favicon:   /favicon.svg      -> ../../favicon.svg

We must NOT rewrite:
  - external URLs (http://, https://, mailto:, tel:)
  - protocol-relative URLs (//cdn...)
  - in-page anchors (#id) — but rewrite "/path/#id" path portion
"""
import os
import re
import sys

OUT = sys.argv[1] if len(sys.argv) > 1 else "out"

# The set of top-level absolute paths we should treat as internal routes
# (anything starting with one of these prefixes counts as internal).
# We rewrite any "/..." that starts with one of these (plus assets).
INTERNAL_ROOTS = [
    "/_next/",
    "/about",
    "/accessibility",
    "/contact",
    "/es",
    "/favicon.svg",
    "/how-we-help",
    "/know-your-rights",
    "/sitemap.xml",
    "/testimonials",
]

# Sort by length desc so longer prefixes match first when needed.
INTERNAL_ROOTS_SORTED = sorted(INTERNAL_ROOTS, key=len, reverse=True)

# Match href="/..." or src="/..." or content inside url(/...)
# Capture: opening delimiter + the absolute path (no quotes).
HREF_SRC_RE = re.compile(
    r'(href|src|action|formaction|poster|data)=(["\'])(/[^"\']*?)\2'
)
URL_CSS_RE = re.compile(r'url\((["\']?)(/[^)\s"\']+)\1\)')

def is_internal(path: str) -> bool:
    # Special case: "/" alone is internal (homepage).
    if path == "/":
        return True
    # Strip fragment/query for prefix check.
    bare = path.split("#", 1)[0].split("?", 1)[0]
    for root in INTERNAL_ROOTS_SORTED:
        if bare == root or bare.startswith(root + "/") or bare.startswith(root):
            return True
    return False

def depth(rel_path: str) -> int:
    parts = rel_path.replace(os.sep, "/").split("/")
    return max(0, len(parts) - 1)

def make_relative(absolute_path: str, file_depth: int) -> str:
    # absolute_path starts with "/". Strip leading slash.
    body = absolute_path.lstrip("/")
    prefix = "./" if file_depth == 0 else ("../" * file_depth)
    if body == "":
        # Linking to site root: at depth 0 -> "./", at deeper -> "../" * depth
        return prefix if file_depth > 0 else "./"
    return prefix + body

def rewrite_html(content: str, file_depth: int) -> str:
    def repl_attr(m):
        attr = m.group(1)
        quote = m.group(2)
        path = m.group(3)
        if not is_internal(path):
            return m.group(0)
        new_path = make_relative(path, file_depth)
        return f'{attr}={quote}{new_path}{quote}'

    def repl_url(m):
        quote = m.group(1)
        path = m.group(2)
        if not is_internal(path):
            return m.group(0)
        new_path = make_relative(path, file_depth)
        return f'url({quote}{new_path}{quote})'

    content = HREF_SRC_RE.sub(repl_attr, content)
    content = URL_CSS_RE.sub(repl_url, content)
    return content

def rewrite_js_or_css(content: str, file_depth: int) -> str:
    # Inside JS/CSS the asset references can appear as string literals.
    # We only rewrite "/_next/..." since that's the only thing referenced
    # from JS at runtime (chunks) and CSS (fonts/images). Page hrefs in
    # client-side <Link> code already resolve correctly because Next uses
    # the document's current URL during navigation when the basePath is empty.
    def repl(m):
        quote = m.group(1)
        path = m.group(2)
        new_path = make_relative(path, file_depth)
        return f'{quote}{new_path}{quote}'

    pattern = re.compile(r'(["\'`])(/_next/[^"\'`]+)\1')
    return pattern.sub(repl, content)

def main():
    rewritten = 0
    for root, _, files in os.walk(OUT):
        for name in files:
            full = os.path.join(root, name)
            rel = os.path.relpath(full, OUT)
            d = depth(rel)
            if name.endswith(".html"):
                with open(full, "r", encoding="utf-8") as f:
                    content = f.read()
                new = rewrite_html(content, d)
                if new != content:
                    with open(full, "w", encoding="utf-8") as f:
                        f.write(new)
                    rewritten += 1
            elif name.endswith(".txt"):
                # RSC payload files — also patch absolute /_next/ refs.
                with open(full, "r", encoding="utf-8") as f:
                    content = f.read()
                new = rewrite_js_or_css(content, d)
                if new != content:
                    with open(full, "w", encoding="utf-8") as f:
                        f.write(new)
                    rewritten += 1
    print(f"Rewrote {rewritten} files.")

if __name__ == "__main__":
    main()
