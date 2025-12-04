import React from 'react'
import Header  from './Header'
import {motion} from 'motion/react'
function HeroSection() {
  return (
    <div>
        <Header />

        <div className='relative h-screen  bg-red-50 flex justify-center items-start'>
          <img src="./bg3.jpg" alt="" className='absolute inset-0 w-full h-full object-cover object-bottom' />
          <div className='absolute inset-0 bg-black opacity-10'></div>

          <div className='absolute top-1/6 w-full text-center text-white px-4'>
            <h1 className='text-5xl font-bold mb-4'>Welcome to Our Website</h1>
            <p className='text-xl mb-8'>Discover amazing content and connect with others.</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full shadow-sm hover:bg-blue-600 transition-colors duration-200">Get Started</button>
          </div>

          {/* Card that overlaps the bottom of the hero (image will be cropped by overflow-hidden) */}
ile
            <div
            className="absolute left-1/2 transform -translate-x-1/2 top-3/5 w-4/5 h-120"
            style={{ perspective: 4200 }} // parent provides perspective for 3D effect
            >
            <motion.div
              className="w-full h-full backdrop-blur-2xl bg-white/20 rounded-2xl p-6 shadow-lg"
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center', willChange: 'transform' }}
              whileHover={{ rotateX: -18, y: -12, scale: 1.02, zIndex: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="h-full flex justify-center items-center bg-white rounded-2xl">
              {/* content */}
              </div>
            </motion.div>
            </div>
        
        </div>
    </div>
  )
}

export default HeroSection