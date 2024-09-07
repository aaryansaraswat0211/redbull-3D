"use client"

import { useInView, motion } from "framer-motion";
import { useRef } from "react"
import { textColor, textHighlight } from "../text/text";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


export const translateStaticHeading = {
    initial: {
        opacity: 0
    },
    enter:{
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    },
    exit:{
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    }
}


export function Events(){
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    return (
        <div className="h-[100vh] w-full flex items-center">
            <div className="w-[50%]">

            </div>
            <div className="w-[50%] h-full flex items-center justify-center pr-[10vw]">
                <div ref={ref} className="flex flex-col items-start gap-8">
                    <motion.h1
                        variants={translateStaticHeading}
                        initial="initial"
                        animate={inView ? 'enter' : 'initial'}
                        exit="exit"
                        className={`${textColor} text-6xl font-semibold`}
                    >
                        From the <span className={textHighlight}>World</span> of Red Bull.
                    </motion.h1>
                    <div className="w-full h-[50vh] rounded-xl flex flex-col overflow-hidden pb-2 mt-6">
                        <div className="w-full h-[40vh] bg-neutral-800 rounded-xl overflow-hidden relative">
                            <Image
                                src={'/assets/images/event.webp'}
                                layout="fill"
                                objectFit="cover"
                                alt="image"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2 mt-6">
                            <h1 className="text-neutral-500 text-lg">Red Bull Dance Your Style World Final</h1>
                            <div className="flex items-center gap-2 text-neutral-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                <h1>Mumbai, India</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className='bg-[#012497] px-8 py-4 flex items-center justify-center rounded-full text-white font-semibold hover:opacity-75 transition duration-500 z-[9999]'>
                            View Event Info
                        </button>
                        <div className="px-2 p-4 text-neutral-800 cursor-pointer hover:opacity-70 transition duration-300 z-[9999]">
                            <div className="flex items-center justify-end gap-2">
                                <p>More events</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}