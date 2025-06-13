'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface Props {
    modelUrl: string;
}

export default function ModelViewer({ modelUrl }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(2, 2, 3);

        scene.background = new THREE.Color('#f8fafc');
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        
        container.appendChild(renderer.domElement);
        
        setTimeout(() => resize(), 0); 
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 1, 0);
        scene.add(light);

        


        const loader = new GLTFLoader();
        loader.load(modelUrl, (gltf: GLTF) => {
        scene.add(gltf.scene);
        });

        const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', resize);
        resize();

        const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        };
        animate();

        return () => {
        window.removeEventListener('resize', resize);
        renderer.dispose();
        container.removeChild(renderer.domElement);
        };
    }, [modelUrl]);

    return (
        <div className="relative w-full max-w-screen-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow mb-12">
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
}
