import { EMAIL, PHONE } from "../content";

export type EstimateData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  timeline: string;
  details: string;
};

export const LOGO_CID = "bbdc-logo";
const SITE = "https://www.busybeaverdeckco.com";
const TEL = `tel:+1${PHONE.replace(/[^0-9]/g, "")}`;

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function buildEstimateEmail(data: EstimateData) {
  const firstName = data.name.split(" ")[0];
  const subject = "Got your build order";

  const recap = [
    `Project: ${data.projectType}`,
    `Timeline: ${data.timeline}`,
    `Location: ${data.city}`,
    `Phone: ${data.phone || "n/a"}`,
  ];

  const text = [
    `Hey ${firstName},`,
    "",
    "Thanks for reaching out. I got your build order and I'll get back to you",
    "within a day.",
    "",
    "If anything else comes up, feel free to reply to this email.",
    "",
    "Here's what you sent over:",
    ...recap,
    "",
    `  "${data.details}"`,
    "",
    "Talk soon,",
    "Josh",
    "",
    "--",
    "Busy Beaver Deck Co.",
    `${PHONE} · ${EMAIL} · ${SITE.replace("https://www.", "")}`,
    "Custom decks & outdoor living across Snohomish County & the Seattle Eastside.",
    "You're getting this because you requested an estimate at busybeaverdeckco.com.",
  ].join("\n");

  const p = "margin:0 0 16px;";
  const recapHtml = recap
    .map((line) => esc(line))
    .join('<br>\n            ');

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Thanks ${esc(firstName)}, I got your build order and I'll get back to you within a day.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="left" style="padding:24px 22px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:560px;">
          <tr>
            <td style="font:15px/1.62 -apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#222222;">
              <p style="${p}">Hey ${esc(firstName)},</p>
              <p style="${p}">Thanks for reaching out. I got your build order and I'll get back to you within a day.</p>
              <p style="${p}">If anything else comes up, feel free to reply to this email.</p>
              <p style="margin:0 0 6px;color:#666666;">Here's what you sent over:</p>
              <p style="margin:0 0 16px;color:#444444;">
            ${recapHtml}
              </p>
              <p style="margin:0 0 20px;color:#555555;font-style:italic;">"${esc(data.details)}"</p>
              <p style="margin:0 0 2px;">Talk soon,</p>
              <p style="margin:0 0 26px;">Josh</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e6e6e6;">
                <tr><td colspan="2" style="height:20px;line-height:20px;font-size:0;">&nbsp;</td></tr>
                <tr>
                  <td style="vertical-align:middle;padding-right:14px;width:64px;">
                    <img src="cid:${LOGO_CID}" width="64" alt="Busy Beaver Deck Co." style="display:block;width:64px;height:auto;border:0;">
                  </td>
                  <td style="vertical-align:middle;font:13px/1.55 -apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#666666;">
                    <strong style="color:#222222;">Busy Beaver Deck Co.</strong><br>
                    <a href="${TEL}" style="color:#666666;text-decoration:none;">${PHONE}</a> ·
                    <a href="mailto:${EMAIL}" style="color:#666666;text-decoration:none;">${EMAIL}</a> ·
                    <a href="${SITE}" style="color:#666666;text-decoration:none;">busybeaverdeckco.com</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:14px;font:11px/1.6 -apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#999999;">
                    Custom decks &amp; outdoor living across Snohomish County &amp; the Seattle Eastside.<br>
                    You're getting this because you requested an estimate at busybeaverdeckco.com.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}
