import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, email, message } = req.body

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.MY_PASS,
            },
        })

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Message from ${name}`,
            text: message,
            html: `<b>Message from:</b> ${name} <br> <b>Email:</b> ${email} <br> <b>Message:</b> <p>${message}</p>`,
        }

        transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
            if (error) {
                return res.status(500).json({ error: error.message })
            }
            res.status(200).json({ message: "Email sent successfuly", info})
        })
    } else {
        res.setHeader("Allow", ["POST"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}