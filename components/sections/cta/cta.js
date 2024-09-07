export function Cta(){
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-full flex items-start justify-center pr-10">
                    <div className="flex flex-col items-center gap-6 mt-[19vh]">
                        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c0c0c0] to-[#000000]">Try out<span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2369ff] to-[#000000]"> now</span>.</h1>
                        <h1 className="text-3xl font-light text-neutral-600">Available in your nearest departmental store.</h1>
                    </div>
                </div>

                <div className="w-[60vw] flex items-center justify-end mt-10">
                    
                    {/* <div className="px-8 p-4 rounded-full mt-6 text-neutral-700 cursor-pointer hover:opacity-70 transition duration-300 z-[9999]">
                        <div className="flex items-center justify-end gap-2">
                            <p>About our company</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div> */}
                </div>

            </div>
            <div className="w-full flex items-center justify-between text-neutral-700 px-6 pb-2">
                <div>
                    <h1>2024 RedBull - All rights reserved</h1>
                </div>
                <div className="flex items-center gap-8">
                    <p>Contact Us</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}