import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Contact webhook is not configured; use email fallback." },
      { status: 503 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  const clean = (name: string, max: number) => String(formData.get(name) ?? "").trim().slice(0, max);
  if (clean("website", 200)) return NextResponse.json({ ok: true });

  const payload = {
    name: clean("name", 120),
    phone: clean("phone", 40),
    email: clean("email", 254),
    language: clean("language", 8),
    message: clean("message", 500),
    submittedAt: new Date().toISOString(),
    source: "lonha-website-contact-form",
  };

  const consent = formData.get("consent");
  if (!payload.name || !/^[\d\s().+-]{7,40}$/.test(payload.phone) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || !payload.message || !consent) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
  }

  let url: URL;
  try {
    url = new URL(webhookUrl);
    if (url.protocol !== "https:") throw new Error("Webhook must use HTTPS");
  } catch {
    return NextResponse.json({ ok: false, error: "Contact webhook is invalid." }, { status: 500 });
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Contact webhook could not be reached." }, { status: 502 });
  }

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Contact webhook failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
