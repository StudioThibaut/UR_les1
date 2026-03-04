"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AutoGateway() {
  const [title, setTitle] = useState("")
  const fullTitle = "STUDIO THIBAUT"
  const router = useRouter()

  // 1. TYPING EFFECT
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  // 2. AUTO REDIRECT TIMER (5 seconden)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/portfolio-home")
    }, 5000)

    return () => clearTimeout(timer) // Cleanup timer bij verlaten pagina
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans selection:bg-red-900 selection:text-white">
      <main className="flex flex-col items-center text-center px-6">
        
        {/* LOGO SECTION */}
        <section className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-red-900 uppercase">
            {title}<span className="ml-1 opacity-20 animate-pulse">|</span>
          </h1>
          <div className="w-12 h-1 bg-red-900 mt-6 mx-auto animate-out fade-out zoom-out duration-1000 delay-[4000ms]"></div>
        </section>

        {/* LOADING INDICATOR (Subtiel lijntje onderaan) */}
        <div className="fixed bottom-0 left-0 h-0.5 bg-red-900/10 w-full">
          <div className="h-full bg-red-900 transition-all duration-[5000ms] ease-linear w-0 animate-[loading_5s_linear_forwards]" />
        </div>

      </main>

      <style jsx>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}