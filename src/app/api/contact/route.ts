import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  if (req.method === "POST") {
    const body = await req.json();

    console.log(body)

    

    // Simulando o envio de e-mail
    try {
      // Aqui você pode integrar com um serviço de e-mail como SendGrid, Mailgun, etc.
      // Exemplo com nodemailer (apenas para desenvolvimento):
      
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
      const response = await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: body.email,
        subject: `New message from ${body.name}`,
        html: `<p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Name: ${body.name}</p><p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Email: ${body.email}</p><p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Message: ${body.message}</p>`,
      });


      return NextResponse.json({message:'Email sent!'});
    } catch (error) {
      return NextResponse.json({message:'Something went wrong!'});
    }
  } else {
    return NextResponse.json({message:'Something went wrong!'}); // Method Not Allowed
  }
}
