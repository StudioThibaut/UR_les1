"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react"

export default function NotFound() {
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "404"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0)
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden">

      {/* SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b border-gray-100 relative">

        {/* Rechtsboven */}
        <div className="absolute top-12 right-6 md:right-16 text-right space-y-1">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Pagina niet gevonden</p>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Portfolio</p>
        </div>

        {/* Kompas icoon */}
        <div className="mb-12 relative w-20 h-20">
          <Compass size={80} className="text-red-900/10 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-red-900/20 select-none">?</span>
          </div>
        </div>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          Thibaut Vanden Eynden · Foutpagina
        </p>

        <h1 className="text-[clamp(6rem,20vw,16rem)] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-4">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-red-900 mb-8">
          Verdwaald.
        </h2>

        <div className="w-20 h-0.5 bg-red-900 mb-12 origin-left animate-expand" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p className="text-gray-400 max-w-xl text-lg md:text-2xl leading-relaxed font-light italic">
            "Zelfs de beste lijnen lopen soms dood. Deze pagina bestaat helaas niet meer, maar je creatieve reis hoeft hier niet te stoppen."
          </p>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/home"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Terug naar home
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-gray-900 rounded-full text-[10px] font-black tracking-widest uppercase hover:border-red-900 hover:text-red-900 transition-all duration-300"
            >
              Bekijk portfolio
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SNELLE LINKS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Misschien zocht u dit</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-16">
            Snelle links.
          </h2>

          <div className="space-y-0">
            {[
              { label: "Home", path: "/home", desc: "De startpagina van het portfolio." },
              { label: "Portfolio", path: "/portfolio", desc: "Een overzicht van alle projecten." },
              { label: "Over mij", path: "/over_mij", desc: "Wie is Thibaut Vanden Eynden?" },
              { label: "Contact", path: "/contact", desc: "Neem contact op voor een samenwerking." },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center border-t border-gray-100 py-8 group hover:bg-red-900/5 px-2 -mx-2 rounded-2xl transition-colors"
              >
                <div className="md:col-span-4 flex items-center gap-3">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-300">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-red-900 transition-colors">
                    {item.label}
                  </h3>
                </div>
                <div className="md:col-span-7 text-gray-400 font-light text-sm md:text-base">
                  {item.desc}
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={18}
                    className="text-gray-200 group-hover:text-red-900 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #991b1b; border-radius: 10px; }
      `}</style>
    </main>
  )
}