import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Solo permitimos POST
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { slug, imageData } = body;

        if (!slug || !imageData) {
        return NextResponse.json({ error: "Faltan datos obligatorios." }, { status: 400 });
        }

        // Decodifica la imagen base64
        const matches = imageData.match(/^data:image\/png;base64,(.+)$/);
        if (!matches || matches.length !== 2) {
        return NextResponse.json({ error: "Formato de imagen inválido." }, { status: 400 });
        }
        const buffer = Buffer.from(matches[1], "base64");

        // Calcula la ruta de guardado
        const previewsDir = path.join(process.cwd(), "public", "previews");
        if (!fs.existsSync(previewsDir)) {
        fs.mkdirSync(previewsDir, { recursive: true });
        }
        const filePath = path.join(previewsDir, `${slug}.png`);

        // Guarda el archivo
        fs.writeFileSync(filePath, buffer);

        return NextResponse.json({ success: true, path: `/previews/${slug}.png` });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return NextResponse.json({ error: "Error interno al guardar la imagen." }, { status: 500 });
    }
}
