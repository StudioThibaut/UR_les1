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
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((currentScrollY / scrollHeight) * 100)
    }
    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans">
      
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 space-y-32">

        {/* HERO SECTIE */}
        <header className="max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>

          <div className="w-24 h-1 bg-red-900 mt-6 mb-10 origin-left animate-expand"></div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
            <div className="md:col-span-2">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">
                "Creativiteit ontmoet technologie." — Een overzicht van de opkomende digital creators en designers binnen mijn lichting aan de AP Hogeschool.
              </p>
            </div>
            <div className="text-sm uppercase tracking-widest text-gray-400 space-y-4 border-l border-gray-100 pl-6 font-medium">
              <div><span className="text-red-900 font-bold block">Hogeschool</span> AP Antwerpen</div>
              <div><span className="text-red-900 font-bold block">Campus</span> Ellerman</div>
              <div><span className="text-red-900 font-bold block">Academiejaar</span> 2026 — 2027</div>
            </div>
          </div>
        </header>

        {/* CONTEXT SECTIE (VERRIJKTE TEKST) */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-lg text-gray-600 font-light leading-relaxed">
            <div className="flex items-center gap-4 text-red-900 mb-2">
              <GraduationCap size={24} />
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-gray-900">Digital Creators GDM</h2>
            </div>
            <p>
              Binnen de richting <strong>Grafische en Digitale Media</strong> aan de AP Hogeschool worden we klaargestoomd voor een razendsnel evoluerend media-landschap. Deze lichting van 2026-2027 kenmerkt zich door een sterke synergie tussen visueel ontwerp en technische realisatie.
            </p>
            <p>
              Vanuit onze thuisbasis op Campus Ellerman werken we aan uiteenlopende projecten: van branding en UX-design tot complexe front-end development en motion graphics. Op deze pagina deel ik de portfolio&apos;s van mijn medestudenten. Samen vormen we een netwerk van professionals die klaar zijn om de digitale standaard van morgen te bepalen.
            </p>
            <div className="flex items-center gap-2 text-red-900/60 pt-4">
               <MapPin size={18} />
               <span className="text-xs font-bold uppercase tracking-[0.2em]">Ellermanstraat 33, 2000 Antwerpen</span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-3 group hover:border-red-900/30 transition-colors">
                <Code className="text-red-900" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">Development</span>
             </div>
             <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-3 group hover:border-red-900/30 transition-colors">
                <Palette className="text-red-900" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">Design</span>
             </div>
             <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-3 group hover:border-red-900/30 transition-colors">
                <Monitor className="text-red-900" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">UX Research</span>
             </div>
             <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center space-y-3 group hover:border-red-900/30 transition-colors">
                <Users className="text-red-900" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-red-900 transition-colors">Multimedia</span>
             </div>
          </div>
        </section>

        {/* STUDENT DIRECTORY GRID */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-gray-100 pb-8">
            <h2 className="text-red-900 text-4xl font-bold uppercase tracking-tighter italic">Groep 26/27</h2>
            <div className="hidden md:flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
              <span>Directory</span>
              <div className="w-12 h-[1px] bg-gray-200"></div>
              <span>{students.length} Studenten</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {students.map((student, index) => (
              <a
                key={index}
                href={student.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-2 flex flex-col justify-between h-52 overflow-hidden"
              >
                <div className="absolute -right-6 -bottom-6 text-red-900/5 group-hover:text-red-900/10 transition-colors">
                    <Users size={140} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                     <span className="text-[9px] font-black tracking-[0.3em] text-red-900/40 uppercase">
                       Grafische en Digitale Media - VISUAL
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-900 transition-colors leading-tight tracking-tighter">
                    {student.name}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-gray-200/50 group-hover:border-red-900/20 transition-colors">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Bekijk Portfolio</span>
                  <div className="bg-white p-2.5 rounded-full shadow-sm group-hover:bg-red-900 group-hover:text-white transition-all transform group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="py-24 text-center border-t border-gray-100">
            <p className="text-gray-400 text-xs font-bold tracking-[0.5em] uppercase">
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