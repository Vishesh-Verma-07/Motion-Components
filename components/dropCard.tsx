import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { motion, AnimatePresence, Variants } from 'motion/react'

const DropCard = () => {
  const [clicked, setClicked] = useState<boolean>(false)

  const variants: Variants = {
    enter: {
      opacity: [0, 0.5, 1],
      // translateY: [-50, 0],
      scale: [0, 1],
      rotate: 0,
      transition: { type: "spring", stiffness: 120,
      damping: 12 }
    },
    exit: {
      translateY: 800,
      opacity: [1, 0.8, 0.5, 0.2, 0],
      rotate: [-30, -45, -60, -75, -90],
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      <AnimatePresence>
        {!clicked && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="enter"
            exit="exit"
            className="h-50 absolute w-120 px-8 py-4 rounded-xl bg-neutral-700 text-neutral-200"
          >
            <div className="flex justify-between items-center py-4">
              <h1 className="font-bold">Heading</h1>
              <CgClose onClick={() => setClicked(true)} className="size-4" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni labore ab optio et voluptas!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {clicked && (
        <button
          className="px-4 py-2 border rounded-2xl border-neutral-200 cursor-pointer bg-gray-200 text-neutral-700"
          onClick={() => setClicked(false)}
        >
          get popup back
        </button>
      )}
    </div>
  )
}

export default DropCard
