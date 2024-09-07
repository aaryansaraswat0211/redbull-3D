"use client"

export function HeroSection(){
    return (
        <div className="h-[100vh] p-4 w-full flex flex-col items-center justify-between">
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-full flex items-start justify-center pr-10">
                    <div className="flex flex-col items-center gap-6 mt-[19vh]">
                        <h1 className="text-3xl font-light text-neutral-600">An Energy Drink, that</h1>
                        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#000000]">Gives you <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]">Wiiings</span></h1>
                    </div>
                </div>

                <div className="w-[60vw] flex items-center justify-end mt-10">
                    
                    <div className="px-8 p-4 rounded-full mt-6 text-neutral-700 cursor-pointer hover:opacity-70 transition duration-300 z-[9999]">
                        <div className="flex items-center justify-end gap-2">
                            <p>About our company</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-between text-neutral-700 px-6 pb-2">
                <div>
                    <h1>2024 RedBull</h1>
                </div>
                <div className="flex items-center gap-4">
                    <hr className="w-[6vw] border-1 border-neutral-700"/>
                    <h1>Designed using Three.js</h1>
                </div>
            </div>
        </div>
    )
}