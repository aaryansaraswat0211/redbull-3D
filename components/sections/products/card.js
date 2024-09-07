'use client'


import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale, height, width, ingredients}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  const backgroundColor = useTransform(
    scale,
    [1, targetScale],
    [color, '#1e1e1e']
  );
 
  return (
    
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ 
          scale, 
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: color,
          transition: 'background-color 0.5s'
        }}
        className={`flex flex-col relative w-full h-full origin-top rounded-3xl p-[6vw] px-[20vw]`}
      >
       <div className='w-fulll h-full flex items-center'>
        <div className='w-[40%] h-full overflow-hidden relative flex items-center justify-center'>
            <Image
                height={height}
                width={width}
                src={`/assets/products/${src}`}
                alt="image" 
                className='filter brightness-75 contrast-125'
              />
        </div>
        <div className='w-[60%] text-white h-full flex flex-col items-start pl-[5vw] justify-center gap-6'>
            <div>
                <h1 className='text-5xl font-semibold leading-tight mix-blend-lighten opacity-75'>{title}</h1>
            </div>
            <div>
                <p className='font-light text-lg mix-blend-lighten opacity-55 leading-8'>{description}</p>
            </div>
            <div className='mt-8 flex items-center gap-8'>
                <button className='bg-white px-8 py-4 flex items-center justify-center rounded-full text-black font-semibold hover:opacity-75 transition duration-500'>
                    Check out Now
                </button>
                <div className="flex items-center justify-end gap-2 mix-blend-lighten opacity-75 hover:underline cursor-pointer">
                    <p>Learn more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </div>
            </div>
        </div>
       </div>
      </motion.div>
    </div>
  )
}

export default Card

{/* <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt="image" 
              />
            </motion.div>
          </div> */}