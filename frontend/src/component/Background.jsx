import React from "react"

const Background = () => {

    return (
        <div>
            <video
                className="absolute object-cover w-full h-full pointer-events-none right-0 bottom-0 z-[-1] opacity-25"
                src="./src/assets/back.mp4"
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default Background