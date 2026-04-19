"use client"

import { useState, useEffect } from "react"
import { FileText, ArrowLeft, CheckCircle2, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TermsOfAgreement() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "TERMS OF AGREEMENT"
  const router = useRouter()

  useEffect(() => {
    let index = 0
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

  const handleAction = (message, shouldRedirect) => {
    setStatus(message)
    if (shouldRedirect) {
      setTimeout(() => router.push("/home"), 2000)
    } else {
      setTimeout(() => setStatus(null), 3000)
    }
  }

  const terms = [
    {
      title: "Acceptance of Terms",
      body: "By using our website, you agree to be bound by these Terms of Agreement, as well as any additional terms, policies, or guidelines posted on the site.",
      accent: true,
    },
    {
      title: "User Responsibilities",
      body: "Users must provide accurate information, respect the rights of others, and refrain from using the site for unlawful purposes. Any violation may result in suspension or termination.",
    },
    {
      title: "Account Registration",
      body: "Some features may require account registration. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account.",
    },
    {
      title: "Intellectual Property",
      body: "All content on this site is protected by intellectual property laws. Users may not copy, distribute, or modify content without proper authorization.",
    },
    {
      title: "Limitation of Liability",
      body: "We are not liable for any damages arising from the use of this website, including direct, indirect, incidental, or consequential losses.",
    },
    {
      title: "Modifications",
      body: "We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.",
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
          Thibaut Vanden Eynden · Algemene Voorwaarden
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-gray-400 max-w-xl text-lg font-light italic leading-relaxed">
          Lees deze voorwaarden zorgvuldig voor u onze website of diensten gebruikt. Door onze site te bezoeken, gaat u akkoord met deze voorwaarden.
        </p>
      </section>

      {/* ── 2. CONTENT ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Voorwaarden</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-20">
            Overzicht.
          </h2>

          <div className="space-y-0">
            {terms.map((term, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-100 py-12 group hover:bg-red-900/2 px-2 -mx-2 rounded-2xl transition-colors"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-red-900 mb-2">
                    <FileText size={16} />
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${term.accent ? 'text-red-900' : 'text-gray-900'}`}>
                    {term.title}
                  </h3>
                </div>
                <div className="md:col-span-8 text-gray-500 font-light leading-relaxed text-base md:text-lg">
                  {term.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ACTIE ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Uw keuze</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-16">
            Akkoord gaan.
          </h2>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100">
            <p className="text-gray-500 font-light leading-relaxed mb-10 text-base md:text-lg italic">
              Door op "Accepteren" te klikken bevestigt u dat u deze voorwaarden heeft gelezen en er mee akkoord gaat. U wordt teruggestuurd naar de homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleAction("Voorwaarden geaccepteerd — doorsturen...", true)}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20"
              >
                Accepteren
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => handleAction("Voorwaarden geweigerd.", false)}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-200 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-all duration-300"
              >
                Weigeren
              </button>
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