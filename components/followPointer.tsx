'use client'
import { RefObject, useEffect, useRef } from 'react'
import { frame, motion, useMotionValue, useSpring } from 'motion/react'
import { delay } from 'motion'
import Image from 'next/image'

const FollowPointer = () => {
    const ref = useRef<HTMLDivElement>(null)
    const {x, y} = useFollowPointer(ref);

  return (
    <>
        <Image
            src={"/cat.gif"}
            width={64}
            height={64}
            alt="cat"
        />
        {/* <motion.div 
        ref = {ref}
        style={{
            x,
            y
        }}
        className='h-24 w-24 bg-pink-400 rounded-full'>
        </motion.div> */}
    
    
    </>
  )
}


function useFollowPointer(ref: RefObject<HTMLDivElement | null>){
    const x = useSpring(0, {damping: 40, stiffness: 10, restDelta: 0});
    const y = useSpring(0, {damping: 40, stiffness: 10, restDelta: 0});

    // const x = useMotionValue(0);
    // const y = useMotionValue(0);



    console.log("function ran")

    useEffect(() => {
        if(!ref.current)
            return;

        const handlePointMove = ({clientX, clientY}: MouseEvent) =>{
            const element = ref.current!

            console.log(clientX);
            console.log(clientY)

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2);
                y.set(clientY - element.offsetTop - element.offsetHeight / 2);
            })
        }

        window.addEventListener("pointermove", handlePointMove)

        return ()=>{
            window.removeEventListener("pointermove", handlePointMove)
        }

        
    }, [])

    return {x, y};

}
export default FollowPointer;