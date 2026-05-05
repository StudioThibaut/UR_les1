"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Lightbulb, Terminal, Layers, Monitor, Cpu } from "lucide-react"
import { useRouter } from "next/navigation"

const gaEvent = ({ action, category, label }: { action: string; category: string; label: string }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    })
    console.log(`[GA] ${action} → ${label}`)
  }
}

export default function AboutMePage() {
  const [title, setTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "OVER MIJ"
  const router = useRouter()

  const scrollMilestones = useRef<Set<number>>(new Set())
  const pageStartTime = useRef<number>(Date.now())
  // Track welke secties gezien zijn
  const sectionsViewed = useRef<Set<string>>(new Set())

  useEffect(() => {
    gaEvent({ action: "page_view_over_mij", category: "over_mij", label: "over mij pagina geladen" })

    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      gaEvent({ action: "time_on_page", category: "over_mij", label: `${timeSpent} seconden` })
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
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.round((window.scrollY / height) * 100)
      setScrollProgress(progress)

      // Scroll diepte mijlpalen
      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (progress >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          gaEvent({
            action: `scroll_depth_${milestone}`,
            category: "over_mij",
            label: `${milestone}% gescrolld`,
          })
        }
      })

      // Track welke secties zichtbaar zijn
      const sections = [
        { id: "bio", threshold: 15 },
        { id: "disciplines", threshold: 35 },
        { id: "tools", threshold: 55 },
        { id: "tijdlijn", threshold: 75 },
      ]
      sections.forEach(({ id, threshold }) => {
        if (progress >= threshold && !sectionsViewed.current.has(id)) {
          sectionsViewed.current.add(id)
          gaEvent({
            action: `section_viewed_${id}`,
            category: "over_mij",
            label: `sectie: ${id}`,
          })
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCTAClick = (label: string, href: string) => {
    const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
    gaEvent({
      action: `cta_click_${label}`,
      category: "over_mij",
      label: `${href} na ${timeSpent}s`,
    })
    router.push(href)
  }

  const handleFotoHover = () => {
    if (!sectionsViewed.current.has("foto_hover")) {
      sectionsViewed.current.add("foto_hover")
      gaEvent({
        action: "foto_hover",
        category: "over_mij",
        label: "profielfoto bekeken",
      })
    }
  }

  const disciplines = [
    "Visuele Identiteit", "Digitale Producten", "Motion Design",
    "Brand Strategy", "Web Architectuur", "Creative Direction", "Fotografie"
  ]

  const toolCategories = [
    {
      name: "Graphic & Motion",
      tools: ["Illustrator", "Photoshop", "InDesign", "After Effects", "Premiere Pro"],
      icon: <Layers size={20} className="text-red-900" />
    },
    {
      name: "Digital & Code",
      tools: ["Figma", "Next.js", "Tailwind CSS", "TypeScript", "VS Code"],
      icon: <Monitor size={20} className="text-red-900" />
    },
    {
      name: "Studio & Productie",
      tools: ["Capture One", "Lightroom", "3D Mockups", "Packaging Design"],
      icon: <Cpu size={20} className="text-red-900" />
    }
  ]

  const timeline = [
    { year: "2020", event: "Start Grafische Technieken", location: "Zenit — Turnhout", desc: "De basis gelegd voor drukwerkvoorbereiding en grafisch ontwerp." },
    { year: "2024", event: "Stage Van Genechten Biermans", location: "Turnhout", desc: "Professionele ervaring in packaging design voor internationale klanten." },
    { year: "2024", event: "Start Grafische en Digitale Media", location: "AP Hogeschool — Antwerpen", desc: "Specialisatie in digitale ervaringen en web development." },
    { year: "2025", event: "Studio Thibaut", location: "Vorselaar", desc: "Freelance merk gericht op fotografie en visuele branding." },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative font-sans overflow-x-hidden">

      {/* SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── 1. HERO ── */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b border-gray-100 relative">
        <div className="absolute top-12 right-6 md:right-16 text-right space-y-1">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Digital Creator</p>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Vorselaar, BE</p>
        </div>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          Thibaut Vanden Eynden
        </p>

        <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-10">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-12 origin-left animate-expand" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <p className="text-gray-400 max-w-xl text-lg md:text-2xl leading-relaxed font-light italic">
            "Ik geloof dat de krachtigste designs ontstaan op het snijvlak van{" "}
            <span className="text-gray-900 font-black not-italic font-oswald">analoge precisie</span>{" "}
            en{" "}
            <span className="text-gray-900 font-black not-italic font-oswald">digitale innovatie</span>."
          </p>
          {/* HERO CTA — getrackt */}
          <button
            onClick={() => handleCTAClick("Bekijk portfolio hero", "/portfolio")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20 shrink-0"
          >
            Bekijk portfolio
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* ── 2. FOTO + BIO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Foto — hover getrackt */}
          <div className="relative group" onMouseEnter={handleFotoHover}>
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
              <Image
                src="/IMG/Thibaut2.jpg"
                alt="Thibaut Vanden Eynden"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl border border-gray-100 shadow-lg">
              <p className="text-[9px] font-black tracking-[0.3em] uppercase text-red-900">Thibaut Vanden Eynden</p>
              <p className="text-[9px] font-light text-gray-400 uppercase tracking-widest mt-0.5">Grafisch ontwerper · Antwerpen</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Mijn verhaal</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-8 font-oswald">
                Van Turnhout<br />naar Antwerpen.
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed text-lg font-light">
                <p>Mijn reis begon in Turnhout, waar ik leerde dat design meer is dan alleen esthetiek — het is technisch vakmanschap.</p>
                <p>Vandaag combineer ik die <strong className="text-gray-900 font-black font-oswald">analoge basis</strong> met mijn studie aan de AP Hogeschool, waarbij ik fotografie, motion en code samenbreng tot één verhaal.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-10">
              {[
                { icon: <Lightbulb size={24} className="text-red-900" />, label: "Conceptueel", desc: "Elk project start met een heldere vraag en een gedragen antwoord." },
                { icon: <Terminal size={24} className="text-red-900" />, label: "Technisch", desc: "Van eerste pixel tot laatste regel code — elk detail is een keuze." },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => gaEvent({ action: `eigenschap_click_${item.label}`, category: "over_mij", label: item.label })}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 hover:border-red-900/20 hover:shadow-sm transition-all cursor-pointer"
                >
                  {item.icon}
                  <h4 className="font-black text-sm uppercase tracking-tight text-gray-900 font-oswald">{item.label}</h4>
                  <p className="text-gray-400 font-light text-xs leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. DISCIPLINES ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-5xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-16 font-oswald">
            Wat ik doe.
          </h2>
          <div className="flex flex-wrap gap-3">
            {disciplines.map((s, i) => (
              <span
                key={i}
                onClick={() => gaEvent({ action: `discipline_click_${s}`, category: "over_mij", label: s })}
                className="px-5 py-3 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-600 hover:border-red-900 hover:text-red-900 transition-all cursor-pointer font-oswald"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TOOLS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-20 font-oswald">
            Tools & Software.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {toolCategories.map((cat, i) => (
              <div key={i} className="py-10 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0 space-y-8">
                <div className="flex items-center gap-3">
                  {cat.icon}
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 font-oswald">{cat.name}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.tools.map((tool, j) => (
                    <li
                      key={j}
                      onClick={() => gaEvent({ action: `tool_click_${tool}`, category: "over_mij", label: `${cat.name}: ${tool}` })}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-900/30 group-hover:bg-red-900 transition-colors" />
                      <span className="text-[11px] font-light text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-wider font-inter">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TIJDLIJN ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Parcours</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-20 font-oswald">
            Tijdlijn.
          </h2>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                onClick={() => gaEvent({ action: `tijdlijn_click_${item.year}`, category: "over_mij", label: `${item.year}: ${item.event}` })}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-100 py-12 group rounded-2xl px-2 -mx-2 transition-colors cursor-pointer"
              >
                <div className="md:col-span-2">
                  <span className="text-4xl md:text-5xl font-black tabular-nums text-gray-100 group-hover:text-red-900/20 transition-colors duration-500 font-oswald">
                    {item.year}
                  </span>
                </div>

                <div className="md:col-span-10 flex gap-6 items-start">
                  <div className="mt-3 shrink-0 w-2 h-2 rounded-full bg-red-900" />
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900 leading-none group-hover:text-red-900 transition-colors duration-300 font-oswald">
                      {item.event}
                    </h4>
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-red-900/50">
                      {item.location}
                    </p>
                    <p className="text-gray-400 font-light text-sm leading-relaxed italic pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
      `}</style>
    </main>
  )
}