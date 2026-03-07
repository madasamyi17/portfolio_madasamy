import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || 'gmail',
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSKEY,
  },
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    if (!process.env.CONTACT_EMAIL || !process.env.CONTACT_PASSKEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      return res.status(500).json({
        error: 'Email environment variables are missing. Set CONTACT_EMAIL, CONTACT_PASSKEY, and CONTACT_RECEIVER_EMAIL.',
      });
    }

    const mail = {
      from: `Portfolio Contact <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mail);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`);
});
