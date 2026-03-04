"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiChevronDown, FiLock, FiArrowRight, FiUser, FiSettings } from "react-icons/fi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)

  return (
    <>
      {/* 1. Hamburger menu button (Links) */}
      <button
        className="fixed top-6 left-6 z-50 p-3 text-gray-900 hover:text-red-900 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl shadow-black/5 transition-all active:scale-95 group"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={20} className="group-hover:rotate-180 transition-transform duration-500" />
      </button>

      {/* 2. Directe Login knop (Rechtsboven) */}
      <div className="fixed top-6 right-6 z-50">
        <a 
          href="/login" 
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-100 text-gray-900 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-900 hover:text-white hover:border-red-900 transition-all shadow-xl shadow-black/5 group"
        >
          <FiLock size={12} className="group-hover:animate-bounce" />
          Account
        </a>
      </div>

      {/* Sidebar Slider Content */}
      <SidebarSlider
        isOpen={isSidebarOpen}
        onClose={() => {
          setIsSidebarOpen(false)
          setIsProjectOpen(false)
        }}
      >
        <nav className="flex flex-col h-full py-8 px-4">
          
          {/* BOVENSTE GEDEELTE: Navigatie links */}
          {/* De 'grow' class zorgt ervoor dat dit blok alle beschikbare ruimte inneemt, 
              waardoor de div hieronder (de knoppen) naar de bodem wordt geduwd. */}
          <div className="flex flex-col space-y-6 text-sm font-bold uppercase tracking-[0.3em] grow">
            <a href="/home" className="hover:text-red-900 transition-colors flex items-center justify-between group">
              Home <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
            <a href="/over_mij" className="hover:text-red-900 transition-colors flex items-center justify-between group">
              Over mij <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>

            {/* Project with subnavigation */}
            <div className="space-y-4">
              <button
                onClick={() => setIsProjectOpen(!isProjectOpen)}
                className={`flex items-center justify-between w-full transition-colors ${isProjectOpen ? "text-red-900" : "hover:text-red-900"}`}
              >
                PROJECTEN
                <FiChevronDown
                  className={`transition-transform duration-500 ${
                    isProjectOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProjectOpen && (
                <div className="ml-2 flex flex-col space-y-4 text-[11px] border-l border-gray-100 pl-4 py-2 animate-fadeIn">
                  <a href="/project_1" className="text-gray-400 hover:text-red-900 transition-colors">01. Fotografie</a>
                  <a href="/project_3" className="text-gray-400 hover:text-red-900 transition-colors">02. Ignition</a>
                  <a href="/project_2" className="text-gray-400 hover:text-red-900 transition-colors">03. Stage T-shirt</a>
                </div>
              )}
            </div>

           {/* <a href="/studenten" className="hover:text-red-900 transition-colors flex items-center justify-between group">
              Class of '26 <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a> */}
            <a href="/contact" className="hover:text-red-900 transition-colors flex items-center justify-between group">
              Contact <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
          </div>

          {/* ONDERSTE GEDEELTE: De 3 knoppen */}
          <div className="mt-auto pt-8 border-t border-gray-100 space-y-3">
            {/* Admin & User knoppen naast elkaar */}
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="/admin" 
                className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-900 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all border border-transparent"
              >
                <FiSettings size={12} /> Admin
              </a>
              <a 
                href="/userlandingspage" 
                className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-900 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all border border-transparent"
              >
                <FiUser size={12} /> User
              </a>
            </div>

            {/* Inloggen knop (Helemaal onderaan) */}
            <a 
              href="/login" 
              className="flex items-center justify-center gap-2 w-full py-4 bg-red-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg shadow-red-900/10"
            >
              <FiLock size={14} /> Inloggen
            </a>
          </div>
        </nav>
      </SidebarSlider>
    </>
  )
}