import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, phone, service, message, agree } = body;

    if (!agree) {
      return new Response(JSON.stringify({ error: "Must agree to terms." }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

    const subject = `New Quote Request: ${service} (${firstName} ${lastName})`;

    const text = `
New quote request received:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message || "(no message)"}
`;

    await transporter.sendMail({
      from: `"Cross Shine Quote Form" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email, // so you can reply directly to the customer
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Email failed to send." }), {
      status: 500,
    });
  }
}
