// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const { error } = await resend.emails.send({
            from: "RUS Contact <mayur.t@rustechnet.com>",
            to: ["mayur.t@rustechnet.com"],
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family:sans-serif;">
          <h2>📨 New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
        });

        if (error) return NextResponse.json({ error }, { status: 500 });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}