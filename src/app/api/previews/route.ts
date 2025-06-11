import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Solo método GET
export async function GET() {
    try {
        const previewsDir = path.join(process.cwd(), "public", "previews");

        // Si la carpeta no existe, devuelve lista vacía
        if (!fs.existsSync(previewsDir)) {
        return NextResponse.json([]);
        }

        // Lee los archivos .png y extrae los slugs (sin extensión)
        const files = fs.readdirSync(previewsDir);
        const slugs = files
        .filter((file) => file.endsWith(".png"))
        .map((file) => file.replace(/\.png$/, ""));

        return NextResponse.json(slugs);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return NextResponse.json({ error: "Error interno al leer previews." }, { status: 500 });
    }
}
