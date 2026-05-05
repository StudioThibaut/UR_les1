"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ArrowLeft, X, ZoomIn, Info, BookOpen, Camera, Layout } from "lucide-react"
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

const DesignA = ({ images, title, setLightboxImage, scrollProgress }: any) => {
  const [activeHighlight, setActiveHighlight] = useState(0)

  const highlights = [
    {
      label: "Het vastleggen van de stilte tussen muren.",
      sub: "Een onderzoek naar de essentie van de architecturale lijn in opdracht van het Fotomuseum Antwerpen.",
      img: images[0],
      aspect: "landscape"
    },
    {
      label: "Licht tegen schaduw. Beton tegen lucht.",
      sub: "Door elke vorm van kleur te elimineren wordt de kijker gedwongen te kijken naar pure textuur en ritme.",
      img: images[2],
      aspect: "portrait"
    },
    {
      label: "De 'lijn' als ruggengraat van elke compositie.",
      sub: "Of het nu een grens is tussen beton en lucht, of de verbinding tussen twee structuren.",
      img: images[4],
      aspect: "landscape"
    },
    {
      label: "Een leporello zonder begin of einde.",
      sub: "De keuze voor een harmonica-vouwboek is een bewuste keuze voor tactiliteit en narratief.",
      img: images[6],
      aspect: "portrait"
    },
    {
      label: "Expositie in de FOMU Shop, Antwerpen.",
      sub: "Gratis toegankelijk voor het publiek. Waalsekaai 47, 2000 Antwerpen.",
      img: images[8],
      aspect: "landscape"
    },
  ]

  const bentoItems = [
    { text: "De rechte lijn als architecturale grens.", img: images[0], aspect: "landscape" },
    { text: "De gebogen lijn als organische tegenhanger.", img: images[1], aspect: "portrait" },
    { text: "Licht als structureel element.", img: images[2], aspect: "portrait" },
    { text: "Schaduw die de vorm onthult.", img: images[3], aspect: "portrait" },
    { text: "Statische geometrie in beton.", img: images[4], aspect: "landscape" },
    { text: "De vouw als narratief moment.", img: images[5], aspect: "portrait" },
  ]

  // Landscape images paired, portrait solo
  const galleryRows = [
    { type: "pair-landscape", imgs: [images[0], images[4]] },
    { type: "pair-portrait", imgs: [images[1], images[3], images[5]] },
    { type: "pair-landscape", imgs: [images[6], images[8]] },
    { type: "pair-portrait", imgs: [images[7], images[9], images[2]] },
  ]

  return (
    <div className="animate-fadeIn bg-white text-gray-900">
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      {/* ── 1. HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative">
        <Link
          href="/portfolio"
          onClick={() => gaEvent({ action: "cta_terug_portfolio", category: "project_1", label: "/portfolio" })}
          className="absolute top-8 left-6 md:left-12 inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          FOMU Antwerpen · Juni 2025 · Expositie
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8 max-w-6xl">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl leading-relaxed mb-12">
          "Het vastleggen van de stilte tussen muren." — Een onderzoek naar de essentie van de architecturale lijn.
        </p>

        <a
          href="#highlights"
          onClick={() => gaEvent({ action: "cta_ontdek_project", category: "project_1", label: "scroll naar highlights" })}
          className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-red-900 border border-red-900/30 px-8 py-4 rounded-full hover:bg-red-900 hover:text-white transition-all duration-300"
        >
          Ontdek het project ↓
        </a>

        {/* Hero — leporello foto, landscape */}
        <div
          className="relative w-full max-w-5xl mx-auto mt-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group"
          onClick={() => {
            setLightboxImage("/IMG/Fotografie_Leporello.jpg")
            gaEvent({ action: "image_lightbox_open", category: "project_1", label: "hero leporello" })
          }}
        >
          <Image
            src="/IMG/Fotografie_Leporello.jpg"
            alt="Overzicht leporello"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
            Overzicht van de tactiele leporello-vouw
          </p>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white drop-shadow" size={22} />
          </div>
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
            Vijf kernmomenten uit het project — van concept tot expositie.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveHighlight(i)
                  gaEvent({ action: `highlight_click_${i + 1}`, category: "project_1", label: `highlight ${i + 1}: ${h.label}` })
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

          {/* Active card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-2 min-h-105">
            <div className={`relative w-full ${highlights[activeHighlight].aspect === 'portrait' ? 'aspect-3/4 md:aspect-auto' : 'aspect-video md:aspect-auto'}`}>
              <Image
                src={highlights[activeHighlight].img}
                alt="Highlight"
                fill
                className="object-cover grayscale"
              />
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
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">Detail</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Het project van dichtbij.
          </h2>
          <p className="text-gray-400 mb-16 font-light text-sm">
            Zes beelden uit de reeks — elk een eigen dialoog tussen lijn, licht en textuur.
          </p>

          {/* Rij 1: eerste beeld groot (landscape), twee portrets rechts */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div
              className="col-span-2 relative aspect-video rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
              onClick={() => {
                setLightboxImage(bentoItems[0].img)
                gaEvent({ action: "image_lightbox_open", category: "project_1", label: bentoItems[0].text })
              }}
            >
              <Image src={bentoItems[0].img} alt="Bento 1" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-light italic">{bentoItems[0].text}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white" size={18} />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              {[bentoItems[1], bentoItems[2]].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
                  onClick={() => {
                    setLightboxImage(item.img)
                    gaEvent({ action: "image_lightbox_open", category: "project_1", label: item.text })
                  }}
                >
                  <Image src={item.img} alt="Bento" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-light italic">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rij 2: drie items gelijk */}
          <div className="grid grid-cols-3 gap-4">
            {[bentoItems[3], bentoItems[4], bentoItems[5]].map((item, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-md group cursor-zoom-in ${item.aspect === 'landscape' ? 'aspect-video' : 'aspect-3/4'}`}
                onClick={() => {
                  setLightboxImage(item.img)
                  gaEvent({ action: "image_lightbox_open", category: "project_1", label: item.text })
                }}
              >
                <Image src={item.img} alt="Bento" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-light italic">{item.text}</p>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEKST-SECTIES ── */}
      <section className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">Achtergrond</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-20 tracking-tight uppercase">
            Het verhaal achter de beelden.
          </h2>

          <div className="space-y-0">
            {[
              {
                icon: <Info size={20} />,
                tag: "Concept",
                title: "De Architecturale Benadering",
                body: [
                  "In dit project staat de visuele taal van Hélène Binet centraal. Binet staat bekend om haar vermogen om architectuur te transformeren tot een spel van licht en schaduw, waarbij de materiële context vaak wegvalt. Geïnspireerd door haar werk, heb ik de stad Antwerpen verkend als een verzameling van abstracte geometrieën.",
                  "De focus lag niet op het documenteren van gebouwen, maar op het isoleren van de 'lijn'. Of het nu een grens is tussen beton en lucht, of de verbinding tussen twee structuren — de lijn fungeert als de ruggengraat van de compositie. Door elke vorm van kleur te elimineren, wordt de kijker gedwongen om te kijken naar de pure textuur en het ritme van de stedelijke ruimte."
                ]
              },
              {
                icon: <Layout size={20} />,
                tag: "Interface",
                title: "De Landingspagina & Presentatie",
                body: [
                  "Voor de digitale ontsluiting van dit project is een specifieke landingspagina ontworpen die fungeert als een visuele 'teaser' voor de fysieke expositie. Het doel van deze pagina is om de bezoeker onmiddellijk onder te dompelen in de verstilde sfeer van het werk.",
                  "Door gebruik te maken van grote typografie en een minimalistisch grid, weerspiegelt de interface de architecturale thema's uit de fotografie. De landingspagina combineert krachtige beelden met de praktische informatie over de samenwerking met het FOMU, waarbij de interactie tussen tekst en beeld de ritmiek van de leporello nabootst."
                ]
              },
              {
                icon: <BookOpen size={20} />,
                tag: "Fysiek object",
                title: "De Leporello als Medium",
                body: [
                  "De vertaling van digitale beelden naar een fysiek object was een essentieel onderdeel van het proces. De keuze voor een leporello (een harmonica-vouwboek) is een bewuste keuze voor tactiliteit en narratief. Een leporello heeft geen vaste begin- of eindpagina; het is een doorlopende stroom.",
                  "Tijdens het ontwerp van dit object was de sequentiële curatie de grootste uitdaging. Hoe reageert een 'lichtlijn' op de linkerpagina met een 'schaduwlijn' op de rechterpagina? Door de fysieke vouw ontstaat er een interactie tussen de beelden die versterkt wordt wanneer de leporello gedeeltelijk wordt uitgeklapt."
                ]
              },
              {
                icon: <Camera size={20} />,
                tag: "Methode",
                title: "Techniek & Proces",
                body: [
                  "Elk beeld in deze reeks is het resultaat van een nauwkeurig proces van observatie. Er is geëxperimenteerd met extreme perspectieven en harde belichting om de grafische kwaliteit van de architectuur te benadrukken. In de nabewerking is gestreefd naar een diep zwart-wit contrast, waarbij de korrel en textuur van het beton voelbaar blijven."
                ]
              },
            ].map((s, i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `tekstsectie_click_${s.tag}`, category: "project_1", label: s.title })}
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

      {/* ── 5. FEATURE GRID ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">In cijfers</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">
            Waarom dit project.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Camera size={28} />,
                title: "10 beelden",
                desc: "Zorgvuldig gecureerde reeks, opgebouwd in vijf paren die elkaar uitdagen in vorm en licht."
              },
              {
                icon: <BookOpen size={28} />,
                title: "Leporello",
                desc: "Een harmonica-vouwboek als fysiek object — geen begin, geen einde. Tactiliteit als narratief."
              },
              {
                icon: <Layout size={28} />,
                title: "Landingspagina",
                desc: "Digitale teaser die de verstilde sfeer van het werk weerspiegelt via grote typografie en minimalistisch grid."
              },
              {
                icon: <Info size={28} />,
                title: "FOMU Antwerpen",
                desc: "Expositie in de FOMU Shop, Waalsekaai 47. Gratis toegankelijk voor het publiek."
              },
            ].map((f, i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `feature_click_${f.title}`, category: "project_1", label: f.title })}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 space-y-4 hover:border-red-900/20 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="text-red-900">{f.icon}</div>
                <h4 className="font-black text-xl uppercase tracking-tight text-gray-900">{f.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BEELDENREEKS (mix landscape + portrait) ── */}
      <section className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Galerij</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">De Beeldenreeks</h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto text-sm italic">
              Een selectie van de tien beelden zoals ze in de leporello verschijnen — opgebouwd uit vijf paren die elkaar uitdagen in vorm en licht.
            </p>
          </div>

          {/* Rij 1: 2 landscape naast elkaar */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[images[0], images[4]].map((img, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                onClick={() => {
                  setLightboxImage(img)
                  gaEvent({ action: "image_lightbox_open", category: "project_1", label: `galerij landscape ${i + 1}` })
                }}
              >
                <Image src={img} alt="Landscape" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <ZoomIn className="text-white drop-shadow" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Rij 2: 3 portrait naast elkaar */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[images[1], images[3], images[5]].map((img, i) => (
              <div
                key={i}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                onClick={() => {
                  setLightboxImage(img)
                  gaEvent({ action: "image_lightbox_open", category: "project_1", label: `galerij portrait ${i + 1}` })
                }}
              >
                <Image src={img} alt="Portrait" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <ZoomIn className="text-white drop-shadow" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Rij 3: 2 landscape */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[images[6], images[8]].map((img, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                onClick={() => {
                  setLightboxImage(img)
                  gaEvent({ action: "image_lightbox_open", category: "project_1", label: `galerij landscape rij3 ${i + 1}` })
                }}
              >
                <Image src={img} alt="Landscape" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <ZoomIn className="text-white drop-shadow" size={24} />
                </div>
              </div>
            ))}
          </div>

          {/* Rij 4: 2 portrait gecentreerd */}
          <div className="grid grid-cols-4 gap-4">
            <div />
            {[images[7], images[9], images[2]].map((img, i) => (
              <div
                key={i}
                className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                onClick={() => {
                  setLightboxImage(img)
                  gaEvent({ action: "image_lightbox_open", category: "project_1", label: `galerij portrait rij4 ${i + 1}` })
                }}
              >
                <Image src={img} alt="Portrait" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <ZoomIn className="text-white drop-shadow" size={24} />
                </div>
              </div>
            ))}
            <div />
          </div>
        </div>
      </section>

      {/* ── 7. VISUELE DIALOGEN ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Spanningsvelden</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Visuele Dialogen.
          </h2>
          <p className="text-center text-gray-400 font-light mb-16 text-sm max-w-lg mx-auto">
            Elk paar beelden in de leporello is opgebouwd rond één fundamentele spanning. Vijf dialogen die de reeks dragen.
          </p>

          <div className="space-y-3 mb-16">
            {[
              ['Licht', 'Schaduw', images[2], images[3]],
              ['Statisch', 'Dynamisch', images[4], images[5]],
              ['Grens', 'Verbinding', images[6], images[7]],
              ['Recht', 'Gebogen', images[0], images[1]],
              ['Ritmisch', 'Chaotisch', images[8], images[9]],
            ].map(([a, b, imgA, imgB], i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `dialoog_click_${a}_vs_${b}`, category: "project_1", label: `${a} vs ${b}` })}
                className="grid grid-cols-3 items-center border border-gray-100 rounded-2xl px-6 md:px-10 py-5 bg-gray-50 hover:bg-red-900/5 hover:border-red-900/10 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image src={imgA as string} alt={a as string} fill className="object-cover grayscale" />
                  </div>
                  <span className="font-black text-base md:text-lg uppercase tracking-tight text-gray-900">{a}</span>
                </div>
                <span className="text-center text-[10px] font-black text-red-900/30 tracking-widest group-hover:text-red-900/60 transition-colors">VS</span>
                <div className="flex items-center gap-3 justify-end">
                  <span className="font-black text-base md:text-lg uppercase tracking-tight text-gray-400 group-hover:text-gray-600 transition-colors">{b}</span>
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image src={imgB as string} alt={b as string} fill className="object-cover grayscale" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Locatie card */}
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <p className="text-[10px] font-black tracking-widest uppercase text-red-900">Locatie Expositie</p>
              <p className="text-2xl font-black uppercase tracking-tight text-gray-900">FOMU — Fotomuseum Antwerpen</p>
              <p className="text-gray-400 text-sm font-light">Waalsekaai 47, 2000 Antwerpen</p>
              <p className="text-red-900/60 text-sm italic">Gratis toegang via de FOMU Shop</p>
            </div>
            <div className="space-y-3 md:border-l border-gray-200 md:pl-8">
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">Opdrachtgever</p>
                <p className="font-black text-gray-900 uppercase tracking-tight">FOMU Antwerpen</p>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">Periode</p>
                <p className="font-black text-gray-900 uppercase tracking-tight">Juni 2025</p>
              </div>
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-gray-400 mb-1">Status</p>
                <p className="font-black text-red-900 uppercase tracking-tight">Expositie (FOMU Shop)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProjectFotografie() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "FOTOGRAFIE FOMU"

  const scrollMilestones = useRef<Set<number>>(new Set())
  const pageStartTime = useRef<number>(Date.now())

  const images = [
    "/IMG/1.1_rechte-lijn.jpg",
    "/IMG/1.2_gebogen-lijn.jpg",
    "/IMG/2.1_lichtlijn.jpg",
    "/IMG/2.2_schaduwlijn.jpg",
    "/IMG/3.1_statische-lijn.jpg",
    "/IMG/3.2_dynamische-lijn.jpg",
    "/IMG/4.1_lijn-als-grens.jpg",
    "/IMG/4.2_lijn-als-verbinding.jpg",
    "/IMG/5.1_ritmische-lijn.jpg",
    "/IMG/5.2_onregelmatige-lijn.jpg",
  ]

  useEffect(() => {
    gaEvent({ action: "page_view_project_1", category: "project_1", label: "Fotografie FOMU pagina geladen" })

    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      gaEvent({ action: "time_on_page", category: "project_1", label: `${timeSpent} seconden` })
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
    }, 150)
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
          gaEvent({ action: `scroll_depth_${milestone}`, category: "project_1", label: `${milestone}% gescrolld` })
        }
      })
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <main className="min-h-screen bg-white relative">
      <DesignA
        images={images}
        title={title}
        setLightboxImage={setLightboxImage}
        scrollProgress={scrollProgress}
      />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => {
            setLightboxImage(null)
            gaEvent({ action: "image_lightbox_close", category: "project_1", label: "lightbox gesloten" })
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
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  )
}