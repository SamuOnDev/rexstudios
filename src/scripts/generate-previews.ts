import { createCanvas } from "canvas";
import * as skinview3d from "skinview3d";
import fs from "fs";
import path from "path";

interface Skin {
    slug: string;
    image: string;
}

async function main() {
    const __dirname = path.resolve();
    const skinsPath = path.join(__dirname, "src", "data", "skins.json");
    const skins: Skin[] = JSON.parse(fs.readFileSync(skinsPath, "utf8"));
    const outputDir = path.join(__dirname, "public/previews");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const generateThumbnail = async (skin: Skin) => {
        const canvas = createCanvas(150, 300);
        const viewer = new skinview3d.SkinViewer({
            canvas: canvas as unknown as HTMLCanvasElement,
            width: 150,
            height: 300,
            skin: path.join(
                __dirname,
                "public",
                skin.image.replace(/^\//, "")
            ),
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
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
