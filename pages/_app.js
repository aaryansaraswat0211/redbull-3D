import "@/styles/globals.css";
import LenisScrollProvider from "@/providers/lenis-scroll-provider";
import { Navbar } from "@/components/navbar/navbar";

export default function App({ Component, pageProps }) {
  return ( 
    <LenisScrollProvider>
      <Navbar/>
      <Component {...pageProps} /> 
    </LenisScrollProvider>
  )
}
