"use client"

import { useState, useMemo, useEffect } from "react" // useEffect toegevoegd
import { motion, AnimatePresence } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiX, FiLock, FiArrowRight, FiUser, FiSettings, FiChevronDown } from "react-icons/fi"
import Link from "next/link"
import { usePathname } from "next/navigation" // usePathname toegevoegd

const rawProjects = [
  { t: "Fotografie", h: "/project_1" },
  { t: "Ignition", h: "/project_3" },
  { t: "Stage T-shirt", h: "/project_2" },
]

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const pathname = usePathname() // Haal de huidige route op

  const sortedProjects = useMemo(() => {
    return [...rawProjects].sort((a, b) => a.t.localeCompare(b.t))
  }, [])

  const closeMenu = () => setIsOpen(false)

  // KEYBOARD SUPPORT: Sluit menu met Escape-toets
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      {/* TRIGGERS */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-8 left-8 z-100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 md:p-5 rounded-3xl transition-all duration-500 shadow-2xl flex items-center gap-4 ${
            isOpen ? "bg-red-900 text-white" : "bg-white/90 backdrop-blur-md text-gray-900 border border-white/20 hover:scale-105"
          }`}
        >
          {isOpen ? <FiX size={20} /> : <GiHamburgerMenu size={20} />}
          <span className="text-[10px] font-black uppercase tracking-[0.4em] pr-2">{isOpen ? "Sluiten" : "Menu"}</span>
        </button>
      </motion.div>

      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-8 right-8 z-100">
        <Link href="/login" className="px-6 md:px-8 py-3.5 md:py-4 bg-black text-white rounded-3xl text-[10px] font-black uppercase tracking-widest hover:bg-red-900 transition-all shadow-2xl flex items-center gap-3 active:scale-95">
          <FiLock size={14} /> Account
        </Link>
      </motion.div>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 flex justify-center overflow-y-auto bg-white/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 z-0" onClick={closeMenu} />

            <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 px-8 py-32 md:py-40 items-start">
              
              {/* LINKS: Hoofdmenu met Active State */}
              <div className="flex flex-col space-y-2 md:sticky md:top-40">
                {[
                  { name: "Home", path: "/home" },
                  { name: "Over mij", path: "/over_mij" },
                  { name: "Contact", path: "/contact" }
                ].map((item, i) => {
                  const isActive = pathname === item.path
                  return (
                    <motion.div key={item.name} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                      <Link 
                        href={item.path}
                        onClick={closeMenu}
                        className={`group flex items-center gap-6 text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all ${
                          isActive ? "text-red-900" : "text-gray-900 hover:text-red-900"
                        }`}
                      >
                        <span className="group-hover:translate-x-4 transition-transform duration-500">
                          {item.name}
                        </span>
                        <FiArrowRight className={`transition-all text-3xl md:text-4xl ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* RECHTS: Projecten Index */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
              >
                <button
                  onClick={() => setIsProjectOpen(!isProjectOpen)}
                  className="flex items-center justify-between w-full text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 hover:text-red-900 transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Projecten ({sortedProjects.length})</span>
                  <FiChevronDown className={`transition-transform duration-500 text-lg ${isProjectOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isProjectOpen ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden">
                    <div className="space-y-1 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                      {sortedProjects.map((p) => (
                        <Link 
                          key={p.t} href={p.h} 
                          onClick={closeMenu}
                          className="flex items-center justify-between py-4 border-b border-gray-50 group transition-all"
                        >
                          <span className={`text-lg md:text-xl font-black uppercase tracking-tight transition-all group-hover:translate-x-2 ${pathname === p.h ? "text-red-900" : "text-gray-800 group-hover:text-red-900"}`}>
                            {p.t}
                          </span>
                          <FiArrowRight size={18} className={`${pathname === p.h ? "text-red-900" : "text-gray-100"} group-hover:text-red-900 transition-colors`} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Acties */}
                <div className="pt-8 mt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <Link href="/admin" onClick={closeMenu} className="flex items-center justify-center gap-2 py-4 bg-black text-white rounded-[2rem] text-[9px] font-black uppercase tracking-widest hover:bg-red-900 transition-all shadow-lg hover:-translate-y-0.5">
                    <FiSettings size={14} /> Admin
                  </Link>
                  <Link href="/userlandingspage" onClick={closeMenu} className="flex items-center justify-center gap-2 py-4 bg-gray-50 text-gray-900 rounded-[2rem] text-[9px] font-black uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all">
                    <FiUser size={14} /> Profile
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        body { 
          overflow: ${isOpen ? 'hidden' : 'auto'}; 
          /* Voorkomt dat de pagina verspringt als de scrollbar verdwijnt */
          padding-right: ${isOpen ? 'var(--scrollbar-width, 0px)' : '0px'};
        }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #7f1d1d; border-radius: 10px; }
      `}</style>
    </>
  )
}