"use client";
import { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

export default function SkinViewer({ skinImage }: { skinImage: string }) {
    const containerRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SCALE = 3;
        const visualWidth = containerRef.current.clientWidth;
        const internalWidth = visualWidth * SCALE;
        const internalHeight = 500 * SCALE;

        // Establece las dimensiones internas del canvas
        containerRef.current.width = internalWidth;
        containerRef.current.height = internalHeight;

        const viewer = new skinview3d.SkinViewer({
            width: internalWidth,
            height: internalHeight,
            skin: skinImage,
            canvas: containerRef.current
        });

        viewer.controls.enableZoom = true;
        viewer.controls.enableRotate = true;
        viewer.animation = new skinview3d.WalkingAnimation();

        return () => {
            viewer.dispose();
        };
    }, [skinImage]);

    return <canvas ref={containerRef} className="w-full h-[500px]" />;
}
