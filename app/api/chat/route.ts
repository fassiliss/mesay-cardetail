import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, page, company } = body;

    if (company) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    const text = `
New live chat message received:

Name: ${name}
Email: ${email}
Page: ${page || "(not provided)"}

Message:
${message}
`;

    await transporter.sendMail({
      from: `"Cross Shine Live Chat" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Live Chat Message from ${name}`,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Message failed to send." }), {
      status: 500,
    });
  }
}
