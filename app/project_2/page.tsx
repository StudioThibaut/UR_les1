"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import {
  ArrowLeft, X, Palette, Printer, Users,
  Save, Settings, ChevronLeft, Plus, Trash2
} from "lucide-react"
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

const DesignA = ({ data, setLightboxImage, scrollProgress }: any) => {
  const [activeHighlight, setActiveHighlight] = useState(0)

  const highlights = [
    { label: "Identiteit op het veld.", sub: "Het vertalen van clubtrots naar een technisch en visueel sterk ontwerp voor WeGi.", img: data.images[0] || "" },
    { label: "Beweging in typografie en lijn.", sub: "Een grafische vormentaal die dynamiek suggereert — overtuigend op afstand én van dichtbij.", img: data.images[1] || data.images[0] || "" },
    { label: "Sponsors zonder reclamebord.", sub: "Logo's organisch geïntegreerd — partners zichtbaar zonder het ontwerp te domineren.", img: data.images[2] || data.images[0] || "" },
    { label: "Technisch haalbaar. Printklaar.", sub: "Geoptimaliseerd voor zeefdruk op sportmateriaal via het Pantone Matching System.", img: data.images[3] || data.images[0] || "" },
    { label: "Breed gedragen binnen de club.", sub: "Ontwikkeld in nauwe samenspraak met de clubleiding via meerdere revisierondes.", img: data.images[4] || data.images[0] || "" },
  ]

  const bentoItems = [
    { tag: "Concept", text: "Grafische vormentaal die beweging suggereert.", img: data.images[0] || "" },
    { tag: "Typografie", text: "Lettertypes als drager van clubidentiteit.", img: data.images[1] || data.images[0] || "" },
    { tag: "Sponsors", text: "Organische integratie van partnerlogo's.", img: data.images[2] || data.images[0] || "" },
    { tag: "Print", text: "Zeefdruk op technisch sportmateriaal.", img: data.images[3] || data.images[0] || "" },
    { tag: "Kleur", text: "Pantone Matching System voor consistentie.", img: data.images[4] || data.images[0] || "" },
    { tag: "Resultaat", text: "Een shirt dat clubtrots uitstraalt.", img: data.images[5] || data.images[0] || "" },
  ]

  const sections = [
    { icon: <Palette size={20} />, tag: "Concept", title: data.labels.label1, body: data.description },
    { icon: <Printer size={20} />, tag: "Techniek", title: data.labels.label2, body: data.techText },
    { icon: <Users size={20} />, tag: "Proces", title: data.labels.label3, body: data.processText },
  ]

  return (
    <div className="animate-fadeIn bg-white text-gray-900">
      <div className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

      {/* ── 1. HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 relative">
        <Link
          href="/portfolio"
          onClick={() => gaEvent({ action: "cta_terug_portfolio", category: "project_2", label: "/portfolio" })}
          className="absolute top-8 left-6 md:left-12 inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          {data.client} · {data.expertise}
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8 max-w-6xl">
          {data.displayTitle}<span className="opacity-40 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl leading-relaxed mb-12">
          "{data.subtitle}"
        </p>

        <a
          href="#highlights"
          onClick={() => gaEvent({ action: "cta_ontdek_project", category: "project_2", label: "scroll naar highlights" })}
          className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-red-900 border border-red-900/30 px-8 py-4 rounded-full hover:bg-red-900 hover:text-white transition-all duration-300"
        >
          Ontdek het project ↓
        </a>

        {data.images[0] && (
          <div
            className="relative w-full max-w-5xl mx-auto mt-20 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 cursor-zoom-in group"
            onClick={() => {
              setLightboxImage(data.images[0])
              gaEvent({ action: "image_lightbox_open", category: "project_2", label: "hero afbeelding" })
            }}
          >
            <Image src={data.images[0]} alt={data.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            <p className="absolute bottom-5 left-0 right-0 text-center text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">
              {data.title} — {data.status}
            </p>
          </div>
        )}
      </section>

      {/* ── 2. HIGHLIGHTS CAROUSEL ── */}
      <section id="highlights" className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Overzicht</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">De highlights op een rij.</h2>
          <p className="text-center text-gray-400 font-light mb-14 text-sm max-w-xl mx-auto">Vijf kernmomenten uit het project — van concept tot realisatie.</p>

          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveHighlight(i)
                  gaEvent({ action: `highlight_click_${i + 1}`, category: "project_2", label: `highlight ${i + 1}: ${h.label}` })
                }}
                className={`w-9 h-9 rounded-full text-xs font-black border-2 transition-all duration-200 ${activeHighlight === i ? 'bg-red-900 border-red-900 text-white scale-110' : 'border-gray-200 text-gray-400 hover:border-red-900 hover:text-red-900'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 grid grid-cols-1 md:grid-cols-2 min-h-100">
            <div className="relative aspect-video md:aspect-auto md:min-h-80">
              {highlights[activeHighlight].img
                ? <Image src={highlights[activeHighlight].img} alt="Highlight" fill className="object-cover" />
                : <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest">Geen afbeelding</div>
              }
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center gap-6">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-900/50">
                {String(activeHighlight + 1).padStart(2, '0')} / {String(highlights.length).padStart(2, '0')}
              </span>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900 leading-tight">{highlights[activeHighlight].label}</p>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base italic">{highlights[activeHighlight].sub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TEKST-SECTIES ── */}
      <section className="py-28 md:py-40 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3">Achtergrond</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-20 tracking-tight uppercase">Het verhaal achter het ontwerp.</h2>

          <div className="space-y-0">
            {sections.map((s, i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `tekstsectie_click_${s.tag}`, category: "project_2", label: s.title })}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-200 py-14 cursor-pointer group"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-red-900 mb-2">
                    {s.icon}
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">{s.tag}</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 group-hover:text-red-900 transition-colors">{s.title}</h3>
                </div>
                <div
                  className="md:col-span-8 space-y-5 text-gray-600 font-light leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: s.body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. KERNWAARDEN ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Kernwaarden</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">Waarom dit project.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.coreValues.map((v: any, i: number) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `kernwaarde_click_${v.label}_vs_${v.vs}`, category: "project_2", label: `${v.label} vs ${v.vs}` })}
                className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 space-y-4 hover:border-red-900/20 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-xl uppercase tracking-tight text-gray-900">{v.label}</span>
                  <span className="text-[10px] font-black text-red-900/40 tracking-widest">VS</span>
                  <span className="font-black text-xl uppercase tracking-tight text-gray-400">{v.vs}</span>
                </div>
                <div className="w-full h-px bg-linear-to-r from-red-900/20 via-gray-200 to-transparent" />
                <p className="text-gray-400 font-light text-xs italic">Een bewuste keuze tussen {v.label.toLowerCase()} en {v.vs.toLowerCase()} als ontwerpparameter.</p>
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
            <p className="text-gray-400 font-light max-w-xl mx-auto text-sm italic">Een selectie van het beeldmateriaal — van schetsontwerp tot gerealiseerd product.</p>
          </div>

          {data.images.length === 0 && (
            <div className="aspect-video rounded-3xl bg-gray-100 flex items-center justify-center text-gray-300 text-xs uppercase tracking-widest">Geen afbeeldingen toegevoegd</div>
          )}
          {data.images.length === 1 && (
            <div
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl cursor-zoom-in group"
              onClick={() => {
                setLightboxImage(data.images[0])
                gaEvent({ action: "image_lightbox_open", category: "project_2", label: "galerij enkel beeld" })
              }}
            >
              <Image src={data.images[0]} alt="Galerij" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          )}
          {data.images.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              {data.images.map((img: string, i: number) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                  onClick={() => {
                    setLightboxImage(img)
                    gaEvent({ action: "image_lightbox_open", category: "project_2", label: `galerij beeld ${i + 1}` })
                  }}
                >
                  <Image src={img} alt="Galerij" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
              ))}
            </div>
          )}
          {data.images.length >= 3 && (
            <>
              <div
                className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl cursor-zoom-in group mb-4"
                onClick={() => {
                  setLightboxImage(data.images[0])
                  gaEvent({ action: "image_lightbox_open", category: "project_2", label: "galerij hoofdbeeld" })
                }}
              >
                <Image src={data.images[0]} alt="Galerij hoofdbeeld" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
              <div className={`grid gap-4 ${data.images.length - 1 <= 3 ? `grid-cols-${data.images.length - 1}` : 'grid-cols-3'}`}>
                {data.images.slice(1).map((img: string, i: number) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                    onClick={() => {
                      setLightboxImage(img)
                      gaEvent({ action: "image_lightbox_open", category: "project_2", label: `galerij beeld ${i + 2}` })
                    }}
                  >
                    <Image src={img} alt="Galerij" fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── 7. PROJECTINFO ── */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-3 text-center">Specificaties</p>
          <h2 className="text-center text-3xl md:text-4xl font-black text-gray-900 mb-16 tracking-tight uppercase">Projectinformatie.</h2>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-8">
              {[
                { label: "Opdrachtgever", value: data.client },
                { label: "Expertise", value: data.expertise },
                { label: "Status", value: data.status },
              ].map((item, i) => (
                <div key={i} className={i > 0 ? "border-t border-gray-200 pt-8" : ""}>
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-1">{item.label}</p>
                  <p className="font-black text-xl uppercase tracking-tight text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="md:border-l border-gray-200 md:pl-10 space-y-4">
              <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-4">Technische Specs</p>
              <div
                className="text-gray-500 font-light text-sm leading-relaxed space-y-2 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: data.techSpecs.replace(/•/g, '<span class="text-red-900 font-black">•</span>') }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ==========================================
   MAIN COMPONENT
   ========================================== */
export default function StageTshirtPage() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [displayTitle, setDisplayTitle] = useState("")

  const scrollMilestones = useRef<Set<number>>(new Set())
  const pageStartTime = useRef<number>(Date.now())

  const [projectData, setProjectData] = useState({
    title: "STAGE T-SHIRT WEGI",
    subtitle: "Identiteit op het veld. — Het vertalen van clubtrots naar een technisch en visueel sterk ontwerp.",
    client: "Heylen Vastgoed - WeGi",
    expertise: "Graphic Design / Print",
    status: "Gerealiseerd (Productie)",
    labels: { label1: "Visuele Identiteit", label2: "Technische Realisatie", label3: "Proces & Feedback" },
    description: "Voor een sportclub als **WeGi** is het stage-shirt meer dan kledij; het is een symbool van samenhorigheid. De uitdaging lag in het creëren van een fris, modern ontwerp dat de dynamiek van volleybal uitstraalt, terwijl de strikte visuele richtlijnen van de club gerespecteerd moesten worden.\n\nIk heb gekozen voor een grafische vormentaal die beweging suggereert. Door te spelen met typografie en abstracte lijnen ontstond een ontwerp dat zowel op afstand als van dichtbij overtuigt.",
    techText: "Een cruciaal aspect van textielontwerp is de **technische haalbaarheid**. In dit project moest ik rekening houden met de beperkingen en mogelijkheden van zeefdruk op sportmateriaal.\n\nDe sponsorvisibiliteit was een tweede technisch luik. Door de logo's organisch te integreren, kregen partners een prominente plek zonder dat het shirt een 'reclamebord' werd.",
    processText: "Het ontwerpproces verliep in nauwe samenspraak met de clubleiding. Door middel van verschillende revisierondes werden de verhoudingen en composities gefinetuned. Deze directe feedbacklus zorgde voor een resultaat dat breed gedragen werd binnen de club.",
    techSpecs: "• Vector-based (Adobe Illustrator)\n• Pantone Matching System (PMS)\n• Geoptimaliseerd voor zeefdruk",
    images: ["/IMG/T-shirt_Stage.jpg"],
    coreValues: [
      { label: "Dynamiek", vs: "Structuur" },
      { label: "Clubtrots", vs: "Moderniteit" },
      { label: "Sponsors", vs: "Design" },
      { label: "Printbaar", vs: "Detail" }
    ]
  })

  useEffect(() => {
    gaEvent({ action: "page_view_project_2", category: "project_2", label: "Stage T-shirt WeGi pagina geladen" })

    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      gaEvent({ action: "time_on_page", category: "project_2", label: `${timeSpent} seconden` })
    }
    window.addEventListener("beforeunload", handleUnload)
    return () => window.removeEventListener("beforeunload", handleUnload)
  }, [])

  // Type-effect op de titel
  useEffect(() => {
    setDisplayTitle("")
    let index = 0
    const interval = setInterval(() => {
      setDisplayTitle(projectData.title.slice(0, index + 1))
      index++
      if (index === projectData.title.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [projectData.title])

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
      setScrollProgress(progress)

      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (progress >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          gaEvent({ action: `scroll_depth_${milestone}`, category: "project_2", label: `${milestone}% gescrolld` })
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white relative flex overflow-hidden">

      {/* ── CASE EDITOR DRAWER ── */}
      <div className={`fixed inset-y-0 left-0 z-40 w-full md:w-125 bg-white border-r border-gray-200 shadow-2xl transition-transform duration-500 transform ${isEditMode ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col p-8 overflow-y-auto space-y-10 pb-32">
          <div className="flex items-center justify-between border-b pb-6">
            <h2 className="text-2xl font-black uppercase text-red-900 italic tracking-tighter">Case Editor</h2>
            <button onClick={() => setIsEditMode(false)} className="p-2 hover:bg-gray-50 rounded-full text-red-900"><X size={24} /></button>
          </div>

          <section className="space-y-4">
            <label className="text-[11px] font-black uppercase text-gray-400">Header Informatie</label>
            <input type="text" value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl font-bold uppercase text-sm border-2 border-transparent focus:border-red-900/20 outline-none" placeholder="Titel" />
            <textarea value={projectData.subtitle} onChange={(e) => setProjectData({ ...projectData, subtitle: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl italic text-sm outline-none" rows={2} placeholder="Ondertitel quote" />
            <input type="text" value={projectData.client} onChange={(e) => setProjectData({ ...projectData, client: e.target.value })} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Klant" />
            <input type="text" value={projectData.expertise} onChange={(e) => setProjectData({ ...projectData, expertise: e.target.value })} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Expertise" />
            <input type="text" value={projectData.status} onChange={(e) => setProjectData({ ...projectData, status: e.target.value })} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Status" />
          </section>

          <section className="space-y-6">
            <label className="text-[11px] font-black uppercase text-red-900">Inhoud Secties</label>
            {[1, 2, 3].map((num) => (
              <div key={num} className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <input
                  type="text"
                  value={(projectData.labels as any)[`label${num}`]}
                  onChange={(e) => setProjectData({ ...projectData, labels: { ...projectData.labels, [`label${num}`]: e.target.value } })}
                  className="bg-transparent font-black uppercase text-red-900 text-xs outline-none w-full border-b border-red-900/20 pb-1"
                  placeholder={`Label ${num}`}
                />
                <textarea
                  rows={6}
                  value={(projectData as any)[num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']}
                  onChange={(e) => setProjectData({ ...projectData, [num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']: e.target.value })}
                  className="w-full bg-white p-4 rounded-xl text-xs leading-relaxed outline-none shadow-sm"
                />
              </div>
            ))}
          </section>

          <section className="space-y-3">
            <label className="text-[11px] font-black uppercase text-gray-400">Technische Specificaties</label>
            <textarea value={projectData.techSpecs} onChange={(e) => setProjectData({ ...projectData, techSpecs: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-xs outline-none" rows={4} />
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-black uppercase text-red-900">Kernwaarden</label>
            {projectData.coreValues.map((v, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input type="text" value={v.label} onChange={(e) => {
                  const updated = [...projectData.coreValues]; updated[idx] = { ...updated[idx], label: e.target.value }
                  setProjectData({ ...projectData, coreValues: updated })
                }} className="flex-1 bg-gray-50 px-3 py-2 rounded-lg text-xs outline-none" placeholder="Label" />
                <span className="text-[10px] text-gray-400 font-black">VS</span>
                <input type="text" value={v.vs} onChange={(e) => {
                  const updated = [...projectData.coreValues]; updated[idx] = { ...updated[idx], vs: e.target.value }
                  setProjectData({ ...projectData, coreValues: updated })
                }} className="flex-1 bg-gray-50 px-3 py-2 rounded-lg text-xs outline-none" placeholder="VS" />
                <button onClick={() => setProjectData({ ...projectData, coreValues: projectData.coreValues.filter((_, i) => i !== idx) })} className="p-1 text-gray-300 hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
              </div>
            ))}
            <button onClick={() => setProjectData({ ...projectData, coreValues: [...projectData.coreValues, { label: "", vs: "" }] })} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 hover:text-red-900 hover:border-red-900/20 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase">
              <Plus size={14} /> Kernwaarde Toevoegen
            </button>
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-black uppercase text-red-900">Media Manager</label>
            {projectData.images.map((img, idx) => (
              <div key={idx} className="flex gap-2">
                <input type="text" value={img} onChange={(e) => {
                  const newImgs = [...projectData.images]; newImgs[idx] = e.target.value
                  setProjectData({ ...projectData, images: newImgs })
                }} className="flex-1 bg-gray-50 px-4 py-2 rounded-xl text-[10px] outline-none border border-transparent focus:border-red-900/10" placeholder="Afbeelding pad (bijv. /IMG/foto.jpg)" />
                <button onClick={() => setProjectData({ ...projectData, images: projectData.images.filter((_, i) => i !== idx) })} className="p-2 text-gray-300 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
              </div>
            ))}
            <button onClick={() => setProjectData({ ...projectData, images: [...projectData.images, ""] })} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 hover:text-red-900 hover:border-red-900/20 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase">
              <Plus size={14} /> Foto Toevoegen
            </button>
          </section>

          <button
            onClick={() => {
              setIsEditMode(false)
              gaEvent({ action: "editor_save", category: "project_2", label: "wijzigingen opgeslagen" })
            }}
            className="w-full bg-red-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl"
          >
            <Save className="inline-block mr-2" size={16} /> Wijzigingen Opslaan
          </button>
        </div>
      </div>

      {/* ── VIEWPORT ── */}
      <div className={`flex-1 transition-all duration-700 ease-in-out ${isEditMode ? 'md:ml-125 opacity-30 pointer-events-none grayscale' : 'ml-0'}`}>
        <DesignA
          data={{ ...projectData, displayTitle }}
          setLightboxImage={setLightboxImage}
          scrollProgress={scrollProgress}
        />
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => {
            setLightboxImage(null)
            gaEvent({ action: "image_lightbox_close", category: "project_2", label: "lightbox gesloten" })
          }}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X size={40} /></button>
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <Image src={lightboxImage} alt="Fullscreen" fill className="object-contain" />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>
    </main>
  )
}