"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  X, Palette, Printer, Users,
  Save, Settings, Smartphone, Tablet, Monitor,
  ClipboardList, Plus, Trash2
} from "lucide-react"

interface CoreValue {
  label: string
  vs: string
}

interface ProjectLabels {
  label1: string
  label2: string
  label3: string
}

interface ProjectData {
  title: string
  subtitle: string
  client: string
  expertise: string
  status: string
  isPublished: boolean
  slug: string
  surveyUrl: string
  labels: ProjectLabels
  description: string
  techText: string
  processText: string
  images: string[]
  coreValues: CoreValue[]
}

const DesignA = ({ data, scrollProgress }: { data: ProjectData, scrollProgress: number }) => (
  <div className="w-full overflow-x-hidden pb-20 bg-white">
    <div className="fixed top-0 left-0 h-1 bg-red-900 z-60 transition-all duration-300 ease-out" style={{ width: `${scrollProgress}%` }} />

    {/* Hero */}
    <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pt-24 pb-20 border-b border-gray-100">
      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-6">
        {data.client || "Klant"} · {data.expertise || "Expertise"}
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-gray-900 mb-8">
        {data.title || "Project Titel"}
      </h1>
      <div className="w-20 h-0.5 bg-red-900 mb-10 origin-left" />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <p className="text-lg md:text-2xl text-gray-400 font-light italic max-w-2xl leading-relaxed">
          "{data.subtitle || "Voeg hier een inspirerende ondertitel toe."}"
        </p>
        {data.surveyUrl && (
          <a
            href={data.surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-900 text-white rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20 shrink-0"
          >
            <ClipboardList size={14} /> Naar enquête
          </a>
        )}
      </div>
    </section>

    {/* Projectinfo */}
    <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {[
          { label: "Klant", value: data.client || "—" },
          { label: "Expertise", value: data.expertise || "—" },
          { label: "Status", value: data.status || "—" },
        ].map((item, i) => (
          <div key={i} className="py-8 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-red-900 mb-2">{item.label}</p>
            <p className="font-black text-xl uppercase tracking-tight text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Tekst + aside */}
    <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40 border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
        <div className="lg:col-span-8 space-y-0">
          {[
            { icon: <Palette size={20} />, tag: "Concept", title: data.labels.label1, body: data.description },
            { icon: <Printer size={20} />, tag: "Realisatie", title: data.labels.label2, body: data.techText },
            { icon: <Users size={20} />, tag: "Resultaat", title: data.labels.label3, body: data.processText },
          ].map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-t border-gray-100 py-14">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 text-red-900 mb-2">
                  {s.icon}
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">{s.tag}</p>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">{s.title}</h3>
              </div>
              <div className="md:col-span-8 text-gray-500 font-light leading-relaxed text-base md:text-lg whitespace-pre-line">
                {s.body || <span className="text-gray-300 italic">Nog geen inhoud...</span>}
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-8 bg-gray-50 rounded-3xl p-10 border border-gray-100 space-y-6">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-red-900 border-b border-gray-200 pb-4">Core DNA</p>
            <div className="space-y-3">
              {data.coreValues.map((v, i) => (
                <div key={i} className="grid grid-cols-3 items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="font-black text-sm uppercase tracking-tight text-gray-900">{v.label}</span>
                  <span className="text-center text-[10px] font-black text-red-900/30">VS</span>
                  <span className="font-black text-sm uppercase tracking-tight text-gray-400 text-right">{v.vs}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>

    {/* Galerij */}
    <section className="px-6 md:px-16 lg:px-24 py-28 md:py-40">
      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-4">Galerij</p>
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-16">Visueel overzicht.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
          >
            {img
              ? <Image src={img} alt="Project" fill className="object-cover" />
              : <p className="text-gray-300 uppercase font-black text-[10px] tracking-widest">Afbeelding {idx + 1}</p>
            }
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default function AdminProjectPage() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [lastSaved, setLastSaved] = useState("Nog niet opgeslagen")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const emptyData: ProjectData = {
    title: "",
    subtitle: "",
    client: "",
    expertise: "",
    status: "CONCEPT",
    isPublished: false,
    slug: "nieuw-project",
    surveyUrl: "https://forms.gle/yzFqSPJKMJvbK4nbA",
    labels: { label1: "CONCEPT", label2: "REALISATIE", label3: "RESULTAAT" },
    description: "",
    techText: "",
    processText: "",
    images: ["", "", ""],
    coreValues: [
      { label: "Waarde 1", vs: "Contrast 1" },
      { label: "Waarde 2", vs: "Contrast 2" },
      { label: "Waarde 3", vs: "Contrast 3" },
      { label: "Waarde 4", vs: "Contrast 4" },
    ]
  }

  const [projectData, setProjectData] = useState<ProjectData>(emptyData)

  useEffect(() => {
    const saved = localStorage.getItem('project_data_cache')
    if (saved) { setProjectData(JSON.parse(saved)); setLastSaved("Data hersteld") }
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
      const el = document.getElementById('preview-scroll')
      if (!el) return
      const total = el.scrollHeight - el.clientHeight
      if (total > 0) setScrollProgress((el.scrollTop / total) * 100)
    }
    const el = document.getElementById('preview-scroll')
    el?.addEventListener('scroll', handleScroll)
    return () => el?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white relative flex font-sans overflow-hidden">

      {/* ── EDITOR SIDEBAR ── */}
      <div className={`fixed inset-y-0 left-0 z-50 w-full md:w-120 bg-white border-r border-gray-100 shadow-2xl transition-transform duration-500 transform ${isEditMode ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">

          {/* Sidebar header */}
          <div className="px-10 pt-10 pb-8 border-b border-gray-100 flex items-end justify-between shrink-0">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-2">Beheer</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-gray-900">
                Project<br />Editor.
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <div className={`w-1.5 h-1.5 rounded-full ${hasUnsavedChanges ? 'bg-amber-400' : 'bg-green-500'}`} />
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  {hasUnsavedChanges ? 'Niet opgeslagen' : lastSaved}
                </p>
              </div>
            </div>
            <button onClick={() => setIsEditMode(false)} className="p-3 border border-gray-100 rounded-full hover:bg-red-900 hover:border-red-900 hover:text-white transition-all duration-300">
              <X size={16} />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto px-10 py-8 space-y-12 pb-32">

            <section className="space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1">Links</p>
                <h3 className="text-lg font-black uppercase tracking-tighter text-gray-900">Enquête & Slug.</h3>
              </div>
              <div className="space-y-0">
                {[
                  { label: "Enquête URL", value: projectData.surveyUrl, key: "surveyUrl", placeholder: "https://forms.gle/..." },
                  { label: "Slug", value: projectData.slug, key: "slug", placeholder: "project-naam" },
                ].map((field, i) => (
                  <div key={i} className="border-t border-gray-100 py-5">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-2">{field.label}</label>
                    <input
                      value={field.value}
                      onChange={(e) => updateProject({ [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1">Metadata</p>
                <h3 className="text-lg font-black uppercase tracking-tighter text-gray-900">Basisinformatie.</h3>
              </div>
              <div className="space-y-0">
                {[
                  { label: "Project titel", value: projectData.title, key: "title", placeholder: "Titel..." },
                  { label: "Klant", value: projectData.client, key: "client", placeholder: "Naam klant..." },
                  { label: "Expertise", value: projectData.expertise, key: "expertise", placeholder: "Bijv. Design..." },
                  { label: "Status", value: projectData.status, key: "status", placeholder: "CONCEPT / LIVE..." },
                ].map((field, i) => (
                  <div key={i} className="border-t border-gray-100 py-5">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-2">{field.label}</label>
                    <input
                      value={field.value}
                      onChange={(e) => updateProject({ [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                    />
                  </div>
                ))}
                <div className="border-t border-gray-100 py-5">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-2">Ondertitel</label>
                  <textarea
                    value={projectData.subtitle}
                    onChange={(e) => updateProject({ subtitle: e.target.value })}
                    placeholder="Korte omschrijving..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none resize-none"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1">Inhoud</p>
                <h3 className="text-lg font-black uppercase tracking-tighter text-gray-900">Tekst secties.</h3>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="border border-gray-100 rounded-2xl p-5 space-y-3">
                    <input
                      value={(projectData.labels as any)[`label${num}`]}
                      onChange={(e) => updateProject({ labels: { ...projectData.labels, [`label${num}`]: e.target.value } })}
                      className="w-full text-[10px] font-black uppercase tracking-widest text-red-900 bg-transparent border-b border-gray-100 pb-2 outline-none"
                      placeholder={`Sectie ${num} naam`}
                    />
                    <textarea
                      rows={5}
                      value={(projectData as any)[num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']}
                      onChange={(e) => updateProject({ [num === 1 ? 'description' : num === 2 ? 'techText' : 'processText']: e.target.value })}
                      placeholder="Voer tekst in..."
                      className="w-full px-0 py-2 text-sm font-light text-gray-600 leading-relaxed outline-none resize-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1">Spanningsvelden</p>
                  <h3 className="text-lg font-black uppercase tracking-tighter text-gray-900">Core DNA.</h3>
                </div>
                <button
                  onClick={() => updateProject({ coreValues: [...projectData.coreValues, { label: "", vs: "" }] })}
                  className="p-2.5 border border-gray-100 rounded-full hover:bg-red-900 hover:border-red-900 hover:text-white transition-all duration-300"
                >
                  <Plus size={14} />
                </button>
              </div>
              <div className="space-y-2">
                {projectData.coreValues.map((v, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_1fr_auto] gap-2 items-center border-t border-gray-100 pt-3">
                    <input
                      value={v.label}
                      onChange={(e) => {
                        const updated = [...projectData.coreValues]
                        updated[i] = { ...updated[i], label: e.target.value }
                        updateProject({ coreValues: updated })
                      }}
                      placeholder="Label"
                      className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-light outline-none focus:border-red-900/20"
                    />
                    <span className="text-[10px] font-black text-red-900/30 text-center">VS</span>
                    <input
                      value={v.vs}
                      onChange={(e) => {
                        const updated = [...projectData.coreValues]
                        updated[i] = { ...updated[i], vs: e.target.value }
                        updateProject({ coreValues: updated })
                      }}
                      placeholder="Contrast"
                      className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-light outline-none focus:border-red-900/20"
                    />
                    <button
                      onClick={() => updateProject({ coreValues: projectData.coreValues.filter((_, idx) => idx !== i) })}
                      className="p-1.5 text-gray-300 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1">Media</p>
                <h3 className="text-lg font-black uppercase tracking-tighter text-gray-900">Afbeeldingen.</h3>
              </div>
              <div className="space-y-2">
                {projectData.images.map((img, idx) => (
                  <div key={idx} className="flex gap-2 items-center border-t border-gray-100 pt-3">
                    <input
                      value={img}
                      onChange={(e) => {
                        const updated = [...projectData.images]
                        updated[idx] = e.target.value
                        updateProject({ images: updated })
                      }}
                      placeholder={`/IMG/foto-${idx + 1}.jpg`}
                      className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-light outline-none focus:border-red-900/20"
                    />
                    <button
                      onClick={() => updateProject({ images: projectData.images.filter((_, i) => i !== idx) })}
                      className="p-1.5 text-gray-300 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => updateProject({ images: [...projectData.images, ""] })}
                  className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 hover:text-red-900 hover:border-red-900/30 transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase mt-2"
                >
                  <Plus size={13} /> Afbeelding toevoegen
                </button>
              </div>
            </section>
          </div>

          {/* Save */}
          <div className="px-10 py-6 border-t border-gray-100 shrink-0">
            <button
              onClick={handleSave}
              disabled={!hasUnsavedChanges}
              className={`w-full py-4 rounded-full font-black uppercase text-[10px] tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                hasUnsavedChanges
                  ? 'bg-red-900 text-white hover:bg-gray-900 shadow-xl shadow-red-900/20'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <Save size={14} />
              {hasUnsavedChanges ? 'Opslaan' : 'Geen wijzigingen'}
            </button>
          </div>
        </div>
      </div>

      {/* ── PREVIEW AREA ── */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-700 ${isEditMode ? 'md:ml-120' : 'ml-0'}`}>

        {/* Device switcher — zwevend rechtsonder het menu */}
        {!isEditMode && (
          <div className="fixed top-37.5 left-22.5 z-40 hidden md:flex items-center gap-1 bg-white border border-gray-200 shadow-lg p-1 rounded-full">
            {[
              { key: 'mobile', icon: <Smartphone size={14} /> },
              { key: 'tablet', icon: <Tablet size={14} /> },
              { key: 'desktop', icon: <Monitor size={14} /> },
            ].map((d) => (
              <button
                key={d.key}
                onClick={() => setPreviewDevice(d.key as any)}
                className={`p-2 rounded-full transition-all ${previewDevice === d.key ? 'bg-red-900 text-white' : 'text-gray-400 hover:text-gray-700'}`}
              >
                {d.icon}
              </button>
            ))}
          </div>
        )}

        {/* Preview container */}
        <div
          id="preview-scroll"
          className="flex-1 overflow-y-auto bg-gray-50 flex justify-center"
        >
          <div className={`transition-all duration-700 w-full ${
            previewDevice === 'mobile'
              ? 'max-w-sm rounded-[3rem] border-8 border-gray-900 my-8 mx-auto shadow-2xl overflow-hidden bg-white'
              : previewDevice === 'tablet'
              ? 'max-w-3xl rounded-2xl my-8 mx-auto shadow-2xl overflow-hidden border border-gray-200 bg-white'
              : 'max-w-full'
          } ${isEditMode ? 'opacity-30 pointer-events-none grayscale scale-95' : ''}`}>
            <DesignA data={projectData} scrollProgress={scrollProgress} />
          </div>
        </div>
      </div>

      {/* Settings knop */}
      {!isEditMode && (
        <button
          onClick={() => setIsEditMode(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-red-900 text-white rounded-full shadow-2xl shadow-red-900/30 z-50 hover:bg-gray-900 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <Settings size={22} />
        </button>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
      `}</style>
    </main>
  )
}