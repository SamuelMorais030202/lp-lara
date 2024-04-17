import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, whatsApp } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.tiktokpremium.online",
    port: 465,
    secure: true,
    auth: {
      user: "nao-responda1@tiktokpremium.online",
      pass: "LBrkyFmocCoy8jZE69Z5chyglSrOV9iJmUp3tpaWwnl2cv2s7g"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'nao-responda1@tiktokpremium.online',
    to: email,
    subject: 'Uma nova pessoa está interessada na mentoria',
    html: `
      <h1>Olá Lara,</h1>
      <p>Uma nova pessoa está interessada na mentória</p>
      <ul>
        <li>Nome: ${name}</li>
        <li>E-mail: ${email}</li>
        <li>WhatsApp: ${whatsApp}</li>
      </ul>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    return NextResponse.json({ error })
  }
}
