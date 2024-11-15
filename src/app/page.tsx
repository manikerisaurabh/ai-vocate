"use client";
import React from "react";
import { SparklesCore } from "./components/ui/sparkles";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/navigation'
export default function Home() {
  const { userId, } = useAuth();
  const router = useRouter()

  if (userId) {
    router.push(`/chat/${crypto.randomUUID()}`)
  }

  return (
    <div className="w-full bg-black">
      <button className="fixed right-1 top-1 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <Link href={`/chat/${crypto.randomUUID()}`} >Get Started</Link>
        </span>
      </button>
      <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">


        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 mt-14">
          Ai-vocate
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"

          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="-mt-16 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          AI - VOCATE
          <Highlight className="text-black dark:text-white">
            Where Every Thought Echoes with Intelligence.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
