import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import transporter from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const jobId = req.url.split("/").pop();
  const name = data.get("name");
  const email = data.get("email");
  const resume = data.get("resume") as File;

  // Processar e salvar o arquivo enviado
  const filePath = path.join(process.cwd(), "/src/uploads", resume.name);
  const buffer = await resume.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));

  // Configurar o e-mail
  const mailOptions = {
    from: '"Massari systems" <raphael.azevedo@massarisystems.com>', // 'Massari systems' <yourcompany@yourcompany.com>',
    to: "raphael.azevedo@massarisystems.com", // o email que receberá as candidaturas
    subject: `New Job Application for ${jobId}: ${name}`,
    text: `You have a new job application from ${name}. \nEmail: ${email}`,
    attachments: [
      {
        filename: resume.name,
        path: filePath, // caminho do arquivo salvo
      },
    ],
  };

  try {
    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    fs.unlinkSync(filePath);

    return NextResponse.json({
      message: "Application submitted and email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Application submitted but failed to send email.", error },
      { status: 500 }
    );
  }
}
