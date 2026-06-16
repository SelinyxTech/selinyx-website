import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escape(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml({ name, email, company, service, message }) {
  return `
    <div style="font-family: -apple-system, Segoe UI, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #4f46e5;">New contact enquiry</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 6px 0; color: #6b7280; width: 120px;">Name</td><td style="padding: 6px 0;">${escape(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Company</td><td style="padding: 6px 0;">${escape(company) || "—"}</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Service</td><td style="padding: 6px 0;">${escape(service) || "—"}</td></tr>
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; background: #f9fafb; padding: 16px; border-radius: 8px;">${escape(message)}</p>
    </div>
  `;
}

let cachedTransporter;
function getTransporter() {
  if (cachedTransporter) return cachedTransporter;
  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  return cachedTransporter;
}

export async function POST(request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const mailTo = process.env.MAIL_TO || gmailUser;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, service, message } = body ?? {};
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  try {
    await getTransporter().sendMail({
      from: `"Selinyx Website" <${gmailUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: buildHtml({ name, email, company, service, message }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Gmail SMTP error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }
}
