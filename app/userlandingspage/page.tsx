"use client"

import { useState, useEffect, useCallback, ChangeEvent } from "react"
import { 
  User, Mail, Instagram, Globe, Palette, LogOut, 
  Fingerprint, BellRing, ShieldCheck, Lock, Globe2, 
  MailCheck, Trash2, Calendar, CheckCircle2, Bell, 
  X, Zap, ShieldAlert, AtSign, ChevronRight, Cake, Plus, Link2,
  Settings2, Smartphone, Shield, Download, EyeOff, FileText, Check, Loader2,
  ClipboardList // Nieuw icoon voor de enquête
} from "lucide-react"

// --- INTERFACES ---
interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

interface UserSettings {
  newsletter: boolean;
  language: string;
  pushNotifications: boolean;
  emailNotifications: boolean;
  privacyMode: boolean;
  dataSharing: boolean;
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  avatarColor: string;
  lastLogin: string;
  instagram: string;
  links: SocialLink[];
  settings: UserSettings;
  twoFactor: {
    enabled: boolean;
    phone: string;
  };
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
};

export default function UltimateIntegratedDashboard() {
  const [userData, setUserData] = useState<UserData>(DEFAULT_DATA)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("user_profile_data")
    if (savedData) {
      try {
        setUserData(JSON.parse(savedData))
      } catch (e) {
        console.error("Fout bij laden data", e)
      }
    }
    setIsLoaded(true)
  }, [])

  const saveToStorage = (newData: UserData) => {
    localStorage.setItem("user_profile_data", JSON.stringify(newData))
  }

  const [showPassModal, setShowPassModal] = useState(false)
  const [passStatus, setPassStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [isUpdating, setIsUpdating] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const handleExternalLink = (url: string) => {
    if (!url) return;
    const finalUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Weet je het zeker? Dit verwijdert al je opgeslagen gegevens definitief.");
    if (confirmDelete) {
        localStorage.removeItem("user_profile_data");
        setUserData(DEFAULT_DATA);
    }
  };

  // --- NIEUWE FUNCTIE VOOR ENQUÊTE ---
  const handleOpenSurvey = () => {
    // Vervang deze URL door je eigen enquête-link
    window.open("https://forms.gle/TcmQvgy2ff7UHLfU6", "_blank");
  };

  const getInitials = useCallback(() => {
    const first = userData.firstName?.trim().charAt(0).toUpperCase();
    const last = userData.lastName?.trim().charAt(0).toUpperCase();
    if (!first && !last) return "?";
    return (first || "") + (last || "");
  }, [userData.firstName, userData.lastName]);

  useEffect(() => {
    if (!isLoaded) return;
    setIsUpdating(true)
    const timer = setTimeout(() => setIsUpdating(false), 300)
    return () => clearTimeout(timer)
  }, [userData, isLoaded])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setUserData(prev => {
      let updated: UserData;
      
      if (name.includes("settings.")) {
        const key = name.split(".")[1] as keyof UserSettings;
        updated = {
          ...prev,
          settings: { ...prev.settings, [key]: type === "checkbox" ? checked : value }
        }
      } else if (name.includes("twoFactor.")) {
        const key = name.split(".")[1];
        updated = {
          ...prev,
          twoFactor: { ...prev.twoFactor, [key]: type === "checkbox" ? checked : value }
        }
      } else {
        updated = { ...prev, [name]: value }
      }
      
      saveToStorage(updated)
      return updated
    })
  }

  const handlePasswordUpdate = () => {
    setPassStatus('loading');
    setTimeout(() => {
      setPassStatus('success');
      setTimeout(() => {
        setShowPassModal(false);
        setPassStatus('idle');
      }, 1500);
    }, 2000);
  }

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => setDownloading(false), 2000)
  }

  const addLink = () => {
    const updated = {
      ...userData,
      links: [...userData.links, { id: Date.now(), platform: "Nieuwe Link", url: "" }]
    }
    setUserData(updated)
    saveToStorage(updated)
  }

  const updateLink = (id: number, field: keyof Omit<SocialLink, 'id'>, value: string) => {
    const updated = {
      ...userData,
      links: userData.links.map(link => link.id === id ? { ...link, [field]: value } : link)
    }
    setUserData(updated)
    saveToStorage(updated)
  }

  const removeLink = (id: number) => {
    const updated = {
      ...userData,
      links: userData.links.filter(link => link.id !== id)
    }
    setUserData(updated)
    saveToStorage(updated)
  }

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col lg:flex-row font-sans selection:bg-red-900 selection:text-white text-black overflow-hidden">
      
      <aside className="w-full lg:w-112.5 bg-white border-r border-gray-100 h-screen overflow-y-auto p-8 lg:p-10 sticky top-0 z-20 custom-scrollbar">
        <header className="mb-12 flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-black uppercase tracking-tighter italic leading-none">
              GEBRUIKERS<span className="text-red-900">PROFIEL</span>
            </h1>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Saved to Local Storage</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            title="Log Out" 
            className="group p-3 bg-gray-50 rounded-2xl hover:bg-red-900 transition-all focus:ring-2 focus:ring-red-900 focus:outline-none"
          >
            <LogOut size={18} className="group-hover:text-white transition-colors" />
          </button>
        </header>

        <div className="space-y-10 pb-20">
          
          {/* 3. FEEDBACK SECTIE (NIEUW) */}
          <section className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-[10px] font-black uppercase text-red-900 tracking-[0.2em] flex items-center gap-2">
                  <ClipboardList size={14} /> Feedback & Enquête
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Help ons verbeteren door de korte enquête in te vullen.</p>
            </div>
            <button 
                onClick={handleOpenSurvey}
                className="w-full flex items-center justify-between p-5 bg-red-900 text-white rounded-[2.5rem] hover:bg-black transition-all group shadow-lg"
            >
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                        <ClipboardList size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest leading-none">Start de enquête</p>
                        <p className="text-[8px] font-bold uppercase opacity-60 mt-1">Duurt slechts 2 minuten</p>
                    </div>
                </div>
                <ChevronRight size={18} className="opacity-40 group-hover:translate-x-1 transition-all" />
            </button>
          </section>

          {/* 1. PERSOONLIJKE INFO */}
          <section className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-[10px] font-black uppercase text-red-900 tracking-[0.2em] flex items-center gap-2">
                  <User size={14} /> Persoonlijke Info
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Beheer je basisgegevens en identiteit op het platform.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" aria-label="Voornaam" value={userData.firstName} onChange={handleChange} placeholder="Voornaam" className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold border border-transparent focus:border-red-900/10 focus:bg-white transition-all outline-none" />
              <input name="lastName" aria-label="Achternaam" value={userData.lastName} onChange={handleChange} placeholder="Achternaam" className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold border border-transparent focus:border-red-900/10 focus:bg-white transition-all outline-none" />
            </div>
            <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input name="email" aria-label="E-mail" value={userData.email} onChange={handleChange} placeholder="E-mailadres" className="w-full p-4 pl-12 bg-gray-50 rounded-2xl text-sm font-bold border border-transparent focus:border-red-900/10 focus:bg-white transition-all outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input type="date" aria-label="Geboortedatum" name="birthday" value={userData.birthday} onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-2xl text-[12px] font-bold outline-none border border-transparent focus:border-red-900/10 focus:bg-white transition-all" />
                <select name="gender" aria-label="Geslacht" value={userData.gender} onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-2xl text-sm font-bold outline-none cursor-pointer border border-transparent focus:border-red-900/10 focus:bg-white transition-all">
                    <option>Man</option><option>Vrouw</option><option>X</option>
                </select>
            </div>
          </section>

          {/* 2. SOCIALE MEDIA */}
          <section className="space-y-5">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-[10px] font-black uppercase text-red-900 tracking-[0.2em] flex items-center gap-2">
                      <Instagram size={14} /> Sociale Media
                  </h2>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Koppel je profielen en deel je externe kanalen.</p>
                </div>
                <button onClick={addLink} className="p-2 bg-red-50 text-red-900 rounded-lg hover:bg-red-900 hover:text-white transition-all focus:ring-2 focus:ring-red-900">
                    <Plus size={14} />
                </button>
            </div>
            <div className="space-y-3">
                <div className="relative">
                    <Instagram size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500" />
                    <input name="instagram" value={userData.instagram} onChange={handleChange} placeholder="Instagram handle" className="w-full p-4 pl-12 bg-gray-50 rounded-2xl text-sm font-bold border border-transparent focus:border-pink-200 focus:bg-white transition-all outline-none" />
                </div>
                {userData.links.map((link) => (
                    <div key={link.id} className="p-4 bg-gray-50 rounded-2xl space-y-3 border border-gray-100 animate-fadeIn">
                        <div className="flex items-center justify-between">
                            <input value={link.platform} onChange={(e) => updateLink(link.id, 'platform', e.target.value)} className="bg-transparent text-[10px] font-black uppercase tracking-widest text-red-900 outline-none w-full" />
                            <button onClick={() => removeLink(link.id)} className="text-gray-300 hover:text-red-600 transition-colors"><X size={14} /></button>
                        </div>
                        <input value={link.url} onChange={(e) => updateLink(link.id, 'url', e.target.value)} placeholder="URL" className="w-full p-3 bg-white rounded-xl text-xs outline-none focus:ring-1 focus:ring-red-900/10" />
                    </div>
                ))}
            </div>
          </section>

          {/* 4. COMMUNICATIE */}
          <section className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-[10px] font-black uppercase text-red-900 tracking-[0.2em] flex items-center gap-2">
                  <BellRing size={14} /> Communicatie
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Bepaal hoe en wanneer we contact met je opnemen.</p>
            </div>
            <div className="space-y-3">
                <label className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl cursor-pointer hover:bg-red-50/30 transition-all border border-transparent hover:border-red-900/5 group">
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl transition-colors ${userData.settings.pushNotifications ? 'bg-red-900 text-white' : 'bg-white text-gray-300'}`}>
                            <Smartphone size={16} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Push Meldingen</span>
                    </div>
                    <input type="checkbox" name="settings.pushNotifications" checked={userData.settings.pushNotifications} onChange={handleChange} className="w-5 h-5 accent-red-900 rounded-lg" />
                </label>
                <label className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl cursor-pointer hover:bg-red-50/30 transition-all border border-transparent hover:border-red-900/5 group">
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl transition-colors ${userData.settings.emailNotifications ? 'bg-red-900 text-white' : 'bg-white text-gray-300'}`}>
                            <MailCheck size={16} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">E-mail Alerts</span>
                    </div>
                    <input type="checkbox" name="settings.emailNotifications" checked={userData.settings.emailNotifications} onChange={handleChange} className="w-5 h-5 accent-red-900 rounded-lg" />
                </label>
            </div>
          </section>

          {/* 5. SECURITY & 2FA */}
          <section className="space-y-5">
            <div className="space-y-1">
              <h2 className="text-[10px] font-black uppercase text-red-900 tracking-[0.2em] flex items-center gap-2">
                  <Shield size={14} /> Security & GDPR
              </h2>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Beheer je accountveiligheid en 2FA.</p>
            </div>
            
            <div className="space-y-3">
                <div className="p-5 bg-gray-50 rounded-3xl border border-transparent hover:border-red-900/5 transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><EyeOff size={14}/> Privacy Mode</span>
                        <input type="checkbox" name="settings.privacyMode" checked={userData.settings.privacyMode} onChange={handleChange} className="w-5 h-5 accent-red-900" />
                    </div>
                    <p className="text-[9px] text-gray-400 font-medium leading-relaxed">Verberg gevoelige informatie van publieke profielen.</p>
                </div>

                <div className={`p-5 rounded-3xl border transition-all ${userData.twoFactor.enabled ? 'bg-red-50/30 border-red-900/10' : 'bg-gray-50 border-transparent'}`}>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                          <Fingerprint size={14} className={userData.twoFactor.enabled ? 'text-red-900' : 'text-gray-400'} /> 2-Stap Verificatie
                        </span>
                        <input type="checkbox" name="twoFactor.enabled" checked={userData.twoFactor.enabled} onChange={handleChange} className="w-5 h-5 accent-red-900" />
                    </div>
                    {userData.twoFactor.enabled && (
                      <div className="space-y-3 animate-fadeIn">
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Telefoonnummer voor SMS-code</p>
                        <input 
                          name="twoFactor.phone" 
                          value={userData.twoFactor.phone} 
                          onChange={handleChange} 
                          placeholder="+32 000 00 00 00" 
                          className="w-full p-3 bg-white rounded-xl text-xs font-bold border border-gray-100 outline-none focus:ring-1 focus:ring-red-900/20" 
                        />
                      </div>
                    )}
                </div>

                <button onClick={handleDownload} className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all focus:ring-2 focus:ring-red-900/10 focus:outline-none">
                    <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                        <Download size={14} className="text-red-900" /> Download Mijn Data
                    </span>
                    {downloading ? <Loader2 size={14} className="text-red-900 animate-spin" /> : <ChevronRight size={14} className="text-gray-300" />}
                </button>
            </div>
          </section>

          {/* 6. SYSTEEM ACTIES */}
          <section className="space-y-4 pt-4 border-t border-gray-50">
             <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Palette size={14}/> Profiel Accent</span>
                  <p className="text-[8px] text-gray-400 font-bold uppercase">Kies een kleur voor je kaart.</p>
                </div>
                <input type="color" aria-label="Accent Kleur" name="avatarColor" value={userData.avatarColor} onChange={handleChange} className="w-8 h-8 rounded-full cursor-pointer bg-transparent border-none" />
             </div>
             <button onClick={() => setShowPassModal(true)} className="w-full p-5 bg-black text-white rounded-3xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-900 transition-all duration-300 focus:ring-4 focus:ring-red-900/20">
                <Lock size={16} /> Wachtwoord Reset
             </button>

             <button 
                onClick={handleDeleteAccount}
                className="w-full p-5 bg-red-50 text-red-900 rounded-3xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-900 hover:text-white transition-all shadow-sm">
                <Trash2 size={16} /> Verwijder Account
             </button>
          </section>
        </div>
      </aside>

      {/* --- RECHTER KOLOM: PREVIEW --- */}
      <main className="flex-1 bg-[#ffffff] p-6 lg:p-16 flex items-center justify-center relative overflow-hidden">
        <div className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 transition-all duration-500 ${isUpdating ? 'scale-[0.99] opacity-90' : 'scale-100'}`}>
          
          <div className="md:col-span-5 space-y-8">
            <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl relative group border border-gray-50">
              <div className="h-40 relative transition-colors duration-700" style={{ backgroundColor: userData.avatarColor }}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
                <div className="absolute top-6 right-8">
                    <div className={`px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-2 backdrop-blur-md border transition-all ${userData.settings.privacyMode ? 'bg-black/20 text-white border-white/20' : 'bg-white/80 text-black border-white'}`}>
                        <Shield size={12} style={{ color: userData.settings.privacyMode ? '#4ade80' : userData.avatarColor }} /> 
                        {userData.settings.privacyMode ? 'Secure' : 'Standard'}
                    </div>
                </div>
                <div className="absolute -bottom-14 left-10 transition-transform group-hover:scale-105 duration-500">
                    <div className="w-28 h-28 rounded-[2.5rem] border-8 border-white shadow-2xl flex items-center justify-center text-white text-4xl font-black italic" style={{ backgroundColor: userData.avatarColor }}>
                        {getInitials()}
                    </div>
                </div>
              </div>
              <div className="pt-20 p-12 pb-14">
                <h3 className="text-5xl font-black uppercase tracking-tighter leading-[0.85] italic">
                  {userData.firstName || "Voornaam"}<br/>
                  <span className="text-transparent transition-all duration-700" style={{ WebkitTextStroke: `1.5px ${userData.avatarColor}` }}>{userData.lastName || "Achternaam"}</span>
                </h3>
                <div className="mt-8 space-y-2 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                    <p className="flex items-center gap-3 truncate">
                      <AtSign size={14} className="shrink-0" style={{ color: userData.avatarColor }} /> 
                      {userData.email || "voorbeeld@mail.com"}
                    </p>
                    <button 
                      onClick={() => userData.instagram && handleExternalLink(`instagram.com/${userData.instagram}`)}
                      className="flex items-center gap-3 hover:text-pink-500 transition-colors"
                    >
                      <Instagram size={14} className="text-pink-500 shrink-0" /> @{userData.instagram || "gebruikersnaam"}
                    </button>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-[3rem] flex items-center justify-between shadow-xl transition-all duration-500 ${userData.twoFactor.enabled ? 'bg-black text-white' : 'bg-white text-gray-300'}`}>
                <div className="flex items-center gap-5">
                    <div 
                      className={`p-4 rounded-2xl transition-all ${userData.twoFactor.enabled ? 'scale-110' : 'bg-gray-100 scale-100'}`}
                      style={{ backgroundColor: userData.twoFactor.enabled ? userData.avatarColor : undefined }}
                    >
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase opacity-50">Vault Status</p>
                        <p className="text-base font-black italic uppercase truncate max-w-37.5">
                          {userData.twoFactor.enabled ? 'Encrypted' : 'Disabled'}
                        </p>
                        {userData.twoFactor.enabled && (
                          <p className="text-[8px] font-black opacity-40 mt-1 uppercase tracking-tighter">{userData.twoFactor.phone || "Geen nummer"}</p>
                        )}
                    </div>
                </div>
                {userData.twoFactor.enabled && <Zap size={18} className="animate-pulse" style={{ color: userData.avatarColor }} />}
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <div className="grid grid-cols-2 gap-8">
                <div 
                  className={`p-10 rounded-[3.5rem] border-2 transition-all duration-700 ${userData.settings.pushNotifications ? 'bg-white shadow-2xl' : 'bg-gray-100 opacity-40 grayscale'}`}
                  style={{ borderColor: userData.settings.pushNotifications ? `${userData.avatarColor}20` : 'transparent' }}
                >
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${userData.settings.pushNotifications ? 'text-white shadow-lg rotate-0' : 'bg-gray-200 text-gray-400 -rotate-12'}`}
                      style={{ backgroundColor: userData.settings.pushNotifications ? userData.avatarColor : undefined }}
                    >
                        <Smartphone size={28} />
                    </div>
                    <p className="text-xl font-black italic uppercase tracking-tighter">Push Hub</p>
                    <div className="mt-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${userData.settings.pushNotifications ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-[9px] font-black uppercase tracking-widest">{userData.settings.pushNotifications ? 'Active' : 'Offline'}</span>
                    </div>
                </div>
                <div 
                  className={`p-10 rounded-[3.5rem] border-2 transition-all duration-700 ${userData.settings.emailNotifications ? 'bg-white shadow-2xl' : 'bg-gray-100 opacity-40 grayscale'}`}
                  style={{ borderColor: userData.settings.emailNotifications ? `${userData.avatarColor}20` : 'transparent' }}
                >
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${userData.settings.emailNotifications ? 'text-white shadow-lg rotate-0' : 'bg-gray-200 text-gray-400 rotate-12'}`}
                      style={{ backgroundColor: userData.settings.emailNotifications ? userData.avatarColor : undefined }}
                    >
                        <MailCheck size={28} />
                    </div>
                    <p className="text-xl font-black italic uppercase tracking-tighter">Mail Sync</p>
                    <div className="mt-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${userData.settings.emailNotifications ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className="text-[9px] font-black uppercase tracking-widest">{userData.settings.emailNotifications ? 'Active' : 'Offline'}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[3.5rem] p-12 shadow-2xl border border-white/50 relative overflow-hidden min-h-75">
                {userData.settings.privacyMode && (
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-xs z-10 flex items-center justify-center animate-fadeIn">
                        <div className="px-6 py-3 bg-black rounded-full flex items-center gap-3 shadow-2xl scale-110">
                            <EyeOff size={14} style={{ color: userData.avatarColor }} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Privacy Mode Active</span>
                        </div>
                    </div>
                )}
                <div className="flex justify-between items-center mb-10 border-b border-gray-50 pb-6">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: userData.avatarColor }}>Live Network Stack</h4>
                    <div className="text-[10px] font-black text-gray-300 uppercase italic tracking-widest">{userData.birthday || "00-00-0000"}</div>
                </div>
                <div className="space-y-6">
                    {userData.links.length > 0 ? userData.links.map(link => (
                        <div 
                          key={link.id} 
                          onClick={() => handleExternalLink(link.url)}
                          className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div 
                              className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all group-hover:scale-110"
                              style={{ color: userData.avatarColor }}
                            >
                                <Link2 size={18} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">{link.platform || "Nieuw Platform"}</p>
                                <p className="text-sm font-black italic truncate max-w-50">{link.url || 'Geen URL ingevoerd'}</p>
                            </div>
                            <ChevronRight size={14} className="text-gray-200 group-hover:translate-x-1 transition-all" />
                        </div>
                    )) : (
                      <div className="text-center py-10 space-y-2 opacity-30">
                         <p className="text-[10px] font-black uppercase tracking-[0.2em]">Stack Leeg</p>
                         <p className="text-[8px] font-bold uppercase">Voeg links toe in de zijbalk</p>
                      </div>
                    )}
                </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- MODAL --- */}
      {showPassModal && (
        <div className="fixed inset-0 z-600 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setShowPassModal(false)} />
          <div className="relative w-full max-w-md bg-white rounded-[4rem] p-12 animate-modalIn shadow-2xl">
            {passStatus === 'success' ? (
              <div className="text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={40} />
                </div>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Updated!</h2>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">System <span style={{ color: userData.avatarColor }}>Auth</span></h2>
                <div className="space-y-4">
                    <input type="password" placeholder="Huidig Wachtwoord" className="w-full p-5 bg-gray-50 rounded-3xl outline-none font-bold focus:ring-2 focus:ring-red-900/10" />
                    <input type="password" placeholder="Nieuw Wachtwoord" className="w-full p-5 bg-gray-50 rounded-3xl outline-none font-bold focus:ring-2 focus:ring-red-900/10" />
                    <button 
                      onClick={handlePasswordUpdate}
                      disabled={passStatus === 'loading'}
                      className="w-full py-6 bg-black text-white rounded-[2rem] font-black uppercase text-[11px] tracking-widest hover:bg-red-900 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {passStatus === 'loading' && <Loader2 size={16} className="animate-spin" />}
                      {passStatus === 'loading' ? 'Encrypting...' : 'Confirm Update'}
                    </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-modalIn { animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        
        input:focus-visible, button:focus-visible, select:focus-visible {
          outline: 2px solid #7f1d1d;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}