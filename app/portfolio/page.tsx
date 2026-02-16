"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  /* 1. TYPEWRITER EFFECT */
  const title = "PORTFOLIO"
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedTitle(title.slice(0, index + 1))
      index++
      if (index === title.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  /* 2. SCROLL PROGRESS LOGIC */
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  const projects = [
    {
      title: "FOTOGRAFIE FOMU",
      category: "Photography",
      year: "2025",
      image: "/IMG/Fotografie_Leporello.jpg",
      link: "/project_1"
    },
    {
      title: "STAGE T-SHIRT WEGI",
      category: "Graphic Design",
      year: "2025",
      image: "/IMG/T-shirt_Stage.jpg",
      link: "/project_2"
    },
    {
      title: "IGNITION ENERGY DRINK",
      category: "Branding",
      year: "2026",
      image: "/IMG/Ignition3.jpg",
      link: "/project_3"
    },
    {
      title: "TEGEN DEMENTIE",
      category: "Web Design",
      year: "2026",
      image: "/IMG/Herinnering2.jpg",
      link: "/project_4"
    }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">

        {/* TITLE SECTION */}
        <header className="mb-24">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {displayedTitle}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>

          <div className="w-24 h-1 bg-red-900 mt-6 origin-left animate-expand"></div>

          <p className="text-gray-500 mt-8 max-w-2xl text-xl leading-relaxed font-light italic">
            "Mijn werk wordt gekenmerkt door <span className="text-gray-900 font-normal not-italic">structuur, ritme en visuele impact</span> — van architectuurfotografie tot commerciële branding."
          </p>
        </header>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 opacity-0 animate-fadeIn">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block space-y-5"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 3}
                  className="
                    object-cover
                    grayscale-[30%]
                    group-hover:grayscale-0
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* TEXT SECTION */}
              <div className="flex flex-col border-l border-gray-100 pl-4 group-hover:border-red-900 transition-colors duration-500">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-red-900 uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h2 className="text-xl font-bold mt-1 tracking-tight uppercase group-hover:text-red-900 transition-colors">
                  {project.title}
                </h2>
                
                <div className="mt-2 w-0 group-hover:w-full h-[1px] bg-red-900 transition-all duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-expand {
          animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards 0.5s;
        }
      `}</style>
    </main>
  )
}