"use client"

import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { 
  ArrowLeft, X, Palette, Printer, Users, 
  Save, History, Settings, Smartphone, Tablet, Monitor,
  Check, Zap, Box, EyeOff, AlertCircle, ClipboardList, ExternalLink
} from "lucide-react"

/* ==========================================
   INTERFACES & TYPES
   ========================================== */
interface CoreValue {
  label: string;
  vs: string;
}

interface ProjectLabels {
  label1: string;
  label2: string;
  label3: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  client: string;
  expertise: string;
  status: string;
  isPublished: boolean;
  slug: string;
  surveyUrl: string; // Nieuw: dynamische link voor de enquête
  labels: ProjectLabels;
  description: string;
  techText: string;
  processText: string;
  images: string[];
  coreValues: CoreValue[];
}

/* ==========================================
   ONTWERP A: CLEAN RESPONSIVE
   ========================================== */
const DesignA = ({ data, setLightboxImage, scrollProgress }: { data: ProjectData, setLightboxImage: any, scrollProgress: number }) => (
  <div className="animate-fadeIn w-full overflow-x-hidden pb-20">
    <div className="fixed top-0 left-0 h-1.5 bg-red-900 z-110 transition-all duration-300 ease-out shadow-[0_2px_10px_rgba(153,27,27,0.3)]" style={{ width: `${scrollProgress}%` }} />
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-24 space-y-12 md:space-y-32">
      <section className="max-w-5xl">
        <div className="inline-flex items-center gap-2 text-gray-400 mb-6 md:mb-12 hover:text-red-900 transition-colors cursor-pointer group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-red-900 uppercase leading-[0.9] mb-4 wrap-break-word">
          {data.title || "Project Titel"}
        </h1>
        <div className="w-20 md:w-40 h-2 bg-red-900 mt-4 md:mt-8 mb-8 origin-left"></div>
        
        {data.surveyUrl && (
          <a href={data.surveyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-red-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-lg mb-10">
            <ClipboardList size={14} /> Naar Enquête
          </a>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-gray-100 pt-8 md:pt-12">
          <div className="md:col-span-2">
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 leading-tight font-light italic tracking-tight">
              "{data.subtitle || "Voeg hier een inspirerende ondertitel toe."}"
            </p>
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 space-y-4 md:space-y-6 md:border-l border-gray-100 md:pl-10">
            <div><span className="text-red-900 font-black block mb-1">Klant</span> <span className="text-gray-600">{data.client || "Naam klant"}</span></div>
            <div><span className="text-red-900 font-black block mb-1">Expertise</span> <span className="text-gray-600">{data.expertise || "Vakgebied"}</span></div>
            <div><span className="text-red-900 font-black block mb-1">Status</span> <span className="text-gray-600">{data.status || "Status"}</span></div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
        <div className="lg:col-span-8 space-y-16 md:space-y-24 text-gray-700 font-light leading-relaxed text-base md:text-xl">
          {[
            { icon: <Palette size={24}/>, label: data.labels.label1, text: data.description },
            { icon: <Printer size={24}/>, label: data.labels.label2, text: data.techText },
            { icon: <Users size={24}/>, label: data.labels.label3, text: data.processText, style: "italic" }
          ].map((item: any, idx) => (
            <div key={idx} className="space-y-4 md:space-y-6 group">
              <div className="flex items-center gap-4 text-red-900">
                <div className="p-2 md:p-3 bg-red-50 rounded-xl md:rounded-2xl">{item.icon}</div>
                <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter">{item.label}</h2>
              </div>
              <p className={`whitespace-pre-line border-l-2 border-gray-100 pl-6 md:pl-8 ${item.style || ''}`}>
                {item.text || "Schrijf hier de inhoud voor dit onderdeel..."}
              </p>
            </div>
          ))}
        </div>
        <aside className="lg:col-span-4 self-start bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl lg:sticky lg:top-24">
          <h3 className="font-black text-red-900 text-[10px] tracking-[0.4em] uppercase text-center mb-8">Core DNA</h3>
          <ul className="space-y-6 md:space-y-8 font-black text-gray-900 uppercase tracking-tighter text-xl md:text-2xl italic">
            {data.coreValues.map((v, i) => (
              <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0">
                <span className="text-gray-800 text-sm md:text-xl">{v.label}</span> 
                <span className="text-red-900/20 text-[9px] font-black not-italic px-2 py-1 bg-gray-50 rounded-full mx-2">VS</span> 
                <span className="text-red-900 text-sm md:text-xl">{v.vs}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {data.images.map((img, idx) => (
          <div key={idx} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[4rem] shadow-xl border border-gray-100 bg-gray-50 flex items-center justify-center ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
             <span className="text-gray-300 uppercase font-black text-[10px] tracking-widest">Image Placeholder</span>
             {img && <Image src={img} alt="Project" fill className="object-cover" />}
          </div>
        ))}
      </section>
    </div>
  </div>
)

/* ==========================================
   ONTWERP B: INDUSTRIAL DARK
   ========================================== */
const DesignB = ({ data, setLightboxImage }: { data: ProjectData, setLightboxImage: any }) => (
  <div className="bg-[#0f0f0f] text-white min-h-screen animate-fadeIn font-mono w-full overflow-x-hidden pb-20">
    <div className="border-b border-white/10 p-6 md:p-16 relative overflow-hidden pt-24">
      <div className="absolute top-0 right-0 text-[25vw] font-black text-white/5 leading-none pointer-events-none uppercase">DNA</div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-amber-500 mb-6">
          <div className="h-px w-12 bg-amber-500" />
          <span className="text-[10px] font-bold tracking-widest uppercase">{data.status || "STATUS"}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8 wrap-break-word">
          {data.title || "PROJECT TITEL"}
        </h1>
        {data.surveyUrl && (
          <a href={data.surveyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 border border-amber-500 text-amber-500 px-8 py-4 mb-8 font-bold uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-black transition-all">
            <Zap size={18} fill="currentColor" /> NAAR ENQUÊTE <ExternalLink size={14} />
          </a>
        )}
        <p className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light border-l-4 border-amber-500 pl-6 py-1">
          {data.subtitle || "Ondertitel komt hier."}
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-white/10">
      <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-10 space-y-12 bg-[#151515]">
        <div>
          <h3 className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6">Specs</h3>
          <div className="space-y-4">
            <div><span className="text-gray-500 block text-[9px] uppercase mb-1">Klant</span> <span className="text-sm font-bold uppercase">{data.client || "-"}</span></div>
            <div><span className="text-gray-500 block text-[9px] uppercase mb-1">Expertise</span> <span className="text-sm font-bold uppercase">{data.expertise || "-"}</span></div>
          </div>
        </div>
        <div>
          <h3 className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6">Core DNA</h3>
          <div className="space-y-3">
            {data.coreValues.map((v, i) => (
              <div key={i} className="flex justify-between items-center text-[11px] font-bold border-b border-white/5 pb-2">
                <span className="text-white uppercase">{v.label}</span>
                <span className="text-amber-500 italic">VS</span>
                <span className="text-white uppercase">{v.vs}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="lg:col-span-8 p-6 md:p-16 space-y-16 md:space-y-24">
        {[
          { label: data.labels.label1, text: data.description, icon: <Box size={18}/> },
          { label: data.labels.label2, text: data.techText, icon: <Zap size={18}/> },
          { label: data.labels.label3, text: data.processText, icon: <Users size={18}/> }
        ].map((item, idx) => (
          <section key={idx} className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 text-amber-500">
              {item.icon}
              <h2 className="text-lg md:text-xl font-black uppercase tracking-[0.2em]">{item.label}</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base whitespace-pre-line border-l border-white/5 pl-6">
              {item.text || "Inhoud komt hier..."}
            </p>
          </section>
        ))}
      </main>
    </div>
  </div>
)

/* ==========================================
   MAIN COMPONENT
   ========================================== */
export default function UltimateProjectPage() {
  const [activeDesign, setActiveDesign] = useState<'A' | 'B'>('A')
  const [isEditMode, setIsEditMode] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [lastSaved, setLastSaved] = useState<string>("Lege template")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const emptyData: ProjectData = {
    title: "",
    subtitle: "",
    client: "",
    expertise: "",
    status: "CONCEPT",
    isPublished: false,
    slug: "nieuw-project",
    surveyUrl: "https://forms.gle/yzFqSPJKMJvbK4nbA", // Default link
    labels: { label1: "CONCEPT", label2: "REALISATIE", label3: "RESULTAAT" },
    description: "",
    techText: "",
    processText: "",
    images: ["", "", ""],
    coreValues: [
      { label: "Waarde 1", vs: "Contrast 1" },
      { label: "Waarde 2", vs: "Contrast 2" },
      { label: "Waarde 3", vs: "Contrast 3" },
      { label: "Waarde 4", vs: "Contrast 4" }
    ]
  }

  const [projectData, setProjectData] = useState<ProjectData>(emptyData)

  useEffect(() => {
    const saved = localStorage.getItem('project_data_cache')
    if (saved) {
      setProjectData(JSON.parse(saved))
      setLastSaved("Data hersteld")
    }
  }, [])

  const updateProject = (updates: Partial<ProjectData>) => {
    setProjectData(prev => ({ ...prev, ...updates }))
    setHasUnsavedChanges(true)
  }

  const handleSave = () => {
    localStorage.setItem('project_data_cache', JSON.stringify(projectData))
    setLastSaved(new Date().toLocaleTimeString())
    setHasUnsavedChanges(false)
    setIsEditMode(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) setScrollProgress((window.scrollY / totalHeight) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className={`min-h-screen bg-[#F8F8F8] relative flex font-sans ${isEditMode ? 'overflow-hidden' : ''}`}>
      
      {/* EDITOR SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 z-999 w-full sm:w-125 bg-white border-r border-gray-100 shadow-2xl transition-all duration-700 ease-in-out transform ${isEditMode ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col overflow-hidden">
          <div className="p-8 flex items-center justify-between border-b">
            <h2 className="text-2xl font-black uppercase text-red-900 italic tracking-tighter">Project Editor</h2>
            <button onClick={() => setIsEditMode(false)} className="p-3 hover:bg-red-50 rounded-2xl text-red-900 transition-all"><X size={24} /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-10 pb-40 custom-scrollbar">
            {/* LINKS & URLS */}
            <section className="p-6 bg-red-50/50 rounded-[2rem] border border-red-100 space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-red-900 tracking-widest">Enquête URL</label>
                <input value={projectData.surveyUrl} onChange={(e) => updateProject({ surveyUrl: e.target.value })} className="w-full bg-white p-3 rounded-xl text-xs border border-red-100 outline-none focus:border-red-900" placeholder="https://forms.gle/..." />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-red-900 tracking-widest">Slug</label>
                <input value={projectData.slug} onChange={(e) => updateProject({ slug: e.target.value })} className="w-full bg-white p-3 rounded-xl text-xs border border-red-100 outline-none focus:border-red-900" />
              </div>
            </section>

            {/* BASIS INFO */}
            <section className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-red-900">Project Titel</label>
                <input value={projectData.title} onChange={(e) => updateProject({ title: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl font-bold text-xs border border-transparent focus:border-red-900 focus:bg-white outline-none" placeholder="Titel..." />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-red-900">Ondertitel</label>
                <textarea value={projectData.subtitle} onChange={(e) => updateProject({ subtitle: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl text-xs border border-transparent focus:border-red-900 focus:bg-white outline-none" rows={2} placeholder="Korte omschrijving..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-red-900">Klant</label>
                  <input value={projectData.client} onChange={(e) => updateProject({ client: e.target.value })} className="w-full bg-gray-50 p-3 rounded-xl text-[11px] border border-transparent focus:border-red-900 focus:bg-white outline-none" placeholder="Naam klant..." />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-red-900">Expertise</label>
                  <input value={projectData.expertise} onChange={(e) => updateProject({ expertise: e.target.value })} className="w-full bg-gray-50 p-3 rounded-xl text-[11px] border border-transparent focus:border-red-900 focus:bg-white outline-none" placeholder="Bijv. Design..." />
                </div>
              </div>
            </section>

            {/* HOOFDSTUKKEN */}
            <section className="space-y-6">
              <label className="text-[10px] font-black uppercase text-red-900">Inhoud</label>
              {[1, 2, 3].map((num) => (
                <div key={num} className="p-4 bg-white border border-gray-100 rounded-2xl space-y-3 shadow-sm">
                  <input 
                    value={(projectData.labels as any)[`label${num}`]} 
                    onChange={(e) => updateProject({ labels: {...projectData.labels, [`label${num}`]: e.target.value}})}
                    className="bg-red-50 text-red-900 px-3 py-1.5 rounded-lg font-black uppercase text-[9px] w-full outline-none"
                    placeholder={`Sectie ${num} Naam`}
                  />
                  <textarea 
                    rows={4} 
                    value={(projectData as any)[num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']} 
                    onChange={(e) => updateProject({ [num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']: e.target.value })}
                    className="w-full text-[11px] leading-relaxed outline-none resize-none"
                    placeholder="Voer tekst in..."
                  />
                </div>
              ))}
            </section>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-gray-100">
             <button onClick={handleSave} disabled={!hasUnsavedChanges} className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${hasUnsavedChanges ? 'bg-red-900 text-white shadow-xl hover:bg-black' : 'bg-gray-100 text-gray-300'}`}>
               <Save size={16} className="inline mr-2"/> Opslaan
             </button>
          </div>
        </div>
      </div>

      {/* PREVIEW AREA */}
      <div className={`flex-1 transition-all duration-700 flex flex-col min-h-screen ${isEditMode ? 'lg:ml-125 pointer-events-none' : 'ml-0'}`}>
        <div className="h-20 bg-transparent flex items-center justify-between px-10 absolute top-0 left-0 right-0 z-40">
           <div className="hidden md:flex bg-white/20 backdrop-blur-md p-1.5 rounded-2xl items-center shadow-lg border border-white/30">
             <button onClick={() => setPreviewDevice('mobile')} className={`p-2 rounded-xl transition-all ${previewDevice === 'mobile' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-400'}`}><Smartphone size={18}/></button>
             <button onClick={() => setPreviewDevice('tablet')} className={`p-2 rounded-xl transition-all ${previewDevice === 'tablet' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-400'}`}><Tablet size={18}/></button>
             <button onClick={() => setPreviewDevice('desktop')} className={`p-2 rounded-xl transition-all ${previewDevice === 'desktop' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-400'}`}><Monitor size={18}/></button>
           </div>
           
           <div className="flex bg-black/90 p-1.5 rounded-full shadow-2xl">
             <button onClick={() => setActiveDesign('A')} className={`px-6 py-2 rounded-full text-[9px] font-black uppercase transition-all ${activeDesign === 'A' ? 'bg-red-900 text-white' : 'text-white/40'}`}>Modern</button>
             <button onClick={() => setActiveDesign('B')} className={`px-6 py-2 rounded-full text-[9px] font-black uppercase transition-all ${activeDesign === 'B' ? 'bg-amber-600 text-white' : 'text-white/40'}`}>Industrial</button>
           </div>
        </div>

        <div className="flex-1 bg-white flex justify-center items-start overflow-y-auto pt-24">
          <div className={`transition-all duration-700 w-full ${
            previewDevice === 'mobile' ? 'max-w-93.75 min-h-166.75 sm:rounded-[3rem] sm:border-12 border-black mb-10 shadow-2xl overflow-hidden' : 
            previewDevice === 'tablet' ? 'max-w-3xl min-h-256 sm:rounded-[2rem] mb-10 shadow-2xl overflow-hidden' : 
            'max-w-full min-h-full'
          } ${isEditMode ? 'opacity-30 scale-95' : 'opacity-100 scale-100'}`}>
            {activeDesign === 'A' ? (
              <DesignA data={projectData} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
            ) : (
              <DesignB data={projectData} setLightboxImage={setLightboxImage} />
            )}
          </div>
        </div>
      </div>

      {!isEditMode && (
        <button onClick={() => setIsEditMode(true)} className="fixed bottom-10 right-10 bg-red-900 text-white p-6 rounded-full shadow-2xl z-50 hover:scale-110 transition-all">
          <Settings size={28} className="animate-spin-slow" />
        </button>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </main>
  )
}