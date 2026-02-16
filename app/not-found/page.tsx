"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Compass } from "lucide-react"

export default function NotFound() {
  // TYPEWRITER EFFECT
  const [title, setTitle] = useState("")
  const fullTitle = "404 - VERDWAALD"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 selection:bg-red-900 selection:text-white">
      <div className="max-w-[1400px] w-full text-center space-y-12">
        
        {/* VISUEEL ELEMENT */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            {/* Een subtiel draaiend kompas icoon */}
            <Compass size={100} className="text-red-900/10 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-9xl font-black text-red-900/[0.03] select-none tracking-tighter">404</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>
          
          <div className="w-24 h-1 bg-red-900 origin-center animate-expand"></div>
        </div>

        {/* TEKST & CALL TO ACTION */}
        <div className="max-w-md mx-auto space-y-10">
          <p className="text-xl text-gray-500 font-light italic leading-relaxed">
            "Zelfs de beste lijnen lopen soms dood. Deze pagina bestaat helaas niet (meer), maar je creatieve reis hoeft hier niet te stoppen."
          </p>

          <Link 
            href="/" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-red-900 text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all duration-500 group shadow-xl shadow-red-900/10"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" />
            Terug naar de studio
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes expand { 
          from { transform: scaleX(0); } 
          to { transform: scaleX(1); } 
        }
        .animate-expand { 
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>
    </main>
  )
}