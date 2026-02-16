"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Info, BookOpen, Camera, Layout, Palette, Users, Printer } from "lucide-react"
import Link from "next/link"

export default function StageTshirtPage() {
  /* 1. TYPING EFFECT */
  const fullTitle = "STAGE T-SHIRT WEGI"
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
                "Identiteit op het veld." — Het vertalen van clubtrots naar een technisch en visueel sterk textielontwerp voor de jaarlijkse volleybalstage.
              </p>
            </div>
            <div className="text-sm uppercase tracking-widest text-gray-400 space-y-4 border-l border-gray-100 pl-6">
              <div><span className="text-red-900 font-bold block">Klant</span> Heylen Vastgoed - WeGi</div>
              <div><span className="text-red-900 font-bold block">Expertise</span> Graphic Design / Print</div>
              <div><span className="text-red-900 font-bold block">Status</span> Gerealiseerd (Productie)</div>
            </div>
          </div>
        </section>

        {/* DIEPGAANDE CASE STUDY SECTIE */}
        <section className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16 text-gray-600 font-light leading-relaxed text-lg">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Palette size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Visuele Identiteit</h2>
              </div>
              <p>
                Voor een sportclub als <strong>WeGi</strong> is het stage-shirt meer dan kledij; het is een symbool van samenhorigheid. De uitdaging lag in het creëren van een fris, modern ontwerp dat de dynamiek van volleybal uitstraalt, terwijl de strikte visuele richtlijnen van de club gerespecteerd moesten worden. 
              </p>
              <p>
                Ik heb gekozen voor een grafische vormentaal die beweging suggereert. Door te spelen met typografie en abstracte lijnen ontstond een ontwerp dat zowel op afstand (herkenbaarheid op het veld) als van dichtbij (detail en kwaliteit) overtuigt.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Printer size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Technische Realisatie & Print</h2>
              </div>
              <p>
                Een cruciaal aspect van textielontwerp is de <strong>technische haalbaarheid</strong>. In dit project moest ik rekening houden met de beperkingen en mogelijkheden van zeefdruk op sportmateriaal. Dit betekende het minimaliseren van kleurgebruik zonder aan impact in te boeten en het garanderen dat fijne details behouden bleven na productie.
              </p>
              <p>
                De sponsorvisibiliteit was een tweede technisch luik. Door de logo's van de partners organisch te integreren in het ontwerp, kregen zij een prominente plek zonder dat het shirt een 'reclamebord' werd. Het resultaat is een gebalanceerde compositie tussen commerciële noodzaak en esthetische waarde.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Users size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Proces & Feedback</h2>
              </div>
              <p>
                Het ontwerpproces verliep in nauwe samenspraak met de clubleiding. Door middel van verschillende revisierondes werden de verhoudingen en composities gefinetuned. Deze directe feedbacklus zorgde voor een resultaat dat breed gedragen werd binnen de club en perfect aansluit bij de 'camp-vibe' van de stage.
              </p>
            </div>
          </div>

          {/* SIDEBAR MET HIGHLIGHTS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-24">
              <h3 className="font-bold text-red-900 mb-8 text-sm tracking-[0.3em] uppercase border-b border-red-900/10 pb-4">
                Ontwerp Kernwaarden
              </h3>
              <ul className="space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-xl italic">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Dynamiek</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Structuur</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Clubtrots</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Moderniteit</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Sponsors</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Design</span></li>
                <li className="flex justify-between items-center pb-2"><span>Printbaar</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Gedetailleerd</span></li>
              </ul>
              
              <div className="mt-12 space-y-4">
                <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Technische Specs</h4>
                <p className="text-sm text-gray-500 font-light">
                  • Vector-based (Adobe Illustrator)<br />
                  • Pantone Matching System (PMS)<br />
                  • Geoptimaliseerd voor zeefdruk<br />
                  <span className="text-red-900/60 mt-2 block italic">Oplevering: Productie-klare PDF/X-4</span>
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* FULL WIDTH PREVIEW (DE FINALE AFBEELDING) */}
        <section className="space-y-6">
          <div 
            className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group"
            onClick={() => setLightboxImage("/IMG/T-shirt_Stage.jpg")}
          >
            <Image 
              src="/IMG/T-shirt_Stage.jpg" 
              alt="Overzicht van het finale WeGi T-shirt ontwerp" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              priority 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs uppercase tracking-[0.3em]">Visualisatie van het finale productie-ontwerp</p>
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