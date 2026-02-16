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
    <main className="min-h-screen bg-white text-gray-900 pb-24 relative">
      
      {/* SUCCESS OF INFO MELDING */}
      {status && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border border-white/10">
            <CheckCircle2 size={18} className="text-red-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{status}</span>
          </div>
        </div>
      )}

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24">
        
        {/* TERUG NAVIGATIE */}
        <Link href="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-16 group text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Terug naar de HOME
        </Link>

        {/* HEADER */}
        <header className="mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-red-900 uppercase leading-none">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>
          <div className="w-24 h-1 bg-red-900 mt-8"></div>
        </header>

        {/* INTRO TEKST */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed max-w-3xl italic">
            Please read these Terms of Agreement carefully before using our website or services. By accessing or using our site, you agree to comply with these terms and conditions.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-red-900 flex items-center gap-3">
              <FileText size={16} /> Acceptance of Terms
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              By using our website, you agree to be bound by these Terms of Agreement, as well as any additional terms, policies, or guidelines posted on the site.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              User Responsibilities
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Users must provide accurate information, respect the rights of others, and refrain from using the site for unlawful purposes. Any violation may result in suspension or termination.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Account Registration
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Some features may require account registration. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Intellectual Property
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              All content on this site is protected by intellectual property laws. Users may not copy, distribute, or modify content without proper authorization.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">
              Limitation of Liability
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed italic">
              We are not liable for any damages arising from the use of this website, including direct, indirect, incidental, or consequential losses.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">
              Modifications
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* ACTIE KNOPPEN */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => handleAction("Terms Accepted", true)}
            className="px-10 py-5 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-red-900/10"
          >
            Accept Terms
          </button>
          <button 
            onClick={() => handleAction("Terms Declined", false)}
            className="px-10 py-5 bg-white border border-gray-200 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:text-black hover:border-black transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </main>
  )
}