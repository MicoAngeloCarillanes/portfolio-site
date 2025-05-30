import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'

const Background = () => {
    return (
        <div className='fixed inset-0 w-full h-full'>
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] absolute top-0 left-0 overflow-x-hidden lg:overflow-hidden">
                <Spotlight />
            </div>
            <div className="flex h-full w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            </div>
        </div>
    )
}

export default Background