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
    const modelRef = useRef<THREE.Object3D | null>(null);

    const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
    const rotationSpeed = isMobile ? 0.003 : 0.005;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#ffffff');

        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(2, 1, 4);

        const renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.shadowMap.enabled = false;
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Luz ambiental suave
        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.4);
        light.position.set(0, 1, 0);
        scene.add(light);

        // Luz direccional (como luz solar)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);


        const loader = new GLTFLoader();
        loader.load(modelUrl, (gltf: GLTF) => {
            const model = gltf.scene;
            modelRef.current = model;

            // Calcular el centro y mover el modelo para que esté centrado
            const box = new THREE.Box3().setFromObject(model);
            const center = new THREE.Vector3();
            box.getCenter(center);
            model.position.sub(center); // Centra en (0, 0, 0)

            // Opcional: rotar para que mire al frente
            model.rotation.y = Math.PI; // Ajusta según la orientación de tus modelos

            scene.add(model);
        });

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        setTimeout(() => {
            requestAnimationFrame(() => {
                resize();
            });
        }, 50);

        window.addEventListener('resize', resize);

        const animate = () => {
            if (modelRef.current) {
                modelRef.current.rotation.y += rotationSpeed;
            };
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
    }, [modelUrl, rotationSpeed]);

    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-6xl aspect-[16/9]">
                <div
                    ref={containerRef}
                    className="w-full h-full rounded-xl"
                />
            </div>
        </div>
    );
}
