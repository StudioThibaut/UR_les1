"use client"

import { useState } from "react"
import { Link2, Facebook, Linkedin, Check } from "lucide-react"

export default function SocialShare() {
  const [copied, setCopied] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null)

  const handleCopy = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://stthibaut.netlify.app"
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: string) => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://stthibaut.netlify.app"
    const url = encodeURIComponent(currentUrl)
    const text = encodeURIComponent("Bekijk het portfolio van Thibaut Vanden Eynden")

    const links: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    }

    if (platform === "instagram") {
      navigator.clipboard.writeText(currentUrl)
      alert("Link gekopieerd — plak hem in Instagram!")
    } else {
      window.open(links[platform], "_blank", "noopener noreferrer")
    }
  }

  const buttons = [
    {
      id: "copy",
      label: copied ? "Gekopieerd!" : "Kopieer link",
      onClick: handleCopy,
      icon: copied ? <Check size={16} /> : <Link2 size={16} />,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      onClick: () => handleShare("whatsapp"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L0 24l6.335-1.502A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.214-3.727.883.933-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      onClick: () => handleShare("instagram"),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      id: "facebook",
      label: "Facebook",
      onClick: () => handleShare("facebook"),
      icon: <Facebook size={16} />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      onClick: () => handleShare("linkedin"),
      icon: <Linkedin size={16} />,
    },
  ]

  return (
    <div className="fixed right-5 bottom-8 z-50 flex flex-col items-end gap-2">
      {buttons.map((btn) => (
        <div key={btn.id} className="flex items-center gap-2 group">
          {/* Label */}
          <span
            className={`text-[9px] font-black uppercase tracking-widest text-gray-900 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100 transition-all duration-300 whitespace-nowrap ${
              hoveredBtn === btn.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
            }`}
          >
            {btn.label}
          </span>

          {/* Button */}
          <button
            onClick={btn.onClick}
            onMouseEnter={() => setHoveredBtn(btn.id)}
            onMouseLeave={() => setHoveredBtn(null)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
              btn.id === "copy" && copied
                ? "bg-green-600 text-white scale-110"
                : hoveredBtn === btn.id
                ? "bg-red-900 text-white scale-110"
                : "bg-gray-900 text-white"
            }`}
          >
            {btn.icon}
          </button>
        </div>
      ))}
    </div>
  )
}