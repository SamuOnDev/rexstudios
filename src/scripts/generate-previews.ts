import { createCanvas, Canvas } from "canvas";
import gl from "gl";
import { JSDOM } from "jsdom";
import * as skinview3d from "skinview3d";
import fs from "fs";
import path from "path";

interface Skin {
    slug: string;
    image: string;
}

function setupDom() {
    const { window } = new JSDOM("<!DOCTYPE html>");
    (globalThis as unknown as { window: unknown; document: Document }).window = window as unknown;
    (globalThis as unknown as { window: unknown; document: Document }).document = window.document;
    Object.defineProperty(window, "devicePixelRatio", { value: 1 });
    const fakeMatchMedia = () => ({
        matches: false,
        media: "",
        onchange: null,
        addEventListener() {},
        removeEventListener() {},
        addListener() {},
        removeListener() {},
        dispatchEvent() { return false; },
    } as MediaQueryList);
    window.matchMedia = fakeMatchMedia;
    (globalThis as unknown as { matchMedia: typeof fakeMatchMedia }).matchMedia = fakeMatchMedia;
    window.HTMLCanvasElement = (createCanvas(1, 1) as unknown as HTMLCanvasElement).constructor as typeof HTMLCanvasElement;
    document.createElement = ((orig) => {
        return function (this: Document, tag: string) {
            if (tag === "canvas") {
                return createNodeCanvas(1, 1);
            }
            return orig.call(this, tag);
        };
    })(document.createElement.bind(document));
}

function createNodeCanvas(width: number, height: number): Canvas & HTMLCanvasElement {
    const canvas: Canvas = createCanvas(width, height);
    const cast = canvas as unknown as { getContext(type: string, opts?: unknown): unknown };
    const orig = cast.getContext.bind(canvas);
    cast.getContext = (type: string, opts?: unknown) => {
        if (type === "webgl" || type === "webgl2") {
            return gl(width, height, Object.assign({ preserveDrawingBuffer: true }, opts));
        }
        return orig(type, opts);
    };
    (canvas as unknown as { addEventListener?: () => void; removeEventListener?: () => void }).addEventListener = () => {};
    (canvas as unknown as { addEventListener?: () => void; removeEventListener?: () => void }).removeEventListener = () => {};
    return canvas as unknown as Canvas & HTMLCanvasElement;
}

async function main() {
    
    setupDom();
    const __dirname = path.resolve();
    const skinsPath = path.join(__dirname, "src", "data", "skins.json");
    const skins: Skin[] = JSON.parse(fs.readFileSync(skinsPath, "utf8"));
    const outputDir = path.join(__dirname, "public/previews");

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const generateThumbnail = async (skin: Skin) => {
        const canvas = createNodeCanvas(150, 300);
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
