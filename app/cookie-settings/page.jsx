"use client"

import { useState, useEffect } from "react"
import { Cookie, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Check, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CookieSettings() {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState(null)
  const [isCustomizing, setIsCustomizing] = useState(false) // Of we in de 'aanpas-modus' zitten
  const router = useRouter()

  // De keuzes van de gebruiker (Default staan ze uit voor privacy)
  const [prefs, setPrefs] = useState({
    performance: false,
    functional: false,
    advertising: false
  })

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTitle("COOKIE SETTINGS".slice(0, index + 1))
      index++
      if (index === "COOKIE SETTINGS".length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleAction = (message) => {
    setStatus(message)
    setTimeout(() => {
      router.push("/home")
    }, 2000)
  }

  const togglePref = (key) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }))
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
        
        <Link href="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-16 group text-[10px] font-bold uppercase tracking-[0.2em]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Terug naar de HOME
        </Link>

        <header className="mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-red-900 uppercase">
            {title}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>
          <div className="w-24 h-1 bg-red-900 mt-8"></div>
        </header>

        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed max-w-3xl italic">
            {isCustomizing 
              ? "Selecteer de categorieën die je wilt toestaan. De essentiële cookies staan altijd aan voor de werking van de studio."
              : "We use cookies to enhance your experience on our website, analyze site traffic, and provide personalized content. Some cookies are essential for the site to function."}
          </p>
        </div>

        {/* GRID MET DE 4 BLOKKEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* 1. ESSENTIAL (Kan nooit uit) */}
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 opacity-80">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-red-900 flex items-center gap-3">
              <Check size={14} /> Essential Cookies
            </h2>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              These cookies are necessary for the website to function and cannot be turned off. They ensure basic functionalities such as page navigation and security.
            </p>
          </div>

          {/* 2. PERFORMANCE */}
          <div 
            onClick={() => isCustomizing && togglePref('performance')}
            className={`p-8 rounded-3xl border transition-all duration-500 ${isCustomizing ? 'cursor-pointer' : ''} 
            ${prefs.performance ? 'bg-red-50/30 border-red-900/30' : 'bg-gray-50 border-gray-100'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${prefs.performance ? 'text-red-900' : 'text-gray-400'}`}>
                Performance & Analytics
              </h2>
              {isCustomizing && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${prefs.performance ? 'bg-red-900 border-red-900' : 'border-gray-300'}`}>
                  {prefs.performance && <Check size={12} className="text-white" />}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              These cookies help us understand how visitors interact with our website, allowing us to improve performance and provide a better user experience.
            </p>
          </div>

          {/* 3. FUNCTIONAL */}
          <div 
            onClick={() => isCustomizing && togglePref('functional')}
            className={`p-8 rounded-3xl border transition-all duration-500 ${isCustomizing ? 'cursor-pointer' : ''} 
            ${prefs.functional ? 'bg-red-50/30 border-red-900/30' : 'bg-gray-50 border-gray-100'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${prefs.functional ? 'text-red-900' : 'text-gray-400'}`}>
                Functional Cookies
              </h2>
              {isCustomizing && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${prefs.functional ? 'bg-red-900 border-red-900' : 'border-gray-300'}`}>
                  {prefs.functional && <Check size={12} className="text-white" />}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Functional cookies enable enhanced features and personalization, such as remembering your preferences or login information.
            </p>
          </div>

          {/* 4. ADVERTISING */}
          <div 
            onClick={() => isCustomizing && togglePref('advertising')}
            className={`p-8 rounded-3xl border transition-all duration-500 ${isCustomizing ? 'cursor-pointer' : ''} 
            ${prefs.advertising ? 'bg-red-50/30 border-red-900/30' : 'bg-gray-50 border-gray-100'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className={`text-xs font-bold uppercase tracking-[0.2em] ${prefs.advertising ? 'text-red-900' : 'text-gray-400'}`}>
                Advertising & Targeting
              </h2>
              {isCustomizing && (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${prefs.advertising ? 'bg-red-900 border-red-900' : 'border-gray-300'}`}>
                  {prefs.advertising && <Check size={12} className="text-white" />}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              These cookies are used to deliver relevant advertisements based on your interests and browsing behavior.
            </p>
          </div>

        </div>

        {/* KNOPPEN ONDERAAN */}
        <div className="flex flex-wrap gap-4">
          {!isCustomizing ? (
            <>
              <button 
                onClick={() => handleAction("All cookies accepted")}
                className="px-10 py-5 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-red-900/10"
              >
                Accept All
              </button>
              <button 
                onClick={() => handleAction("Non-essential rejected")}
                className="px-10 py-5 bg-white border border-gray-200 text-gray-900 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:border-red-900 transition-all active:scale-95"
              >
                Reject Non-Essential
              </button>
              <button 
                onClick={() => setIsCustomizing(true)}
                className="px-10 py-5 bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:text-red-900 transition-all flex items-center gap-2"
              >
                Customize Settings <ChevronDown size={14} />
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => handleAction("Custom preferences saved")}
                className="px-10 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-red-900 transition-all active:scale-95 shadow-xl shadow-black/10"
              >
                Save Selection
              </button>
              <button 
                onClick={() => setIsCustomizing(false)}
                className="px-10 py-5 bg-white border border-gray-200 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:text-black transition-all"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  )
}