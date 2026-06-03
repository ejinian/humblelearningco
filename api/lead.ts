interface LeadPayload {
  name: string;
  contact: string;
  grade: string;
  subject: string;
}

export async function POST(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const ok = new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return ok; // graceful no-op if key not configured

  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (!body.name || !body.contact) return ok;

  const html = `
    <div style="font-family:sans-serif;max-width:480px;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
      <h2 style="margin:0 0 16px;color:#1E2A38;font-size:18px">New Chat Lead — HUMBLE Learning Co.</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:6px 0;color:#6b7280;width:110px">Name</td><td style="padding:6px 0;font-weight:600">${body.name}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Contact</td><td style="padding:6px 0;font-weight:600">${body.contact}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Grade</td><td style="padding:6px 0">${body.grade}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Subject</td><td style="padding:6px 0">${body.subject}</td></tr>
      </table>
      <hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb"/>
      <p style="margin:0;font-size:12px;color:#9ca3af">Sent from the HUMBLE Learning Co. chat widget · humblelearningco.com</p>
    </div>
  `.trim();

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HUMBLE Chat <onboarding@resend.dev>",
        to: "humblelearnco@gmail.com",
        subject: `New tutoring inquiry — ${body.name} (${body.subject})`,
        html,
      }),
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    // Non-fatal — don't block the user if email fails
  }

  return ok;
}
