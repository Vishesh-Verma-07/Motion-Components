import React, { useEffect, useState } from 'react'

function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`min-w-full h-15 flex justify-between px-10 items-center fixed bg top-0 left-0 ${isScrolled ? 'backdrop-blur-sm bg-neutral/20' : ''} text-white py-4 z-50 `}>
      <div>
        <h1 className='text-3xl font-bold'>My Website</h1>
      </div>
      <div className='flex gap-28'>
        <span>component 1</span>
        <span>component 2</span>
        <span>component 3</span>
        <span>component 4</span>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-16 py-2 rounded-full shadow-sm hover:bg-blue-600 transition-colors duration-200">Sign Up</button>
      </div>
    </div>
  )
}

export default Header