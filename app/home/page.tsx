"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HomePage() {
  const fullLastName = "VANDEN EYNDEN"
  const [lastName, setLastName] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  // 1. TYPING EFFECT LOGIC
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setLastName(fullLastName.slice(0, index + 1))
      index++
      if (index === fullLastName.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  // 3. SLIDER LOGIC
  const projects = [
    { title: "FOTOGRAFIE", image: "/IMG/Fotografie_Leporello.jpg", link: "/project_1" },
    { title: "STAGE T-SHIRT", image: "/IMG/T-shirt_Stage.jpg", link: "/project_2" },
    { title: "IGNITION", image: "/IMG/Ignition3.jpg", link: "/project_3" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  // 2. SCROLL PROGRESS LOGIC
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

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-white overflow-x-hidden font-sans">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-100 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] w-full px-6 lg:px-12 text-center relative py-20">
        <div className="flex flex-col items-center relative z-10 w-full max-w-7xl">
          <h1 className="leading-[0.85] mb-6">
            <span className="block font-barlow text-[clamp(2.5rem,10vw,9rem)] font-light tracking-wide uppercase text-gray-900">
              Thibaut
            </span>
            <span className="block text-red-900 text-[clamp(2.5rem,10vw,9rem)] font-bold tracking-tight whitespace-nowrap min-h-[1.1em]">
              {lastName}
              <span className="ml-1 opacity-40 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl tracking-wide uppercase font-medium px-4">
            Grafisch ontwerp <span className="mx-2 text-red-900/10">|</span> Branding <span className="mx-2 text-red-900/10">|</span> Fotografie
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 animate-fadeIn w-full sm:w-auto px-6">
            <Link
              href="/portfolio"
              className="px-8 md:px-10 py-4 bg-red-900 text-white rounded-full font-semibold hover:bg-black transition-all duration-300 shadow-xl shadow-red-900/10 text-center"
            >
              Bekijk Projecten
            </Link>
            <Link
              href="/over_mij"
              className="px-8 md:px-10 py-4 border-2 border-red-900 text-red-900 rounded-full font-semibold hover:bg-red-900 hover:text-white transition-all duration-300 text-center"
            >
              Over Mij
            </Link>
          </div>
        </div>
        
        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce sm:flex">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px8 bg-gray-900"></div>
        </div>
      </section>

      {/* PROJECT SLIDER SECTION */}
      <section className="max-w-7xl w-full px-6 lg:px-12 py-12 md:py-20 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 uppercase tracking-tighter">
            Mijn projecten
          </h2>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-2 md:p-3 border border-red-900/20 rounded-full hover:bg-red-900 hover:text-white transition-all active:scale-95">
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button onClick={nextSlide} className="p-2 md:p-3 border border-red-900/20 rounded-full hover:bg-red-900 hover:text-white transition-all active:scale-95">
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl bg-gray-50 aspect-4/5 sm:aspect-video md:h-150">
          <div
            className="flex h-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="min-w-full h-full relative group overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-12">
                  <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mt-2 font-medium text-sm md:text-base">Klik om project te bekijken →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SLIDER DOTS NAVIGATION */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === index 
                ? "w-8 bg-red-900" 
                : "w-2 bg-gray-300 hover:bg-red-900/40"
              }`}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* OVER MIJ TEASER SECTION */}
      <section className="max-w-3xl w-full px-6 py-16 md:py-24 text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-red-900 uppercase tracking-tighter">De Ontwerper</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light px-2">
          Ik ben <span className="font-bold">Thibaut Vanden Eynden</span>, een creatieve grafisch ontwerper gespecialiseerd in branding, fotografie en visuele communicatie. Mijn stijl combineert esthetiek met een sterk concept, waarbij elk project een uniek verhaal vertelt.
        </p>
        <Link
          href="/over_mij"
          className="mt-8 md:mt-10 inline-block text-red-900 font-bold border-b-2 border-red-900 pb-1 hover:text-black hover:border-black transition-all"
        >
          Ontdek mijn verhaal
        </Link>
      </section>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}