"use client"

import { useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
    initial: { width: '60vw', height: '60vh' },
    scrolled: { width: '100vw', height: '100vh' }
};

export function Video() {
    const containerRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [gsap, setGsap] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const frameCount = 137;
    const imageCache = useRef([]);

    const videoRef = useRef(null);
    const inView = useInView(videoRef, { once: false });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const width = useTransform(scrollYProgress, [0, 0.2], ["80vw", "100vw"]);
    const height = useTransform(scrollYProgress, [0, 0.2], ["80vh", "100vh"]);


    useEffect(() => {
        const loadGsap = async () => {
            const gsapModule = await import('gsap');
            const ScrollTriggerModule = await import('gsap/ScrollTrigger');
            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.default;

            gsap.registerPlugin(ScrollTrigger);
            setGsap(gsap);
        };

        loadGsap();
    }, []);


    useEffect(() => {
        if (!gsap || !containerRef.current) return;

        // Function to get the image path from the public directory
        const currentFrameUrl = index => (
            `/assets/videos/promo/vid/${(index + 1).toString().padStart(4, '0')}.jpg`
        );

        // Preload images
        const loadImages = () => {
            const images = [];
            let loadedImages = 0;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrameUrl(i);
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === frameCount) {
                        setImagesLoaded(true);
                    }
                };
                images.push(img);
            }

            imageCache.current = images;
        };

        loadImages();

        // GSAP animation
        const animation = gsap.to({ frame: 0 }, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                scrub: 0.5,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    if (imagesLoaded) {
                        const frame = Math.floor(self.progress * (frameCount - 1));
                        setCurrentFrame(frame);
                    }
                },
                onLeave: () => {
                    if (imagesLoaded) {
                        setCurrentFrame(frameCount - 1);
                    }
                },
            },
        });

        return () => {
            gsap.killTweensOf({ frame: 0 });
        };
    }, [gsap, frameCount, imagesLoaded]);

    const frameImage = imagesLoaded ? `/assets/videos/promo/vid/${(currentFrame + 1).toString().padStart(4, '0')}.jpg` : '';

    return (
        <div ref={containerRef} className="h-[900vh] relative">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
                <motion.div 
                    ref={videoRef}
                    className='overflow-hidden flex items-center justify-center transition duration-500'
                    style={{ width, height }}
                >
                    <div
                        className="w-screen h-screen bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url(${frameImage})` }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
