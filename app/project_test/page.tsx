"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Package, Rocket, Target, Hash } from "lucide-react"
import Link from "next/link"

/* ==========================================
   ONTWERP A: JOUW EXACTE CODE (GEEN WIJZIGINGEN)
   ========================================== */
const DesignA = ({ title, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn">
    <div className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 space-y-32">
      <section className="max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>

        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
          {title}<span className="ml-1 opacity-40 animate-pulse">_</span>
        </h1>

        <div className="w-24 h-1 bg-red-900 mt-6 mb-10 origin-left animate-expand"></div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
          <div className="md:col-span-2">
            <p className="text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">
              "Ontstoken door adrenaline." — Een integrale merkbeleving waarbij kracht, snelheid en visuele energie de kern vormen van een nieuw energiedrankmerk.
            </p>
          </div>
          <div className="text-sm uppercase tracking-widest text-gray-400 space-y-4 border-l border-gray-100 pl-6">
            <div><span className="text-red-900 font-bold block">Project</span> Ignition Energy</div>
            <div><span className="text-red-900 font-bold block">Expertise</span> Brand Identity / Packaging</div>
            <div><span className="text-red-900 font-bold block">Medium</span> Print & 3D Mockups</div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16 text-gray-600 font-light leading-relaxed text-lg">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Rocket size={24} /><h2 className="text-2xl font-bold uppercase tracking-tighter">Brand Concept</h2></div>
            <p>
              Het concept achter <strong>Ignition</strong> draait om het moment van ontbranding: de fractie van een seconde waarin energie wordt vrijgegeven. Dit vertaalt zich in een visuele identiteit die steunt op scherpe hoeken, een hoog contrast en een agressieve doch verfijnde typografie.
            </p>
            <p>
              In tegenstelling tot traditionele energiedranken die vaak oververzadigd zijn, kiest Ignition voor een modernere, 'strakke' benadering. Het logo fungeert als een bliksemschicht-achtig icoon dat zowel snelheid als elektrische ontlading symboliseert.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Package size={24} /><h2 className="text-2xl font-bold uppercase tracking-tighter">Packaging & Product Design</h2></div>
            <p>
              De grootste uitdaging bij de verpakking was de vertaling van de 2D-elementen naar de ronde vormen van een aluminium blikje. Door gebruik te maken van verticale grafische elementen wordt de lengte van het blikje benadrukt, wat bijdraagt aan het gevoel van een 'krachtige boost'.
            </p>
            <p>
              Er is geëxperimenteerd met matte afwerkingen in combinatie met glanzende UV-lak op het logo, om een tactiele ervaring te creëren die de consument onmiddellijk associeert met een premium product.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Target size={24} /><h2 className="text-2xl font-bold uppercase tracking-tighter">Marketing & Advertising</h2></div>
            <p>
              Voor de lancering is een reeks affiches ontworpen waarbij de 'vloeibare energie' centraal staat. De focus ligt hierbij op productfotografie gecombineerd met dynamische 3D-renders, waardoor het product bijna uit het kader lijkt te barsten. Deze consistentie in visuele energie zorgt voor een herkenbare aanwezigheid in zowel digitale als fysieke media.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-24">
            <h3 className="font-bold text-red-900 mb-8 text-sm tracking-[0.3em] uppercase border-b border-red-900/10 pb-4">Merk Pilaren</h3>
            <ul className="space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-xl italic">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Snelheid</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Controle</span></li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Rauw</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Premium</span></li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Impact</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Minimalisme</span></li>
              <li className="flex justify-between items-center pb-2"><span>Digitaal</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Fysiek</span></li>
            </ul>
            <div className="mt-12 space-y-4">
              <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Design Assets</h4>
              <p className="text-sm text-gray-500 font-light">• Custom Typografie<br />• 3D Product Mockups<br />• Brand Styleguide<br /><span className="text-red-900/60 mt-2 block italic">Tools: Illustrator, Dimension, Photoshop</span></p>
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group" onClick={() => setLightboxImage("/IMG/Ignition3.jpg")}>
          <Image src="/IMG/Ignition3.jpg" alt="Ignition Branding" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs uppercase tracking-[0.3em]">Presentatie van de merkidentiteit en packaging</p>
      </section>
    </div>
  </div>
)

/* ==========================================
   ONTWERP B: INDUSTRIAL WHITE (VOLLEDIGE TEKST)
   ========================================== */
const DesignB = ({ title, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn bg-[#ffffff] min-h-screen text-[#1a1a1a] font-mono selection:bg-yellow-400 selection:text-black">
    <div className="fixed top-0 left-0 h-1 bg-yellow-400 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
    
    <div className="max-w-[1400px] mx-auto px-6 py-24 relative">
      <header className="mb-48 border-l-[12px] border-black pl-10">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
          </Link>
        <h1 className="text-6xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-black mb-10">{title}</h1>
        <div className="inline-block bg-yellow-400 px-4 py-2 text-xl lg:text-2xl font-black uppercase italic leading-tight">
          "Ontstoken door adrenaline."
        </div>
        <p className="mt-4 text-black/60 font-bold uppercase tracking-tight">
          — Een integrale merkbeleving waarbij kracht, snelheid en visuele energie de kern vormen van een nieuw energiedrankmerk.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-24 mb-32">
        <div className="lg:col-span-8 space-y-32">
          <section className="space-y-10">
            <div className="text-black font-black text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Concept</div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Brand Concept</h2>
            <div className="space-y-8 text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-8">
              <p>Het concept achter <strong>Ignition</strong> draait om het moment van ontbranding: de fractie van een seconde waarin energie wordt vrijgegeven. Dit vertaalt zich in een visuele identiteit die steunt op scherpe hoeken, een hoog contrast en een agressieve doch verfijnde typografie.</p>
              <p>In tegenstelling tot traditionele energiedranken die vaak oververzadigd zijn, kiest Ignition voor een modernere, 'strakke' benadering. Het logo fungeert als een bliksemschicht-achtig icoon dat zowel snelheid als elektrische ontlading symboliseert.</p>
            </div>
          </section>

          <section className="space-y-10">
            <div className="text-black font-black text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Packaging</div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Packaging & Product Design</h2>
            <div className="space-y-8 text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-8">
              <p>De grootste uitdaging bij de verpakking was de vertaling van de 2D-elementen naar de ronde vormen van een aluminium blikje. Door gebruik te maken van verticale grafische elementen wordt de lengte van het blikje benadrukt, wat bijdraagt aan het gevoel van een 'krachtige boost'.</p>
              <p>Er is geëxperimenteerd met matte afwerkingen in combinatie met glanzende UV-lak op het logo, om een tactiele ervaring te creëren die de consument onmiddellijk associeert met een premium product.</p>
            </div>
          </section>

          <section className="space-y-10">
            <div className="text-black font-black text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Advertising</div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Marketing & Advertising</h2>
            <div className="space-y-8 text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-8 italic">
              <p>Voor de lancering is een reeks affiches ontworpen waarbij de 'vloeibare energie' centraal staat. De focus ligt hierbij op productfotografie gecombineerd met dynamische 3D-renders, waardoor het product bijna uit het kader lijkt te barsten. Deze consistentie in visuele energie zorgt voor een herkenbare aanwezigheid in zowel digitale als fysieke media.</p>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-12 space-y-10">
            <div className="bg-black p-10 text-white shadow-2xl">
              <h3 className="font-black uppercase text-xs tracking-[0.4em] mb-8 border-b-2 border-white/20 pb-4">Merk_Pilaren</h3>
              <div className="space-y-6 font-black uppercase text-2xl italic tracking-tighter">
                {[
                  ['Snelheid', 'Controle'],
                  ['Rauw', 'Premium'],
                  ['Impact', 'Minimalisme'],
                  ['Digitaal', 'Fysiek']
                ].map(([left, right]) => (
                  <div key={left} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-yellow-400">{left}</span> <span className="opacity-20 text-xs">VS</span> <span>{right}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 border-4 border-black space-y-6">
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase mb-2 border-b border-black pb-1">Project</p>
                <p className="text-black font-black text-xl">Ignition Energy</p>
              </div>
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase mb-2 border-b border-black pb-1">Specificaties</p>
                <p className="text-black text-sm font-bold uppercase italic">Brand Identity / Packaging<br />Print & 3D Mockups</p>
              </div>
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase mb-2 border-b border-black pb-1">Tools</p>
                <p className="text-black text-sm font-bold uppercase">• Custom Typografie<br />• 3D Product Mockups<br />• Illustrator, Dimension, PSD</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="mb-32 space-y-8">
        <div className="h-2 w-full bg-black mb-8" />
        <div className="relative w-full aspect-[21/9] border-[12px] border-black overflow-hidden group cursor-zoom-in" onClick={() => setLightboxImage("/IMG/Ignition3.jpg")}>
          <Image src="/IMG/Ignition3.jpg" alt="Ignition Brutalist" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
        </div>
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-black">
          <span>Finale</span>
          <span>Energy blikje</span>
        </div>
      </section>
    </div>
  </div>
)

/* ==========================================
   MAIN COMPONENT
   ========================================== */
export default function EnergyDrinkPage() {
  const [activeDesign, setActiveDesign] = useState('A')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const fullTitle = "IGNITION ENERGY DRINK"

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
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((currentScrollY / scrollHeight) * 100)
    }
    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <main className="min-h-screen bg-white relative">
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[300] flex bg-black/90 backdrop-blur-xl p-1.5 rounded-2xl border border-white/20 shadow-2xl transition-all hover:scale-105">
        <button onClick={() => setActiveDesign('A')} className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${activeDesign === 'A' ? 'bg-red-900 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>Ontwerp 1</button>
        <button onClick={() => setActiveDesign('B')} className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${activeDesign === 'B' ? 'bg-yellow-400 text-black shadow-lg' : 'text-white/40 hover:text-white'}`}>Ontwerp 2</button>
      </div>

      {activeDesign === 'A' ? (
        <DesignA title={title} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
      ) : (
        <DesignB title={title} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
      )}

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/98 z-[400] flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X size={40} /></button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh]"><Image src={lightboxImage} alt="Fullscreen" fill className="object-contain" /></div>
        </div>
      )}

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </main>
  )
}