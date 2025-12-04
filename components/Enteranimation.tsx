'use client'
import React from 'react'
import { motion } from 'motion/react'
import { useRef } from 'react'

const Enteranimation = () => {
    const ref = useRef<HTMLDivElement>(null)

  return (


    <div ref ={ref} className='border border-white h-128 w-lg'>

        <motion.div 
        drag
        dragConstraints={ref}
        dragElastic={0.2}
        initial={{
            scale: 0,
            opacity: 0,
        }}
        animate={{
            opacity: 1,
            scale: 1,
            transition: {type: "spring", bounce: 0.5, visualDuration: 0.4}
        }}
        whileTap={{
            // duration: 0.4,
            // scale: {type: "spring", bounce: 0.5, visualDuration: 0.4}
            scale: [0.5, 1],
            transition: {type: "spring", bounce: 0.5, duration: 0.4 }
        }}

        
        className='h-24 w-24 bg-pink-400 rounded-full'>

        </motion.div>


    </div>
  )
}

export default Enteranimation