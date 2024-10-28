import Image from "next/image"
import { new_user } from "@/assets"

export function ServerMessage({content}){
    return (
        <p className="px-1 md:px-6 py-1 flex">
            <span className="text-xl md:text-3xl text-white flex bg-transparent">
                <Image src={new_user} className="max-w-8 md:w-8 mx-2" alt="new user" />
                {content}
            </span>
        </p>
    )
}
