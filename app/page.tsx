"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Cookie, ShieldCheck, FileText } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [title, setTitle] = useState("")
  const fullTitle = "STUDIO THIBAUT"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans selection:bg-red-100 selection:text-red-900">
      <main className="w-full max-w-[1100px] px-6 lg:px-12 py-24">
        
        {/* HERO SECTION */}
        <section className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 block mb-4">
            Creative Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-red-900 uppercase leading-[0.85]">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>
          <div className="w-24 h-1 bg-red-900 mt-10"></div>
        </section>

        {/* NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* LINK: COOKIES */}
          <Link href="/cookie-settings" className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <Cookie size={20} className="text-red-900 mb-6 group-hover:rotate-12 transition-transform" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2">Cookie Settings</h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">Manage your privacy and data preferences.</p>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">
              Configure <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* LINK: COPYRIGHT */}
          <Link href="/copyright-regulations" className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <ShieldCheck size={20} className="text-red-900 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2">Copyright</h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">Intellectual property and usage rights.</p>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">
              Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* LINK: TERMS */}
          <Link href="/terms-of-agreement" className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <FileText size={20} className="text-red-900 mb-6 group-hover:-translate-y-1 transition-transform" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2">Terms</h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">General terms of agreement for our services.</p>
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">
              View Terms <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

        {/* BOTTOM DECORATION */}
        <footer className="mt-32 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">
          <span>© 2024 Studio Thibaut</span>
          <div className="flex gap-8">
            <span className="hover:text-red-900 cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-red-900 cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </footer>

      </main>
    </div>
  );
}