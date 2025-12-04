'use client'
import React from 'react'
import { motion, spring } from "motion/react"

const CssSpring = () => {
    const [state, setState] = React.useState(false)
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-20'>
        <motion.div
            initial = {{translateX: -150}}
            animate = {{translateX: state ? 150 : -150, rotate: state ? 360 : 0, scale: state ? 1.5 : 1}}
            transition={{type: spring, stiffness: 300, damping: 10, duration: 3}}
            className="w-24 h-24 bg-blue-500 rounded-2xl">
        

        </motion.div>
        
        <button onClick={() => setState(!state)}>Click me</button>
    </div>
  )
}

export default CssSpring