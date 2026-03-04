"use client"

import { useState, useEffect } from "react"
import { FileText, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TermsOfAgreement() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const fullTitle = "TERMS OF AGREEMENT"
  const router = useRouter()

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleAction = (message, shouldRedirect) => {
    setStatus(message)
    if (shouldRedirect) {
      setTimeout(() => {
        router.push("/home")
      }, 2000)
    } else {
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-12 md:pb-24 relative overflow-x-hidden">
      
      {/* SUCCESS OF INFO MELDING */}
      {status && (
        <div className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-4 duration-300 w-[90%] md:w-auto">
          <div className="bg-black text-white px-6 md:px-8 py-4 rounded-2xl flex items-center justify-center md:justify-start gap-4 shadow-2xl border border-white/10">
            <CheckCircle2 size={18} className="text-red-600 shrink-0" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{status}</span>
          </div>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-12 md:py-24">
        
        {/* TERUG NAVIGATIE */}
        <Link href="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-12 md:mb-16 group text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Terug naar de HOME
        </Link>

        {/* HEADER */}
        <header className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-red-900 uppercase leading-tight">
            {title}<span className="ml-1 opacity-40 animate-pulse"></span>
          </h1>
          <div className="w-20 md:w-24 h-1 bg-red-900 mt-6 md:mt-8"></div>
        </header>

        {/* INTRO TEKST */}
        <div className="mb-10 md:mb-12">
          <p className="text-gray-600 leading-relaxed max-w-3xl italic text-sm md:text-base">
            Please read these Terms of Agreement carefully before using our website or services. By accessing or using our site, you agree to comply with these terms and conditions.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          
          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-red-900 flex items-center gap-3">
              <FileText size={16} /> Acceptance of Terms
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              By using our website, you agree to be bound by these Terms of Agreement, as well as any additional terms, policies, or guidelines posted on the site.
            </p>
          </div>

          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              User Responsibilities
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              Users must provide accurate information, respect the rights of others, and refrain from using the site for unlawful purposes. Any violation may result in suspension or termination.
            </p>
          </div>

          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Account Registration
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              Some features may require account registration. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account.
            </p>
          </div>

          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Intellectual Property
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              All content on this site is protected by intellectual property laws. Users may not copy, distribute, or modify content without proper authorization.
            </p>
          </div>

          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">
              Limitation of Liability
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed italic">
              We are not liable for any damages arising from the use of this website, including direct, indirect, incidental, or consequential losses.
            </p>
          </div>

          <div className="group p-6 md:p-8 bg-gray-50 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">
              Modifications
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* ACTIE KNOPPEN */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <button 
            onClick={() => handleAction("Terms Accepted", true)}
            className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-900 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-xl md:rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-red-900/10"
          >
            Accept Terms
          </button>
          <button 
            onClick={() => handleAction("Terms Declined", false)}
            className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-white border border-gray-200 text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-xl md:rounded-2xl hover:text-black hover:border-black transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </main>
  )
}