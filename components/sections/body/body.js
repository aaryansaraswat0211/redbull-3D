"use client"

import { useInView, motion } from "framer-motion";
import { useRef } from "react"

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


export function BodySection({
    title,
    body,
    buttonLabel,
    linkLabel
}){

    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    return (
        <div className="h-[100vh] w-full flex items-center">
            <div className="w-[50%]">

            </div>
            <div className="w-[50%] h-full flex items-center justify-center pr-[10vw]">
                <div ref={ref} className="flex flex-col items-start gap-8">
                    <motion.div
                        variants={translateStaticHeading}
                        initial="initial"
                        animate={inView ? 'enter' : 'initial'}
                        exit="exit"
                    >
                        {title}
                    </motion.div>
                    <motion.h1 
                        className="text-neutral-600 leading-8 font-light text-lg"
                        variants={translateStaticHeading}
                        initial="initial"
                        animate={inView ? 'enter' : 'initial'}
                        exit="exit"
                    >
                        {body}
                    </motion.h1>

                    <div className="flex items-center gap-6">
                        {buttonLabel && (
                            <button className='bg-[#012497] px-8 py-4 flex items-center justify-center rounded-full text-white font-semibold hover:opacity-75 transition duration-500 z-[9999]'>
                                {buttonLabel}
                            </button>
                        )}
                        {linkLabel && (
                            <div className="px-2 p-4 text-neutral-800 cursor-pointer hover:opacity-70 transition duration-300 z-[9999]">
                                <div className="flex items-center justify-end gap-2">
                                    <p>{linkLabel}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}