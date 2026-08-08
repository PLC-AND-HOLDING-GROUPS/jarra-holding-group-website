"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Line } from "@react-three/drei";

function GlobeNetwork() {
    const arcs = useMemo(() => {
        const curves: THREE.Vector3[][] = [];
        const dots: THREE.Vector3[] = [];
        const numArcs = 70; // Number of connections
        const radius = 4.2;

        for (let i = 0; i < numArcs; i++) {
            // Generate two random points on the sphere
            const p1 = new THREE.Vector3().setFromSphericalCoords(
                radius,
                Math.acos(2 * Math.random() - 1), // phi (0 to PI)
                Math.random() * 2 * Math.PI       // theta (0 to 2PI)
            );
            const p2 = new THREE.Vector3().setFromSphericalCoords(
                radius,
                Math.acos(2 * Math.random() - 1),
                Math.random() * 2 * Math.PI
            );

            const distance = p1.distanceTo(p2);
            
            // Only create arcs for points that aren't across the entire globe, to keep it looking like a dense network
            if (distance < radius * 1.5) {
                // Elevate the midpoint based on the distance between the two points to create a taller, elegant arc
                const mid = p1.clone().add(p2).multiplyScalar(0.5);
                mid.normalize().multiplyScalar(radius + distance * 0.45);
                
                const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
                curves.push(curve.getPoints(20));
                dots.push(p1, p2);
            }
        }
        return { curves, dots };
    }, []);

    return (
        <group>
            {/* Connection Arcs */}
            {arcs.curves.map((points: THREE.Vector3[], index: number) => (
                <Line
                    key={index}
                    points={points}
                    color="#00B4D8" // Vibrant Cyan for lines
                    lineWidth={1.2}
                    transparent
                    opacity={0.4}
                />
            ))}
            {/* Connection Nodes (Cities/Hubs) */}
            {arcs.dots.map((dot: THREE.Vector3, index: number) => (
                <mesh key={`dot-${index}`} position={dot}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                    <meshBasicMaterial color="#00B4D8" />
                </mesh>
            ))}
        </group>
    );
}

function GlobeScene() {
    const globeGroupRef = useRef<THREE.Group>(null!);
    const globeMeshRef = useRef<THREE.Mesh>(null!);

    // Use the actual earth texture map
    const texture = useTexture("/earth-map.jpg");

    useFrame((state, delta) => {
        if (globeGroupRef.current) {
            // Very slow earth rotation
            globeGroupRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group>
            {/* The Earth and Network */}
            <group ref={globeGroupRef} rotation-z={0.2}>
                <mesh ref={globeMeshRef}>
                    <sphereGeometry args={[4.2, 64, 64]} />
                    <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
                </mesh>
                
                {/* Network mesh attached to the globe so it rotates with it */}
                <GlobeNetwork />
            </group>
        </group>
    );
}

export default function RotatingGlobe() {
    return (
        <div className="w-full h-[400px] md:h-[550px] flex items-center justify-center overflow-visible">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <directionalLight position={[-10, -10, -10]} intensity={0.5} />

                <React.Suspense fallback={null}>
                    <GlobeScene />
                </React.Suspense>

                {/* Remove zoom/pan to keep the UI clean */}
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
