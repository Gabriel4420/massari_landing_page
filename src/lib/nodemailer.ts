import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  logger: true, // Habilitar logs
  debug: true, // Habilitar modo debug
});

export default transporter;
