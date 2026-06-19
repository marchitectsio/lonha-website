import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Contact webhook is not configured." },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    language: String(formData.get("language") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    submittedAt: new Date().toISOString(),
    source: "lonha-website-contact-form",
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Contact webhook failed." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
