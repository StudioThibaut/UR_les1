"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  ArrowLeft, X, Palette, Printer, Users, 
  Pencil, Save, Type, Layout, ChevronLeft, MessageSquare,
  Plus, Trash2, Image as ImageIcon, Tag, Briefcase, Settings
} from "lucide-react"
import Link from "next/link"

/* ==========================================
   ONTWERP A: CLEAN RESPONSIVE
   ========================================== */
const DesignA = ({ data, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn">
    <div className="fixed top-0 left-0 h-1 bg-red-900 z-110 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />

    <div className="max-w-350 mx-auto px-6 lg:px-12 py-12 md:py-24 space-y-16 md:space-y-32">
      <section className="max-w-5xl">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-900 transition-colors mb-8 md:mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </Link>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-900 uppercase leading-tight">{data.title}</h1>
        <div className="w-20 md:w-24 h-1 bg-red-900 mt-4 md:mt-6 mb-8 md:mb-10 origin-left animate-expand"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-100 pt-8 md:pt-12">
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-tight font-light italic">"{data.subtitle}"</p>
          </div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-400 space-y-4 md:border-l border-gray-100 md:pl-6">
            <div><span className="text-red-900 font-bold block">Klant</span> {data.client}</div>
            <div><span className="text-red-900 font-bold block">Expertise</span> {data.expertise}</div>
            <div><span className="text-red-900 font-bold block">Status</span> {data.status}</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        <div className="lg:col-span-8 space-y-12 md:space-y-16 text-gray-600 font-light leading-relaxed text-base md:text-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-red-900"><Palette size={24}/><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">{data.labels.label1}</h2></div>
            <div className="whitespace-pre-line prose prose-red max-w-none prose-p:leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-red-900"><Printer size={24}/><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">{data.labels.label2}</h2></div>
            <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: data.techText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-red-900"><Users size={24}/><h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">{data.labels.label3}</h2></div>
            <p className="whitespace-pre-line italic">{data.processText}</p>
          </div>
        </div>
        <aside className="lg:col-span-4 self-start bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 lg:sticky lg:top-24">
          <h3 className="font-bold text-red-900 mb-8 text-xs tracking-[0.3em] uppercase border-b border-red-900/10 pb-4 text-center">Kernwaarden</h3>
          <ul className="space-y-6 font-medium text-gray-900 uppercase tracking-tighter text-xl italic">
            {data.coreValues.map((v: any, i: number) => (
              <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                <span>{v.label}</span> <span className="text-red-900/40 text-[10px] font-black">VS</span> <span>{v.vs}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-4">
            <h4 className="text-red-900 font-bold uppercase text-[10px] tracking-widest">Technische Specs</h4>
            <p className="text-sm text-gray-500 font-light whitespace-pre-line">{data.techSpecs}</p>
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.images.map((img: string, idx: number) => (
          <div key={idx} className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl cursor-zoom-in group ${idx === 0 ? 'md:col-span-2 aspect-21/9' : 'aspect-square'}`} onClick={() => setLightboxImage(img)}>
            {img ? <Image src={img} alt="Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-mono text-xs uppercase">No Media</div>}
          </div>
        ))}
      </section>
    </div>
  </div>
)

/* ==========================================
   ONTWERP B: INDUSTRIAL WHITE
   ========================================== */
const DesignB = ({ data, setLightboxImage, scrollProgress }: any) => (
  <div className="animate-fadeIn bg-white min-h-screen text-black font-mono selection:bg-yellow-400">
    <div className="fixed top-0 left-0 h-1 bg-yellow-400 z-110 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
    <div className="max-w-350 mx-auto px-4 md:px-6 py-12 md:py-24 space-y-24">
      <header className="border-l-12 border-black pl-10">
        <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">{data.title}</h1>
        <div className="mt-6 inline-block bg-yellow-400 px-6 py-2 text-2xl font-black uppercase italic shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">"{data.subtitle}"</div>
      </header>

      <div className="grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-8 space-y-16">
          <section className="border-l-2 border-black pl-8 space-y-4">
            <h2 className="text-black font-black uppercase tracking-[0.5em] text-xs">01_{data.labels.label1}</h2>
            <div className="font-sans text-xl opacity-80 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: data.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </section>
          <section className="border-l-2 border-black pl-8 space-y-4">
            <h2 className="text-black font-black uppercase tracking-[0.5em] text-xs">02_{data.labels.label2}</h2>
            <div className="font-sans text-xl opacity-80 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: data.techText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </section>
          <section className="border-l-2 border-black pl-8 space-y-4">
            <h2 className="text-black font-black uppercase tracking-[0.5em] text-xs">03_{data.labels.label3}</h2>
            <p className="font-sans text-xl opacity-80 italic whitespace-pre-line">{data.processText}</p>
          </section>
        </div>
        <aside className="lg:col-span-4 flex flex-col gap-10">
          <div className="bg-black text-white p-8 shadow-[10px_10px_0px_0px_#ca8a04]">
            <h3 className="font-black uppercase text-xs tracking-[0.4em] mb-8 border-b border-white/20 pb-4 text-yellow-400">Parameters</h3>
            {data.coreValues.map((v: any, i: number) => (
              <div key={i} className="flex justify-between border-b border-white/10 pb-2 mb-4 uppercase italic font-black text-lg">
                <span>{v.label}</span> <span className="text-xs opacity-30">VS</span> <span>{v.vs}</span>
              </div>
            ))}
          </div>
          <div className="bg-white border-4 border-black p-8 space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase border-b border-black mb-2">Metadata</p>
              <p className="font-black text-xl uppercase leading-tight">{data.client}</p>
              <p className="text-sm font-bold opacity-60 uppercase">{data.expertise}</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase border-b border-black mb-2">Specs</p>
              <p className="text-xs font-bold uppercase whitespace-pre-line">{data.techSpecs}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.images.map((img: string, idx: number) => (
          <div key={idx} className={`relative border-[6px] border-black cursor-zoom-in grayscale hover:grayscale-0 transition-all duration-500 ${idx === 0 ? 'md:col-span-2 aspect-21/9' : 'aspect-square'}`} onClick={() => setLightboxImage(img)}>
             {img ? <Image src={img} alt="Detail" fill className="object-cover" /> : <div className="w-full h-full bg-gray-100" />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ==========================================
   MAIN COMPONENT
   ========================================== */
export default function StageTshirtPage() {
  const [activeDesign, setActiveDesign] = useState('A')
  const [isEditMode, setIsEditMode] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const [projectData, setProjectData] = useState({
    title: "STAGE T-SHIRT WEGI",
    subtitle: "Identiteit op het veld. — Het vertalen van clubtrots naar een technisch en visueel sterk ontwerp.",
    client: "Heylen Vastgoed - WeGi",
    expertise: "Graphic Design / Print",
    status: "Gerealiseerd (Productie)",
    labels: {
      label1: "Visuele Identiteit",
      label2: "Technische Realisatie",
      label3: "Proces & Feedback"
    },
    description: "Voor een sportclub als **WeGi** is het stage-shirt meer dan kledij; het is een symbool van samenhorigheid. De uitdaging lag in het creëren van een fris, modern ontwerp dat de dynamiek van volleybal uitstraalt, terwijl de strikte visuele richtlijnen van de club gerespecteerd moesten worden.\n\nIk heb gekozen voor een grafische vormentaal die beweging suggereert. Door te spelen met typografie en abstracte lijnen ontstond een ontwerp dat zowel op afstand als van dichtbij overtuigt.",
    techText: "Een cruciaal aspect van textielontwerp is de **technische haalbaarheid**. In dit project moest ik rekening houden met de beperkingen en mogelijkheden van zeefdruk op sportmateriaal.\n\nDe sponsorvisibiliteit was een tweede technisch luik. Door de logo's organisch te integreren, kregen partners een prominente plek zonder dat het shirt een 'reclamebord' werd.",
    processText: "Het ontwerpproces verliep in nauwe samenspraak met de clubleiding. Door middel van verschillende revisierondes werden de verhoudingen en composities gefinetuned. Deze directe feedbacklus zorgde voor een resultaat dat breed gedragen werd binnen de club.",
    techSpecs: "• Vector-based (Adobe Illustrator)\n• Pantone Matching System (PMS)\n• Geoptimaliseerd voor zeefdruk",
    images: ["/IMG/T-shirt_Stage.jpg"],
    coreValues: [
      { label: "Dynamiek", vs: "Structuur" },
      { label: "Clubtrots", vs: "Moderniteit" },
      { label: "Sponsors", vs: "Design" },
      { label: "Printbaar", vs: "Detail" }
    ]
  })

  useEffect(() => {
    const handleScroll = () => setScrollProgress((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
    window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white relative flex overflow-hidden">
      
      {/* FULL EDITOR DRAWER */}
      <div className={`fixed inset-y-0 left-0 z-400 w-full md:w-125 bg-white border-r border-gray-200 shadow-2xl transition-transform duration-500 transform ${isEditMode ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col p-8 overflow-y-auto space-y-10 pb-32">
          <div className="flex items-center justify-between border-b pb-6">
            <h2 className="text-2xl font-black uppercase text-red-900 italic tracking-tighter">Case Editor</h2>
            <button onClick={() => setIsEditMode(false)} className="p-2 hover:bg-gray-50 rounded-full text-red-900"><X size={24} /></button>
          </div>

          <section className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase text-gray-400">Header Informatie</label>
              <input type="text" value={projectData.title} onChange={(e) => setProjectData({...projectData, title: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl font-bold uppercase text-sm border-2 border-transparent focus:border-red-900/10 outline-none" placeholder="Titel" />
              <textarea value={projectData.subtitle} onChange={(e) => setProjectData({...projectData, subtitle: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl italic text-sm outline-none" rows={2} placeholder="Ondertitel quote" />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <input type="text" value={projectData.client} onChange={(e) => setProjectData({...projectData, client: e.target.value})} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Klant" />
              <input type="text" value={projectData.expertise} onChange={(e) => setProjectData({...projectData, expertise: e.target.value})} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Expertise" />
              <input type="text" value={projectData.status} onChange={(e) => setProjectData({...projectData, status: e.target.value})} className="w-full bg-gray-50 p-3 rounded-lg text-xs outline-none" placeholder="Status" />
            </div>
          </section>

          <section className="space-y-8">
            <label className="text-[11px] font-black uppercase text-red-900">Inhoud Secties</label>
            {[1, 2, 3].map((num) => (
              <div key={num} className="space-y-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <input 
                  type="text" 
                  value={(projectData.labels as any)[`label${num}`]} 
                  onChange={(e) => setProjectData({...projectData, labels: {...projectData.labels, [`label${num}`]: e.target.value}})}
                  className="bg-transparent font-black uppercase text-red-900 text-xs outline-none w-full border-b border-red-900/20 pb-1"
                />
                <textarea 
                  rows={6} 
                  value={(projectData as any)[num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']} 
                  onChange={(e) => setProjectData({...projectData, [num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']: e.target.value})}
                  className="w-full bg-white p-4 rounded-xl text-xs leading-relaxed outline-none shadow-sm"
                />
              </div>
            ))}
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-black uppercase text-gray-400">Technische Specificaties</label>
            <textarea value={projectData.techSpecs} onChange={(e) => setProjectData({...projectData, techSpecs: e.target.value})} className="w-full bg-gray-50 p-4 rounded-xl text-xs outline-none" rows={4} />
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-black uppercase text-red-900">Media Manager</label>
            {projectData.images.map((img, idx) => (
              <div key={idx} className="flex gap-2">
                <input type="text" value={img} onChange={(e) => {
                  const newImgs = [...projectData.images]; newImgs[idx] = e.target.value; setProjectData({...projectData, images: newImgs})
                }} className="flex-1 bg-gray-50 px-4 py-2 rounded-xl text-[10px] outline-none border border-transparent focus:border-red-900/10" placeholder="Afbeelding URL" />
                <button onClick={() => setProjectData({...projectData, images: projectData.images.filter((_, i) => i !== idx)})} className="p-2 text-gray-300 hover:text-red-600 transition-colors"><Trash2 size={16}/></button>
              </div>
            ))}
            <button onClick={() => setProjectData({...projectData, images: [...projectData.images, ""]})} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 hover:text-red-900 hover:border-red-900/20 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase"><Plus size={14}/> Foto Toevoegen</button>
          </section>

          <button onClick={() => setIsEditMode(false)} className="w-full bg-red-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all">
            <Save className="inline-block mr-2" size={16}/> Wijzigingen Opslaan
          </button>
        </div>
      </div>

      {/* VIEWPORT */}
      <div className={`flex-1 transition-all duration-700 ease-in-out ${isEditMode ? 'md:ml-125 opacity-30 pointer-events-none grayscale' : 'ml-0'}`}>
        {activeDesign === 'A' ? (
          <DesignA data={projectData} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
        ) : (
          <DesignB data={projectData} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
        )}
      </div>

      {/* UI CONTROLS */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-300 flex flex-col items-center gap-4">
        <div className="flex bg-black/90 backdrop-blur-2xl p-2 rounded-3xl border border-white/10 shadow-2xl">
          <button onClick={() => setActiveDesign('A')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDesign === 'A' ? 'bg-red-900 text-white' : 'text-white/40 hover:text-white'}`}>Design A</button>
          <button onClick={() => setActiveDesign('B')} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDesign === 'B' ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}>Design B</button>
        </div>
        <button onClick={() => setIsEditMode(!isEditMode)} className={`flex items-center gap-3 px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl transition-all hover:scale-105 active:scale-95 ${isEditMode ? 'bg-white text-red-900 shadow-red-900/20' : 'bg-red-900 text-white'}`}>
          {isEditMode ? <><ChevronLeft size={18}/> Bekijk Preview</> : <><Settings size={18}/> Bewerk Case</>}
        </button>
      </div>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/98 z-500 flex items-center justify-center p-6 cursor-pointer" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><X size={40}/></button>
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <Image src={lightboxImage} alt="Fullscreen" fill className="object-contain" />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .animate-expand { animation: expand 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>
    </main>
  )
}