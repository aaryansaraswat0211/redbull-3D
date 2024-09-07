"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';

export const textHighlight = "bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]";
export const textColor = "bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#555555]"

export function Text(){
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (
        <div className="overflow-hidden h-auto mb-[10vh]">
            <div ref={container} className='w-full h-full flex flex-col items-center gap-8'>
                <Slide direction={'left'} left={""} progress={scrollYProgress}/>
                <h1 className="text-neutral-500 font-light leading-8 text-lg px-[20vw] text-center">
                    Red Bull Energy Drink is appreciated worldwide by 
                    top athletes, students, and in highly demanding professions 
                    as well as during long drives.
                </h1>
            </div>
        </div>
    )
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase/>
    </motion.div>
  )
}


const Phrase = () => {

  return (
    <div className={'flex gap-5 items-center'}>
      <p className={`text-8xl font-semibold ${textColor}`}>
        Vitalizes <span className={textHighlight}>Body</span> and <span className={textHighlight}>Mind</span>.® 
        &nbsp;&nbsp;
        Vitalizes <span className={textHighlight}>Body</span> and <span className={textHighlight}>Mind</span>.®  
        &nbsp;&nbsp;
        Vitalizes <span className={textHighlight}>Body</span> and <span className={textHighlight}>Mind</span>.® 
      </p>
    </div>
  )
}