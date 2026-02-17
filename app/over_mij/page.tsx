"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowUpRight, Code, Camera, Fingerprint, Lightbulb, PenTool, Terminal } from "lucide-react"

export default function AboutMePage() {
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "OVER MIJ"

  // 1. TYPING EFFECT LOGIC
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  // 2. SCROLL PROGRESS LOGIC
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  const skills = [
    "UX/UI Design", "Fotografie", "Branding & Identity",
    "Illustratie", "Web Development", "Projectmanagement",
    "Adobe Creative Suite", "Next.js & Tailwind", "3D Mockups"
  ]

  const timeline = [
    { year: "2020", event: "Start Grafische Technieken", location: "Talentenschool Zenit - Turnhout", desc: "De basis gelegd voor drukwerkvoorbereiding en grafisch ontwerp." },
    { year: "2024", event: "Stage Van Genechten Biermans", location: "Turnhout", desc: "Professionele ervaring opgedaan in packaging design en prepress voor internationale klanten." },
    { year: "2024", event: "Diploma Grafische Technieken", location: "Turnhout", desc: "Succesvolle afronding van de technische opleiding met focus op vakmanschap." },
    { year: "2024", event: "Start Grafische en Digitale Media", location: "AP Hogeschool - Antwerpen", desc: "Specialisatie in digitale ervaringen, web development en UX design." },
    { year: "2025", event: "Studio Thibaut", location: "Vorselaar", desc: "Lancering van mijn freelance merk gericht op fotografie en visuele branding." },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 space-y-32">

        {/* HERO */}
        <section className="max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>

          <div className="w-24 h-1 bg-red-900 mt-6 mb-10 origin-left animate-expand"></div>
          
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-8">
              <p className="text-2xl lg:text-4xl text-gray-700 leading-tight font-light italic">
                "Ik geloof dat de krachtigste designs ontstaan op het snijvlak van <span className="text-gray-900 font-normal not-italic underline decoration-red-900/30 italic">analoge precisie</span> en <span className="text-gray-900 font-normal not-italic underline decoration-red-900/30 italic">digitale innovatie</span>."
              </p>
            </div>
            <div className="md:col-span-4 space-y-4 pt-4">
               <div className="flex items-center gap-3 text-red-900 font-bold uppercase text-xs tracking-widest">
                  <Fingerprint size={20} /> Identity
               </div>
               <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider font-medium">
                  Thibaut Vanden Eynden — Digital Creator, Fotograaf en Designer gebaseerd in Vorselaar.
               </p>
            </div>
          </div>
        </section>

        {/* FOTO + BIO */}
        <section className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="relative group">
            <div className="absolute -inset-4 border border-red-900/10 rounded-[2.5rem] translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700"></div>
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/IMG/Thibaut2.jpg"
                alt="Thibaut Vanden Eynden"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
            </div>
          </div>

          <div className="space-y-12 pt-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-red-900">Mijn Verhaal</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  Mijn reis in de grafische wereld begon in Turnhout, waar ik de technische fundamenten van het vak leerde. Daar ontdekte ik dat design meer is dan alleen esthetiek; het is een technisch proces van precisie en voorbereiding. Deze <strong>analoge basis</strong> neem ik elke dag mee in mijn digitale werk.
                </p>
                <p>
                  Vandaag, als student aan de <strong>AP Hogeschool Antwerpen</strong>, verleg ik mijn grenzen naar de digitale horizon. Ik combineer mijn passie voor fotografie met interactieve media en web-technologieën zoals Next.js en Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div className="space-y-2">
                <Lightbulb className="text-red-900" size={24} />
                <h4 className="font-bold uppercase text-sm tracking-widest">Conceptueel</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider italic">Gevormd door strategie.</p>
              </div>
              <div className="space-y-2">
                <Terminal className="text-red-900" size={24} />
                <h4 className="font-bold uppercase text-sm tracking-widest">Technisch</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider italic">Klaar voor de toekomst.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & TIJDLIJN */}
        <section className="grid lg:grid-cols-12 gap-20 border-t border-gray-100 pt-20">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-red-900">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100">
               <p className="text-xs text-gray-500 font-light italic leading-relaxed">
                 "Design moet niet alleen gezien worden, het moet gevoeld worden. Elk detail versterkt de ervaring."
               </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-red-900">Mijn Tijdlijn</h3>
            
            <div className="space-y-0">
              {timeline.map((item, idx) => {
                const showYear = idx === 0 || item.year !== timeline[idx - 1].year;
                
                return (
                  <div key={idx} className={`grid grid-cols-[80px_1fr] gap-8 group ${showYear ? 'mt-10' : 'mt-4'}`}>
                    <div className="text-2xl font-black text-gray-200 group-hover:text-red-900 transition-colors duration-500 pt-1 text-right">
                      {showYear ? item.year : ""}
                    </div>

                    <div className="relative pl-8 border-l border-gray-100 group-hover:border-red-900/30 transition-colors duration-500 pb-8">
                      <div className={`absolute left-[-5px] top-3 w-2 h-2 rounded-full transition-all duration-500 ${showYear ? 'bg-red-900 scale-125' : 'bg-gray-200 group-hover:bg-red-900/50'}`}></div>
                      
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tight leading-tight">
                          {item.event}
                        </h4>
                        <p className="text-[9px] font-bold tracking-widest text-red-900/60 uppercase">
                          {item.location}
                        </p>
                        <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xl mt-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPACT CONTACT CTA */}
        <section className="relative py-16 bg-red-900 rounded-[2.5rem] text-center px-6 overflow-hidden">
          <Camera className="absolute -left-6 -top-6 text-white/5 rotate-12" size={120} />
          <PenTool className="absolute -right-6 -bottom-6 text-white/5 -rotate-12" size={120} />

          <div className="relative z-10 space-y-6">
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Laten we iets <br />creëren.
            </h2>
            <div className="pt-2">
              <a href="mailto:vandeneyndenthibaut@gmail.be" className="inline-flex items-center gap-3 bg-white text-red-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 group">
                Stuur een bericht <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  )
}