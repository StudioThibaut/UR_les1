"use client"

import { useRouter } from "next/navigation"
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react"

const gaEvent = ({ action, category, label }: { action: string; category: string; label: string }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    })
    console.log(`[GA] ${action} → ${label}`)
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const handleInternalLink = (href: string, label: string) => {
    gaEvent({ action: `footer_click_${label}`, category: "footer", label: href })
    router.push(href)
  }

  const handleExternalLink = (href: string, label: string) => {
    gaEvent({ action: `footer_social_${label}`, category: "footer", label: href })
    window.open(href, "_blank", "noopener noreferrer")
  }

  return (
    <footer className="w-full bg-red-900 text-white">

      {/* ── CTA BALK ── */}
      <div className="border-b border-white/10 px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-3">Klaar om samen te werken?</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
            Neem contact op.
          </h2>
        </div>
        <button
          onClick={() => handleInternalLink("/contact", "Stuur een bericht")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 shadow-xl shrink-0"
        >
          Stuur een bericht
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* ── FOOTER LINKS ── */}
      <div className="px-6 md:px-16 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

        {/* Naam + tagline */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Portfolio</p>
          <p className="font-black text-2xl uppercase tracking-tighter leading-none">
            Thibaut<br />Vanden Eynden
          </p>
          <p className="text-white/50 font-light text-sm italic">
            Grafisch ontwerper · Antwerpen
          </p>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Socials</p>
          <div className="space-y-3">
            <button
              onClick={() => handleExternalLink("https://www.instagram.com/studiothibaut.be/", "Instagram")}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 w-fit"
            >
              <Instagram size={15} className="text-white/40 group-hover:text-white transition-colors" />
              Instagram
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => handleExternalLink("https://www.linkedin.com/in/thibaut-vanden-eynden-826147324/", "LinkedIn")}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 w-fit"
            >
              <Linkedin size={15} className="text-white/40 group-hover:text-white transition-colors" />
              LinkedIn
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Legal</p>
          <div className="space-y-3">
            {[
              { label: "Terms of Agreement", href: "/terms-of-agreement" },
              { label: "Copyright Regulations", href: "/copyright-regulations" },
              { label: "Cookie Settings", href: "/cookie-settings" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleInternalLink(item.href, item.label)}
                className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 w-fit"
              >
                {item.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BALK ── */}
      <div className="border-t border-white/10 px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">
          &copy; {currentYear} — Thibaut Vanden Eynden
        </p>
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/30">
          Antwerpen, België
        </p>
      </div>
    </footer>
  )
}