"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useDrag } from 'react-use-gesture';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import * as THREE from 'three';

useGLTF.preload("/models/redbull.glb");

export function Model() {
    const groupRef = useRef(null);
    const { scene } = useGLTF("/models/redbull.glb");
    const [gsap, setGsap] = useState(null);
    const timelinesRef = useRef([]);


    useEffect(() => {
        import('gsap').then((gsapModule) => {
            import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
                const gsap = gsapModule.default;
                const ScrollTrigger = ScrollTriggerModule.default;
                gsap.registerPlugin(ScrollTrigger);
                setGsap(gsap);
            });
        });
    }, []);

    useEffect(() => {
        if (!gsap || !groupRef.current) return;

        // const floatingAnimation = gsap.to(groupRef.current.position, {
        //     y: "+=0.006",
        //     duration: 1,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "sine.inOut" 
        // });
        // floatingAnimation.play();

        

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".model1View1",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl1.to(groupRef.current.rotation, {
            y: -Math.PI * 1,
            z: Math.PI / 400,
            x: 1,
        })
        .to(groupRef.current.position, {
            x: -0.5,
            y: -0.5,
        }, "<")
        .to(groupRef.current.scale, {
            x: 12,
            y: 12,
            z: 12,
        }, "<");

        timelinesRef.current.push(tl1);

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".model1View2",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl2.to(groupRef.current.rotation, {
            y: 1.4,
            x: -0.2,
        })
        .to(groupRef.current.position, {
            x: -0.5,
            y: 0.001,
        }, "<")
        .to(groupRef.current.scale, {
            x: 12,
            y: 12,
            z: 12,
        }, "<");

        timelinesRef.current.push(tl2);

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".model1View3",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl3.to(groupRef.current.rotation, {
            z: 2,
            y: 2,
        })
        .to(groupRef.current.position, {
            x: -0.5,
            y: 1.3,
        }, "<")
        .to(groupRef.current.scale, {
            x: 8,
            y: 8,
            z: 8,
        }, "<");

        timelinesRef.current.push(tl3);

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".model1View4",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl4.to(groupRef.current.rotation, {
            z: 1.8,
            y: 2,
            x: -1.2,
        })
        .to(groupRef.current.position, {
            x: -0.5,
            y: 0.001,
        }, "<")
        .to(groupRef.current.scale, {
            x: 5,
            y: 5,
            z: 5,
        }, "<");

        timelinesRef.current.push(tl4);



        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".model1View5",
                start: "top top-=200",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl5.to(groupRef.current.rotation, {
            z: -1.57,
            y: 3.14,
            x: 1,
        })
        .to(groupRef.current.position, {
            x: 0,
            y: -0.2,
        }, "<")
        .to(groupRef.current.scale, {
            x: 6,
            y: 6,
            z: 6,
        }, "<");


        timelinesRef.current.push(tl5);



        return () => {
            timelinesRef.current.forEach(timeline => timeline && timeline.kill());
            timelinesRef.current = [];
        };
    }, [gsap]);

    
    return (
        <group 
            ref={groupRef} 
            rotation={[0, 1.4, 0]} 
            position={[0, -0.6, 2]} 
            scale={[8, 8, 8]}
            
        >
            <primitive object={scene} />
        </group>
    );
}