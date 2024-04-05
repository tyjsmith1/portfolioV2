"use client"

import Image from "next/image"

export default function Portrait() {
    return (
        <div className="rounded-full overflow-hidden shadow-2xl">
            <Image src="/tylerphoto.png" alt="Tyler Smith" width={200} height={200} layout="fixed" />
        </div>
    )
}