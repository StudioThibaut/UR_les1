"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ChevronUp } from "lucide-react"

export default function PortfolioPage() {
  const title = "PORTFOLIO"
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [showTopBtn, setShowTopBtn] = useState(false)

  /* TYPEWRITER EFFECT */
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedTitle(title.slice(0, index + 1))
      index++
      if (index === title.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  /* SCROLL LOGIC */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / scrollHeight) * 100
      setScrollProgress(progress > 0 ? progress : 0)
      setShowTopBtn(currentScrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    { title: "FOTOGRAFIE FOMU", category: "PHOTOGRAPHY", year: "2025", image: "/IMG/Fotografie_Leporello.jpg", link: "/project_1" },
    { title: "STAGE T-SHIRT WEGI", category: "GRAPHIC DESIGN", year: "2025", image: "/IMG/T-shirt_Stage.jpg", link: "/project_2" },
    { title: "IGNITION ENERGY DRINK", category: "BRANDING", year: "2026", image: "/IMG/Ignition3.jpg", link: "/project_3" },
  ]

  const categories = ["ALL", "PHOTOGRAPHY", "GRAPHIC DESIGN", "BRANDING"]
  
  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const getCount = (cat: string) => cat === "ALL" ? projects.length : projects.filter(p => p.category === cat).length

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-red-900 z-100 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(153,27,27,0.3)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-350 mx-auto px-6 lg:px-12 py-12 md:py-24">

        {/* TITLE SECTION */}
        <header className="mb-16 md:mb-24">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-red-900 uppercase leading-none">
              {displayedTitle}
            </h1>
          </div>

          <div className="w-20 md:w-40 h-2 bg-red-900 mt-6 origin-left animate-expand shadow-sm"></div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-10">
            <p className="text-gray-500 max-w-xl text-lg md:text-2xl leading-tight font-light italic">
              "Mijn werk wordt gekenmerkt door <span className="text-gray-900 font-bold not-italic uppercase tracking-tight">structuur, ritme en visuele impact</span>."
            </p>
            
            <nav className="flex flex-wrap gap-6 md:gap-8 border-b border-gray-100 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`group relative text-[10px] font-black tracking-widest transition-all pb-2 ${
                    activeFilter === cat ? "text-red-900" : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  <span className="ml-1 text-[8px] opacity-50 group-hover:opacity-100">({getCount(cat)})</span>
                  {activeFilter === cat && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-900 animate-expand" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.title}
              href={project.link}
              className="group block space-y-6 animate-fadeIn"
              style={{ animationDelay: `${(index + 1) * 0.15}s`, animationFillMode: 'both' }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-4/5 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-red-900/10 group-hover:-translate-y-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  priority={index < 3}
                  className="
                    object-cover
                    grayscale
                    group-hover:grayscale-0
                    transition
                    duration-1200
                    ease-[cubic-bezier(0.23,1,0.32,1)]
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 group-hover:ring-red-900/20 transition-all duration-700 rounded-2xl" />
              </div>

              <div className="flex flex-col border-l-2 border-gray-100 pl-6 group-hover:border-red-900 transition-colors duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black tracking-[0.25em] text-red-900 uppercase">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-gray-500 transition-colors">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-red-900 transition-colors leading-none">
                    {project.title}
                  </h2>
                  <div className="bg-gray-50 p-2 rounded-full group-hover:bg-red-50 transition-colors">
                    <ArrowUpRight size={18} className="text-red-900 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                
                <div className="mt-5 w-0 group-hover:w-full h-1px bg-red-900/30 transition-all duration-700 ease-out"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 p-5 bg-white border border-gray-100 rounded-full shadow-2xl text-red-900 transition-all duration-500 z-50 hover:bg-red-900 hover:text-white group ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}`}
      >
        <ChevronUp size={20} className="group-hover:animate-bounce" />
      </button>

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        
        .animate-expand { 
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
          transform-origin: left; 
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards; 
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #991b1b; border-radius: 10px; }
      `}</style>
    </main>
  )
}