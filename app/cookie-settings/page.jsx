"use client"

import { useState, useEffect } from "react"
import { Cookie, ArrowLeft, CheckCircle2, ChevronDown, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CookieSettings() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const router = useRouter()

  const [prefs, setPrefs] = useState({
    performance: false,
    functional: false,
    advertising: false,
  })

  useEffect(() => {
    let index = 0
    const fullTitle = "COOKIE SETTINGS"
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 80)
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

  const handleAction = (message) => {
    setStatus(message)
    setTimeout(() => router.push("/home"), 2000)
  }

  const togglePref = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const cookieTypes = [
    {
      key: "essential",
      title: "Essential Cookies",
      body: "These cookies are necessary for the website to function and cannot be turned off. They ensure basic functionalities such as page navigation and security.",
      always: true,
    },
    {
      key: "performance",
      title: "Performance & Analytics",
      body: "These cookies help us understand how visitors interact with our website, allowing us to improve performance and provide a better user experience.",
    },
    {
      key: "functional",
      title: "Functional Cookies",
      body: "Functional cookies enable enhanced features and personalization, such as remembering your preferences or login information.",
    },
    {
      key: "advertising",
      title: "Advertising & Targeting",
      body: "These cookies are used to deliver relevant advertisements based on your interests and browsing behavior.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans selection:bg-red-900 selection:text-white">

      {/* SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* STATUS MELDING */}
      {status && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
          <div className="bg-gray-900 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl">
            <CheckCircle2 size={16} className="text-green-400 shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-widest">{status}</span>
          </div>
        </div>
      )}

      {/* ── 1. HERO ── */}
      <section className="min-h-[50vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b border-gray-100 relative">
        <div className="absolute top-12 right-6 md:right-16 text-right space-y-1">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Juridisch</p>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Portfolio</p>
        </div>

        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-10 group w-fit"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Terug naar Home</span>
        </Link>

        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          Thibaut Vanden Eynden · Cookie Instellingen
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-gray-400 max-w-xl text-lg font-light italic leading-relaxed">
          {isCustomizing
            ? "Selecteer de categorieën die u wilt toestaan. Essentiële cookies staan altijd aan voor de werking van de site."
            : "We gebruiken cookies om uw ervaring te verbeteren, siteverkeer te analyseren en gepersonaliseerde inhoud aan te bieden."}
        </p>
      </section>

      {/* ── 2. COOKIE TYPES ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Categorieën</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-20">
            Overzicht.
          </h2>

          <div className="space-y-0">
            {cookieTypes.map((cookie, i) => {
              const isActive = cookie.always || prefs[cookie.key]
              return (
                <div
                  key={cookie.key}
                  onClick={() => isCustomizing && !cookie.always && togglePref(cookie.key)}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-100 py-12 rounded-2xl px-2 -mx-2 transition-all ${
                    isCustomizing && !cookie.always
                      ? "cursor-pointer hover:bg-red-900/5"
                      : "hover:bg-gray-50/50"
                  } ${isActive && !cookie.always ? "bg-red-900/5" : ""}`}
                >
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 text-red-900 mb-2">
                      <Cookie size={16} />
                      <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${
                        cookie.always ? 'text-red-900' : isActive && isCustomizing ? 'text-red-900' : 'text-gray-900'
                      }`}>
                        {cookie.title}
                      </h3>
                      {isCustomizing && !cookie.always && (
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ml-3 ${
                          isActive ? 'bg-red-900 border-red-900' : 'border-gray-200'
                        }`}>
                          {isActive && <Check size={12} className="text-white" />}
                        </div>
                      )}
                      {cookie.always && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-full ml-3 shrink-0">
                          Altijd aan
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-8 text-gray-500 font-light leading-relaxed text-base md:text-lg">
                    {cookie.body}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. ACTIE ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Uw keuze</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-16">
            {isCustomizing ? "Sla uw keuze op." : "Kies uw voorkeur."}
          </h2>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100">
            <p className="text-gray-500 font-light leading-relaxed mb-10 text-base md:text-lg italic">
              {isCustomizing
                ? "U heeft uw voorkeuren aangepast. Klik op 'Opslaan' om uw keuze te bevestigen en terug te keren naar de homepage."
                : "Kies 'Alles accepteren' voor de volledige ervaring, of weiger niet-essentiële cookies. U kunt ook uw voorkeuren zelf instellen."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {!isCustomizing ? (
                <>
                  <button
                    onClick={() => handleAction("Alle cookies geaccepteerd")}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20"
                  >
                    Alles accepteren
                  </button>
                  <button
                    onClick={() => handleAction("Niet-essentieel geweigerd")}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-200 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-all duration-300"
                  >
                    Weigeren
                  </button>
                  <button
                    onClick={() => setIsCustomizing(true)}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-200 text-gray-400 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-gray-400 hover:text-gray-600 transition-all duration-300"
                  >
                    Aanpassen
                    <ChevronDown size={14} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAction("Voorkeuren opgeslagen")}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20"
                  >
                    Opslaan
                  </button>
                  <button
                    onClick={() => setIsCustomizing(false)}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-200 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-all duration-300"
                  >
                    Terug
                  </button>
                </>
              )}
            </div>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #991b1b; border-radius: 10px; }
      `}</style>
    </main>
  )
}