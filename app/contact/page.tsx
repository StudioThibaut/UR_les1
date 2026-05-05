"use client"

import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const gaEvent = ({ action, category, label }: { action: string; category: string; label: string }) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
    })
    console.log(`[GA] ${action} → ${label}`)
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 tekens bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  subject: z.string().min(3, "Onderwerp is verplicht"),
  message: z.string().min(10, "Bericht moet minstens 10 tekens bevatten"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState("")
  const fullTitle = "CONTACT"

  const pageStartTime = useRef<number>(Date.now())
  const scrollMilestones = useRef<Set<number>>(new Set())
  const formStartTime = useRef<number | null>(null)

  useEffect(() => {
    gaEvent({ action: "page_view_contact", category: "contact", label: "contact pagina geladen" })

    const handleUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      gaEvent({ action: "time_on_page", category: "contact", label: `${timeSpent} seconden` })
    }
    window.addEventListener("beforeunload", handleUnload)
    return () => window.removeEventListener("beforeunload", handleUnload)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedTitle(fullTitle.slice(0, index + 1))
      index++
      if (index === fullTitle.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.round((window.scrollY / scrollHeight) * 100)
      setScrollProgress(progress)

      const milestones = [25, 50, 75, 100]
      milestones.forEach((milestone) => {
        if (progress >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone)
          gaEvent({ action: `scroll_depth_${milestone}`, category: "contact", label: `${milestone}% gescrolld` })
        }
      })
    }
    window.addEventListener("scroll", update)
    return () => window.removeEventListener("scroll", update)
  }, [])

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(data: ContactFormValues) {
    setLoading(true)
    const timeSpent = formStartTime.current
      ? Math.round((Date.now() - formStartTime.current) / 1000)
      : null

    gaEvent({
      action: "form_submit_attempt",
      category: "contact",
      label: timeSpent ? `formulier ingevuld in ${timeSpent}s` : "formulier verzonden",
    })

    try {
      await new Promise((r) => setTimeout(r, 1500))
      console.log("Form data:", data)
      toast.success("Bericht succesvol verzonden!")
      gaEvent({ action: "form_submit_success", category: "contact", label: `onderwerp: ${data.subject}` })
      reset()
      formStartTime.current = null
    } catch {
      toast.error("Er is iets misgegaan. Probeer het later opnieuw.")
      gaEvent({ action: "form_submit_error", category: "contact", label: "verzending mislukt" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative overflow-x-hidden font-sans">

      <div
        className="fixed top-0 left-0 h-1 bg-red-900 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="min-h-[60vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pt-32 pb-20 border-b border-gray-100 relative">
        <div className="absolute top-12 right-6 md:right-16 text-right space-y-1">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900">Beschikbaar</p>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Antwerpen, BE</p>
        </div>

        <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
          Thibaut Vanden Eynden
        </p>

        <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-10">
          {displayedTitle}<span className="opacity-30 animate-pulse">_</span>
        </h1>

        <div className="w-20 h-0.5 bg-red-900 mb-12 origin-left animate-expand" />

        <p className="text-gray-400 max-w-xl text-lg md:text-2xl leading-relaxed font-light italic">
          "Heb je een project in gedachten? Ik luister graag — vertel me over je idee."
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Contactgegevens</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-16">
              Neem contact op.
            </h2>

            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-900/5 rounded-lg">
                    <Mail size={18} className="text-red-900" />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Email</h3>
                </div>
                
                <a
                  href="mailto:vandeneyndenthibaut@gmail.be"
                  onClick={() => gaEvent({ action: "email_click", category: "contact", label: "vandeneyndenthibaut@gmail.be" })}
                  className="block font-black text-base md:text-xl uppercase tracking-tight text-gray-900 hover:text-red-900 transition-colors break-all font-oswald"
                >
                  vandeneyndenthibaut@gmail.be
                </a>
              </div>

              <div className="border-t border-gray-100 py-8">
                <div className="flex items-center gap-2 text-red-900 mb-2">
                  <MapPin size={18} />
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">Locatie</p>
                </div>
                <p className="font-black text-base uppercase tracking-tight text-gray-900">
                  Antwerpen, België
                </p>
              </div>

              <div className="border-t border-gray-100 pt-10">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-[10px] font-black tracking-widest uppercase text-red-900 mb-3">Beschikbaarheid</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed italic">
                    Momenteel beschikbaar voor nieuwe projecten en samenwerkingen. Reactietijd: binnen 24 uur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Naam</Label>
                <Input
                  {...register("name")}
                  placeholder="Jouw naam"
                  onFocus={() => {
                    if (!formStartTime.current) {
                      formStartTime.current = Date.now()
                      gaEvent({ action: "form_start", category: "contact", label: "gebruiker begon formulier in te vullen" })
                    }
                  }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl h-14 px-6 text-sm font-light focus-visible:ring-red-900 focus-visible:border-red-900 placeholder:text-gray-300 transition-all"
                />
                {errors.name && (
                  <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Email</Label>
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="naam@voorbeeld.be"
                  className="bg-gray-50 border border-gray-100 rounded-2xl h-14 px-6 text-sm font-light focus-visible:ring-red-900 focus-visible:border-red-900 placeholder:text-gray-300 transition-all"
                />
                {errors.email && (
                  <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Onderwerp</Label>
              <Input
                {...register("subject")}
                placeholder="Waar gaat het over?"
                className="bg-gray-50 border border-gray-100 rounded-2xl h-14 px-6 text-sm font-light focus-visible:ring-red-900 focus-visible:border-red-900 placeholder:text-gray-300 transition-all"
              />
              {errors.subject && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Bericht</Label>
              <Textarea
                rows={7}
                {...register("message")}
                placeholder="Vertel me over je project..."
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-sm font-light focus-visible:ring-red-900 focus-visible:border-red-900 placeholder:text-gray-300 resize-none transition-all"
              />
              {errors.message && (
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{errors.message.message}</p>
              )}
            </div>

            <Button
              disabled={loading}
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-red-900 hover:bg-gray-900 text-white rounded-full h-16 font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 group"
            >
              {loading ? (
                <span className="opacity-60">Versturen...</span>
              ) : (
                <>
                  Verstuur bericht
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #991b1b; border-radius: 10px; }
      `}</style>
    </main>
  )
}