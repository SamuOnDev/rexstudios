"use client";
import { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

export default function SkinViewer({ skinImage }: { skinImage: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const viewer = new skinview3d.SkinViewer({
        width: containerRef.current.clientWidth,
        height: 500,
        skin: skinImage,
        canvas: containerRef.current
        });

        viewer.controls.enableZoom = true;
        viewer.controls.enableRotate = true;
        viewer.animation = new skinview3d.WalkingAnimation();
        viewer.animation?.play();

        return () => {
        viewer.dispose();
        };
    }, [skinImage]);

    return <canvas ref={containerRef} className="w-full h-[500px]" />;
}
