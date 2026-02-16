"use client"

import * as React from "react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { toast } from "sonner" // Let op: import pad kan variëren per project
import { ArrowLeft, Lock, UserPlus, Key } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [loading, setLoading] = React.useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  /* TYPEWRITER - Consistent met Studio Thibaut stijl */
  const title = "ACCOUNT"
  const [displayedTitle, setDisplayedTitle] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedTitle(title.slice(0, index + 1))
      index++
      if (index === title.length) clearInterval(interval)
    }, 200)
    return () => clearInterval(interval)
  }, [])

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

  async function mockSubmit(e: React.FormEvent, actionName: string) {
    e.preventDefault()
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1200))
      toast.success(`${actionName} succesvol verwerkt!`)
    } catch {
      toast.error(`Fout bij ${actionName}`)
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

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 space-y-24">

        {/* HERO - Exacte styling & positie */}
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

        {/* LOGIN SECTIE */}
        <section className="flex justify-center items-center py-10 opacity-0 animate-fadeIn">
          <Card className="border-none bg-gray-50 rounded-[2.5rem] p-4 shadow-2xl shadow-red-900/5 w-full max-w-md mx-auto relative overflow-hidden">
            {/* Subtiel rood accent in de hoek */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 rounded-bl-full -mr-16 -mt-16"></div>
            
            <CardHeader className="relative z-10 space-y-2">
              <CardTitle className="text-3xl font-bold uppercase tracking-tighter">Welkom</CardTitle>
              <CardDescription className="text-gray-500 font-light uppercase tracking-widest text-[10px]">
                Toegang tot je persoonlijke dashboard
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/50 p-1 rounded-xl mb-8">
                  <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Login</TabsTrigger>
                  <TabsTrigger value="register" className="rounded-lg data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Registreer</TabsTrigger>
                  <TabsTrigger value="forgot" className="rounded-lg data-[state=active]:bg-red-900 data-[state=active]:text-white transition-all uppercase text-[10px] font-bold tracking-widest">Reset</TabsTrigger>
                </TabsList>

                {/* LOGIN */}
                <TabsContent value="login">
                  <form onSubmit={(e) => mockSubmit(e, "Login")} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</Label>
                      <Input type="email" required className="bg-white border-none rounded-xl h-12 px-4 shadow-sm focus-visible:ring-red-900" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Wachtwoord</Label>
                      <Input type="password" required className="bg-white border-none rounded-xl h-12 px-4 shadow-sm focus-visible:ring-red-900" />
                    </div>
                    <Button className="w-full bg-red-900 hover:bg-black text-white rounded-xl h-14 font-bold uppercase tracking-[0.2em] text-xs transition-all flex gap-2 group" disabled={loading}>
                      <Lock size={16} className="group-hover:rotate-12 transition-transform" />
                      {loading ? "Verifiëren..." : "Inloggen"}
                    </Button>
                  </form>
                </TabsContent>

                {/* REGISTER */}
                <TabsContent value="register">
                  <form onSubmit={(e) => mockSubmit(e, "Register")} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</Label>
                      <Input type="email" required className="bg-white border-none rounded-xl h-12 px-4 shadow-sm focus-visible:ring-red-900" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Wachtwoord</Label>
                      <Input type="password" required className="bg-white border-none rounded-xl h-12 px-4 shadow-sm focus-visible:ring-red-900" />
                    </div>
                    <Button className="w-full bg-red-900 hover:bg-black text-white rounded-xl h-14 font-bold uppercase tracking-[0.2em] text-xs transition-all flex gap-2 group" disabled={loading}>
                      <UserPlus size={16} className="group-hover:scale-110 transition-transform" />
                      {loading ? "Aanmaken..." : "Account maken"}
                    </Button>
                  </form>
                </TabsContent>

                {/* RESET */}
                <TabsContent value="forgot">
                  <form onSubmit={(e) => mockSubmit(e, "Password Reset")} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</Label>
                      <Input type="email" required className="bg-white border-none rounded-xl h-12 px-4 shadow-sm focus-visible:ring-red-900" />
                    </div>
                    <Button className="w-full bg-white text-gray-900 border border-gray-200 hover:bg-red-900 hover:text-white rounded-xl h-14 font-bold uppercase tracking-[0.2em] text-xs transition-all flex gap-2 group" disabled={loading}>
                      <Key size={16} className="group-hover:-rotate-45 transition-transform" />
                      {loading ? "Verzenden..." : "Reset link sturen"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>
      </div>

      <style jsx>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards 0.5s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </main>
  )
}