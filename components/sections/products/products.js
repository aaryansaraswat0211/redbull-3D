
'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { products } from '@/components/sections/products/data';
import Card from '@/components/sections/products/card';


export function Products() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className={'relative mt-[20vh] mb-[20vh]'}>
      {
        products.map( (project, i) => {
          const targetScale = 1 - ( (products.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div>
  )
}
