import type { ReactNode } from 'react'

export const Button = ({children}: {children: ReactNode}) => {
  return (
    <button className='border border-white/20 rounded-md flex items-center justify-center group relative'>
      <Box />
      <span className='pl-8 pr-2 transition-all transition-duration-400 group-hover:pl-2 group-hover:pr-8'>
        {children}
      </span>
    </button>
  )
}

const Dot = ({highlight}: {highlight?: boolean})=>{
  return (
    <span className={`w-[3px] h-[3px] inline-block shrink-0 rounded-full ${highlight ? 'bg-white animate-pulse' : 'bg-white/25'}`} />
  )
}

const Box = () => {
  return (
    <div className='w-6 h-6 bg-yellow-400 rounded-[5px] absolute left-0 flex flex-col gap-px items-center ease-out justify-center transition-duration-600 transition-all group-hover:left-[calc(100%-1.5rem)] group-hover:rotate-180'>
      <div className='flex gap-px'>
        <Dot/>
        <Dot/>
        <Dot highlight/>
        <Dot/>
        <Dot/>
      </div>
      <div className='flex gap-px'>
        <Dot/>
        <Dot/>
        <Dot/>
        <Dot highlight/>
        <Dot/>
      </div>
      <div className='flex gap-px'>
        <Dot highlight/>
        <Dot highlight/>
        <Dot highlight/>
        <Dot highlight/>
        <Dot highlight/>
      </div>
      <div className='flex gap-px'>
        <Dot/>
        <Dot/>
        <Dot/>
        <Dot highlight/>
        <Dot/>
      </div>
      <div className='flex gap-px'>
        <Dot/>
        <Dot/>
        <Dot highlight/>
        <Dot/>
        <Dot/>
      </div>
    </div>
  )
}



