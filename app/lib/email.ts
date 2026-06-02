import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import nodemailer from "nodemailer";

export type EmailBody =
  | { html: string }
  | { text: string }
  | { html: string; text: string };

export type InlineImage = {
  filename: string;
  content: Buffer;
  contentType: string;
  contentId: string;
};

export type Email = {
  source: string;
  replyTo?: string | string[];
  to: string | string[];
  cc?: string | string[];
  subject: string;
  body: EmailBody;
  inlineImages?: InlineImage[];
};

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is not set`);
  return v;
}

const join = (v: string | string[]) => (Array.isArray(v) ? v.join(",") : v);

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;
  const sesClient = new SESv2Client({
    region: env("SES_REGION"),
    credentials: {
      accessKeyId: env("SES_ACCESS_KEY_ID"),
      secretAccessKey: env("SES_SECRET_ACCESS_KEY"),
    },
  });
  // nodemailer's SES transport expects { sesClient, SendEmailCommand };
  // the cast bridges its loose runtime contract to the v3 SDK types.
  transporter = nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand },
  } as nodemailer.TransportOptions);
  return transporter;
}

export function sendEmail(email: Email) {
  return getTransporter().sendMail({
    from: email.source,
    to: join(email.to),
    ...(email.cc ? { cc: join(email.cc) } : {}),
    replyTo: email.replyTo ? join(email.replyTo) : email.source,
    subject: email.subject,
    ...("text" in email.body ? { text: email.body.text } : {}),
    ...("html" in email.body ? { html: email.body.html } : {}),
    ...(email.inlineImages?.length
      ? {
          attachments: email.inlineImages.map((img) => ({
            filename: img.filename,
            content: img.content,
            contentType: img.contentType,
            cid: img.contentId,
            contentDisposition: "inline" as const,
          })),
        }
      : {}),
  });
}
