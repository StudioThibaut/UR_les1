"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ArrowLeft, X, ZoomIn, Package, Rocket, Target } from "lucide-react"
import Link from "next/link"

const gaEvent = ({ action, category, label }: { action: string; category: string; label: string }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    })
    console.log(`[GA] ${action} → ${label}`)
  }
}

const DesignA = ({ title, setLightboxImage, scrollProgress }: any) => {
  const [activeHighlight, setActiveHighlight] = useState(0)

  const highlights = [
    {
      label: "Ontstoken door adrenaline.",
      sub: "Een integrale merkbeleving waarbij kracht, snelheid en visuele energie de kern vormen van een nieuw energiedrankmerk.",
      img: "/IMG/Ignition3.jpg",
    },
    {
      label: "Scherpe hoeken. Hoog contrast. Agressieve typografie.",
      sub: "Een visuele identiteit die het moment van ontbranding vertaalt — de fractie van een seconde waarin energie wordt vrijgegeven.",
      img: "/IMG/Ignition3.jpg",
    },
    {
      label: "Premium packaging op een aluminium blikje.",
      sub: "Verticale grafische elementen benadrukken de lengte. Matte afwerking gecombineerd met glanzende UV-lak op het logo.",
      img: "/IMG/Ignition3.jpg",
    },
    {
      label: "Visuele energie in digitale én fysieke media.",
      sub: "Productfotografie gecombineerd met dynamische 3D-renders — het product lijkt bijna uit het kader te barsten.",
      img: "/IMG/Ignition3.jpg",
    },
    {
      label: "Strakker dan de concurrentie.",
      sub: "Waar traditionele energiedranken oververzadigd zijn, kiest Ignition voor een modernere, gecurateerde benadering.",
      img: "/IMG/Ignition3.jpg",
    },
  ]

  const bentoItems = [
    { tag: "Brand", text: "Het logo als bliksemschicht-icoon — snelheid én elektrische ontlading.", img: "/IMG/Ignition3.jpg" },
    { tag: "Typografie", text: "Custom lettertypes als drager van energie en agressie.", img: "/IMG/Ignition3.jpg" },
    { tag: "Packaging", text: "2D-elementen vertaald naar de ronde vormen van een aluminium blikje.", img: "/IMG/Ignition3.jpg" },
    { tag: "Afwerking", text: "Matte ondergrond met glanzende UV-lak voor tactiele beleving.", img: "/IMG/Ignition3.jpg" },
    { tag: "3D", text: "Product mockups die de merkidentiteit in context plaatsen.", img: "/IMG/Ignition3.jpg" },
    { tag: "Advertising", text: "Affiches waarbij vloeibare energie centraal staat.", img: "/IMG/Ignition3.jpg" },
  ]

  const sections = [
    {
      icon: <Rocket size={20} />,
      tag: "Concept",
      title: "Brand Concept",
      body: [
        "Het concept achter Ignition draait om het moment van ontbranding: de fractie van een seconde waarin energie wordt vrijgegeven. Dit vertaalt zich in een visuele identiteit die steunt op scherpe hoeken, een hoog contrast en een agressieve doch verfijnde typografie.",
        "In tegenstelling tot traditionele energiedranken die vaak oververzadigd zijn, kiest Ignition voor een modernere, 'strakke' benadering. Het logo fungeert als een bliksemschicht-achtig icoon dat zowel snelheid als elektrische ontlading symboliseert.",
      ],
    },
    {
      icon: <Package size={20} />,
      tag: "Packaging",
      title: "Packaging & Product Design",
      body: [
        "De grootste uitdaging bij de verpakking was de vertaling van de 2D-elementen naar de ronde vormen van een aluminium blikje. Door gebruik te maken van verticale grafische elementen wordt de lengte van het blikje benadrukt, wat bijdraagt aan het gevoel van een 'krachtige boost'.",
        "Er is geëxperimenteerd met matte afwerkingen in combinatie met glanzende UV-lak op het logo, om een tactiele ervaring te creëren die de consument onmiddellijk associeert met een premium product.",
      ],
    },
    {
      icon: <Target size={20} />,
      tag: "Advertising",
      title: "Marketing & Advertising",
      body: [
        "Voor de lancering is een reeks affiches ontworpen waarbij de 'vloeibare energie' centraal staat. De focus ligt hierbij op productfotografie gecombineerd met dynamische 3D-renders, waardoor het product bijna uit het kader lijkt te barsten. Deze consistentie in visuele energie zorgt voor een herkenbare aanwezigheid in zowel digitale als fysieke media.",
      ],
    },
  ]

  const merkPilaren = [
    ["Snelheid", "Controle"],
    ["Rauw", "Premium"],
    ["Impact", "Minimalisme"],
    ["Digitaal", "Fysiek"],
  ]

  return (
    <div className="animate-fadeIn bg-white text-gray-900">
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      {/* ── 1. HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative">
        <Link
          href="/portfolio"
          onClick={() => gaEvent({ action: "cta_terug_portfolio", category: "project_3", label: "/portfolio" })}
          className="absolute top-8 left-6 md:left-12 inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          Ignition Energy · Brand Identity / Packaging
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8 max-w-6xl">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl leading-relaxed mb-12">
          "Ontstoken door adrenaline." — Een integrale merkbeleving waarbij kracht, snelheid en visuele energie de kern vormen.
        </p>

        <a
          href="#highlights"
          onClick={() => gaEvent({ action: "cta_ontdek_project", category: "project_3", label: "scroll naar highlights" })}
          className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-red-900 border border-red-900/30 px-8 py-4 rounded-full hover:bg-red-900 hover:text-white transition-all duration-300"
        >
          Ontdek het project ↓
        </a>

        {/* Hero image */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group"
          onClick={() => {
            setLightboxImage("/IMG/Ignition3.jpg")
            gaEvent({ action: "image_lightbox_open", category: "project_3", label: "hero afbeelding" })
          }}
        >
          <Image src="/IMG/Ignition3.jpg" alt="Ignition Energy branding" fill className="object-cover group-hover:scale-105 transition-all duration-700" priority />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white drop-shadow" size={32} />
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
            Presentatie van de merkidentiteit en packaging
          </p>
        </div>
      </section>

      {/* ── 2. HIGHLIGHTS CAROUSEL ── */}
      <section id="highlights" className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Overzicht</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            De highlights op een rij.
          </h2>
          <p className="text-center text-gray-400 font-light mb-14 text-sm max-w-xl mx-auto">
            Vijf kernmomenten uit het project — van merkstrategie tot fysiek product.
          </p>

          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveHighlight(i)
                  gaEvent({ action: `highlight_click_${i + 1}`, category: "project_3", label: `highlight ${i + 1}: ${h.label}` })
                }}
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
            <div className="relative aspect-video md:aspect-auto md:min-h-80">
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

      {/* ── 4. TEKST-SECTIES ── */}
      <section className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">Achtergrond</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-20 tracking-tight uppercase">
            Het verhaal achter het merk.
          </h2>

          <div className="space-y-0">
            {sections.map((s, i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `tekstsectie_click_${s.tag}`, category: "project_3", label: s.title })}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-200 py-14 cursor-pointer group"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-red-900 mb-2">
                    {s.icon}
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">{s.tag}</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-red-900 transition-colors">{s.title}</h3>
                </div>
                <div className="md:col-span-8 space-y-5 text-gray-600 font-light leading-relaxed text-base md:text-lg">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FEATURE GRID (Merk Pilaren) ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Merkstrategie</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">
            Merk Pilaren.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {merkPilaren.map(([a, b], i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `merkpilaer_click_${a}_vs_${b}`, category: "project_3", label: `${a} vs ${b}` })}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 space-y-4 hover:border-red-900/20 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-xl uppercase tracking-tight text-gray-900">{a}</span>
                  <span className="text-[10px] font-black text-red-900/40 tracking-widest">VS</span>
                  <span className="font-black text-xl uppercase tracking-tight text-gray-400">{b}</span>
                </div>
                <div className="w-full h-px bg-linear-to-r from-red-900/20 via-gray-200 to-transparent" />
                <p className="text-gray-400 font-light text-xs italic">
                  Een bewuste keuze tussen {a.toLowerCase()} en {b.toLowerCase()} als merkkompas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALERIJ ── */}
      <section className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Galerij</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">Visueel Overzicht</h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto text-sm italic">
              Een selectie van het beeldmateriaal — van merkidentiteit tot gerealiseerde packaging.
            </p>
          </div>

          {/* Groot hoofdbeeld */}
          <div
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl cursor-zoom-in group mb-4"
            onClick={() => {
              setLightboxImage("/IMG/Ignition3.jpg")
              gaEvent({ action: "image_lightbox_open", category: "project_3", label: "galerij hoofdbeeld" })
            }}
          >
            <Image src="/IMG/Ignition3.jpg" alt="Ignition hoofdbeeld" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
              <ZoomIn className="text-white drop-shadow" size={32} />
            </div>
          </div>

          {/* Voeg hier extra afbeeldingen toe als je meer hebt */}
          {/* Voorbeeld: als je /IMG/Ignition1.jpg en /IMG/Ignition2.jpg hebt: */}
          {/*
          <div className="grid grid-cols-2 gap-4">
            {["/IMG/Ignition1.jpg", "/IMG/Ignition2.jpg"].map((img, i) => (
              <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setLightboxImage(img)}>
                <Image src={img} alt="Ignition detail" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* ── 7. PROJECTINFO + DESIGN ASSETS ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Specificaties</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">
            Projectinformatie.
          </h2>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              {[
                { label: "Project", value: "Ignition Energy" },
                { label: "Expertise", value: "Brand Identity / Packaging" },
                { label: "Medium", value: "Print & 3D Mockups" },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "border-t border-gray-200 pt-8" : ""}>
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-1">{item.label}</p>
                  <p className="font-black text-xl uppercase tracking-tight text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="md:border-l border-gray-200 md:pl-10 space-y-4">
              <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-4">Design Assets</p>
              <div className="space-y-3">
                {[
                  "Custom Typografie",
                  "3D Product Mockups",
                  "Brand Styleguide",
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => gaEvent({ action: `design_asset_click_${item}`, category: "project_3", label: item })}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span className="text-red-900 font-black">•</span>
                    <span className="text-gray-500 font-light text-sm group-hover:text-gray-900 transition-colors">{item}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-2">Tools</p>
                  <p className="text-gray-500 font-light text-sm italic">Adobe Illustrator, Dimension, Photoshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function EnergyDrinkPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "IGNITION ENERGY DRINK"

  const scrollMilestones = useRef<Set<number>>(new Set())
  const pageStartTime = useRef<number>(Date.now())

  useEffect(() => {
    gaEvent({ action: "page_view_project_3", category: "project_3", label: "Ignition Energy pagina geladen" })

    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      gaEvent({ action: "time_on_page", category: "project_3", label: `${timeSpent} seconden` })
    }
    window.addEventListener("beforeunload", handleUnload)
    return () => window.removeEventListener("beforeunload", handleUnload)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.round((window.scrollY / scrollHeight) * 100)
      setScrollProgress(progress)

      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (progress >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          gaEvent({ action: `scroll_depth_${milestone}`, category: "project_3", label: `${milestone}% gescrolld` })
        }
      })
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <main className="min-h-screen bg-white relative">
      <DesignA
        title={title}
        setLightboxImage={setLightboxImage}
        scrollProgress={scrollProgress}
      />

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => {
            setLightboxImage(null)
            gaEvent({ action: "image_lightbox_close", category: "project_3", label: "lightbox gesloten" })
          }}
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
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </main>
  )
}