"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

/* ---------------- SCHEMA ---------------- */

const contactSchema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 tekens bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  subject: z.string().min(3, "Onderwerp is verplicht"),
  message: z.string().min(10, "Bericht moet minstens 10 tekens bevatten"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState("")
  
  const title = "CONTACT"

  /* TYPEWRITER EFFECT */
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedTitle(title.slice(0, index + 1))
      index++
      if (index === title.length) clearInterval(interval)
    }, 150)
    return () => clearInterval(interval)
  }, [title])

  /* SCROLL PROGRESS LOGIC */
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / scrollHeight) * 100
      setScrollProgress(progress > 0 ? progress : 0)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  async function onSubmit(data: ContactFormValues) {
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1500))
      console.log("Form data:", data)
      toast.success("Bericht succesvol verzonden!")
      reset()
    } catch (error) {
      toast.error("Er is iets misgegaan. Probeer het later opnieuw.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-100 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-350 mx-auto px-6 lg:px-12 py-12 md:py-24 space-y-12 md:space-y-20">

        {/* HEADER SECTION */}
        <header className="max-w-4xl">
          <Link href="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-8 md:mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Terug naar home</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase leading-tight">
            {displayedTitle}<span className="ml-1 opacity-40 animate-pulse"></span>
          </h1>

          <div className="w-20 md:w-24 h-1 bg-red-900 mt-4 md:mt-6 mb-6 md:mb-10 origin-left animate-expand"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* CONTACT INFO */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-red-900">Contactgegevens</h3>
              <div className="space-y-4">
                <a href="mailto:vandeneyndenthibaut@gmail.be" className="flex items-center gap-4 text-gray-600 hover:text-red-900 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-900/10 transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-base md:text-lg break-all">vandeneyndenthibaut@gmail.be</span>
                </a>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="text-base md:text-lg">Antwerpen, België</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULIER */}
          <div className="lg:col-span-2 order-1 lg:order-2 opacity-0 animate-fadeIn">
            <Card className="border-none bg-gray-50 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-900/5">
              <CardContent className="p-6 md:p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <Label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Naam</Label>
                      <Input {...register("name")} className="bg-white border-none rounded-xl md:rounded-2xl h-12 md:h-14 px-5 md:px-6 shadow-sm focus-visible:ring-red-900" placeholder="Jouw naam" />
                      {errors.name && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</Label>
                      <Input type="email" {...register("email")} className="bg-white border-none rounded-xl md:rounded-2xl h-12 md:h-14 px-5 md:px-6 shadow-sm focus-visible:ring-red-900" placeholder="naam@voorbeeld.be" />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Onderwerp</Label>
                    <Input {...register("subject")} className="bg-white border-none rounded-xl md:rounded-2xl h-12 md:h-14 px-5 md:px-6 shadow-sm focus-visible:ring-red-900" placeholder="Waar gaat het over?" />
                    {errors.subject && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Bericht</Label>
                    <Textarea 
                      rows={5} 
                      {...register("message")} 
                      className="bg-white border-none rounded-xl md:rounded-[1.5rem] p-5 md:p-6 shadow-sm focus-visible:ring-red-900 resize-none min-h-37.5 md:min-h-50" 
                      placeholder="Vertel me over je project..." 
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.message.message}</p>}
                  </div>
                  <Button disabled={loading} className="w-full bg-red-900 hover:bg-black text-white rounded-xl md:rounded-2xl h-14 md:h-16 font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm transition-all flex gap-3 group">
                    {loading ? "Versturen..." : (
                      <>
                        Verstuur bericht
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards 0.4s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </main>
  )
}