"use client";


import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import * as skinview3d from "skinview3d";

interface Skin {
    slug: string;
    name: { [key: string]: string };
    description: { [key: string]: string };
    image: string;
    marketplace_url: string;
    youtube: string;
    featured: boolean;
}

export default function GenerateThumbsPage() {
    const [skins, setSkins] = useState<Skin[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
        fetch("/api/skins").then((res) => res.json()),
        fetch("/api/previews").then((res) => res.json()),
        ]).then(([skinsList, previewsList]) => {
        setSkins(skinsList);
        setPreviews(previewsList);
        setLoading(false);
        });
    }, []);

    if (loading) return <div className="text-center py-12">Cargando...</div>;

    const skinsConPreview = skins.filter((skin) => previews.includes(skin.slug));
    const skinsSinPreview = skins.filter((skin) => !previews.includes(skin.slug));

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">Miniaturas de Skins</h1>

        <section className="mb-16">
            <h2 className="text-lg font-semibold mb-4 text-center">Nuevas (sin miniatura):</h2>
            {skinsSinPreview.length === 0 ? (
            <div className="text-gray-500 text-center">No hay skins nuevas pendientes de miniatura.</div>
            ) : (
            <table className="w-full border mb-8 text-center align-middle">
                <thead>
                <tr>
                    <th className="text-center">Slug</th>
                    <th className="text-center">Render 3D</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Generar</th>
                </tr>
                </thead>
                <tbody>
                    {skinsSinPreview.map((skin) => (
                        <SkinPreviewRow
                        key={skin.slug}
                        skin={skin}
                        onGenerated={() => {
                            fetch("/api/previews")
                            .then(res => res.json())
                            .then(setPreviews);
                        }}
                        />
                    ))}
                </tbody>
            </table>
            )}
        </section>

        <section>
            <h2 className="text-lg font-semibold mb-4 text-center">Existentes (miniatura generada):</h2>
            {skinsConPreview.length === 0 ? (
            <div className="text-gray-500 text-center">No hay skins con miniatura generada.</div>
            ) : (
            <table className="w-full border mb-8 text-center align-middle">
                <thead>
                <tr>
                    <th className="text-center">Slug</th>
                    <th className="text-center">Render 3D</th>
                    <th className="text-center">Miniatura</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Estado</th>
                </tr>
                </thead>
                <tbody>
                {skinsConPreview.map((skin) => (
                    <tr key={skin.slug}>
                        <td className="align-middle text-center">{skin.slug}</td>
                        <td className="align-middle text-center">
                            <div className="flex justify-center items-center h-full">
                                <SkinViewerCanvas skinUrl={skin.image} width={150} height={300} />
                            </div>
                        </td>
                        <td className="align-middle text-center">
                            <div className="flex justify-center items-center h-full">
                                <Image
                                src={`/previews/${skin.slug}.png?${Date.now()}`}
                                alt={`Preview ${skin.slug}`}
                                width={150}
                                height={300}
                                className="rounded shadow"
                                />
                            </div>
                        </td>
                        <td className="align-middle text-center">{skin.name["en"]}</td>
                        <td className="align-middle text-center">
                            <span className="text-green-700 font-semibold">OK</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </section>
        </div>
    );
}


function SkinViewerCanvas({ skinUrl, width = 150, height = 300 }: { skinUrl: string; width?: number; height?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewerRef = useRef<skinview3d.SkinViewer | null>(null);

    useEffect(() => {
        if (canvasRef.current && !viewerRef.current) {
        viewerRef.current = new skinview3d.SkinViewer({
            canvas: canvasRef.current,
            width,
            height,
            skin: skinUrl,
        });
            viewerRef.current.zoom = 0.9;
            viewerRef.current.animation = new skinview3d.WalkingAnimation();
            viewerRef.current.playerObject.rotation.y = Math.PI / 8;
        }
        return () => {
        if (viewerRef.current) {
            viewerRef.current.dispose();
            viewerRef.current = null;
        }
        };
    }, [skinUrl, width, height]);

    return <canvas ref={canvasRef} width={width} height={height} style={{ border: "1px solid #aaa", background: "#eee" }} />;
}

function SkinPreviewRow({ skin, onGenerated }: { skin: Skin; onGenerated: () => void }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewerRef = useRef<skinview3d.SkinViewer | null>(null);
    const [generating, setGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const SCALE = 3;
    const VIEW_WIDTH = 150;
    const VIEW_HEIGHT = 300;
    const INTERNAL_WIDTH = VIEW_WIDTH * SCALE;
    const INTERNAL_HEIGHT = VIEW_HEIGHT * SCALE;


    // Inicializa skinview3d cuando el componente monta
    useEffect(() => {
        if (canvasRef.current && !viewerRef.current) {
            viewerRef.current = new skinview3d.SkinViewer({
                canvas: canvasRef.current,
                width: 150,
                height: 300,
                skin: skin.image,
            });
            
            viewerRef.current.zoom = 0.9;
            viewerRef.current.animation = new skinview3d.WalkingAnimation();
            viewerRef.current.playerObject.rotation.y = Math.PI / 8; 

        }
        return () => {
        if (viewerRef.current) {
            viewerRef.current.dispose();
            viewerRef.current = null;
        }
        };
    }, [skin.image]);

    // Función para capturar PNG y enviarlo al backend
    const handleGenerate = async () => {
        setGenerating(true);
        setError(null);
        try {
            const canvas = canvasRef.current;
            if (!canvas) throw new Error("Canvas no disponible");

            if (viewerRef.current) {
                const walkAnim = new skinview3d.WalkingAnimation();
                viewerRef.current.zoom = 0.85;
                viewerRef.current.animation = walkAnim;
                viewerRef.current.height = 900;
                viewerRef.current.width = 450;
                walkAnim.progress = 0.25;
                walkAnim.update(viewerRef.current.playerObject, 0);
                viewerRef.current.playerObject.rotation.y = Math.PI / 8;
                viewerRef.current.render();
            }

            const imageData = canvas.toDataURL("image/png");

            const res = await fetch("/api/upload-preview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug: skin.slug, imageData }),
            });

            if (!res.ok) throw new Error("Error al guardar el PNG");
            onGenerated();
        } catch (err) {
            setError((err as Error).message);
        }
        setGenerating(false);
    };

    return (
        <tr>
            <td className="align-middle text-center">{skin.slug}</td>
            <td className="align-middle text-center">
            <div className="flex justify-center items-center h-full">
                <canvas
                    ref={canvasRef}
                    width={INTERNAL_WIDTH}
                    height={INTERNAL_HEIGHT}
                    style={{
                        width: VIEW_WIDTH,
                        height: VIEW_HEIGHT,
                        border: "1px solid #aaa",
                        background: "#eee",
                    }}
                />
            </div>
            </td>
            <td className="align-middle text-center">{skin.name["en"]}</td>
            <td className="align-middle text-center">
            <div className="flex flex-col justify-center items-center h-full">
                <button
                disabled={generating}
                onClick={handleGenerate}
                className="bg-blue-600 text-white rounded px-3 py-1 mb-1"
                >
                {generating ? "Generando..." : "Generar PNG"}
                </button>
                {error && <div className="text-red-600 text-xs">{error}</div>}
            </div>
            </td>
        </tr>
    );

}
