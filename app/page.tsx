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
  }, [])

  // 2. SCROLL PROGRESS LOGIC (De rode balk bovenaan)
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
        className="fixed top-0 left-0 h-1 bg-red-900 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] w-full px-6 lg:px-12 text-center relative">
        <div className="flex flex-col items-center relative z-10">
          <h1 className="leading-[0.8] mb-6">
            <span className="block font-barlow text-[clamp(3rem,8vw,9rem)] font-light tracking-wide uppercase text-gray-900">
              Thibaut
            </span>
            <span className="block text-red-900 text-[clamp(3rem,8vw,9rem)] font-bold tracking-tight whitespace-nowrap min-h-[1.1em]">
              {lastName}
              <span className="ml-1 opacity-40 animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl tracking-wide uppercase font-medium">
            Grafisch ontwerp <span className="mx-2 text-red-900/10">|</span> Branding <span className="mx-2 text-red-900/10">|</span> Fotografie
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-12 opacity-0 animate-fadeIn transition-all">
            <Link
              href="/portfolio"
              className="px-10 py-4 bg-red-900 text-white rounded-full font-semibold hover:bg-black transition-all duration-300 shadow-xl shadow-red-900/10 hover:shadow-none"
            >
              Bekijk Projecten
            </Link>
            <Link
              href="/over_mij"
              className="px-10 py-4 border-2 border-red-900 text-red-900 rounded-full font-semibold hover:bg-red-900 hover:text-white transition-all duration-300"
            >
              Over Mij
            </Link>
          </div>
        </div>
        
        {/* SCROLL INDICATOR PIJL/LIJN */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-8 bg-gray-900"></div>
        </div>
      </section>

      {/* PROJECT SLIDER SECTION */}
      <section className="max-w-7xl w-full px-6 lg:px-12 py-20 relative">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-red-900 uppercase tracking-tighter">
            Mijn projecten
          </h2>
          <div className="hidden md:flex gap-4">
            <button onClick={prevSlide} className="p-3 border border-red-900/20 rounded-full hover:bg-red-900 hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 border border-red-900/20 rounded-full hover:bg-red-900 hover:text-white transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-gray-50">
          <div
            className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="min-w-full relative group overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={1400}
                  height={800}
                  className="object-cover w-full h-[600px] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <h3 className="text-white text-5xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mt-2 font-medium">Klik om project te bekijken →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OVER MIJ TEASER SECTION */}
      <section className="max-w-3xl w-full px-6 py-24 text-center border-t border-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-red-900 uppercase tracking-tighter">De Ontwerper</h2>
        <p className="text-gray-700 text-xl leading-relaxed font-light">
          Ik ben <span className="font-bold">Thibaut Vanden Eynden</span>, een creatieve grafisch ontwerper gespecialiseerd in branding, fotografie en visuele communicatie. Mijn stijl combineert esthetiek met een sterk concept, waarbij elk project een uniek verhaal vertelt.
        </p>
        <Link
          href="/over_mij"
          className="mt-10 inline-block text-red-900 font-bold border-b-2 border-red-900 pb-1 hover:text-black hover:border-black transition-all"
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