"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Users, Code, Palette, Monitor, GraduationCap, MapPin } from "lucide-react"

const students = [
  { name: "Adriaan de Vries", link: "https://portfolio-adriaan.be" },
  { name: "Anke Janssens", link: "#" },
  { name: "Bram Peeters", link: "#" },
  { name: "Casper Maes", link: "#" },
  { name: "Daphne Sterckx", link: "#" },
  { name: "Elena Dumont", link: "#" },
  { name: "Fatih Kaplan", link: "#" },
  { name: "Gilles Van Damme", link: "#" },
  { name: "Hanne Luyten", link: "#" },
  { name: "Isaak Hermans", link: "#" },
  { name: "Jasper Tielens", link: "#" },
  { name: "Kato de Backer", link: "#" },
  { name: "Lars Verbruggen", link: "#" },
  { name: "Mila de Smet", link: "#" },
  { name: "Noah Willems", link: "#" },
  { name: "Olivia Pauwels", link: "#" },
  { name: "Pieter Beckers", link: "#" },
  { name: "Quinten Jacobs", link: "#" },
  { name: "Rania Benali", link: "#" },
  { name: "Sander Claes", link: "#" },
  { name: "Tess Verhoeven", link: "#" },
  { name: "Umberto Rossi", link: "#" },
  { name: "Victor Mertens", link: "#" },
  { name: "Wout Hendrickx", link: "#" },
  { name: "Zoe Van Dyck", link: "#" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function ClassmatesPage() {
  const fullTitle = "CLASS OF '26"
  const [title, setTitle] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0)
    }
    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans overflow-x-hidden">
      
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-24 space-y-16 md:space-y-32">

        {/* HERO SECTIE */}
        <header className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase leading-none">
            {title}<span className="ml-1 opacity-40 animate-pulse"></span>
          </h1>

          <div className="w-20 md:w-24 h-1 bg-red-900 mt-4 md:mt-6 mb-8 md:mb-10 origin-left animate-expand"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-100 pt-8 md:pt-12">
            <div className="md:col-span-2">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">
                "Creativiteit ontmoet technologie." — Een overzicht van de opkomende digital creators en designers binnen mijn lichting aan de AP Hogeschool.
              </p>
            </div>
            <div className="text-[10px] md:text-sm uppercase tracking-widest text-gray-400 space-y-4 md:border-l border-gray-100 md:pl-6 font-medium">
              <div className="flex md:block justify-between border-b md:border-none pb-2 md:pb-0">
                <span className="text-red-900 font-bold">Hogeschool</span> 
                <span className="md:block">AP Antwerpen</span>
              </div>
              <div className="flex md:block justify-between border-b md:border-none pb-2 md:pb-0">
                <span className="text-red-900 font-bold">Campus</span> 
                <span className="md:block">Ellerman</span>
              </div>
              <div className="flex md:block justify-between">
                <span className="text-red-900 font-bold">Lichting</span> 
                <span className="md:block">2026 — 2027</span>
              </div>
            </div>
          </div>
        </header>

        {/* CONTEXT SECTIE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-base md:text-lg text-gray-600 font-light leading-relaxed">
            <div className="flex items-center gap-4 text-red-900 mb-2">
              <GraduationCap size={24} className="shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-gray-900">Digital Creators GDM</h2>
            </div>
            <p>
              Binnen de richting <strong>Grafische en Digitale Media</strong> aan de AP Hogeschool worden we klaargestoomd voor een razendsnel evoluerend media-landschap. Deze lichting kenmerkt zich door een sterke synergie tussen visueel ontwerp en technische realisatie.
            </p>
            <div className="flex items-center gap-2 text-red-900/60 pt-4">
               <MapPin size={18} className="shrink-0" />
               <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]">Ellermanstraat 33, 2000 Antwerpen</span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
             {[
               { icon: Code, label: "Development" },
               { icon: Palette, label: "Design" },
               { icon: Monitor, label: "UX Research" },
               { icon: Users, label: "Multimedia" }
             ].map((item, i) => (
               <div key={i} className="p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-3 group hover:border-red-900/30 transition-colors">
                  <item.icon className="text-red-900" size={20} />
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">{item.label}</span>
               </div>
             ))}
          </div>
        </section>

        {/* STUDENT DIRECTORY GRID */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-end justify-between border-b border-gray-100 pb-6 md:pb-8">
            <h2 className="text-red-900 text-3xl md:text-4xl font-bold uppercase tracking-tighter italic leading-none">Groep 26/27</h2>
            <div className="hidden sm:flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              <span>Directory</span>
              <div className="w-8 md:w-12 h-[1px] bg-gray-200"></div>
              <span>{students.length} Studenten</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {students.map((student, index) => (
              <a
                key={index}
                href={student.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 md:p-8 bg-gray-50 rounded-3xl md:rounded-[2.5rem] border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-2 flex flex-col justify-between h-44 md:h-52 overflow-hidden"
              >
                {/* Oplossing voor de icon size error: gebruik className in plaats van md:size prop */}
                <div className="absolute -right-4 md:-right-6 -bottom-4 md:-bottom-6 text-red-900/5 group-hover:text-red-900/10 transition-colors">
                    <Users className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                     <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.3em] text-red-900/40 uppercase">
                       GDM - VISUAL CREATOR
                     </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-900 transition-colors leading-tight tracking-tighter">
                    {student.name}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-gray-200/50 group-hover:border-red-900/20 transition-colors">
                  <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest">Bekijk Portfolio</span>
                  <div className="bg-white p-2 md:p-2.5 rounded-full shadow-sm group-hover:bg-red-900 group-hover:text-white transition-all transform group-hover:rotate-45 shrink-0">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="py-12 md:py-24 text-center border-t border-gray-100">
            <p className="text-gray-400 text-[8px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase px-4">
              AP Hogeschool • Grafische en Digitale Media • Antwerpen
            </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </main>
  )
}