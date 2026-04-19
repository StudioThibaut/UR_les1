"use client"

import { useState, useEffect, useCallback, ChangeEvent } from "react"
import {
  User, Mail, Instagram, Palette, LogOut,
  Fingerprint, BellRing, Lock, MailCheck,
  Trash2, ChevronRight, Plus, Link2,
  Smartphone, Shield, Download, EyeOff, Check, Loader2,
  ClipboardList, X, Zap, ShieldCheck, AtSign
} from "lucide-react"

interface SocialLink {
  id: number
  platform: string
  url: string
}

interface UserSettings {
  newsletter: boolean
  language: string
  pushNotifications: boolean
  emailNotifications: boolean
  privacyMode: boolean
  dataSharing: boolean
}

interface UserData {
  firstName: string
  lastName: string
  email: string
  gender: string
  birthday: string
  avatarColor: string
  lastLogin: string
  instagram: string
  links: SocialLink[]
  settings: UserSettings
  twoFactor: {
    enabled: boolean
    phone: string
  }
}

const DEFAULT_DATA: UserData = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "Man",
  birthday: "",
  avatarColor: "#7f1d1d",
  lastLogin: "02/03/2026 - 11:13",
  instagram: "",
  links: [],
  settings: {
    newsletter: true,
    language: "Nederlands",
    pushNotifications: true,
    emailNotifications: true,
    privacyMode: false,
    dataSharing: false,
  },
  twoFactor: {
    enabled: false,
    phone: ""
  }
}

export default function UserDashboard() {
  const [userData, setUserData] = useState<UserData>(DEFAULT_DATA)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPassModal, setShowPassModal] = useState(false)
  const [passStatus, setPassStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [isUpdating, setIsUpdating] = useState(false)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("user_profile_data")
    if (savedData) {
      try { setUserData(JSON.parse(savedData)) } catch (e) { console.error(e) }
    }
    setIsLoaded(true)
  }, [])

  const saveToStorage = (newData: UserData) => {
    localStorage.setItem("user_profile_data", JSON.stringify(newData))
  }

  const handleExternalLink = (url: string) => {
    if (!url) return
    const finalUrl = url.startsWith('http') ? url : `https://${url}`
    window.open(finalUrl, '_blank', 'noopener,noreferrer')
  }

  const handleLogout = () => { window.location.href = "/login" }

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Weet je het zeker? Dit verwijdert al je opgeslagen gegevens definitief.")
    if (confirmDelete) {
      localStorage.removeItem("user_profile_data")
      setUserData(DEFAULT_DATA)
    }
  }

  const handleOpenSurvey = () => {
    window.open("https://forms.gle/TcmQvgy2ff7UHLfU6", "_blank")
  }

  const getInitials = useCallback(() => {
    const first = userData.firstName?.trim().charAt(0).toUpperCase()
    const last = userData.lastName?.trim().charAt(0).toUpperCase()
    if (!first && !last) return "?"
    return (first || "") + (last || "")
  }, [userData.firstName, userData.lastName])

  useEffect(() => {
    if (!isLoaded) return
    setIsUpdating(true)
    const timer = setTimeout(() => setIsUpdating(false), 300)
    return () => clearTimeout(timer)
  }, [userData, isLoaded])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name, value, type, checked } = target
    setUserData(prev => {
      let updated: UserData
      if (name.includes("settings.")) {
        const key = name.split(".")[1] as keyof UserSettings
        updated = { ...prev, settings: { ...prev.settings, [key]: type === "checkbox" ? checked : value } }
      } else if (name.includes("twoFactor.")) {
        const key = name.split(".")[1]
        updated = { ...prev, twoFactor: { ...prev.twoFactor, [key]: type === "checkbox" ? checked : value } }
      } else {
        updated = { ...prev, [name]: value }
      }
      saveToStorage(updated)
      return updated
    })
  }

  const handlePasswordUpdate = () => {
    setPassStatus('loading')
    setTimeout(() => {
      setPassStatus('success')
      setTimeout(() => { setShowPassModal(false); setPassStatus('idle') }, 1500)
    }, 2000)
  }

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => setDownloading(false), 2000)
  }

  const addLink = () => {
    const updated = { ...userData, links: [...userData.links, { id: Date.now(), platform: "Nieuwe Link", url: "" }] }
    setUserData(updated); saveToStorage(updated)
  }

  const updateLink = (id: number, field: keyof Omit<SocialLink, 'id'>, value: string) => {
    const updated = { ...userData, links: userData.links.map(link => link.id === id ? { ...link, [field]: value } : link) }
    setUserData(updated); saveToStorage(updated)
  }

  const removeLink = (id: number) => {
    const updated = { ...userData, links: userData.links.filter(link => link.id !== id) }
    setUserData(updated); saveToStorage(updated)
  }

  if (!isLoaded) return null

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans selection:bg-red-900 selection:text-white text-gray-900 overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside className="w-full lg:w-120 bg-white border-r border-gray-100 h-screen overflow-y-auto sticky top-0 z-20 flex flex-col">

        {/* Sidebar header */}
        <div className="px-10 pt-12 pb-8 border-b border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-2">Thibaut Vanden Eynden</p>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-gray-900">
              Gebruikers<br />profiel.
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Opgeslagen lokaal</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="p-3 border border-gray-100 rounded-full hover:bg-red-900 hover:border-red-900 hover:text-white transition-all duration-300 group"
          >
            <LogOut size={16} className="group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 px-10 py-10 space-y-14 overflow-y-auto pb-24">

          {/* Enquête */}
          <section className="space-y-5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1 flex items-center gap-2">
                <ClipboardList size={12} /> Feedback
              </p>
              <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Enquête.</h2>
            </div>
            <button
              onClick={handleOpenSurvey}
              className="w-full flex items-center justify-between px-6 py-5 bg-red-900 text-white rounded-2xl hover:bg-gray-900 transition-all duration-300 group shadow-xl shadow-red-900/20"
            >
              <div className="flex items-center gap-4">
                <ClipboardList size={18} />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest">Start de enquête</p>
                  <p className="text-[9px] opacity-50 mt-0.5">Duurt slechts 2 minuten</p>
                </div>
              </div>
              <ChevronRight size={16} className="opacity-40 group-hover:translate-x-1 transition-transform" />
            </button>
          </section>

          {/* Persoonlijke info */}
          <section className="space-y-5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1 flex items-center gap-2">
                <User size={12} /> Identiteit
              </p>
              <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Persoonlijke info.</h2>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Voornaam</label>
                  <input
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    placeholder="Voornaam"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Achternaam</label>
                  <input
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    placeholder="Achternaam"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Email</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="E-mailadres"
                    className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Geboortedatum</label>
                  <input
                    type="date"
                    name="birthday"
                    value={userData.birthday}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Geslacht</label>
                  <select
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none cursor-pointer"
                  >
                    <option>Man</option>
                    <option>Vrouw</option>
                    <option>X</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Sociale media */}
          <section className="space-y-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1 flex items-center gap-2">
                  <Instagram size={12} /> Netwerk
                </p>
                <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Sociale media.</h2>
              </div>
              <button
                onClick={addLink}
                className="p-2.5 border border-gray-100 rounded-full hover:bg-red-900 hover:border-red-900 hover:text-white transition-all duration-300"
              >
                <Plus size={14} />
              </button>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">Instagram</label>
                <div className="relative">
                  <Instagram size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" />
                  <input
                    name="instagram"
                    value={userData.instagram}
                    onChange={handleChange}
                    placeholder="Instagram handle"
                    className="w-full px-4 py-3 pl-10 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-pink-200 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
              {userData.links.map((link) => (
                <div key={link.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <input
                      value={link.platform}
                      onChange={(e) => updateLink(link.id, 'platform', e.target.value)}
                      className="bg-transparent text-[10px] font-black uppercase tracking-widest text-red-900 outline-none w-full"
                    />
                    <button onClick={() => removeLink(link.id)} className="text-gray-300 hover:text-red-600 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                  <input
                    value={link.url}
                    onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                    placeholder="URL"
                    className="w-full px-3 py-2 bg-white rounded-lg text-xs outline-none border border-gray-100 focus:border-red-900/20 transition-all font-light"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Communicatie */}
          <section className="space-y-5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1 flex items-center gap-2">
                <BellRing size={12} /> Meldingen
              </p>
              <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Communicatie.</h2>
            </div>
            <div className="space-y-0">
              {[
                { name: "settings.pushNotifications", checked: userData.settings.pushNotifications, icon: <Smartphone size={16} />, label: "Push Meldingen" },
                { name: "settings.emailNotifications", checked: userData.settings.emailNotifications, icon: <MailCheck size={16} />, label: "E-mail Alerts" },
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-center justify-between border-t border-gray-100 py-5 cursor-pointer group hover:bg-red-900/5 px-2 -mx-2 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-red-900 transition-opacity ${item.checked ? 'opacity-100' : 'opacity-30'}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight text-gray-900">{item.label}</span>
                  </div>
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={item.checked}
                    onChange={handleChange}
                    className="w-4 h-4 accent-red-900"
                  />
                </label>
              ))}
            </div>
          </section>

          {/* Security */}
          <section className="space-y-5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-1 flex items-center gap-2">
                <Shield size={12} /> Beveiliging
              </p>
              <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900">Security & GDPR.</h2>
            </div>
            <div className="space-y-0">
              <label className="flex items-center justify-between border-t border-gray-100 py-5 cursor-pointer hover:bg-red-900/5 px-2 -mx-2 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <EyeOff size={16} className={`transition-opacity ${userData.settings.privacyMode ? 'text-red-900 opacity-100' : 'text-gray-400 opacity-50'}`} />
                  <div>
                    <span className="text-sm font-black uppercase tracking-tight text-gray-900 block">Privacy Mode</span>
                    <span className="text-[9px] text-gray-400 font-light">Verberg gevoelige informatie</span>
                  </div>
                </div>
                <input type="checkbox" name="settings.privacyMode" checked={userData.settings.privacyMode} onChange={handleChange} className="w-4 h-4 accent-red-900" />
              </label>

              <label className="flex items-center justify-between border-t border-gray-100 py-5 cursor-pointer hover:bg-red-900/5 px-2 -mx-2 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <Fingerprint size={16} className={`transition-opacity ${userData.twoFactor.enabled ? 'text-red-900 opacity-100' : 'text-gray-400 opacity-50'}`} />
                  <div>
                    <span className="text-sm font-black uppercase tracking-tight text-gray-900 block">2-Stap Verificatie</span>
                    <span className="text-[9px] text-gray-400 font-light">Extra beveiliging via SMS</span>
                  </div>
                </div>
                <input type="checkbox" name="twoFactor.enabled" checked={userData.twoFactor.enabled} onChange={handleChange} className="w-4 h-4 accent-red-900" />
              </label>

              {userData.twoFactor.enabled && (
                <div className="border-t border-gray-100 pt-4 pb-2 px-2 -mx-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 block mb-2">Telefoonnummer</label>
                  <input
                    name="twoFactor.phone"
                    value={userData.twoFactor.phone}
                    onChange={handleChange}
                    placeholder="+32 000 00 00 00"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                </div>
              )}

              <div className="border-t border-gray-100 pt-5 pb-2 px-2 -mx-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-between w-full group"
                >
                  <div className="flex items-center gap-4">
                    <Download size={16} className="text-red-900" />
                    <span className="text-sm font-black uppercase tracking-tight text-gray-900">Download mijn data</span>
                  </div>
                  {downloading
                    ? <Loader2 size={14} className="text-red-900 animate-spin" />
                    : <ChevronRight size={14} className="text-gray-300 group-hover:translate-x-1 transition-transform" />
                  }
                </button>
              </div>
            </div>
          </section>

          {/* Systeem acties */}
          <section className="space-y-4 border-t border-gray-100 pt-10">
            <div className="flex items-center justify-between py-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Palette size={16} className="text-red-900" />
                <div>
                  <span className="text-sm font-black uppercase tracking-tight text-gray-900 block">Accent kleur</span>
                  <span className="text-[9px] text-gray-400 font-light">Kies een kleur voor je kaart</span>
                </div>
              </div>
              <input
                type="color"
                name="avatarColor"
                value={userData.avatarColor}
                onChange={handleChange}
                className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none"
              />
            </div>

            <button
              onClick={() => setShowPassModal(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-900 transition-all duration-300 shadow-xl shadow-gray-900/20"
            >
              <Lock size={14} /> Wachtwoord reset
            </button>

            <button
              onClick={handleDeleteAccount}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-red-900/20 text-red-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all duration-300"
            >
              <Trash2 size={14} /> Verwijder account
            </button>
          </section>
        </div>
      </aside>

      {/* ── PREVIEW ── */}
      <main className="flex-1 bg-white p-8 lg:p-16 flex items-center justify-center overflow-hidden">
        <div className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 ${isUpdating ? 'scale-[0.99] opacity-80' : 'scale-100 opacity-100'}`}>

          {/* Linker kolom */}
          <div className="md:col-span-5 space-y-6">

            {/* Profielkaart */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-32 relative" style={{ backgroundColor: userData.avatarColor }}>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-gray-900">
                    <Shield size={10} style={{ color: userData.avatarColor }} />
                    {userData.settings.privacyMode ? 'Secure' : 'Standard'}
                  </div>
                </div>
                <div className="absolute -bottom-10 left-8">
                  <div
                    className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center text-white text-2xl font-black"
                    style={{ backgroundColor: userData.avatarColor }}
                  >
                    {getInitials()}
                  </div>
                </div>
              </div>

              <div className="pt-14 p-8 pb-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-[0.85]">
                  {userData.firstName || "Voornaam"}<br />
                  <span className="text-red-900">
                    {userData.lastName || "Achternaam"}
                  </span>
                </h3>
                <div className="mt-6 space-y-2 text-[11px] font-black uppercase tracking-widest text-gray-400">
                  <p className="flex items-center gap-2 truncate">
                    <AtSign size={12} style={{ color: userData.avatarColor }} />
                    {userData.email || "voorbeeld@mail.com"}
                  </p>
                  <button
                    onClick={() => userData.instagram && handleExternalLink(`instagram.com/${userData.instagram}`)}
                    className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={12} className="text-pink-400" />
                    @{userData.instagram || "gebruikersnaam"}
                  </button>
                </div>
              </div>
            </div>

            {/* 2FA kaart */}
            <div className={`p-6 rounded-3xl flex items-center justify-between border transition-all duration-500 ${userData.twoFactor.enabled ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-400 border-gray-100'}`}>
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-xl transition-all"
                  style={{ backgroundColor: userData.twoFactor.enabled ? userData.avatarColor : '#f3f4f6' }}
                >
                  <ShieldCheck size={20} className={userData.twoFactor.enabled ? 'text-white' : 'text-gray-400'} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase opacity-50 mb-0.5">Vault Status</p>
                  <p className="text-sm font-black italic uppercase">
                    {userData.twoFactor.enabled ? 'Encrypted' : 'Disabled'}
                  </p>
                  {userData.twoFactor.enabled && (
                    <p className="text-[8px] font-black opacity-40 mt-0.5">{userData.twoFactor.phone || "Geen nummer"}</p>
                  )}
                </div>
              </div>
              {userData.twoFactor.enabled && (
                <Zap size={16} className="animate-pulse" style={{ color: userData.avatarColor }} />
              )}
            </div>
          </div>

          {/* Rechter kolom */}
          <div className="md:col-span-7 space-y-6">

            {/* Meldingen kaarten */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { enabled: userData.settings.pushNotifications, icon: <Smartphone size={22} />, label: "Push Hub" },
                { enabled: userData.settings.emailNotifications, icon: <MailCheck size={22} />, label: "Mail Sync" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl border transition-all duration-500 ${item.enabled ? 'bg-white border-gray-100 shadow-lg' : 'bg-gray-100 border-transparent opacity-40'}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all"
                    style={{ backgroundColor: item.enabled ? userData.avatarColor : '#e5e7eb' }}
                  >
                    <div className={item.enabled ? 'text-white' : 'text-gray-400'}>{item.icon}</div>
                  </div>
                  <p className="text-base font-black italic uppercase tracking-tighter">{item.label}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.enabled ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                      {item.enabled ? 'Active' : 'Offline'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Links kaart */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden min-h-64">
              {userData.settings.privacyMode && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="px-5 py-2.5 bg-gray-900 rounded-full flex items-center gap-2 shadow-xl">
                    <EyeOff size={12} style={{ color: userData.avatarColor }} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white">Privacy Mode Active</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-900">Live Network Stack</h4>
                <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{userData.birthday || "—"}</p>
              </div>

              <div className="space-y-5">
                {userData.links.length > 0 ? userData.links.map(link => (
                  <div
                    key={link.id}
                    onClick={() => handleExternalLink(link.url)}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div
                      className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 transition-all"
                      style={{ color: userData.avatarColor }}
                    >
                      <Link2 size={16} className="group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">{link.platform || "Platform"}</p>
                      <p className="text-sm font-black truncate max-w-48">{link.url || 'Geen URL'}</p>
                    </div>
                    <ChevronRight size={14} className="text-gray-200 group-hover:translate-x-1 transition-transform" />
                  </div>
                )) : (
                  <div className="text-center py-8 space-y-1 opacity-30">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">Stack leeg</p>
                    <p className="text-[9px] font-light text-gray-400">Voeg links toe in de zijbalk</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── WACHTWOORD MODAL ── */}
      {showPassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPassModal(false)} />
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-10 shadow-2xl">
            {passStatus === 'success' ? (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Bijgewerkt!</h2>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-900 mb-2">Beveiliging</p>
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Wachtwoord<br />reset.</h2>
                </div>
                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Huidig wachtwoord"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Nieuw wachtwoord"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm font-light focus:border-red-900/20 focus:bg-white transition-all outline-none"
                  />
                  <button
                    onClick={handlePasswordUpdate}
                    disabled={passStatus === 'loading'}
                    className="w-full py-4 bg-red-900 text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-900/20 disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                  >
                    {passStatus === 'loading' && <Loader2 size={14} className="animate-spin" />}
                    {passStatus === 'loading' ? 'Bezig...' : 'Bevestig update'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
      `}</style>
    </div>
  )
}