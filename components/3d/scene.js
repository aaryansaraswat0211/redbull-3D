"use client"

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Model } from "@/components/3d/model";
import { ScrollControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

const CursorLight = () => {
  const lightRef = useRef();
  const [mousePosition, setMousePosition] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to range [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition([x, y]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (lightRef.current) {
      // Subtly adjust light position based on mouse
      lightRef.current.position.x = -0.1 + mousePosition[0] * 0.1;
      lightRef.current.position.y = 1 + mousePosition[1] * 0.1;
    }
  });

  return <directionalLight ref={lightRef} position={[-0.1, 1, 1]} intensity={8} />;
};

export function Scene() {
  const [lightPosition, setLightPosition] = useState([1, 1, 1]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setLightPosition([Math.sin(scrollPosition * 0.02), 1, 1]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas shadows camera={{ zoom: 100, fov: 60, position: [0, 0, 100] }}>
      <ScrollControls pages={2} damping={0.25}>
        <ambientLight intensity={0.001} />
        <CursorLight />
        <Physics>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Physics>
      </ScrollControls>
    </Canvas>
  );
}