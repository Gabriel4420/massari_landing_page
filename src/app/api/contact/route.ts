import transporter from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, _res: NextResponse) {
  if (req.method === "POST") {
    const body = await req.json();

    try {
      await transporter.sendMail({
        from: body.email,
        to: process.env.GMAIL_USER,
        subject: `New message from ${body.name}`,
        html: `<p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Name: ${body.name}</p><p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Email: ${body.email}</p><p style="text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 20px; ">Message: ${body.message}</p>`,
      });

      return NextResponse.json({ message: "Email sent!" });
    } catch (error) {
      return NextResponse.json({ message: "Something went wrong!" });
    }
  } else {
    return NextResponse.json({ message: "Something went wrong!" }); // Method Not Allowed
  }
}
