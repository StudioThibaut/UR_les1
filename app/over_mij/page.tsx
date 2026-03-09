"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowUpRight, Fingerprint, Lightbulb, Terminal, Camera, PenTool, Monitor, Cpu, Layers } from "lucide-react"

export default function AboutMePage() {
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "OVER MIJ"

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  // Scroll progress logic
  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / height) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const disciplines = [
    "Visuele Identiteit", "Digitale Producten", "Motion Design",
    "Brand Strategy", "Web Architectuur", "Creative Direction", "Fotografie"
  ]

  const toolCategories = [
    {
      name: "Graphic & Motion",
      tools: ["Illustrator", "Photoshop", "InDesign", "After Effects", "Premiere Pro"],
      icon: <Layers size={20} className="text-red-900" />
    },
    {
      name: "Digital & Code",
      tools: ["Figma", "Next.js", "Tailwind CSS", "TypeScript", "VS Code"],
      icon: <Monitor size={20} className="text-red-900" />
    },
    {
      name: "Studio & Productie",
      tools: ["Capture One", "Lightroom", "3D Mockups", "Packaging Design"],
      icon: <Cpu size={20} className="text-red-900" />
    }
  ]

  const timeline = [
    { year: "2020", event: "Start Grafische Technieken", location: "Zenit - Turnhout", desc: "De basis gelegd voor drukwerkvoorbereiding en grafisch ontwerp." },
    { year: "2024", event: "Stage Van Genechten Biermans", location: "Turnhout", desc: "Professionele ervaring in packaging design voor internationale klanten." },
    { year: "2024", event: "Start Grafische en Digitale Media", location: "AP Hogeschool - Antwerpen", desc: "Specialisatie in digitale ervaringen en web development." },
    { year: "2025", event: "Studio Thibaut", location: "Vorselaar", desc: "Freelance merk gericht op fotografie en visuele branding." },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-red-900 z-110 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(153,27,27,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-350 mx-auto px-6 lg:px-12 py-16 md:py-32">

        {/* HERO */}
        <section className="mb-24 md:mb-40">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-red-900 uppercase leading-none">
            {title}
          </h1>
          <div className="w-20 md:w-40 h-2 bg-red-900 mt-6 origin-left animate-expand shadow-sm"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 items-start">
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl text-gray-700 leading-tight font-light italic border-l-4 border-gray-100 pl-8">
                "Ik geloof dat de krachtigste designs ontstaan op het snijvlak van <span className="text-gray-900 font-black not-italic">analoge precisie</span> en <span className="text-gray-900 font-black not-italic">digitale innovatie</span>."
              </p>
            </div>
            <div className="md:col-span-4 space-y-4">
               <div className="flex items-center gap-3 text-red-900 font-black uppercase text-[10px] tracking-[0.4em]">
                  <Fingerprint size={20} /> Identity
               </div>
               <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest font-bold">
                  Thibaut Vanden Eynden — Digital Creator gebaseerd in Vorselaar.
               </p>
            </div>
          </div>
        </section>

        {/* FOTO + BIO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-40">
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-red-900/5 rounded-[2rem] translate-x-4 translate-y-4 transition-transform duration-700"></div>
            <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50">
              <Image src="/IMG/Thibaut2.jpg" alt="Thibaut" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105" priority />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-red-900 leading-none">Mijn Verhaal</h2>
            <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-light italic">
                <p>Mijn reis begon in Turnhout, waar ik leerde dat design meer is dan alleen esthetiek; het is technisch vakmanschap.</p>
                <p>Vandaag combineer ik die <strong>analoge basis</strong> met mijn studie aan de AP Hogeschool, waarbij ik fotografie, motion en code samenbreng tot één verhaal.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="space-y-3">
                <Lightbulb className="text-red-900" size={28} />
                <h4 className="font-black uppercase text-[11px] tracking-[0.2em]">Conceptueel</h4>
              </div>
              <div className="space-y-3">
                <Terminal className="text-red-900" size={28} />
                <h4 className="font-black uppercase text-[11px] tracking-[0.2em]">Technisch</h4>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE & TOOLS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 border-t border-gray-100 pt-24 mb-40">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <h3 className="text-xs font-black tracking-[0.4em] uppercase text-red-900">Disciplines</h3>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((s) => (
                  <span key={s} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-[9px] font-black uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden lg:block p-8 bg-red-900 text-white rounded-[2rem] shadow-xl shadow-red-900/10">
               <p className="text-[10px] font-black italic leading-relaxed opacity-80 uppercase tracking-widest">
                 "Elk detail is een bewuste keuze. Van de eerste pixel tot de laatste regel code."
               </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-red-900">Tech Stack & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {toolCategories.map((cat, i) => (
                <div key={i} className="space-y-5">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    {cat.icon}
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">{cat.name}</h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.tools.map((tool, j) => (
                      <li key={j} className="text-[11px] font-bold text-gray-400 hover:text-red-900 transition-colors cursor-default uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-900/20 rounded-full"></span> {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-24 border-t border-gray-100 pt-24">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-red-900 mb-16 text-center md:text-left">Tijdlijn</h3>
            <div className="relative">
              {timeline.map((item, idx) => (
                <div key={idx} className="grid grid-cols-[80px_1fr] gap-8 group mb-12">
                  <div className="text-2xl font-black text-gray-100 group-hover:text-red-900 transition-colors duration-500 text-right tabular-nums">{item.year}</div>
                  <div className="relative pl-10 border-l border-gray-100 group-hover:border-red-900/30 transition-colors duration-500 pb-4">
                    <div className="absolute left-[-5.5px] top-3 w-2.5 h-2.5 rounded-full bg-red-900"></div>
                    <h4 className="text-xl font-black text-gray-900 uppercase tracking-tighter group-hover:italic transition-all">{item.event}</h4>
                    <p className="text-[9px] font-black tracking-widest text-red-900/60 uppercase">{item.location}</p>
                    <p className="text-xs text-gray-400 font-light mt-2 max-w-xl italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform-origin: left; }
      `}</style>
    </main>
  )
}