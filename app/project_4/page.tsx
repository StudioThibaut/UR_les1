"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowLeft, X, ZoomIn, Info, Brain, Sparkles, MousePointer2, Search, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function MemoryProject() {
  const fullTitle = "TEGEN DEMENTIE"
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [activeHighlight, setActiveHighlight] = useState(0)

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
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / scrollHeight) * 100)
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  const highlights = [
    {
      label: "Tegen het vergeten.",
      sub: "Een interactief onderzoek naar het emotioneel geheugen, ontworpen voor mensen met dementie en hun naasten.",
      img: "/IMG/Herinnering1.jpg",
    },
    {
      label: "Radicaal minimalisme als zorg.",
      sub: "Elke pixel die geen direct doel diende werd verwijderd. Hoog contrast en grote typografie voor maximale leesbaarheid.",
      img: "/IMG/Herinnering2.jpg",
    },
    {
      label: "Interactie als metafoor.",
      sub: "Het vervagen van woorden bij aanraking symboliseert de vluchtigheid van het geheugen.",
      img: "/IMG/Herinnering3.jpg",
    },
    {
      label: "Collectieve reminiscentie.",
      sub: "Woorden gebaseerd op geuren, geluiden en tactiele sensaties die gesprekken tussen patiënt en familie starten.",
      img: "/IMG/Herinnering4.jpg",
    },
  ]

  const bentoItems = [
    { text: "De Landing — een verstild moment voor de interactie begint.", img: "/IMG/Herinnering1.jpg" },
    { text: "De Trigger — selectie van woorden op basis van zintuiglijke associaties.", img: "/IMG/Herinnering2.jpg" },
    { text: "De Handeling — interactie die vraagt om vertraging.", img: "/IMG/Herinnering3.jpg" },
    { text: "De Stroom — een oneindige lus die de vluchtigheid symboliseert.", img: "/IMG/Herinnering4.jpg" },
  ]

  const sections = [
    {
      icon: <Brain size={20} />,
      tag: "Context",
      title: "De Uitdaging & Context",
      body: [
        "De digitale wereld is vaak te snel, te luid en te complex voor mensen met cognitieve achteruitgang. Wanneer interfaces verzadigd raken met knoppen, menu's en meldingen, ontstaat er cognitieve frictie. Mijn doel was om te onderzoeken hoe we technologie juist kunnen inzetten als een rustgevend hulpmiddel voor reminiscentie.",
        "In plaats van een archief te bouwen waar de gebruiker moet zoeken, wilde ik een ervaring creëren die de gebruiker tegemoet komt. De centrale vraag was: 'Hoe kan een interface fungeren als een poëtische trigger zonder de gebruiker te overweldigen?'"
      ],
    },
    {
      icon: <ShieldCheck size={20} />,
      tag: "Ontwerp",
      title: "Radicaal Minimalisme",
      body: [
        "In dit project heb ik het concept 'Less is More' tot het uiterste gedreven. Elke pixel die geen direct doel diende, werd verwijderd. Door gebruik te maken van een puur wit canvas en zorgvuldig gekozen typografie, wordt de aandacht geforceerd naar de woorden.",
        "De typografie is niet zomaar een visuele keuze; het is een functioneel element. De letters zijn groot, scherp en hebben een hoog contrast om de leesbaarheid voor ouderen te maximaliseren. Dit zorgt voor een inclusieve ervaring waarbij de techniek wegvalt en de emotie overblijft.",
      ],
    },
    {
      icon: <MousePointer2 size={20} />,
      tag: "Interactie",
      title: "Interactie als Narratief",
      body: [
        "De essentie van de ervaring zit in de hover-mechaniek. In de psychologie van dementie is tastbare actie en onmiddellijke visuele feedback cruciaal. Wanneer de gebruiker de muis beweegt, reageert de interface onmiddellijk maar zacht.",
        "Het vervagen van de woorden bij aanraking is een bewuste metafoor voor de vluchtigheid van het geheugen. Het leert de gebruiker om niet te proberen de herinnering vast te houden, maar om ervan te genieten in het moment.",
      ],
    },
    {
      icon: <Search size={20} />,
      tag: "Methodiek",
      title: "Methodiek van de Woordkeuze",
      body: [
        "De woorden in de applicatie zijn niet willekeurig. Ze zijn gebaseerd op collectieve reminiscentie-thema's: geuren van vroeger, geluiden en tactiele sensaties. Deze triggers zijn ontworpen om niet alleen bij de patiënt iets los te maken, maar ook om een gesprek te starten tussen de patiënt en de zorgverlener of familieleden.",
      ],
    },
  ]

  const merkPilaren = [
    ["Rust", "Prikkels"],
    ["Focus", "Chaos"],
    ["Emotie", "Ratio"],
    ["Traagheid", "Snelheid"],
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans overflow-x-hidden">

      <div className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />

{/* ── 1. HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative">
        <Link href="/portfolio" className="absolute top-8 left-6 md:left-12 inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          UX Research · Inclusief Design · Dementiezorg
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8 max-w-6xl">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl leading-relaxed mb-12">
          "Tegen het vergeten." — Een interactief onderzoek naar het emotioneel geheugen, ontworpen voor mensen met dementie en hun naasten.
        </p>

        <a href="#highlights" className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-red-900 border border-red-900/30 px-8 py-4 rounded-full hover:bg-red-900 hover:text-white transition-all duration-300">
          Ontdek het project ↓
        </a>

        {/* Hero image */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group"
          onClick={() => setLightboxImage("/IMG/Herinnering1.jpg")}
        >
          <Image src="/IMG/Herinnering1.jpg" alt="Tegen Dementie" fill className="object-cover group-hover:scale-105 transition-all duration-700" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white drop-shadow" size={32} />
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
            De landing — een verstild moment voor de interactie begint
          </p>
        </div>
      </section>

      {/* ── 2. HIGHLIGHTS CAROUSEL ── */}
      <section id="highlights" className="py-28 md:py-40 bg-white px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Overzicht</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            De highlights op een rij.
          </h2>
          <p className="text-center text-gray-400 font-light mb-14 text-sm max-w-xl mx-auto">
            Vier kernmomenten uit het project — van onderzoeksvraag tot interactief eindresultaat.
          </p>

          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {highlights.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHighlight(i)}
                className={`w-9 h-9 rounded-full text-xs font-black border-2 transition-all duration-200 ${
                  activeHighlight === i
                    ? 'bg-red-900 border-red-900 text-white scale-110'
                    : 'border-gray-200 text-gray-400 hover:border-red-900 hover:text-red-900'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-2 min-h-100">
            <div className="relative aspect-video md:aspect-auto md:min-h-80 cursor-zoom-in" onClick={() => setLightboxImage(highlights[activeHighlight].img)}>
              <Image src={highlights[activeHighlight].img} alt="Highlight" fill className="object-cover" />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center gap-6">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-900/50">
                {String(activeHighlight + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
              </span>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900 leading-tight">
                {highlights[activeHighlight].label}
              </p>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base italic">
                {highlights[activeHighlight].sub}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BENTO GRID ── */}
      <section className="py-28 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">User Journey</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Interface & Schermen.
          </h2>
          <p className="text-gray-400 mb-16 font-light text-sm">
            Een stapsgewijze weergave van hoe de gebruiker door de herinneringsstroom navigeert.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div
              className="col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
              onClick={() => setLightboxImage(bentoItems[0].img)}
            >
              <Image src={bentoItems[0].img} alt="Bento 1" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-light italic">{bentoItems[0].text}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white" size={18} />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              {[bentoItems[1], bentoItems[2]].map((item, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-md group cursor-zoom-in" onClick={() => setLightboxImage(item.img)}>
                  <Image src={item.img} alt="Bento" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-light italic">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
            onClick={() => setLightboxImage(bentoItems[3].img)}
          >
            <Image src={bentoItems[3].img} alt="Bento 4" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-light italic">{bentoItems[3].text}</p>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="text-white" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TEKST-SECTIES ── */}
      <section className="py-28 md:py-40 bg-white px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">Achtergrond</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-20 tracking-tight uppercase">
            Het verhaal achter het project.
          </h2>

          <div className="space-y-0">
            {sections.map((s, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-200 py-14">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-red-900 mb-2">
                    {s.icon}
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">{s.tag}</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">{s.title}</h3>
                </div>
                <div className="md:col-span-8 space-y-5 text-gray-600 font-light leading-relaxed text-base md:text-lg">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DESIGN STRATEGIE ── */}
      <section className="py-28 md:py-40 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Spanningsvelden</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">
            Design Strategie.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {merkPilaren.map(([a, b], i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 space-y-4 hover:border-red-900/20 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-black text-xl uppercase tracking-tight text-gray-900">{a}</span>
                  <span className="text-[10px] font-black text-red-900/40 tracking-widest">VS</span>
                  <span className="font-black text-xl uppercase tracking-tight text-gray-400">{b}</span>
                </div>
                <div className="w-full h-px bg-linear-to-r from-red-900/20 via-gray-200 to-transparent" />
                <p className="text-gray-400 font-light text-xs italic">
                  Een bewuste keuze tussen {a.toLowerCase()} en {b.toLowerCase()} als ontwerpparameter.
                </p>
              </div>
            ))}
          </div>

          {/* Projectinfo card */}
          <div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              {[
                { label: "Discipline", value: "UX Research / Web Interaction" },
                { label: "Focus", value: "Inclusief Design / Dementiezorg" },
                { label: "Onderzoek", value: "Emotionele Triggers" },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "border-t border-gray-200 pt-8" : ""}>
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-1">{item.label}</p>
                  <p className="font-black text-lg uppercase tracking-tight text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="md:border-l border-gray-200 md:pl-10 space-y-6">
              <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-4">Technische Stack</p>
              <div className="space-y-3">
                {["Next.js Framework", "Framer Motion (Animaties)", "Tailwind CSS (Styling)"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-red-900 font-black">•</span>
                    <span className="text-gray-500 font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-red-900 mb-3">
                  <Sparkles size={14} />
                  <p className="text-[10px] font-black tracking-widest uppercase">Reflectie</p>
                </div>
                <p className="text-gray-500 font-light text-sm italic leading-relaxed">
                  "Dit project bewees dat technologie de menselijke ervaring niet hoeft te overschaduwen, maar juist kan versterken door terug te keren naar de essentie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full h-[80vh] max-w-5xl">
            <Image src={lightboxImage} alt="Fullscreen" fill className="object-contain" />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #991b1b; border-radius: 10px; }
      `}</style>
    </main>
  )
}