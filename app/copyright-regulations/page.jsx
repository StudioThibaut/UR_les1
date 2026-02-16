"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, ArrowLeft, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CopyrightRegulations() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const fullTitle = "COPYRIGHT"
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

  const handleAction = (message) => {
    setStatus(message)
    setTimeout(() => {
      router.push("/home")
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 pb-24 relative">
      
      {/* SUCCESS MELDING */}
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
            We respect intellectual property rights and expect our users to do the same. This page outlines our copyright policies, how to handle copyrighted material, and your responsibilities as a user.
          </p>
        </div>

        {/* CONTENT BLOKKEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-red-900 flex items-center gap-3">
              <ShieldCheck size={16} /> General Policy
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              All content on this website, including text, images, videos, and software, is protected by copyright laws unless otherwise stated. Unauthorized use or distribution of copyrighted material is strictly prohibited.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Fair Use & Permissions
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Certain uses of copyrighted material may fall under fair use, such as commentary, criticism, or educational purposes. For other uses, you must obtain written permission from the copyright owner.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Reporting Infringement
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              If you believe your work has been used in violation of copyright laws on this website, please contact us immediately with a detailed report. We will investigate and take appropriate action.
            </p>
          </div>

          <div className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              User Responsibilities
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Users must not upload or share content that infringes on copyright. By using this website, you agree to comply with copyright laws and respect the intellectual property of others.
            </p>
          </div>

          <div className="md:col-span-2 group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-red-900/20 transition-all duration-500">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-900">
              Licensing Information
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Some content may be available under licenses that allow reuse, modification, or distribution. Always check the license terms before using such material.
            </p>
          </div>
        </div>

        {/* ACTIE KNOPPEN */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => handleAction("Copyright Acknowledged")}
            className="px-10 py-5 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-red-900/10"
          >
            Acknowledge
          </button>
          <button 
            onClick={() => window.open('https://www.copyright.gov/', '_blank')}
            className="px-10 py-5 bg-white border border-gray-200 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:text-black hover:border-black transition-all flex items-center gap-2"
          >
            Learn More <Info size={14} />
          </button>
        </div>
      </div>
    </main>
  )
}