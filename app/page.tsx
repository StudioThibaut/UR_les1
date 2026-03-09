"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AutoGateway() {
  const [title, setTitle] = useState("")
  const [isExiting, setIsExiting] = useState(false)
  const fullTitle = "THIBAUT'S PORTFOLIO"
  const router = useRouter()

  // 1. TYPMISCH EFFECT
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 200) 
    return () => clearInterval(interval)
  }, [])

  // 2. SLIMME REDIRECT & VOORLADEN
  useEffect(() => {
    router.prefetch("/home")

    const fadeTimer = setTimeout(() => {
      setIsExiting(true)
    }, 4200) 

    const redirectTimer = setTimeout(() => {
      router.push("/home")
    }, 5000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(redirectTimer)
    }
  }, [router])

  return (
    <div className={`
      flex min-h-screen items-center justify-center bg-white font-sans overflow-hidden 
      transition-all duration-1000 ease-in-out
      ${isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"}
    `}>

      <main className="flex flex-col items-center text-center px-6 relative z-10">
        
        {/* LOGO SECTIE */}
        <section className="relative group">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-red-900 uppercase leading-none">
            {title}
            {/* HET STREEPJE IS HIER VERWIJDERD */}
          </h1>
          
          <div className="w-32 h-2 bg-red-900 mt-8 mx-auto origin-left animate-expand shadow-[0_0_20px_rgba(127,29,29,0.3)]"></div>
          
          <div className="mt-12 space-y-2 animate-fadeIn opacity-0">
            <p className="text-[10px] md:text-xs font-black tracking-[0.6em] text-red-900/40 uppercase">
              Visuele Verhalen Vormgeven
            </p>
            <p className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase">
              Digitaal Portfolio &copy; 2026
            </p>
          </div>
        </section>

        {/* LAADBALK: Zwevend en minimalistisch */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gray-100 overflow-hidden rounded-full">
          <div className="h-full bg-red-900 w-0 animate-loadingBar ease-out" />
        </div>

      </main>

      <style jsx global>{`
        @keyframes expand {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes loadingBar {
          0% { width: 0%; }
          90% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-expand {
          animation: expand 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.2s;
        }
        .animate-loadingBar {
          animation: loadingBar 5s cubic-bezier(0.1, 0, 0.2, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  )
}