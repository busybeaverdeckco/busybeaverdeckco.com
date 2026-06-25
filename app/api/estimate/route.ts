import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { sendEmail } from "../../lib/email";
import { buildEstimateEmail, LOGO_CID } from "../../lib/estimateEmail";
import { EMAIL } from "../../content";

export const runtime = "nodejs";

let logo: Buffer | null = null;
function logoImage(): Buffer {
  if (!logo) {
    logo = readFileSync(join(process.cwd(), "public", "email-logo.png"));
  }
  return logo;
}

type Payload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  timeline: string;
  details: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(body: Partial<Payload>): Payload | null {
  const fields: (keyof Payload)[] = [
    "name",
    "email",
    "city",
    "projectType",
    "timeline",
  ];
  const out = {} as Payload;
  for (const f of fields) {
    const v = (body[f] ?? "").toString().trim();
    if (!v) return null;
    out[f] = v;
  }
  if (!isEmail(out.email)) return null;
  out.phone = (body.phone ?? "").toString().trim();
  out.details = (body.details ?? "").toString().trim();
  return out;
}

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const data = validate(body);
  if (!data) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  const { subject, html, text } = buildEstimateEmail(data);
  const cc = (process.env.SES_CC || EMAIL)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  try {
    await sendEmail({
      source: process.env.SES_FROM!,
      to: data.email,
      cc,
      replyTo: cc,
      subject,
      body: { html, text },
      inlineImages: [
        {
          filename: "busy-beaver-deck-co.png",
          content: logoImage(),
          contentType: "image/png",
          contentId: LOGO_CID,
        },
      ],
    });
  } catch (err) {
    console.error("SES send failed:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
