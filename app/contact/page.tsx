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
  const [loading, setLoading] = useState(false) // Aangepast naar useState voor consistentie
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
    }, 200)
    return () => clearInterval(interval)
  }, [title]) // title toegevoegd aan dependency array

  /* SCROLL PROGRESS LOGIC */
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
    <main className="min-h-screen bg-white text-gray-900 selection:bg-red-900 selection:text-white relative">
      
      {/* SCROLL PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-900 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 space-y-20">

        {/* HEADER SECTION */}
        <header className="max-w-4xl">
          <Link href="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Terug naar home</span>
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase">
            {displayedTitle}<span className="ml-1 opacity-40 animate-pulse">|</span>
          </h1>

          <div className="w-24 h-1 bg-red-900 mt-6 mb-10 origin-left animate-expand"></div>
        </header>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* CONTACT INFO */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-red-900">Contactgegevens</h3>
              <div className="space-y-4">
                <a href="mailto:vandeneyndenthibaut@gmail.be" className="flex items-center gap-4 text-gray-600 hover:text-red-900 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-900/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-lg">vandeneyndenthibaut@gmail.be</span>
                </a>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <span className="text-lg">Antwerpen, België</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULIER */}
          <div className="lg:col-span-2">
            <Card className="border-none bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-900/5">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Naam</Label>
                      <Input {...register("name")} className="bg-white border-none rounded-2xl h-14 px-6 shadow-sm focus-visible:ring-red-900" placeholder="Jouw naam" />
                      {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</Label>
                      <Input type="email" {...register("email")} className="bg-white border-none rounded-2xl h-14 px-6 shadow-sm focus-visible:ring-red-900" placeholder="naam@voorbeeld.be" />
                      {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Onderwerp</Label>
                    <Input {...register("subject")} className="bg-white border-none rounded-2xl h-14 px-6 shadow-sm focus-visible:ring-red-900" placeholder="Waar gaat het over?" />
                    {errors.subject && <p className="text-xs text-red-500 mt-1 ml-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Bericht</Label>
                    <Textarea rows={6} {...register("message")} className="bg-white border-none rounded-[1.5rem] p-6 shadow-sm focus-visible:ring-red-900 resize-none" placeholder="Vertel me over je project..." />
                    {errors.message && <p className="text-xs text-red-500 mt-1 ml-1">{errors.message.message}</p>}
                  </div>

                  <Button disabled={loading} className="w-full bg-red-900 hover:bg-black text-white rounded-2xl h-16 font-bold uppercase tracking-[0.2em] text-sm transition-all flex gap-3 group">
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
      `}</style>
    </main>
  )
}