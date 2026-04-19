"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, ArrowLeft, CheckCircle2, Info, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CopyrightRegulations() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const fullTitle = "COPYRIGHT"
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

  const handleAction = (message) => {
    setStatus(message)
    setTimeout(() => router.push("/home"), 2000)
  }

  const regulations = [
    {
      icon: <ShieldCheck size={16} />,
      title: "General Policy",
      body: "All content on this website, including text, images, videos, and software, is protected by copyright laws unless otherwise stated. Unauthorized use or distribution of copyrighted material is strictly prohibited.",
      accent: true,
    },
    {
      title: "Fair Use & Permissions",
      body: "Certain uses of copyrighted material may fall under fair use, such as commentary, criticism, or educational purposes. For other uses, you must obtain written permission from the copyright owner.",
    },
    {
      title: "Reporting Infringement",
      body: "If you believe your work has been used in violation of copyright laws on this website, please contact us immediately with a detailed report. We will investigate and take appropriate action.",
    },
    {
      title: "User Responsibilities",
      body: "Users must not upload or share content that infringes on copyright. By using this website, you agree to comply with copyright laws and respect the intellectual property of others.",
    },
    {
      title: "Licensing Information",
      body: "Some content may be available under licenses that allow reuse, modification, or distribution. Always check the license terms before using such material.",
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
          Thibaut Vanden Eynden · Auteursrecht
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8">
          {title}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left animate-expand" />

        <p className="text-gray-400 max-w-xl text-lg font-light italic leading-relaxed">
          We respecteren intellectuele eigendomsrechten en verwachten hetzelfde van onze gebruikers. Deze pagina beschrijft ons auteursrechtbeleid.
        </p>
      </section>

      {/* ── 2. CONTENT ── */}
      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Regelgeving</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-20">
            Overzicht.
          </h2>

          <div className="space-y-0">
            {regulations.map((reg, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-100 py-12 group hover:bg-red-900/2 px-2 -mx-2 rounded-2xl transition-colors"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 text-red-900 mb-2">
                    {reg.icon || <ShieldCheck size={16} />}
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${reg.accent ? 'text-red-900' : 'text-gray-900'}`}>
                    {reg.title}
                  </h3>
                </div>
                <div className="md:col-span-8 text-gray-500 font-light leading-relaxed text-base md:text-lg">
                  {reg.body}
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
            Bevestigen.
          </h2>

          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100">
            <p className="text-gray-500 font-light leading-relaxed mb-10 text-base md:text-lg italic">
              Door op "Bevestigen" te klikken erkent u dat u dit auteursrechtbeleid heeft gelezen en begrepen. U wordt teruggestuurd naar de homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleAction("Auteursrecht bevestigd")}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20"
              >
                Bevestigen
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={() => window.open('https://www.copyright.gov/', '_blank')}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-200 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-red-900 hover:text-red-900 transition-all duration-300"
              >
                Meer informatie
                <Info size={14} />
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