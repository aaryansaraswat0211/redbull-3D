import Image from "next/image";
import { Inter, Sora } from "next/font/google";
import { HeroSection } from "@/components/sections/hero/hero";
import { BodySection } from "@/components/sections/body/body";
import dynamic from "next/dynamic";
import { Products } from "@/components/sections/products/products";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Video } from "@/components/sections/video/video";
import { Text } from "@/components/sections/text/text";
import { Ingredients } from "@/components/sections/ingredients/ingredients";
import { Cta } from "@/components/sections/cta/cta";
import { Events } from "@/components/sections/events/events";

const ModelViewer = dynamic(() => 
  import('@/components/3d/model-viewer')
    .then((mod) => mod.ModelViewer)
)


const font = Sora({ subsets: ["latin"] });

const title1 = (
  <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#555555]">Fueling <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]">Champions</span> since 1984.®</h1>
)

const body1 = (`Red Bull Energy Drink is appreciated worldwide 
            by top athletes, students, and in highly demanding 
            professions as well as during long drives
`)



const title2 = (
  <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#555555]"><span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]">Beyond </span>Limits.®</h1>
)

const body2 = (`Why blend in when you were born to stand out? 
      Red Bull fuels the trailblazers, the risk-takers, 
      the legends in the making.
`)


const title3 = (
  <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#555555]">Average is <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]">boring</span>.</h1>
)

const body3 = (`Average is boring. You’re not here to play it safe; 
  you’re here to conquer. With Red Bull, you’re always above the rest. 
  Elevate your game and leave the ordinary behind.
`)



const title4 = (
  <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#555555]">A can has more than one <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]">life</span>.</h1>
)

const body4 = (`At Red Bull, we recognise that we 
  have a responsibility towards our environment. 
  You can read more about our sustainable approach here:
`)



export default function Home() {
  const ref = useRef(null);
  const productsRef = useRef(null);
  const isInView = useInView(ref, { margin: '10% 0px -0.005% 0px' });


  return (
    <main
      className={`bg-black transition duration-500 w-full h-auto ${font.className}`}
      suppressHydrationWarning
      id="main"
    >
      <ModelViewer/>
        <div className="model1View1">
          <HeroSection/>
          <BodySection title={title1} body={body1} buttonLabel={'Read our history'} linkLabel={'Success stories'}/>
        </div>

        <div className="model1View2">
          <BodySection title={title2} body={body2} buttonLabel={'Our values'}/>
          <BodySection title={title3} body={body3} buttonLabel={'Our misson'} linkLabel={'Our legacy'}/>
        </div>

        <div className="model1View3">
          <Products/>
        </div>

        <div className=".infinityText">
          <Text/>
          <Video/>
        </div>

        
        <div className="model1View4">
          <Ingredients title={title3} body={body3}/>
          <BodySection title={title4} body={body4} buttonLabel={'The lifecycle of the can'} linkLabel={'Take the quiz'}/>
        </div>

        <div className="model1View5">
          <Events/>
          <Cta/>
        </div>
    </main>
  );
}
