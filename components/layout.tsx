import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import {motion} from "motion/react"

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClick = (event: MouseEvent) => {

            if(ref.current && !ref.current.contains(event.target as Node)){
                callback();
            }
        }
        document.addEventListener("click", handleClick);
        
        return () => {
            document.removeEventListener("click", handleClick);
            
        };
    }, [callback]);

    return ref;

}

export function LayoutCard() {

  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null))

  return (

    <div className="min-h-screen bg-gray-100 py-40 relative">

        {current && (
                <motion.div
                    layoutId={`overlay-${current.title}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed z-10 inset-0 bg-black/50 backdrop-blur-sm"
                />
            )}
            {current && (
                <motion.div
                    layoutId={`card-${current.title}`}
                    ref={ref}
                    className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4"
                >
                    <motion.img
                        layoutId={`image-${current.src}`}
                        src={current.src}
                        alt={current.title}
                        className="w-full h-40 object-cover rounded-md"
                    />

                    <div className="flex flex-col justify-center items-start">
                        <div className="flex items-start justify-between py-40 w-full gap-2">
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2
                                    layoutId={`title-${current.title}`}
                                    className="font-bold text-xs tracking-tight text-black"
                                >
                                    {current.title}
                                </motion.h2>

                                <motion.p
                                    layoutId={`desc-${current.title}`}
                                    className="text-sm text-gray-700"
                                >
                                    {current.description}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card) => (
                    <motion.button
                        layoutId={`card-${card.title}`}
                        onClick={() => setCurrent(card)}
                        key={card.title}
                        className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
                    >
                        <motion.img
                            layoutId={`image-${card.src}`}
                            src={card.src}
                            alt={card.title}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                            <motion.h3
                                layoutId={`title-${card.title}`}
                                className="text-lg font-semibold text-gray-900 truncate"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`desc-${card.title}`}
                                className="text-sm text-gray-500 truncate"
                            >
                                {card.description}
                            </motion.p>
                        </div>

                        <Link href={"#"} className="ml-2">
                            <motion.div
                                layoutId={`cta-${card.title}`}
                                aria-label={card.ctaText}
                                className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-green-600 transition-colors"
                            >
                                {card.ctaText}
                            </motion.div>
                        </Link>
                    </motion.button>
                ))}
        </div>

    </div>

  )
  
}

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
    {
        title: "Getting Started",
        description:
            "A hands-on introduction to the library: install, configure, and animate your first components. Includes step-by-step setup tips and common pitfalls to avoid.",
        src: "https://via.placeholder.com/600x300?text=Getting+Started",
        ctaText: "Learn more",
        ctaLink: "/getting-started",
        content: () => (
            <div>
                <p>
                    Install the package, wrap your app with the provider, and animate a simple component in minutes. This section walks through installation, basic configuration, and a tiny example to get you moving.
                </p>
                <p>
                    Example steps:
                </p>
                <ol>
                    <li>npm/yarn install the package</li>
                    <li>Import the provider and wrap your root component</li>
                    <li>Create a simple animated component and test layout transitions</li>
                </ol>
                <p>
                    Tips: start small, use the built-in easing presets, and inspect performance using React DevTools.
                </p>
            </div>
        ),
    },
    {
        title: "Animations",
        description:
            "Dive into common animation patterns, from simple entrances to complex gesture-driven interactions. Learn how to create smooth, declarative motion with accessibility in mind.",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgcW9H7egCYSz322I2eZFyC-SgWigKYnawHamg_eP9Mxzpwaj_eI11OaOmtvkKAFdNhxnFd_UDCV1RVFBQ9PZTdPjcp_R57MOI2jmgoH&s=10",
        ctaText: "See examples",
        ctaLink: "/animations",
        content: () => (
            <div>
                <p>
                    This section covers entrance/exit animations, choreography for multiple elements, and how to respond to user gestures like drag or hover.
                </p>
                <ul>
                    <li>Entrance & exit animations with staggered timing</li>
                    <li>Gesture-driven motion: drag, swipe, and spring responses</li>
                    <li>Shared layout transitions to animate between states</li>
                </ul>
                <p>
                    There are code snippets demonstrating easing curves, spring tuning, and performance tips such as using will-change and requestAnimationFrame-friendly updates.
                </p>
            </div>
        ),
    },
    {
        title: "Components",
        description:
            "A catalog of prebuilt, motion-ready components and utilities to compose interactive, accessible UIs. Find patterns for cards, modals, tooltips, and more.",
        src: "https://via.placeholder.com/600x300?text=Components",
        ctaText: "Explore",
        ctaLink: "/components",
        content: () => (
            <div>
                <p>
                    Browse reusable components that come with sensible defaults and motion patterns. Each component demonstrates how to balance animation with accessibility.
                </p>
                <ul>
                    <li>Card lists with entrance/stagger</li>
                    <li>Accessible modals with focus management and animated open/close</li>
                    <li>Tooltips and small UI primitives with subtle motion</li>
                </ul>
                <p>
                    Each example includes props documentation, common customization options, and performance considerations for large lists.
                </p>
            </div>
        ),
    },
    {
        title: "Advanced Patterns",
        description:
            "Techniques for scalable, maintainable motion in complex apps. Covers orchestration, optimizing re-renders, composition strategies, and accessibility considerations for motion.",
        src: "https://via.placeholder.com/600x300?text=Advanced",
        ctaText: "Read guide",
        ctaLink: "/advanced",
        content: () => (
            <div>
                <p>
                    Learn advanced topics like motion orchestration across many components, memoization strategies to avoid unnecessary re-renders, and how to design animation systems for large teams.
                </p>
                <p>
                    Topics include:
                </p>
                <ul>
                    <li>Timeline orchestration and sequencing complex scenes</li>
                    <li>Shared layout transitions across route changes</li>
                    <li>Performance tuning: virtualization, memoization, and off-main-thread techniques</li>
                    <li>Accessibility: prefers-reduced-motion strategies and motion-safe fallbacks</li>
                </ul>
                <p>
                    The guide also includes case studies and profiling examples to help you apply these patterns in production apps.
                </p>
            </div>
        ),
    },
];
