"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Info, BookOpen, Camera, Layout } from "lucide-react"
import Link from "next/link"

export default function ProjectFotografie() {
  const images = [
    "/IMG/1.1_rechte-lijn.jpg", "/IMG/1.2_gebogen-lijn.jpg",
    "/IMG/2.1_lichtlijn.jpg", "/IMG/2.2_schaduwlijn.jpg",
    "/IMG/3.1_statische-lijn.jpg", "/IMG/3.2_dynamische-lijn.jpg",
    "/IMG/4.1_lijn-als-grens.jpg", "/IMG/4.2_lijn-als-verbinding.jpg",
    "/IMG/5.1_ritmische-lijn.jpg", "/IMG/5.2_onregelmatige-lijn.jpg",
  ]

  /* 1. TYPING EFFECT */
  const fullTitle = "FOTOGRAFIE FOMU"
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
                "Het vastleggen van de stilte tussen muren." — Een onderzoek naar de essentie van de architecturale lijn in opdracht van het Fotomuseum Antwerpen.
              </p>
            </div>
            <div className="text-sm uppercase tracking-widest text-gray-400 space-y-4 border-l border-gray-100 pl-6">
              <div><span className="text-red-900 font-bold block">Opdrachtgever</span> FOMU Antwerpen</div>
              <div><span className="text-red-900 font-bold block">Periode</span> Juni 2025</div>
              <div><span className="text-red-900 font-bold block">Status</span> Expositie (FOMU Shop)</div>
            </div>
          </div>
        </section>

        {/* DIEPGAANDE CASE STUDY SECTIE */}
        <section className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16 text-gray-600 font-light leading-relaxed text-lg">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Info size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">De Architecturale Benadering</h2>
              </div>
              <p>
                In dit project staat de visuele taal van Hélène Binet centraal. Binet staat bekend om haar vermogen om architectuur te transformeren tot een spel van licht en schaduw, waarbij de materiële context vaak wegvalt. Geïnspireerd door haar werk, heb ik de stad Antwerpen verkend als een verzameling van abstracte geometrieën.
              </p>
              <p>
                De focus lag niet op het documenteren van gebouwen, maar op het isoleren van de <strong>'lijn'</strong>. Of het nu een grens is tussen beton en lucht, of de verbinding tussen twee structuren; de lijn fungeert als de ruggengraat van de compositie. Door elke vorm van kleur te elimineren, wordt de kijker gedwongen om te kijken naar de pure textuur en het ritme van de stedelijke ruimte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Layout size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">De Landingspagina & Presentatie</h2>
              </div>
              <p>
                Voor de digitale ontsluiting van dit project is een specifieke <strong>landingspagina</strong> ontworpen die fungeert als een visuele 'teaser' voor de fysieke expositie. Het doel van deze pagina is om de bezoeker onmiddellijk onder te dompelen in de verstilde sfeer van het werk.
              </p>
              <p>
                Door gebruik te maken van grote typografie en een minimalistisch grid, weerspiegelt de interface de architecturale thema's uit de fotografie. De landingspagina combineert krachtige beelden met de praktische informatie over de samenwerking met het FOMU, waarbij de interactie tussen tekst en beeld de ritmiek van de leporello nabootst.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <BookOpen size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">De Leporello als Medium</h2>
              </div>
              <p>
                De vertaling van digitale beelden naar een fysiek object was een essentieel onderdeel van het proces. De keuze voor een <strong>leporello</strong> (een harmonica-vouwboek) is een bewuste keuze voor tactiliteit en narratief. Een leporello heeft geen vaste begin- of eindpagina; het is een doorlopende stroom.
              </p>
              <p>
                Tijdens het ontwerp van dit object was de <strong>sequentiële curatie</strong> de grootste uitdaging. Hoe reageert een 'lichtlijn' op de linkerpagina met een 'schaduwlijn' op de rechterpagina? Door de fysieke vouw ontstaat er een interactie tussen de beelden die versterkt wordt wanneer de leporello gedeeltelijk wordt uitgeklapt.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-red-900">
                <Camera size={24} />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">Techniek & Proces</h2>
              </div>
              <p>
                Elk beeld in deze reeks is het resultaat van een nauwkeurig proces van observatie. Er is geëxperimenteerd met extreme perspectieven en harde belichting om de grafische kwaliteit van de architectuur te benadrukken. In de nabewerking is gestreefd naar een diep zwart-wit contrast, waarbij de korrel en textuur van het beton voelbaar blijven.
              </p>
            </div>
          </div>

          {/* SIDEBAR MET HIGHLIGHTS */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm sticky top-24">
              <h3 className="font-bold text-red-900 mb-8 text-sm tracking-[0.3em] uppercase border-b border-red-900/10 pb-4">
                Visuele Dialogen
              </h3>
              <ul className="space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-xl italic">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Licht</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Schaduw</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Statisch</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Dynamisch</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Grens</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Verbinding</span></li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Recht</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Gebogen</span></li>
                <li className="flex justify-between items-center pb-2"><span>Ritmisch</span> <span className="text-red-900/40 text-xs font-black">VS</span> <span>Chaotisch</span></li>
              </ul>
              
              <div className="mt-12 space-y-4">
                <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Locatie Expositie</h4>
                <p className="text-sm text-gray-500 font-light">
                  FOMU - Fotomuseum Antwerpen<br />
                  Waalsekaai 47, 2000 Antwerpen<br />
                  <span className="text-red-900/60 mt-2 block italic">Gratis toegang via de FOMU Shop</span>
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* FULL WIDTH PREVIEW */}
        <section className="space-y-6">
          <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
            <Image src="/IMG/Fotografie_Leporello.jpg" alt="Leporello overzicht presentatie FOMU" fill className="object-cover" priority />
          </div>
          <p className="text-center text-gray-400 text-xs uppercase tracking-[0.3em]">Overzicht van de tactiele leporello-vouw</p>
        </section>

        {/* THE GALLERY */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-red-900 text-4xl font-bold uppercase tracking-widest italic">De Beeldenreeks</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto italic">
              Een selectie van de beelden zoals ze in de leporello verschijnen. De reeks is opgebouwd uit paren die elkaar uitdagen in vorm en licht.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-zoom-in bg-gray-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-red-900/5"
                onClick={() => setLightboxImage(img)}
              >
                <Image src={img} alt={`Architecturale studie Antwerpen ${index + 1}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                     <ZoomIn className="text-white" size={24} />
                   </div>
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