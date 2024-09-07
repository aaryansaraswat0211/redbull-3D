import { useRef } from "react";
import { textColor, textHighlight } from "../text/text";
import { motion, useInView } from "framer-motion";
import { translateStaticHeading } from "../body/body";


export function Ingredients(){
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    
    return (
        <div ref={ref} className="text-6xl w-full h-auto py-[20vh] font-semibold px-8 flex items-center flex-col gap-6">
            <motion.h1 
                className={textColor}
                variants={translateStaticHeading}
                initial="initial"
                animate={inView ? 'enter' : 'initial'}
                exit="exit"
            >
                Most scientifically studied <span className={textHighlight}>ingredients</span>.
            </motion.h1>
            <motion.p 
                className="text-neutral-600 font-light leading-8 text-lg px-[20vw] text-center"
                variants={translateStaticHeading}
                initial="initial"
                animate={inView ? 'enter' : 'initial'}
                exit="exit"
            >
                At Red Bull, consumer&apos;s health is topmost priority. We use the world&apos;s 
                most scientifically tested and proven ingredients in our products.
            </motion.p>

            <div className="w-full flex items-center justify-center mt-[10vh] text-neutral-600 font-light text-lg">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 2xl:grid-cols-5 gap-2 w-full">
                    <div className="w-full h-full border-r-[1px] border-neutral-800 flex items-center justify-center">
                        Caffeine
                    </div>
                    <div className="w-full h-full border-r-[1px] border-neutral-800 flex items-center justify-center">
                        Taurine
                    </div>
                    <div className="w-full h-full border-r-[1px] border-neutral-800 flex items-center justify-center">
                        B-Group Vitamins
                    </div>
                    <div className="w-full h-full border-r-[1px] border-neutral-800 flex items-center justify-center">
                        Sugar
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        Water
                    </div>
                </div>
            </div>
        </div>
    )
}