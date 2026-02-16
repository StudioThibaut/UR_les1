"use client"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-red-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
          
          {/* LINKS: Socials met iconen en inspring-effect */}
          <div className="flex flex-col gap-3 order-2 md:order-1">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-1">Socials</span>
            
            <a 
              href="https://www.instagram.com/studiothibaut.be/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:ml-2 w-fit"
            >
              <Instagram size={16} className="text-white/50 group-hover:text-white transition-colors" />
              <span>Instagram</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/thibaut-vanden-eynden-826147324/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:ml-2 w-fit"
            >
              <Linkedin size={16} className="text-white/50 group-hover:text-white transition-colors" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* MIDDEN: Copyright (Desktop) */}
          <div className="hidden lg:flex justify-center order-2 text-white/40 text-[10px] tracking-widest uppercase pb-1">
            &copy; {currentYear} — Studio Thibaut
          </div>

          {/* RECHTS: Juridische links */}
          <div className="flex flex-col items-start md:items-end gap-3 order-1 md:order-3">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-1">Legal</span>
            <Link 
              href="/terms-of-agreement" 
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:mr-2"
            >
              Terms of Agreement
            </Link>
            <Link 
              href="/copyright-regulations" 
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:mr-2"
            >
              Copyright Regulations
            </Link>
            <Link 
              href="/cookie-settings" 
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 hover:mr-2"
            >
              Cookie Settings
            </Link>
          </div>
        </div>

        {/* Mobiele copyright weergave */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center lg:hidden text-white/40 text-[10px] tracking-widest uppercase">
          &copy; {currentYear} — Thibaut Vanden Eynden
        </div>

      </div>
    </footer>
  )
}