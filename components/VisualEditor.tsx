"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import { HexColorPicker } from "react-colorful"
import { X, Type, Palette, ChevronDown } from "lucide-react"
import { useTitleStyles } from "@/context/StyleContext" 

const FONT_OPTIONS = [
  "Inter", "Roboto", "Roboto Condensed", "Jost", "Lexend", "Nunito", "Raleway", 
  "Oswald", "Sofia Sans Condensed", "Gabarito", "Work Sans", "Quicksand", 
  "Josefin Sans", "Maven Pro", "Rubik", "Exo 2", "Catamaran", "Comfortaa", 
  "Playfair Display", "Merriweather", "Crimson Pro", "Noto Serif", "Bitter", 
  "Josefin Slab", "Alegreya", "Cormorant", "Cormorant Garamond", "Barlow", "Syne"
]

const WEIGHT_MAP: Record<string, string> = { 
  "Thin": "100", "ExtraLight": "200", "Light": "300", "Regular": "400", 
  "Medium": "500", "SemiBold": "600", "Bold": "700", "ExtraBold": "800", "Black": "900" 
}

const PROP_MAP: Record<string, string> = {
  size: "size",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  opacity: "opacity",
  align: "textAlign",
  font: "fontFamily",
  weight: "fontWeight",
  transform: "textTransform",
  color: "color",
  backgroundColor: "backgroundColor"
};

const TAGS_TO_EDIT = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'button', 'ol'];

export default function VisualEditor() {
  const { styles, setStyles } = useTitleStyles();
  const [mounted, setMounted] = useState(false)
  const [showTypography, setShowTypography] = useState(false)
  const [showTheme, setShowTheme] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>("h1")
  
  const constraintsRef = useRef(null)
  const dragControlsTypo = useDragControls()
  const dragControlsTheme = useDragControls()

  // Log wanneer de component voor het eerst laadt
  useEffect(() => {
    console.log("🛠 VisualEditor: Component mounted");
    console.log("📄 Huidige stijlen in Context:", styles);
    setMounted(true)
  }, [])

  // Log elke keer als de styles in de context veranderen
  useEffect(() => {
    if (mounted) {
      console.log("🔄 Styles geüpdatet in Context:", styles);
    }
  }, [styles, mounted]);

  const updateStyleHandler = (tag: string, editorProp: string, value: any) => {
    const contextProp = PROP_MAP[editorProp] || editorProp;
    
    console.group(`🎨 Update Style: <${tag}>`);
    console.log(`Eigenschap (Editor): ${editorProp}`);
    console.log(`Eigenschap (Context): ${contextProp}`);
    console.log(`Nieuwe waarde:`, value);
    console.groupEnd();

    const newStyles = { ...styles } as any;
    
    if (newStyles[tag]) {
      newStyles[tag][contextProp] = value;
      setStyles(newStyles);
    } else {
      console.warn(`⚠️ Tag "${tag}" niet gevonden in styles object!`);
    }
  }

  if (!mounted) return null

  const ControlRow = ({ label, tag, prop, min, max, step = 1, isUnit = true }: any) => {
    const contextProp = PROP_MAP[prop];
    const currentValue = (styles as any)[tag]?.[contextProp] ?? 0;

    return (
      <div className="flex items-center justify-between gap-4 py-1.5 group">
        <span className="text-[10px] font-bold text-gray-400 w-24 uppercase tracking-tighter">{label}</span>
        <div className="flex-1 flex items-center gap-3">
          <input 
            type="range" min={min} max={max} step={step}
            value={currentValue}
            className="flex-1 h-1 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600 pointer-events-auto"
            onChange={(e) => {
              const val = prop === 'opacity' ? parseFloat(e.target.value) : parseInt(e.target.value);
              updateStyleHandler(tag, prop, val);
            }}
          />
          <span className="text-[9px] text-gray-400 w-10 tabular-nums text-right font-medium">
              {currentValue}{isUnit ? 'px' : ''}
          </span>
        </div>
      </div>
    )
  }

  const SelectRow = ({ label, tag, prop, options }: any) => {
    const contextProp = PROP_MAP[prop];
    const value = (styles as any)[tag]?.[contextProp] || "";

    return (
      <div className="flex items-center justify-between gap-4 py-2 border-b border-gray-50 last:border-0">
        <span className="text-[10px] font-bold text-gray-400 w-24 uppercase tracking-tighter">{label}</span>
        <select 
          value={value}
          className="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-1.5 text-[11px] font-bold outline-none pointer-events-auto cursor-pointer text-black"
          onChange={(e) => updateStyleHandler(tag, prop, e.target.value)}
        >
          {options.map((opt: string) => (
            <option key={opt} value={prop === 'weight' ? WEIGHT_MAP[opt] || opt : opt}>{opt}</option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-9999 p-8">
      
      {/* Knoppen rechtsonder */}
      <div className="absolute bottom-8 right-8 pointer-events-auto flex gap-3">
        <button 
          onClick={() => { 
            console.log("🖱 Typography Menu getoggled");
            setShowTypography(!showTypography); 
            setShowTheme(false); 
          }} 
          className={`p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${showTypography ? 'bg-blue-600 text-white' : 'bg-white text-black border border-gray-100'}`}
        >
          <Type size={20} />
        </button>
        <button 
          onClick={() => { 
            console.log("🖱 Theme Engine Menu getoggled");
            setShowTheme(!showTheme); 
            setShowTypography(false); 
          }} 
          className={`p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${showTheme ? 'bg-blue-600 text-white' : 'bg-white text-black border border-gray-100'}`}
        >
          <Palette size={20} />
        </button>
      </div>

      <AnimatePresence>
        {showTypography && (
          <motion.div 
            drag dragControls={dragControlsTypo} dragListener={false} dragConstraints={constraintsRef} dragMomentum={false}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute left-10 top-10 w-115 bg-white rounded-[32px] shadow-2xl p-6 pointer-events-auto border border-gray-100 text-black max-h-[90vh] flex flex-col"
          >
            <div onPointerDown={(e: any) => dragControlsTypo.start(e)} className="flex justify-between items-center mb-4 border-b border-gray-50 pb-4 cursor-grab active:cursor-grabbing text-black">
              <h2 className="text-xl font-black uppercase italic tracking-tighter">Typography</h2>
              <X className="cursor-pointer text-gray-300 hover:text-black" onClick={() => setShowTypography(false)} />
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {TAGS_TO_EDIT.map((tag) => (
                <div key={tag} className="border-b border-gray-100 last:border-0">
                  <button 
                    onClick={() => {
                      const newState = expandedSection === tag ? null : tag;
                      console.log(`📂 Sectie ${tag} is nu ${newState ? 'open' : 'dicht'}`);
                      setExpandedSection(newState);
                    }} 
                    className="flex justify-between items-center w-full py-3 text-[14px] font-black uppercase tracking-widest text-black hover:text-blue-600"
                  >
                    {tag} <ChevronDown className={`transition-transform ${expandedSection === tag ? "rotate-180 text-blue-600" : "text-gray-300"}`} size={16} />
                  </button>

                  <AnimatePresence>
                    {expandedSection === tag && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-6 space-y-1">
                        <SelectRow label="Font Family" tag={tag} prop="font" options={FONT_OPTIONS} />
                        <SelectRow label="Text Align" tag={tag} prop="align" options={["left", "center", "right", "justify"]} />
                        <SelectRow label="Font Weight" tag={tag} prop="weight" options={Object.keys(WEIGHT_MAP)} />
                        <SelectRow label="Text Transform" tag={tag} prop="transform" options={["none", "uppercase", "lowercase", "capitalize"]} />
                        
                        <div className="h-4" />
                        <ControlRow label="Size" tag={tag} prop="size" min={8} max={200} />
                        <ControlRow label="Opacity" tag={tag} prop="opacity" min={0} max={1} step={0.1} isUnit={false} />
                        
                        <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                              <p className="text-[9px] font-black uppercase text-gray-400 mb-2 tracking-widest">Margins</p>
                              <ControlRow label="Margin Top" tag={tag} prop="mt" min={-50} max={150} />
                              <ControlRow label="Margin Right" tag={tag} prop="mr" min={-50} max={150} />
                              <ControlRow label="Margin Bottom" tag={tag} prop="mb" min={-50} max={150} />
                              <ControlRow label="Margin Left" tag={tag} prop="ml" min={-50} max={150} />
                            </div>
                            <div className="grid grid-cols-1 gap-2 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                              <p className="text-[9px] font-black uppercase text-gray-400 mb-2 tracking-widest">Paddings</p>
                              <ControlRow label="Padding Top" tag={tag} prop="pt" min={0} max={100} />
                              <ControlRow label="Padding Right" tag={tag} prop="pr" min={0} max={100} />
                              <ControlRow label="Padding Bottom" tag={tag} prop="pb" min={0} max={100} />
                              <ControlRow label="Padding Left" tag={tag} prop="pl" min={0} max={100} />
                            </div>
                            <div className="space-y-2 pt-2">
                               <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Text Color</label>
                               <HexColorPicker 
                                  color={(styles as any)[tag]?.color || "#000000"} 
                                  className="w-full! h-32! rounded-xl" 
                                  onChange={(color) => updateStyleHandler(tag, 'color', color)} 
                                />
                            </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTheme && (
          <motion.div 
            drag dragControls={dragControlsTheme} dragListener={false} dragConstraints={constraintsRef} dragMomentum={false}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            className="absolute right-10 top-10 w-[320px] bg-white rounded-[32px] shadow-2xl p-6 pointer-events-auto border border-gray-100 text-black flex flex-col"
          >
            <div onPointerDown={(e: any) => dragControlsTheme.start(e)} className="flex justify-between items-center mb-6 cursor-grab active:cursor-grabbing border-b border-gray-50 pb-4">
              <h2 className="text-xl font-black uppercase italic tracking-tighter text-black">Theme Engine</h2>
              <X size={18} className="text-gray-300 cursor-pointer hover:text-black" onClick={() => setShowTheme(false)} />
            </div>
            <div className="space-y-6">
               <p className="text-[10px] text-gray-400 font-bold italic">Gebruik de Typography tab voor specifieke elementen.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}