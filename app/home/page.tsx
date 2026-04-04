"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi"

interface Project {
  title: string;
  image: string;
  link: string;
  tag: string;
}

const allProjects: Project[] = [
  { title: "FOTOGRAFIE", image: "/IMG/Fotografie_Leporello.jpg", link: "/project_1", tag: "Visual Arts" },
  { title: "STAGE T-SHIRT", image: "/IMG/T-shirt_Stage.jpg", link: "/project_2", tag: "Branding" },
  { title: "IGNITION", image: "/IMG/Ignition3.jpg", link: "/project_3", tag: "Digital Design" },
]

export default function HomePage() {
  const fullLastName = "VANDEN EYNDEN"
  const [lastName, setLastName] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [projects, setProjects] = useState<Project[]>([]) 
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const shuffled = [...allProjects].sort(() => 0.5 - Math.random()).slice(0, 3)
    setProjects(shuffled)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setLastName(fullLastName.slice(0, index + 1))
      index++
      if (index === fullLastName.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    if (projects.length === 0) return
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    if (projects.length === 0) return
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (projects.length === 0) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, projects])

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

  if (projects.length === 0) return null

  return (
    <main 
      className="relative flex flex-col items-center min-h-screen overflow-x-hidden font-sans selection:bg-red-900 selection:text-white"
      style={{ backgroundColor: 'var(--background, #ffffff)' }}
    >
      
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-110 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] w-full px-6 lg:px-12 text-center relative py-20">
        <div className="flex flex-col items-center relative z-10 w-full max-w-7xl">
          <h1 className="leading-[0.85] mb-6">
            <span 
              className="block tracking-wide uppercase"
              style={{ 
                fontFamily: 'var(--h1-font)', 
                fontSize: 'var(--h1-size)', 
                color: 'var(--h1-color)',
                textAlign: 'var(--h1-align)' as any,
                marginTop: 'var(--h1-mt)',
                marginBottom: 'var(--h1-mb)'
  
              }}
            >
              Thibaut
            </span>
            <span 
              className="block font-bold tracking-tight whitespace-nowrap min-h-[1.1em]"
              style={{ 
                fontFamily: 'var(--h1-font, inherit)', 
                fontSize: 'var(--h1-size, clamp(2.5rem, 10vw, 9rem))', 
                color: 'var(--h1-color-alt, #7f1d1d)',
                textAlign: 'var(--h1-textAlign, center)' as any,
                fontWeight: 'var(--h1-fontWeight, 700)',
                opacity: 'var(--h1-opacity, 1)'
              }}
            >
              {lastName}
            </span>
          </h1>

          <p 
            className="text-lg md:text-xl lg:text-2xl max-w-3xl tracking-wide uppercase font-medium px-4"
            style={{ 
              fontFamily: 'var(--p-fontFamily, inherit)', 
              fontSize: 'var(--p-size, inherit)', 
              color: 'var(--p-color, #6b7280)',
              textAlign: 'var(--p-textAlign, center)' as any,
              marginTop: 'var(--p-marginTop, 0px)',
              paddingTop: 'var(--p-paddingTop, 0px)',
              opacity: 'var(--p-opacity, 1)'
            }}
          >
            Grafisch ontwerp <span className="mx-2 opacity-20">|</span> Branding <span className="mx-2 opacity-20">|</span> Fotografie
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 animate-fadeIn w-full sm:w-auto px-6">
            <Link
              href="/portfolio"
              className="px-8 md:px-10 py-4 rounded-full font-semibold hover:bg-black transition-all duration-300 shadow-xl text-center"
              style={{ 
                backgroundColor: 'var(--button-backgroundColor, #7f1d1d)', 
                color: 'var(--button-color, #ffffff)',
                fontFamily: 'var(--button-fontFamily, inherit)',
                fontSize: 'var(--button-size, inherit)',
                paddingTop: 'var(--button-paddingTop, 1rem)',
                paddingBottom: 'var(--button-paddingBottom, 1rem)'
              }}
            >
              Bekijk Projecten
            </Link>
            <Link
              href="/over_mij"
              className="px-8 md:px-10 py-4 border-2 rounded-full font-semibold hover:bg-red-900 hover:text-white transition-all duration-300 text-center"
              style={{ 
                borderColor: 'var(--button-backgroundColor, #7f1d1d)', 
                color: 'var(--button-backgroundColor, #7f1d1d)',
                fontFamily: 'var(--button-fontFamily, inherit)'
              }}
            >
              Over Mij
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT SLIDER SECTION */}
      <section className="w-full max-w-400 mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12 px-2">
          <h2 
            className="font-black uppercase tracking-tighter leading-none"
            style={{ 
              fontFamily: 'var(--h2-fontFamily, inherit)', 
              fontSize: 'var(--h2-size, 3.75rem)', 
              color: 'var(--h2-color, #111827)',
              textAlign: 'var(--h2-textAlign, left)' as any,
              marginBottom: 'var(--h2-marginBottom, 3rem)'
            }}
          >
            Mijn projecten
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] shadow-xl bg-gray-50 aspect-4/5 md:aspect-21/9">
          <div 
            className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className="min-w-full h-full relative group">
                <Image src={project.image} alt={project.title} fill className="object-cover" priority={index === 0} sizes="100vw" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-20">
                  <h3 
                    className="text-white font-black uppercase tracking-tighter leading-none mb-4"
                    style={{ 
                      fontFamily: 'var(--h3-fontFamily, inherit)', 
                      fontSize: 'var(--h3-size, 4.5rem)', 
                      color: 'var(--h3-color, #ffffff)',
                      textAlign: 'var(--h3-textAlign, left)' as any
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </main>
  )
}