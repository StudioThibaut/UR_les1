"use client"

import Image from "next/image"
import { useState, useEffect, useMemo } from "react"
import { 
  ArrowLeft, X, Palette, Printer, Users, 
  Save, Type, Layout, ChevronLeft,
  Plus, Trash2, Image as ImageIcon, Tag, Globe, Eye, EyeOff, 
  Monitor, Smartphone, Tablet, History, Settings, Info, AlertCircle, RefreshCcw,
  Check, Zap, Box, ClipboardList
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
  seoTitle: string;
  seoDesc: string;
  labels: ProjectLabels;
  description: string;
  techText: string;
  processText: string;
  images: string[];
  coreValues: CoreValue[];
}

/* ==========================================
   HULPCOMPONENTEN
   ========================================== */
const ValidationBadge = ({ condition, text }: { condition: boolean, text: string }) => (
  <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${condition ? 'text-green-500' : 'text-amber-500'}`}>
    {condition ? <Check size={12}/> : <AlertCircle size={12}/>}
    {text}
  </div>
);

/* ==========================================
   ONTWERP A: CLEAN RESPONSIVE
   ========================================== */
const DesignA = ({ data, setLightboxImage, scrollProgress }: { data: ProjectData, setLightboxImage: any, scrollProgress: number }) => (
  <div className="animate-fadeIn w-full overflow-x-hidden">
    <div className="fixed top-0 left-0 h-1.5 bg-red-900 z-110 transition-all duration-300 ease-out shadow-[0_2px_10px_rgba(153,27,27,0.3)]" style={{ width: `${scrollProgress}%` }} />
    <div className="max-w-350 mx-auto px-6 lg:px-12 py-10 md:py-24 space-y-12 md:space-y-32">
      <section className="max-w-5xl">
        <div className="inline-flex items-center gap-2 text-gray-400 mb-6 md:mb-12 hover:text-red-900 transition-colors cursor-pointer group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Terug naar portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-red-900 uppercase leading-[0.9] mb-4 wrap-break-word">
          {data.title || "Naamloos Project"}
        </h1>
        <div className="w-20 md:w-40 h-2 bg-red-900 mt-4 md:mt-8 mb-8 origin-left animate-expand"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-gray-100 pt-8 md:pt-12">
          <div className="md:col-span-2">
            <p className="text-xl sm:text-2xl md:text-4xl text-gray-800 leading-tight font-light italic tracking-tight">
              "{data.subtitle}"
            </p>
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-400 space-y-4 md:space-y-6 md:border-l border-gray-100 md:pl-10">
            <div><span className="text-red-900 font-black block mb-1">Klant</span> <span className="text-gray-600">{data.client}</span></div>
            <div><span className="text-red-900 font-black block mb-1">Expertise</span> <span className="text-gray-600">{data.expertise}</span></div>
            <div><span className="text-red-900 font-black block mb-1">Status</span> <span className="text-gray-600">{data.status}</span></div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
        <div className="lg:col-span-8 space-y-16 md:space-y-24 text-gray-700 font-light leading-relaxed text-base md:text-xl">
          {[
            { icon: <Palette size={24}/>, label: data.labels.label1, text: data.description, style: "" },
            { icon: <Printer size={24}/>, label: data.labels.label2, text: data.techText, style: "" },
            { icon: <Users size={24}/>, label: data.labels.label3, text: data.processText, style: "italic" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4 md:space-y-6 group">
              <div className="flex items-center gap-4 text-red-900">
                <div className="p-2 md:p-3 bg-red-50 rounded-xl md:rounded-2xl">{item.icon}</div>
                <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter">{item.label}</h2>
              </div>
              <p className={`whitespace-pre-line border-l-2 border-gray-100 pl-6 md:pl-8 ${item.style}`}>{item.text}</p>
            </div>
          ))}
        </div>
        <aside className="lg:col-span-4 self-start bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl lg:sticky lg:top-24">
          <div className="flex items-center justify-center gap-3 mb-8">
             <div className="h-px w-6 bg-red-900/20" />
             <h3 className="font-black text-red-900 text-[10px] tracking-[0.4em] uppercase text-center">Core DNA</h3>
             <div className="h-px w-6 bg-red-900/20" />
          </div>
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

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pb-20">
        {data.images.map((img, idx) => (
          <div key={idx} className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[4rem] shadow-xl cursor-zoom-in group transition-all duration-700 ${idx === 0 ? 'md:col-span-2 aspect-video md:aspect-21/9' : 'aspect-square'}`} onClick={() => setLightboxImage(img)}>
            <Image src={img} alt="Gallery" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
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
  <div className="bg-[#0f0f0f] text-white min-h-screen animate-fadeIn font-mono w-full overflow-x-hidden">
    <div className="border-b border-white/10 p-6 md:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[25vw] font-black text-white/2 leading-none pointer-events-none uppercase">
        {data.expertise.split(' ')[0]}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-amber-500 mb-4 md:mb-6">
          <div className="h-px w-8 md:w-12 bg-amber-500" />
          <span className="text-[10px] font-bold tracking-widest uppercase">{data.status}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8 wrap-break-word">
          {data.title}
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light border-l-2 md:border-l-4 border-amber-500 pl-4 md:pl-6 py-1">
          {data.subtitle}
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-white/5 md:border-white/10">
      <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-10 space-y-8 md:space-y-12 bg-[#151515]">
        <div>
          <h3 className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">Specifikaties</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div><span className="text-gray-500 block text-[9px] uppercase mb-1">Klant</span> <span className="text-[11px] md:text-sm font-bold uppercase">{data.client}</span></div>
            <div><span className="text-gray-500 block text-[9px] uppercase mb-1">Expertise</span> <span className="text-[11px] md:text-sm font-bold uppercase">{data.expertise}</span></div>
          </div>
        </div>
        <div>
          <h3 className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-6">Core DNA</h3>
          <div className="space-y-3">
            {data.coreValues.map((v, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] md:text-[11px] font-bold border-b border-white/5 pb-2">
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
              {item.text}
            </p>
          </section>
        ))}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 pt-12 md:pt-20">
          {data.images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden grayscale hover:grayscale-0 transition-all border border-white/10 ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`} onClick={() => setLightboxImage(img)}>
              <Image src={img} alt="Asset" fill className="object-cover" />
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/80 px-2 md:px-3 py-1 text-[7px] md:text-[8px] font-bold">T-shirt{idx + 1}</div>
            </div>
          ))}
        </section>
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
  const [lastSaved, setLastSaved] = useState<string>("Sync actief")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const defaultData: ProjectData = {
    title: "STAGE T-SHIRT WEGI",
    subtitle: "Identiteit op het veld. — Het vertalen van clubtrots naar een technisch en visueel sterk ontwerp.",
    client: "HEYLEN VASTGOED - WEGI",
    expertise: "GRAPHIC DESIGN / PRINT",
    status: "GEREALISEERD (PRODUCTIE)",
    isPublished: true,
    slug: "stage-tshirt-wegi",
    seoTitle: "WeGi Volleybal Stage T-shirt Design | Portfolio",
    seoDesc: "Bekijk het grafisch ontwerp proces voor de stage shirts van WeGi volleybal club.",
    labels: { label1: "VISUELE IDENTITEIT", label2: "TECHNISCHE REALISATIE", label3: "PROCES & FEEDBACK" },
    description: "Voor een sportclub als WeGi is het stage-shirt meer dan kledij; het is een symbool van samenhorigheid. De uitdaging lag in het creëren van een fris, modern ontwerp dat de dynamiek van volleybal uitstraalt, terwijl de strikte visuele richtlijnen van de club gerespecteerd moesten worden. Ik heb gekozen voor een grafische vormentaal die beweging suggereert. Door te spelen met typografie en abstracte lijnen ontstond een ontwerp dat zowel op afstand (herkenbaarheid op het veld) als van dichtbij (detail en kwaliteit) overtuigt.",
    techText: "Een cruciaal aspect van textielontwerp is de technische haalbaarheid. In dit project moest ik rekening houden met de beperkingen en mogelijkheden van zeefdruk op sportmateriaal. Dit betekende het minimaliseren van kleurgebruik zonder aan impact in te boeten en het garanderen dat fijne details behouden bleven na productie. De sponsorvisibiliteit was een tweede technisch luik. Door de logo's van de partners organisch te integreren in het ontwerp, kregen zij een prominente plek zonder dat het shirt een 'reclamebord' werd. Het resultaat is een gebalanceerde compositie tussen commerciële noodzaak en esthetische waarde.",
    processText: "Het ontwerpproces verliep in nauwe samenspraak met de clubleiding. Door middel van verschillende revisierondes werden de verhoudingen en composities gefinetuned. Deze directe feedbacklus zorgde voor een resultaat dat breed gedragen werd binnen de club en perfect aansluit bij de 'camp-vibe' van de stage.",
    images: ["/IMG/T-shirt_Stage.jpg"],
    coreValues: [
      { label: "Dynamiek", vs: "Structuur" },
      { label: "Clubtrots", vs: "Moderniteit" },
      { label: "Sponsors", vs: "Design" },
      { label: "Printbaar", vs: "Gedetailleerd" }
    ]
  }

  const [projectData, setProjectData] = useState<ProjectData>(defaultData)

  useEffect(() => {
    const saved = localStorage.getItem('project_data_cache')
    if (saved) {
      setProjectData(JSON.parse(saved))
      setLastSaved("Geladen uit cache")
    }
  }, [])

  const validations = useMemo(() => ({
    title: projectData.title.length > 3,
    slug: /^[a-z0-9-]+$/.test(projectData.slug),
    images: projectData.images.filter(img => img.length > 0).length > 0,
    subtitle: projectData.subtitle.length > 10
  }), [projectData])

  const isValid = Object.values(validations).every(v => v === true)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / totalHeight) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const updateProject = (updates: Partial<ProjectData>) => {
    setProjectData(prev => ({ ...prev, ...updates }))
    setHasUnsavedChanges(true)
  }

  const handleSave = () => {
    if(!isValid) return alert("Corrigeer eerst de fouten in de editor.")
    localStorage.setItem('project_data_cache', JSON.stringify(projectData))
    setLastSaved(new Date().toLocaleTimeString())
    setHasUnsavedChanges(false)
    setIsEditMode(false)
    alert("Project succesvol opgeslagen!")
  }

  const handleReset = () => {
    if(confirm("Weet je zeker dat je alle wijzigingen wilt wissen?")) {
      setProjectData(defaultData)
      localStorage.removeItem('project_data_cache')
      setHasUnsavedChanges(false)
    }
  }

  return (
    <main className={`min-h-screen bg-[#F8F8F8] relative flex font-sans ${isEditMode ? 'overflow-hidden' : ''}`}>
      
      {/* ADMIN DRAWER - FIX: z-index op 999 voor absolute voorrang */}
      <div className={`fixed inset-y-0 left-0 z-999 w-full sm:w-125 bg-white border-r border-gray-100 shadow-2xl transition-all duration-700 ease-in-out transform ${isEditMode ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col overflow-hidden">
          
          <div className="p-6 sm:p-10 flex items-center justify-between border-b border-gray-50">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic text-red-900 tracking-tighter">Admin</h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <History size={12} /> {lastSaved}
              </div>
            </div>
            <button onClick={() => setIsEditMode(false)} className="p-3 hover:bg-red-50 rounded-2xl text-red-900 transition-all">
              <X size={20} />
            </button>
          </div>

          {/* FIX: pb-48 zorgt dat scrollbare content NOOIT achter de knoppen blijft hangen */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10 pb-48 custom-scrollbar">
            {/* PUBLICATIE STATUS */}
            <section className="p-6 sm:p-8 bg-gray-50 rounded-[2rem] border border-gray-100 space-y-6">
               <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Publicatie</label>
                  <button 
                    onClick={() => updateProject({ isPublished: !projectData.isPublished })}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[9px] font-black transition-all ${projectData.isPublished ? 'bg-green-500 text-white shadow-lg shadow-green-100' : 'bg-red-900 text-white shadow-lg shadow-red-100'}`}
                  >
                    {projectData.isPublished ? <Check size={12}/> : <EyeOff size={12}/>} {projectData.isPublished ? 'LIVE' : 'CONCEPT'}
                  </button>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-black text-red-900 uppercase">Slug</label>
                    <ValidationBadge condition={validations.slug} text="" />
                  </div>
                  <input value={projectData.slug} onChange={(e) => updateProject({ slug: e.target.value })} className="w-full bg-white px-4 py-3 rounded-xl text-xs border border-gray-100 focus:border-red-900 outline-none transition-all" />
               </div>
            </section>

            {/* CONTENT EDITOR */}
            <section className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-red-900">Project Titel</label>
                <input value={projectData.title} onChange={(e) => updateProject({ title: e.target.value })} className="w-full bg-gray-50 p-4 rounded-xl font-bold uppercase text-xs border border-transparent focus:border-red-900 focus:bg-white outline-none transition-all" />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-red-900">Hoofdstukken</label>
                {[1, 2, 3].map((num) => (
                  <div key={num} className="p-4 bg-white border border-gray-100 rounded-2xl space-y-3 shadow-sm">
                    <input 
                      value={(projectData.labels as any)[`label${num}`]} 
                      onChange={(e) => updateProject({ labels: {...projectData.labels, [`label${num}`]: e.target.value}})}
                      className="bg-red-50/50 px-3 py-1.5 rounded-lg font-black uppercase text-red-900 text-[9px] w-full outline-none"
                    />
                    <textarea 
                      rows={4} 
                      value={(projectData as any)[num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']} 
                      onChange={(e) => updateProject({ [num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']: e.target.value })}
                      className="w-full text-[11px] leading-relaxed outline-none resize-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FIX: Absolute footer onderaan de drawer met krachtige schaduw */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 shadow-[0_-20px_40px_rgba(255,255,255,1)] z-1000">
             <button onClick={() => window.open('/enquete', '_blank')} className="w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest border-2 border-red-900 text-red-900 hover:bg-red-50 transition-all flex items-center justify-center gap-2 group mb-3">
               <ClipboardList size={16} className="group-hover:rotate-12 transition-transform" /> Naar Enquête
             </button>
             
             <button onClick={handleSave} disabled={!hasUnsavedChanges || !isValid} className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${hasUnsavedChanges && isValid ? 'bg-red-900 text-white hover:bg-black translate-y-0 shadow-xl shadow-red-100' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}>
               <Save size={16} className="inline mr-2"/> Wijzigingen Vastleggen
             </button>
          </div>
        </div>
      </div>

      {/* VIEWPORT AREA */}
      <div className={`flex-1 transition-all duration-700 flex flex-col min-h-screen ${isEditMode ? 'lg:ml-125 pointer-events-none' : 'ml-0'}`}>
        
        {/* TOP BAR - FIX: z-index op 40 (lager dan drawer) */}
        <div className="h-16 sm:h-20 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sm:px-10 sticky top-0 z-40">
           <div className="hidden md:flex bg-gray-50 p-1 rounded-2xl items-center">
             <button onClick={() => setPreviewDevice('mobile')} className={`p-2.5 rounded-xl transition-all ${previewDevice === 'mobile' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-300 hover:text-gray-500'}`}><Smartphone size={18}/></button>
             <button onClick={() => setPreviewDevice('tablet')} className={`p-2.5 rounded-xl transition-all ${previewDevice === 'tablet' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-300 hover:text-gray-500'}`}><Tablet size={18}/></button>
             <button onClick={() => setPreviewDevice('desktop')} className={`p-2.5 rounded-xl transition-all ${previewDevice === 'desktop' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-300 hover:text-gray-500'}`}><Monitor size={18}/></button>
             <div className="w-px h-4 bg-gray-200 mx-3" />
             <button onClick={() => window.location.href = 'https://forms.gle/yzFqSPJKMJvbK4nbA'} className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase text-gray-400 hover:text-red-900 transition-all">
                <ClipboardList size={14} /> Enquête
             </button>
           </div>
           
           <div className="flex bg-black p-1 rounded-full ml-auto md:ml-0">
             <button onClick={() => setActiveDesign('A')} className={`px-4 sm:px-6 py-2 rounded-full text-[8px] sm:text-[9px] font-black uppercase transition-all ${activeDesign === 'A' ? 'bg-red-900 text-white' : 'text-white/40 hover:text-white/70'}`}>Modern</button>
             <button onClick={() => setActiveDesign('B')} className={`px-4 sm:px-6 py-2 rounded-full text-[8px] sm:text-[9px] font-black uppercase transition-all ${activeDesign === 'B' ? 'bg-amber-600 text-white' : 'text-white/40 hover:text-white/70'}`}>Industrial</button>
           </div>
        </div>

        {/* ACTUAL CONTENT PREVIEW */}
        <div className="flex-1 bg-[#ffffff] p-0 sm:p-6 md:p-16 flex justify-center items-start overflow-y-auto">
          <div className={`bg-white shadow-2xl transition-all duration-700 origin-top w-full overflow-hidden ${
            previewDevice === 'mobile' ? 'max-w-93.75 min-h-166.75 sm:rounded-[3rem] sm:border-12 border-black mt-4' : 
            previewDevice === 'tablet' ? 'max-w-3xl min-h-256 sm:rounded-[2rem] mt-4' : 
            'max-w-full min-h-full rounded-none'
          } ${isEditMode ? 'opacity-30 grayscale scale-95' : 'opacity-100 scale-100'}`}>
            {activeDesign === 'A' ? (
              <DesignA data={projectData} setLightboxImage={setLightboxImage} scrollProgress={scrollProgress} />
            ) : (
              <DesignB data={projectData} setLightboxImage={setLightboxImage} />
            )}
          </div>
        </div>
      </div>

      {!isEditMode && (
        <button onClick={() => setIsEditMode(true)} className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 bg-red-900 text-white p-5 sm:p-6 rounded-full shadow-2xl z-350 hover:scale-110 active:scale-95 transition-all">
          <Settings size={24} className="animate-spin-slow" />
        </button>
      )}

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-1000 flex items-center justify-center p-4 sm:p-10" onClick={() => setLightboxImage(null)}>
          <div className="relative w-full h-full">
            <Image src={lightboxImage} alt="Fullscreen Preview" fill className="object-contain" />
          </div>
          <button className="absolute top-10 right-10 text-white p-4">
             <X size={32} />
          </button>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </main>
  )
}