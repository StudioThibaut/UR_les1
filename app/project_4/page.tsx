"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Info, Brain, Sparkles, MousePointer2, Eye, Heart, Zap, Search, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function MemoryProject() {
  /* 1. TYPING EFFECT */
  const fullTitle = "TEGEN DEMENTIE"
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

  /* 2. SCROLL PROGRESS LOGIC */
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

  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const screens = [
    { src: "/IMG/Herinnering1.jpg", title: "De Landing", desc: "Een verstild moment voor de interactie begint. Geen afleiding, enkel de essentie." },
    { src: "/IMG/Herinnering2.jpg", title: "De Trigger", desc: "Selectie van woorden gebaseerd op collectieve herinneringen en zintuiglijke associaties." },
    { src: "/IMG/Herinnering3.jpg", title: "De Handeling", desc: "Interactie die vraagt om vertraging. De gebruiker bepaalt het ritme van de ervaring." },
    { src: "/IMG/Herinnering4.jpg", title: "De Stroom", desc: "Een oneindige lus die de continuïteit van het bewustzijn en de vluchtigheid ervan symboliseert." }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans">
      
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 space-y-32">

        {/* HERO SECTION */}
        <section className="max-w-5xl">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
          </Link>

          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>

          <div className="w-24 h-1 bg-red-900 mt-6 mb-10 origin-left animate-expand"></div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
            <div className="md:col-span-2">
              <p className="text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">
                "Tegen het vergeten." — Een interactief onderzoek naar het emotioneel geheugen, ontworpen om verbinding te maken met de leefwereld van mensen met dementie en hun naasten.
              </p>
            </div>
            <div className="text-sm uppercase tracking-widest text-gray-400 space-y-4 border-l border-gray-100 pl-6">
              <div><span className="text-red-900 font-bold block">Discipline</span> UX Research / Web Interaction</div>
              <div><span className="text-red-900 font-bold block">Focus</span> Inclusief Design / Dementiezorg</div>
              <div><span className="text-red-900 font-bold block">Onderzoek</span> Emotionele Triggers</div>
            </div>
          </div>
        </section>

        {/* DIEPGAANDE CASE STUDY SECTIE */}
        <section className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20 text-gray-600 font-light leading-relaxed text-lg">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Brain size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">De Uitdaging & Context</h2>
              </div>
              <p>
                De digitale wereld is vaak te snel, te luid en te complex voor mensen met cognitieve achteruitgang. Wanneer interfaces verzadigd raken met knoppen, menu's en meldingen, ontstaat er <strong>cognitieve frictie</strong>. Mijn doel was om te onderzoeken hoe we technologie juist kunnen inzetten als een rustgevend hulpmiddel voor <em>reminiscentie</em> (het ophalen van herinneringen).
              </p>
              <p>
                In plaats van een archief te bouwen waar de gebruiker moet zoeken, wilde ik een ervaring creëren die de gebruiker tegemoet komt. De centrale vraag was: "Hoe kan een interface fungeren als een poëtische trigger zonder de gebruiker te overweldigen?"
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <ShieldCheck size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Radicaal Minimalisme</h2>
              </div>
              <p>
                In dit project heb ik het concept <strong>'Less is More'</strong> tot het uiterste gedreven. Elke pixel die geen direct doel diende, werd verwijderd. Door gebruik te maken van een puur wit canvas en zorgvuldig gekozen typografie, wordt de aandacht geforceerd naar de woorden.
              </p>
              <p>
                De typografie is niet zomaar een visuele keuze; het is een functioneel element. De letters zijn groot, scherp en hebben een hoog contrast om de leesbaarheid voor ouderen te maximaliseren. Dit zorgt voor een inclusieve ervaring waarbij de techniek wegvalt en de emotie overblijft.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <MousePointer2 size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Interactie als Narratief</h2>
              </div>
              <p>
                De essentie van de ervaring zit in de <strong>hover-mechaniek</strong>. In de psychologie van dementie is tastbare actie en onmiddellijke visuele feedback cruciaal. Wanneer de gebruiker de muis (of vinger) beweegt, reageert de interface onmiddellijk maar zacht.
              </p>
              <p>
                Het vervagen van de woorden bij aanraking is een bewuste metafoor voor de vluchtigheid van het geheugen. Het leert de gebruiker om niet te proberen de herinnering 'vast te houden', maar om ervan te genieten in het moment. Zodra een woord volledig is vervaagd, wordt de volgende trigger in de stroom geladen, wat een gevoel van continuïteit geeft.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Search size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Methodiek van de Woordkeuze</h2>
              </div>
              <p>
                De woorden in de applicatie zijn niet willekeurig. Ze zijn gebaseerd op <strong>collectieve reminiscentie-thema's</strong>: geuren van vroeger (vers gemaaid gras, koffie), geluiden (de radio, de trein) en tactiele sensaties. Deze triggers zijn ontworpen om niet alleen bij de patiënt iets los te maken, maar ook om een gesprek te starten tussen de patiënt en de zorgverlener of familieleden.
              </p>
            </div>
          </div>

          {/* SIDEBAR MET HIGHLIGHTS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-24">
              <h3 className="font-bold text-red-900 mb-8 text-sm tracking-[0.3em] uppercase border-b border-red-900/10 pb-4">
                Design Strategie
              </h3>
              <ul className="space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-xl italic">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Rust</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Prikkels</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Focus</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Chaos</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Emotie</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Ratio</span></li>
                <li className="flex justify-between items-center pb-2"><span>Traagheid</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Snelheid</span></li>
              </ul>
              
              <div className="mt-12 space-y-4">
                <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Technische Stack</h4>
                <p className="text-sm text-gray-500 font-light">
                  • Next.js Framework<br />
                  • Framer Motion (Animaties)<br />
                  • Tailwind CSS (Styling)<br />
                  <span className="text-red-900/60 mt-2 block italic">Concept: "Het Geheugen als Interface"</span>
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 text-red-900 mb-4">
                  <Sparkles size={16} />
                  <span className="font-bold uppercase text-[10px] tracking-widest">Reflectie</span>
                </div>
                <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                  "Dit project bewees dat technologie de menselijke ervaring niet hoeft te overschaduwen, maar juist kan versterken door terug te keren naar de essentie."
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* INTERACTIVE SCREENS GRID (4 AFBEELDINGEN) */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-red-900 text-4xl font-bold uppercase tracking-widest italic">User Journey & Interface</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto italic">
              Een stapsgewijze weergave van hoe de gebruiker door de herinneringsstroom navigeert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {screens.map((screen, index) => (
              <div key={index} className="space-y-6 group">
                <div 
                  className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg cursor-zoom-in bg-gray-50 border border-gray-100"
                  onClick={() => setLightboxImage(screen.src)}
                >
                  <Image src={screen.src} alt={screen.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                        <ZoomIn className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <h4 className="text-red-900 font-bold uppercase tracking-widest text-sm mb-2">{screen.title}</h4>
                  <p className="text-gray-500 font-light text-sm uppercase tracking-wider leading-relaxed">{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/98 z-[200] flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X size={40} /></button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
            <Image src={lightboxImage} alt="Fullscreen detail" fill className="object-contain" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </main>
  )
}