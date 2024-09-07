import { Scene } from "@/components/3d/scene";


export function ModelViewer(){
    return (
        <div className="w-full h-screen fixed">
            <Scene/>
        </div>
    )
}