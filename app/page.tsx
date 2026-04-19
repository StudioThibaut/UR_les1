"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"

export default function AutoGateway() {
  const [title, setTitle] = useState("")
  const [isExiting, setIsExiting] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const fullTitle = "THIBAUT'S PORTFOLIO"
  const router = useRouter()

  // 1. TYP-EFFECT (Vloeiender met willekeurige snelheden voor een organisch gevoel)
  useEffect(() => {
    let index = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (index <= fullTitle.length) {
        setTitle(fullTitle.slice(0, index))
        index++
        const speed = Math.random() * 100 + 50 // Wisselende snelheid
        timeoutId = setTimeout(type, speed)
      }
    }
    
    type()
    return () => clearTimeout(timeoutId)
  }, [])

  // 2. LAAD-PERCENTAGE & REDIRECT
  useEffect(() => {
    router.prefetch("/home")

    // Percentage teller animatie
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 40) // Synchronisatie met de 4-5 seconden laadtijd

    const fadeTimer = setTimeout(() => setIsExiting(true), 4200)
    const redirectTimer = setTimeout(() => router.push("/home"), 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(fadeTimer)
      clearTimeout(redirectTimer)
    }
  }, [router])

  return (
    <div className={`
      flex min-h-screen items-center justify-center bg-white overflow-hidden 
      transition-all duration-1500 ease-[cubic-bezier(0.23,1,0.32,1)]
      ${isExiting ? "opacity-0 scale-110 blur-2xl" : "opacity-100 scale-100 blur-0"}
    `}>
      
      {/* Subtiele achtergrond grid (optioneel voor extra diepte) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />

      <main className="flex flex-col items-center text-center px-6 relative z-10 w-full max-w-7xl">
        
        <section className="relative">
          {/* TITEL: Hardcoded Oswald voor maximale impact */}
          <div className="min-h-35 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-red-900 uppercase leading-none font-oswald select-none">
              {title}
              <span className="inline-block w-1 h-[0.8em] bg-red-900 ml-2 animate-pulse align-middle" />
            </h1>
          </div>
          
          {/* GEANIMEERDE LIJN: Nu met een glow effect */}
          <div className="relative mt-8 mx-auto w-32 md:w-48">
             <div className="w-full h-1 bg-red-900 origin-left animate-expand shadow-[0_0_25px_rgba(127,29,29,0.4)]" />
          </div>
          
          {/* SUBTEXT: Gebruikt nu Inter voor strak contrast */}
          <div className="mt-12 space-y-4 animate-fadeIn opacity-0">
            <p className="text-[10px] md:text-xs font-medium tracking-[0.8em] text-red-900/60 uppercase font-inter">
              Visuele Verhalen Vormgeven
            </p>
            
            <div className="flex items-center justify-center gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase font-inter">
               <span className="hover:text-red-900 transition-colors duration-500">Antwerpen, BE</span>
               <span className="w-1 h-1 bg-gray-200 rounded-full" />
               <span>&copy; 2026</span>
            </div>
          </div>
        </section>

        {/* LOADING INDICATOR: Minimalistischer en met percentage */}
        <div className="fixed bottom-16 flex flex-col items-center gap-3">
          <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 font-inter">
            {percentage}%
          </span>
          <div className="w-40 h-px bg-gray-100 overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-red-900 transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

      </main>

      <style jsx global>{`
        /* Extra veiligheid voor fonts */
        .font-oswald { font-family: var(--font-oswald), 'Oswald', sans-serif !important; }
        .font-inter { font-family: var(--font-inter), 'Inter', sans-serif !important; }

        @keyframes expand {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.8s;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}