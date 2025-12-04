"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiCross, BiPlus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FaCross } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Card = () => {

    const [open, setOpen] = useState(true);

    return (
        <>
        <AnimatePresence>
        {open &&
            <motion.div 

            initial={{
                opacity:0,
                scale:0.98,
                filter: "blur(10px)"
            }}

            animate={{
                opacity:1,
                scale:1,
                filter: "blur(0)"
            }}
            exit={{
                opacity:0,
                scale:0.98,
                filter: "blur(10px)"
            }}

            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            
            className={cn(
                "w-72 min-h-[26rem] h-[26rem] rounded-xl bg-gray-50",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]",
                "p-6 flex flex-col"
            )}>
                <h2 className="font-bold text-[10px]">card title</h2>
                <p className="text-neutral-600 mt-2 text-[10px]">
                    a collection of betuatiful ui components, let's get on with it
                </p>
                <div className="flex item-center justify-center">
                    <button className="flex items-center justify-center gap-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1 mt-2">
                        <Image
                            width={32}
                            height={32}
                            src="./globe.svg"
                            alt="Acertinity Logo"
                            className="h-4 w-4"
                        />
                        Acertinity
                        <BiCross 
                        onClick={()=>setOpen(false)}
                        className="h-3 w-3 text-neutral-400"/>
                    </button>
                </div>
                <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
                    <motion.div 
                    initial={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)"
                    }}

                    whileHover={{
                        opacity:1,
                        scale:1,
                        filter: "blur(0)"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    className="absolute border -inset-px border-neutral-200  bg-white rounded-lg divide-y divide-neutral-200">
                        <div className="p-3 flex items-center gap-3 ">
                            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                <BiCross 
                                className="h-4 w-4 text-neutral-500 " />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold">First item</p>
                                <p className="text-[10px] text-neutral-500">Short description here</p>
                            </div>
                        </div>

                        <div className="p-3 flex items-center gap-3">
                            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                <FaCross className="h-4 w-4 text-neutral-500 " />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold">Second item</p>
                                <p className="text-[10px] text-neutral-500">Another short line</p>
                            </div>
                        </div>

                        <div className="p-3 flex items-center gap-3">
                            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                <Image src="./globe.svg" alt="globe" width={16} height={16} className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold">Third item</p>
                                <p className="text-[10px] text-neutral-500">Brief content</p>
                            </div>
                        </div>

                        <div className="p-3 flex items-center gap-3">
                            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                <BiCross className="h-4 w-4 text-neutral-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold">Fourth item</p>
                                <p className="text-[10px] text-neutral-500">Additional notes for the fourth item</p>
                            </div>
                        </div>

                        <div className="p-3 flex items-center justify-center">
                            <button className="w-full flex items-center justify-center gap-2 rounded-md  text-[10px] ">
                                <BsPlus className="h-4 w-4 rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_68px_rgba(47,40,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] "/>
                                Create more
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

}        </AnimatePresence>

        </>
    )
}