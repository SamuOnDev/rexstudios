import { createCanvas } from "canvas";
import * as skinview3d from "skinview3d";
import fs from "fs";
import path from "path";

interface Skin {
    slug: string;
    image: string;
}

const __dirname = path.resolve();
const skins: Skin[] = await import("../src/data/skins.json").then(mod => mod.default);
const outputDir = path.join(__dirname, "public/previews");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const generateThumbnail = async (skin: Skin) => {
    const canvas = createCanvas(150, 300);
    const viewer = new skinview3d.SkinViewer({
        canvas,
        width: 150,
        height: 300,
        skin: path.join(__dirname, "public", skin.image),
    });

    viewer.controls.enableZoom = false;
    viewer.controls.enableRotate = false;
    viewer.render();

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(path.join(outputDir, `${skin.slug}.png`), buffer);
};

for (const skin of skins) {
    await generateThumbnail(skin);
}

console.log("✔ Miniaturas generadas correctamente.");
