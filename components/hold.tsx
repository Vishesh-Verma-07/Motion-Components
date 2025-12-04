'use client'
import React, { useEffect, useRef } from 'react'
import { motion, scale, useMotionValue, useTransform } from 'motion/react'
import { animate } from 'motion'
import ReactCanvasConfetti from "react-canvas-confetti";


const Hold = () => {
  const progress = useMotionValue(0)
  const size = useTransform(progress, [0, 1], [1, 0.9])

  const congratsOpacity = useTransform(progress, [0.98, 1], [0, 1])
  const congratsY = useTransform(progress, [0.95, 0.99, 1], [30, -18, 0]) // down -> up overshoot -> settle
  const congratsScale = useTransform(progress, [0.95, 0.99, 1], [0.92, 1.12, 1]) // quick bump then settle
  const StrokeWidth = useTransform(progress, [0, 1], [0, 15]);

  let animationInstance : any = null
  const firedRef = useRef(false)


  useEffect(() => {
   
    const unsubscribe = progress.onChange((latest) => {
      // console.log('Progress:', latest)
      if (latest >= 1 && !firedRef.current) {
        console.log("fireeeeeeeeeeeeeeeeeeee")
        firedRef.current = true
        fire()
      }
    })
    return () => unsubscribe()
  }, [progress])

  const startHold = () => {
    console.log('Hold started')
    animate(progress, 1, { duration: 2.5, ease: 'circOut' })
  }

  const cancelHold = () => {
    console.log('Hold cancelled')
    firedRef.current = false;
    animate(progress, 0, { duration: 0.2, ease: 'linear' })
  }

  const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
   zIndex: 9999,
};

  const makeShot = (particleRatio: number, opts: any) => {
    if (animationInstance) {
      animationInstance({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
    }
  };

  const fire = () => {

    console.log("fire ho gaya")
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  };

  const getInstance = (instance : any) => {
    animationInstance = instance;
  };



  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <motion.button
        onPointerDown={startHold}
        onPointerUp={cancelHold}
        onPointerLeave={cancelHold}
        onPointerCancel={cancelHold}
        style={{ scale: size }}
        onClick={() => fire()}
        whileHover={{
          scale: 1.05
          
        }}
        transition={{
          transform: {duration: 2}
        }}
        
        className="rounded-full py-2 px-4  bg-white text-neutral-800 z-10 relative overflow-hidden"
      >

        <div
          // aria-hidden
          className="absolute -inset-1 rounded-full pointer-events-none z-0 opacity-80"
          style={{
            background: 'linear-gradient(90deg,#8df0cc,#7cc9ff)', // subtle gradient glow
            filter: 'blur(14px)',
          }}
        />
        <motion.div
          style={{
            scaleX: progress,
            transformOrigin: 'left',
            filter: 'blur(20px)',
            left: '-8%',
            right: '-8%',
          }}
          className="bg-[#8df0cc] absolute inset-0"
        >
          <div className="h-full rounded-full" style={{ background: '#8df0cc' }} />
        </motion.div>
        <span className="relative z-10 font-medium">Hold to confirm</span>
      </motion.button>

      <svg
        width="256"
        height="256"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className="h-64 w-64 absolute pointer-events-none"
      >
        <motion.path
          d="M8 128 A120 120 0 1 1 248 128 A120 120 0 1 1 8 128"
          stroke="#8df0cc"
          strokeWidth={StrokeWidth}
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: progress }}
          transform="rotate(90 128 128)"
        />
      </svg>

      <motion.div
        aria-hidden
        style={{
          opacity: congratsOpacity,
          y: congratsY,
          scale: congratsScale,
          // x: "-50%",
          // transformOrigin: "center",
        }}
        // center vertically & horizontally
        className="absolute z-20 w-[360px] max-w-[90%] rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl p-6 flex flex-col items-center gap-4 text-center pointer-events-none"
      >
        {/* medal / badge (enhanced) */}
        <div className="relative flex items-center justify-center w-34 h-34 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg ring-4 ring-white/70">
          {/* subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-yellow-100 to-yellow-300 shadow-inner">
        <svg width="86" height="86" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
          <circle cx="12" cy="8" r="4" fill="#FFF7CC" />
          <path d="M7 14l-1.5 4 5-2 5 2L17 14" stroke="#FFDA6A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="#FFD86B"/>
        </svg>
          </div>

          {/* tiny decorative confetti dots around the badge */}
          <div className="pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -z-10">
          <circle cx="18" cy="20" r="2.5" fill="#7CC9FF" opacity="0.9" />
          <circle cx="102" cy="14" r="2.8" fill="#8DF0CC" opacity="0.95" />
          <circle cx="28" cy="98" r="2.2" fill="#FFD86B" opacity="0.9" />
          <circle cx="96" cy="86" r="2.6" fill="#E29BFF" opacity="0.9" />
        </svg>
          </div>
        </div>

        {/* title + subtitle */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-semibold text-neutral-900">Congratulations</span>
          <span className="text-sm text-neutral-500">You did a great job!</span>
        </div>

        {/* continue button */}
        {/* <motion.button
          whileTap={{ scale: 0.98 }}
          className="mt-2 w-44 py-2 px-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white font-medium shadow-lg"
        >
          Continue
        </motion.button> */}
      </motion.div>
      {/* @ts-ignore */}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />

    </div>
  )
}

export default Hold
