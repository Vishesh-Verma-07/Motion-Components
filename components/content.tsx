import React from 'react'
import { motion } from 'motion/react'

export const Content = () => {
    return(
        <div className='h-screen w-full bg-neutral-950 flex items-center justify-center'
        style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
            backgroundSize: "8px 8px", 
            backgroundRepeat: "repeat"
        }}>
            <motion.button 
                initial={{ scale: 1 , rotate: 0}}
                animate={{ scale: 1.06, rotate: [0, -35, 35, 0] }}
                whileHover={{ scale: 1.05, rotate: [0,-15, 15, 0],  }}
                transition={{  duration: 0.3}}

            

            className='group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_insert,0px_-1px_4px_0px_rgba(255,255,255,0.1)_insert]'> Subscribe 
                <span className='absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto '></span>
                <span className='absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-3/4 mx-auto blur-sm '></span>

            </motion.button>
        </div>
    )
}