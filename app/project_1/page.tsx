"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Info, BookOpen, Camera, Layout, Hash } from "lucide-react"
import Link from "next/link"

/* ========================================== 
ONTWERP A: JOUW ORIGINELE CODE (RESPONSIVE)
========================================== */ 
const DesignA = ({ images, title, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn">
    <div className="fixed top-0 left-0 h-1 bg-red-900 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-24 space-y-16 md:space-y-32">
      <section className="max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-8 md:mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase break-words">
          {title}<span className="ml-1 opacity-40 animate-pulse"></span>
        </h1>
        <div className="w-20 md:w-24 h-1 bg-red-900 mt-4 md:mt-6 mb-8 md:mb-10 origin-left animate-expand"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-100 pt-8 md:pt-12">
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">
              "Het vastleggen van de stilte tussen muren." — Een onderzoek naar de essentie van de architecturale lijn in opdracht van het Fotomuseum Antwerpen.
            </p>
          </div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-400 space-y-4 md:border-l border-gray-100 md:pl-6">
            <div><span className="text-red-900 font-bold block">Opdrachtgever</span> FOMU Antwerpen</div>
            <div><span className="text-red-900 font-bold block">Periode</span> Juni 2025</div>
            <div><span className="text-red-900 font-bold block">Status</span> Expositie (FOMU Shop)</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        <div className="lg:col-span-8 space-y-12 md:space-y-16 text-gray-600 font-light leading-relaxed text-base md:text-lg">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Info size={24} /><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">De Architecturale Benadering</h2></div>
            <p>In dit project staat de visuele taal van Hélène Binet centraal. Binet staat bekend om haar vermogen om architectuur te transformeren tot een spel van licht en schaduw, waarbij de materiële context vaak wegvalt. Geïnspireerd door haar werk, heb ik de stad Antwerpen verkend als een verzameling van abstracte geometrieën.</p>
            <p>De focus lag niet op het documenteren van gebouwen, maar op het isoleren van de <strong>'lijn'</strong>. Of het nu een grens is tussen beton en lucht, of de verbinding tussen twee structuren; de lijn fungeert als de ruggengraat van de compositie. Door elke vorm van kleur te elimineren, wordt de kijker gedwongen om te kijken naar de pure textuur en het ritme van de stedelijke ruimte.</p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Layout size={24} /><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">De Landingspagina & Presentatie</h2></div>
            <p>Voor de digitale ontsluiting van dit project is een specifieke <strong>landingspagina</strong> ontworpen die fungeert als een visuele 'teaser' voor de fysieke expositie. Het doel van deze pagina is om de bezoeker onmiddellijk onder te dompelen in de verstilde sfeer van het werk.</p>
            <p>Door gebruik te maken van grote typografie en een minimalistisch grid, weerspiegelt de interface de architecturale thema's uit de fotografie. De landingspagina combineert krachtige beelden met de praktische informatie over de samenwerking met het FOMU, waarbij de interactie tussen tekst en beeld de ritmiek van de leporello nabootst.</p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 text-red-900"><BookOpen size={24} /><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">De Leporello als Medium</h2></div>
            <p>De vertaling van digitale beelden naar een fysiek object was een essentieel onderdeel van het proces. De keuze voor een <strong>leporello</strong> (een harmonica-vouwboek) is een bewuste keuze voor tactiliteit en narratief. Een leporello heeft geen vaste begin- of eindpagina; het is een doorlopende stroom.</p>
            <p>Tijdens het ontwerp van dit object was de <strong>sequentiële curatie</strong> de grootste uitdaging. Hoe reageert een 'lichtlijn' op de linkerpagina met een 'schaduwlijn' op de rechterpagina? Door de fysieke vouw ontstaat er een interactie tussen de beelden die versterkt wordt wanneer de leporello gedeeltelijk wordt uitgeklapt.</p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-4 text-red-900"><Camera size={24} /><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">Techniek & Proces</h2></div>
            <p>Elk beeld in deze reeks is het resultaat van een nauwkeurig proces of observatie. Er is geëxperimenteerd met extreme perspectieven en harde belichting om de grafische kwaliteit van de architectuur te benadrukken. In de nabewerking is gestreefd naar een diep zwart-wit contrast, waarbij de korrel en textuur van het beton voelbaar blijven.</p>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-sm lg:sticky lg:top-24">
            <h3 className="font-bold text-red-900 mb-6 md:mb-8 text-xs md:text-sm tracking-[0.3em] uppercase border-b border-red-900/10 pb-4">Visuele Dialogen</h3>
            <ul className="space-y-4 md:space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-lg md:text-xl italic">
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Licht</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>Schaduw</span></li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Statisch</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>Dynamisch</span></li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Grens</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>Verbinding</span></li>
              <li className="flex justify-between items-center border-b border-gray-100 pb-2"><span>Recht</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>Gebogen</span></li>
              <li className="flex justify-between items-center pb-2"><span>Ritmisch</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>Chaotisch</span></li>
            </ul>
            <div className="mt-8 md:mt-12 space-y-4">
              <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Locatie Expositie</h4>
              <p className="text-xs md:text-sm text-gray-500 font-light">FOMU - Fotomuseum Antwerpen<br />Waalsekaai 47, 2000 Antwerpen<br /><span className="text-red-900/60 mt-2 block italic">Gratis toegang via de FOMU Shop</span></p>
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-4 md:space-y-6">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
          <Image src="/IMG/Fotografie_Leporello.jpg" alt="Leporello" fill className="object-cover" priority />
        </div>
        <p className="text-center text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em]">Overzicht van de tactiele leporello-vouw</p>
      </section>

      <section className="space-y-12 md:space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-red-900 text-3xl md:text-4xl font-bold uppercase tracking-widest italic">De Beeldenreeks</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto italic text-sm md:text-base px-4">Een selectie van de beelden zoals ze in de leporello verschijnen. De reeks is opgebouwd uit paren die elkaar uitdagen in vorm en licht.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {images.map((img: string, i: number) => (
            <div key={i} className="group relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg cursor-zoom-in" onClick={() => setLightboxImage(img)}>
              <Image src={img} alt="Detail" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all"><ZoomIn className="text-white" size={24} /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
)

/* ========================================== 
ONTWERP B: INDUSTRIAL WHITE (BRUTALIST GRID RESPONSIVE)
========================================== */ 
const DesignB = ({ images, title, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn bg-[#ffffff] min-h-screen text-[#1a1a1a] font-mono selection:bg-yellow-400 selection:text-black">
    <div className="fixed top-0 left-0 h-1 bg-yellow-400 z-[110] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-24 relative">
      <header className="mb-20 md:mb-48 border-l-[8px] md:border-l-[12px] border-black pl-6 md:pl-10">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-8 md:mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase italic">Terug naar portfolio</span>
        </Link>
        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-black mb-8 break-words">
          {title}
        </h1>
        <div className="inline-block bg-yellow-400 px-3 py-2 md:px-4 md:py-2 text-sm sm:text-xl lg:text-2xl font-black uppercase italic leading-tight">
          "Het vastleggen van de stilte tussen muren."
        </div>
        <p className="mt-4 text-black/60 text-xs sm:text-base font-bold uppercase tracking-tight">— Een onderzoek naar de essentie van de architecturale lijn.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mb-20 md:mb-32">
        <div className="lg:col-span-8 space-y-20 md:space-y-32">
          <section className="space-y-6 md:space-y-10">
            <div className="text-black font-black text-[10px] md:text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Analyse</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">De Architecturale Benadering</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-6 md:pl-8">
              <p>In dit project staat de visuele taal van Hélène Binet centraal. Binet staat bekend om haar vermogen om architectuur te transformeren tot een spel van licht en schaduw, waarbij de materiële context vaak wegvalt. Geïnspireerd door haar werk, heb ik de stad Antwerpen verkend als een verzameling van abstracte geometrieën.</p>
              <p>De focus lag niet op het documenteren van gebouwen, maar op het isoleren van de <strong>'lijn'</strong>. Of het nu een grens is tussen beton en lucht, of de verbinding tussen twee structuren; de lijn fungeert als de ruggengraat van de compositie. Door elke vorm van kleur te elimineren, wordt de kijker gedwongen om te kijken naar de pure textuur en het ritme van de stedelijke ruimte.</p>
            </div>
          </section>

          <section className="space-y-6 md:space-y-10">
            <div className="text-black font-black text-[10px] md:text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Interface</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">De Landingspagina & Presentatie</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-6 md:pl-8">
              <p>Voor de digitale ontsluiting van dit project is een specifieke <strong>landingspagina</strong> ontworpen die fungeert als een visuele 'teaser' voor de fysieke expositie. Het doel van deze pagina is om de bezoeker onmiddellijk onder te dompelen in de verstilde sfeer van het werk.</p>
              <p>Door gebruik te maken van grote typografie en een minimalistisch grid, weerspiegelt de interface de architecturale thema's uit de fotografie. De landingspagina combineert krachtige beelden met de praktische informatie over de samenwerking met het FOMU, waarbij de interactie tussen tekst en beeld de ritmiek van de leporello nabootst.</p>
            </div>
          </section>

          <section className="space-y-6 md:space-y-10">
            <div className="text-black font-black text-[10px] md:text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Fysiek</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">De Leporello als Medium</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-6 md:pl-8">
              <p>De vertaling van digitale beelden naar een fysiek object was een essentieel onderdeel van het proces. De keuze voor een <strong>leporello</strong> (een harmonica-vouwboek) is een bewuste keuze voor tactiliteit en narratief. Een leporello heeft geen vaste begin- of eindpagina; het is een doorlopende stroom.</p>
              <p>Tijdens het ontwerp van dit object was de <strong>sequentiële curatie</strong> de grootste uitdaging. Hoe reageert een 'lichtlijn' op de linkerpagina met een 'schaduwlijn' op de rechterpagina? Door de fysieke vouw ontstaat er een interactie tussen de beelden die versterkt wordt wanneer de leporello gedeeltelijk wordt uitgeklapt.</p>
            </div>
          </section>

          <section className="mb-20 md:mb-32 space-y-6 md:space-y-8">
            <div className="h-1 md:h-2 w-full bg-black mb-6 md:mb-8" />
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] border-[6px] md:border-[12px] border-black overflow-hidden group">
              <Image src="/IMG/Fotografie_Leporello.jpg" alt="Leporello Brutalist" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="flex justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black italic">
              <span>Leporello</span>
              <span>Fotografie</span>
            </div>
          </section>

          <section className="space-y-6 md:space-y-10">
            <div className="text-black font-black text-[10px] md:text-xs tracking-[0.5em] uppercase border-b-4 border-black inline-block pb-1">Methode</div>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Techniek & Proces</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed font-sans opacity-80 border-l-2 border-black/10 pl-6 md:pl-8 italic">
              <p>Elk beeld in deze reeks is het resultaat van een nauwkeurig proces van observatie. Er is geëxperimenteerd met extreme perspectieven en harde belichting om de grafische kwaliteit van de architectuur te benadrukken. In de nabewerking is gestreefd naar een diep zwart-wit contrast, waarbij de korrel en textuur van het beton voelbaar blijven.</p>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-12 space-y-6 md:space-y-10">
            <div className="bg-black p-6 md:p-10 text-white shadow-2xl">
              <h3 className="font-black uppercase text-[10px] md:text-xs tracking-[0.4em] mb-6 md:mb-8 border-b-2 border-white/20 pb-4">Visuele Dialogen</h3>
              <div className="space-y-4 md:space-y-6 font-black uppercase text-xl md:text-2xl italic tracking-tighter">
                {['Licht vs Schaduw', 'Statisch vs Dynamisch', 'Grens vs Verbinding', 'Recht vs Gebogen', 'Ritmisch vs Chaotisch'].map(d => (
                  <div key={d} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-yellow-400">{d.split(' vs ')[0]}</span> <span className="opacity-20 text-[10px] md:text-xs">VS</span> <span>{d.split(' vs ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 border-4 border-black space-y-6">
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase mb-2 border-b border-black pb-1">Opdrachtgever</p>
                <p className="text-black font-black text-lg md:text-xl italic uppercase">FOMU Antwerpen</p>
              </div>
              <div>
                <p className="font-black text-[10px] tracking-widest uppercase mb-2 border-b border-black pb-1">Locatie Expositie</p>
                <p className="text-black text-xs md:text-sm font-bold uppercase italic">Waalsekaai 47, 2000 Antwerpen<br/><span className="underline mt-2 block opacity-50">Gratis toegang via FOMU Shop</span></p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="space-y-8 md:space-y-12">
        <div className="h-2 md:h-4 w-full bg-black mb-8 md:mb-12" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {images.map((img: string, i: number) => (
            <div key={i} className="relative aspect-[3/4] bg-white overflow-hidden group border-2 border-black cursor-pointer" onClick={() => setLightboxImage(img)}>
              <Image src={img} alt="Gallery" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute bottom-0 right-0 bg-black text-white text-[8px] md:text-[10px] font-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase italic">
                IMG_0{i+1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
)

/* ========================================== 
MAIN COMPONENT 
========================================== */ 
export default function ProjectFotografie() {
  const [activeDesign, setActiveDesign] = useState('A')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "FOTOGRAFIE FOMU"
  const images = [
    "/IMG/1.1_rechte-lijn.jpg", "/IMG/1.2_gebogen-lijn.jpg", "/IMG/2.1_lichtlijn.jpg", "/IMG/2.2_schaduwlijn.jpg",
    "/IMG/3.1_statische-lijn.jpg", "/IMG/3.2_dynamische-lijn.jpg", "/IMG/4.1_lijn-als-grens.jpg", "/IMG/4.2_lijn-als-verbinding.jpg",
    "/IMG/5.1_ritmische-lijn.jpg", "/IMG/5.2_onregelmatige-lijn.jpg",
  ]

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / scrollHeight) * 100
      setScrollProgress(progress > 0 ? progress : 0)
    }
    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <main className="min-h-screen bg-white relative pb-24 md:pb-0">
      {/* Design Switcher - Verbeterd voor mobiel (smaller en gecentreerd) */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[300] flex bg-black/90 backdrop-blur-xl p-1 md:p-1.5 rounded-2xl border border-white/20 shadow-2xl transition-all hover:scale-105 w-[280px] md:w-auto">
        <button onClick={() => setActiveDesign('A')} className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-all ${activeDesign === 'A' ? 'bg-red-900 text-white shadow-lg' : 'text-white/40 hover:text-white'}`}>Design A</button>
        <button onClick={() => setActiveDesign('B')} className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-xl text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-all ${activeDesign === 'B' ? 'bg-yellow-400 text-black shadow-lg' : 'text-white/40 hover:text-white'}`}>Design B</button>
      </div>

      {activeDesign === 'A' ? (
        <DesignA images={images} title={title} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
      ) : (
        <DesignB images={images} title={title} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
      )}

      {/* Lightbox - Verbeterd voor mobiel */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/98 z-[400] flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white p-2"><X size={32} className="md:w-[40px] md:h-[40px]" /></button>
          <div className="relative w-full h-[70vh] md:h-full max-w-5xl max-h-[85vh]">
            <Image src={lightboxImage} alt="Fullscreen" fill className="object-contain" />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </main>
  )
}