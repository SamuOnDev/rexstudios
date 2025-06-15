import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Este endpoint se encarga de recibir el POST desde el formulario
export async function POST(req: Request) {
    try {
        const { name, email, message, portfolio, discord } = await req.json();

        // Validaciones básicas
        if (!name || !email || !message) {
        return NextResponse.json(
            { error: 'Los campos nombre, email y mensaje son obligatorios.' },
            { status: 400 }
        );
        }

        // Transporter de Nodemailer usando variables de entorno
        const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        // Construcción del correo
        const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `Nuevo mensaje de contacto de ${name}`,
        text:
            `Nombre: ${name}\n` +
            `Email: ${email}\n` +
            `Portfolio: ${portfolio || '—'}\n` +
            `Discord: ${discord || '—'}\n` +
            `Mensaje: ${message}`,
        replyTo: email,
        };

        // Envío
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado correctamente.' });
    } catch (err) {
        console.error('Error al enviar email:', err);
        return NextResponse.json(
        { error: 'Error interno al enviar el email.' },
        { status: 500 }
        );
    }
}