"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import Accordion from "../../components/ui/Accordion";
import { useTitleStyles } from "@/context/StyleContext";
import { useOverlay } from "@/context/OverlayContext";
import type { Style, ButtonStyle } from "@/context/StyleContext";

import { ChromePicker } from "react-color";


// Import only initialized Google Fonts
import {
  Inter, Roboto, Roboto_Condensed, Jost, Lexend, Sofia_Sans_Condensed, Gabarito,
  Nunito, Raleway, Oswald, Work_Sans, Quicksand, Josefin_Sans, Maven_Pro, Rubik, Exo_2,
  Catamaran, Comfortaa, Playfair_Display, Merriweather, Crimson_Pro, Noto_Serif, Bitter, Josefin_Slab,
  Alegreya, Cormorant, Cormorant_Garamond
} from "next/font/google";

// Initialize fonts Sans serif
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-roboto-condensed" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const sofiaSansCondensed = Sofia_Sans_Condensed({ subsets: ["latin"], variable: "--font-sofia-sans-condensed" });
const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const josefinSans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin-sans" });
const mavenPro = Maven_Pro({ subsets: ["latin"], variable: "--font-maven-pro" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo-2" });
const catamaran = Catamaran({ subsets: ["latin"], variable: "--font-catamaran" });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });
// Initialize fonts serif
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const merriweather = Merriweather({ subsets: ["latin"], variable: "--font-merriweather" });
const crimsonPro = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson-pro" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const bitter = Bitter({ subsets: ["latin"], variable: "--font-bitter" });
const josefinSlab = Josefin_Slab({ subsets: ["latin"], variable: "--font-josefin-slab" });
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant" });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant-garamond" });

// Map fonts for dropdown
const fontMap: Record<string, string> = {
  Inter: inter.variable,
  Roboto: roboto.variable,
  "Roboto Condensed": robotoCondensed.variable,
  Jost: jost.variable,
  Lexend: lexend.variable,
  Nunito: nunito.variable,
  Raleway: raleway.variable,
  Oswald: oswald.variable,
  "Sofia Sans Condensed": sofiaSansCondensed.variable,
  Gabarito: gabarito.variable,
  "Work Sans": workSans.variable,
  Quicksand: quicksand.variable,
  "Josefin Sans": josefinSans.variable,
  "Maven Pro": mavenPro.variable,
  Rubik: rubik.variable,
  "Exo 2": exo2.variable,
  Catamaran: catamaran.variable,
  Comfortaa: comfortaa.variable,
  "Playfair Display": playfair.variable,
  Merriweather: merriweather.variable,
  "Crimson Pro": crimsonPro.variable,
  "Noto Serif": notoSerif.variable,
  Bitter: bitter.variable,
  "Josefin Slab": josefinSlab.variable,
  Alegreya: alegreya.variable,
  Cormorant: cormorant.variable,
  "Cormorant Garamond": cormorantGaramond.variable,
};

// Default styles
const defaultStyles = {
  h1: { size: 64, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Jost", fontWeight: "Bold", textTransform: "uppercase", listStyleType: "" },
  h2: { size: 28, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Jost", fontWeight: "Bolder", textTransform: "capitalize", listStyleType: "" },
  h3: { size: 24, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Jost", fontWeight: "Bolder", textTransform: "capitalize", listStyleType: "" },
  h4: { size: 20, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Jost", fontWeight: "Bolder", textTransform: "none", listStyleType: "" },
  h5: { size: 18, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Merriweather", fontWeight: "Normal", textTransform: "none", listStyleType: "" },
  h6: { size: 16, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Merriweather", fontWeight: "Normal", textTransform: "none", listStyleType: "" },
  p: { size: 14, marginTop: 1, marginRight: 0, marginBottom: 2, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 20, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Roboto", fontWeight: "Normal", textTransform: "none", listStyleType: "" },
  button: { size: 14, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 2, paddingRight: 2, paddingBottom: 2, paddingLeft: 2, opacity: 1, color: "", backgroundColor: "", fontFamily: "Roboto", textAlign: "left", fontWeight: "Bolder", textTransform: "none" },
  ol: { size: 12, marginTop: 0, marginRight: 0, marginBottom: 4, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 20, paddingLeft: 20, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Roboto", fontWeight: "Normal", textTransform: "none", listStyleType: "decimal" },
};



export default function TitleEditorWindow() {
  const [showBox, setShowBox] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [hovered, setHovered] = useState(false);

  const { styles: contextStyles, setStyles: setContextStyles } = useTitleStyles();
  const [styles, setStyles] = useState<typeof defaultStyles>(contextStyles || defaultStyles);

  // load saved styles from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("typographyStyles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setStyles(parsed);
        setContextStyles(parsed);
      } catch (e) {
        console.error("Failed to parse typographyStyles from localStorage", e);
      }
    }
  }, []);




  const { visible, setVisible, opacity, setOpacity } = useOverlay();


  const [customColors, setCustomColors] = useState({
    text: { r: 0, g: 0, b: 0, a: 1 },
    background: { r: 255, g: 255, b: 255, a: 1 },
  });

  // Helper to display color in inputs
  const displayColor = (color: string, fallback: string) => (color === "none" ? fallback : color);

  const allHeadings: (keyof typeof defaultStyles)[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "button"];

  // --- CSS EXPORT ---
  const handleExportCSS = () => {
    let css = "";

    Object.entries(styles).forEach(([key, style]) => {
      const selector = key === "button" ? "button" : key; // map headings to tags
      const s = style as any;

      css += `${selector} {\n`;
      if (s.fontFamily) css += `  font-family: '${s.fontFamily}', sans-serif;\n`;
      if (s.fontWeight) css += `  font-weight: ${s.fontWeight};\n`;
      if (s.fontSize || s.size) css += `  font-size: ${s.size}px;\n`;
      if (s.color) css += `  color: ${s.color};\n`;
      if (s.backgroundColor) css += `  background-color: ${s.backgroundColor};\n`;
      if (s.textAlign) css += `  text-align: ${s.textAlign};\n`;
      if (s.textTransform) css += `  text-transform: ${s.textTransform};\n`;
      if (s.marginTop !== undefined) css += `  margin-top: ${s.marginTop}px;\n`;
      if (s.marginRight !== undefined) css += `  margin-right: ${s.marginRight}px;\n`;
      if (s.marginBottom !== undefined) css += `  margin-bottom: ${s.marginBottom}px;\n`;
      if (s.marginLeft !== undefined) css += `  margin-left: ${s.marginLeft}px;\n`;
      if (s.paddingTop !== undefined) css += `  padding-top: ${s.paddingTop}px;\n`;
      if (s.paddingRight !== undefined) css += `  padding-right: ${s.paddingRight}px;\n`;
      if (s.paddingBottom !== undefined) css += `  padding-bottom: ${s.paddingBottom}px;\n`;
      if (s.paddingLeft !== undefined) css += `  padding-left: ${s.paddingLeft}px;\n`;
      if (s.opacity !== undefined) css += `  opacity: ${s.opacity};\n`;
      if (s.listStyleType) css += `  list-style-type: ${s.listStyleType};\n`;
      css += `}\n\n`;
    });

    const blob = new Blob([css], { type: "text/css" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "typography-settings.css";
    link.click();
  };

  
  const handleClick = () => setShowBox((prev) => !prev);

  const handleChange = (
    level: keyof typeof defaultStyles,
    field: keyof Style | keyof ButtonStyle,
    value: string | number
  ) => {
    const updated = {
      ...styles,
      [level]: { ...styles[level], [field]: value },
    };
    setStyles(updated);
    setContextStyles(updated); // update context if needed
    localStorage.setItem("typographyStyles", JSON.stringify(updated)); // persist
  };


  const handleReset = () => {
    setStyles(defaultStyles);
    setContextStyles(defaultStyles);
    localStorage.removeItem("typographyStyles");
  };
  
  return (
    <div>
      {/* Main Toggle */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 ml-2 mt-1"
      >
        <span className="material-symbols-outlined">format_size</span>
      </motion.button>

      {/* Draggable Window */}
      {showBox && (
        <Rnd
          default={{ x: -200, y: -200, width: "300em", height: "150em" }}
          bounds="window"
          dragHandleClassName="drag-handle"
          className="z-9999 bg-white text-black shadow-lg rounded-xl"
          style={{
            maxHeight: minimized ? "4rem" : "300em",
            overflowY: "auto",
            overflowX: "hidden",
            opacity: minimized && !hovered ? 0.1 : 1,
            transition: "opacity 0.2s, max-height 0.2s",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Header */}
          <div className="drag-handle cursor-move p-3 rounded-t-xl bg-gray-100 flex justify-between items-center">
            
            <div className="flex items-center justify-between w-full">
              {/* Left side: title */}
              <div className="flex flex-col">
                <div className="font-bold text-lg">Typography</div>
              </div>

              {/* Right side: icons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized((prev) => !prev)}
                  className=""
                  title={minimized ? "Restore" : "Minimize"}
                >
                  <span className="material-symbols-outlined text-xs leading-none">
                    {minimized ? "arrow_upward" : "arrow_downward"}
                  </span>
                </button>

                <button
                  onClick={() => setShowBox(false)}
                  className=""
                  title="Close"
                >
                  <span className="material-symbols-outlined text-xs leading-none">
                    close
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Content (hidden if minimized) */}
          {!minimized && (
            <div className="flex flex-col p-2 gap-1">

              {/* Scrollable content */}
              <div className="flex flex-col p-2 gap-1" style={{ maxHeight: "calc(26em)" }}>

                {/* Overlay Controls */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setVisible(!visible)}
                    className="px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-100 transition"
                  >
                    {visible ? "Hide Overlay" : "Show Overlay"}
                  </button>

                  {visible && (
                    <div className="flex items-center gap-3 pb-8">
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={opacity}
                        onChange={(e) => setOpacity(Number(e.target.value))}
                        className="w-full"
                      />
                      <span>{opacity.toFixed(2)}</span>
                    </div>
                  )}
                </div>





                {/* Headings and button */}
                {allHeadings.map((key) => (
                  <Accordion key={key} title={key.toUpperCase()}>
                    <div className="flex flex-col gap-2">

                      {/* Font Family */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Font Family</label>
                        <select
                          value={styles[key].fontFamily || "Inter"}
                          onChange={(e) => handleChange(key, "fontFamily", e.target.value)}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          {Object.keys(fontMap).map((font) => (
                            <option key={font} value={font}>{font}</option>
                          ))}
                        </select>
                        <motion.button
                          onClick={() => handleChange(key, "fontFamily", defaultStyles[key].fontFamily)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Text Align */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Text Align</label>
                        <select
                          value={styles[key].textAlign || "left"}
                          onChange={(e) => handleChange(key, "textAlign", e.target.value)}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          <option value="left">Left</option>
                          <option value="center">Center</option>
                          <option value="right">Right</option>
                          <option value="justify">Justify</option>
                        </select>
                        <motion.button
                          onClick={() => handleChange(key, "textAlign", defaultStyles[key].textAlign)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Font Weight */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Font Weight</label>
                        <select
                          value={styles[key].fontWeight || "400"}
                          onChange={(e) => handleChange(key, "fontWeight", e.target.value)}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          <option value="100">Thin</option>
                          <option value="200">Extra Light</option>
                          <option value="300">Light</option>
                          <option value="400">Normal</option>
                          <option value="500">Medium</option>
                          <option value="600">Semi Bold</option>
                          <option value="700">Bold</option>
                          <option value="800">Extra Bold</option>
                          <option value="900">Black</option>
                        </select>
                        <motion.button
                          onClick={() => handleChange(key, "fontWeight", defaultStyles[key].fontWeight)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Text Transform */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Text Transform</label>
                        <select
                          value={styles[key].textTransform || "none"}
                          onChange={(e) => handleChange(key, "textTransform", e.target.value)}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          <option value="none">None</option>
                          <option value="uppercase">Uppercase</option>
                          <option value="lowercase">Lowercase</option>
                          <option value="capitalize">Capitalize</option>
                        </select>
                        <motion.button
                          onClick={() => handleChange(key, "textTransform", defaultStyles[key].textTransform)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Size */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Size</label>
                        <input
                          type="range"
                          min={10}
                          max={80}
                          value={styles[key].size}
                          onChange={(e) => handleChange(key, "size", Number(e.target.value))}
                          className="w-24"
                        />
                        <span className="text-xs w-12">{styles[key].size}px</span>
                        <motion.button
                          onClick={() => handleChange(key, "size", defaultStyles[key].size)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Opacity */}
                      <div className="flex items-center gap-2">
                        <label className="text-xs w-36">Opacity</label>
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={styles[key].opacity}
                          onChange={(e) => handleChange(key, "opacity", Number(e.target.value))}
                          className="w-24"
                        />
                        <span className="text-xs w-12">{styles[key].opacity}</span>
                        <motion.button
                          onClick={() => handleChange(key, "opacity", defaultStyles[key].opacity)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Margins */}
                      {(["Top", "Right", "Bottom", "Left"] as const).map((dir) => (
                        <div key={`margin${dir}`} className="flex items-center gap-2">
                          <label className="text-xs w-36">Margin {dir}</label>
                          <input
                            type="range"
                            min={0}
                            max={100}
                            value={styles[key][`margin${dir}`]}
                            onChange={(e) => handleChange(key, `margin${dir}`, Number(e.target.value))}
                            className="w-24"
                          />
                          <span className="text-xs w-12">{styles[key][`margin${dir}`]}px</span>
                          <motion.button
                            onClick={() => handleChange(key, `margin${dir}`, defaultStyles[key][`margin${dir}`])}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xs px-2 py-1"
                          >
                            Reset
                          </motion.button>
                        </div>
                      ))}

                      {/* Paddings */}
                      {(["Top", "Right", "Bottom", "Left"] as const).map((dir) => (
                        <div key={`padding${dir}`} className="flex items-center gap-2">
                          <label className="text-xs w-36">Padding {dir}</label>
                          <input
                            type="range"
                            min={0}
                            max={100}
                            value={styles[key][`padding${dir}`]}
                            onChange={(e) => handleChange(key, `padding${dir}`, Number(e.target.value))}
                            className="w-24"
                          />
                          <span className="text-xs w-12">{styles[key][`padding${dir}`]}px</span>
                          <motion.button
                            onClick={() => handleChange(key, `padding${dir}`, defaultStyles[key][`padding${dir}`])}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xs px-2 py-1"
                          >
                            Reset
                          </motion.button>
                        </div>
                      ))}

                      {/* Text Color */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs">Text Color</label>
                        <ChromePicker
                          color={customColors.text}
                          onChange={(color) => {
                            const { r, g, b, a } = color.rgb;
                            const alpha = a ?? 1;
                            setCustomColors((prev) => ({
                              ...prev,
                              text: { r, g, b, a: alpha },
                            }));
                            handleChange(key, "color", `rgba(${r}, ${g}, ${b}, ${alpha})`);
                          }}
                        />
                        <motion.button
                          onClick={() => handleChange(key, "color", defaultStyles[key].color)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1 border rounded self-start"
                        >
                          Reset
                        </motion.button>
                      </div>

                      {/* Background Color */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs">Background Color</label>
                        <ChromePicker
                          color={customColors.background}
                          onChange={(color) => {
                            const { r, g, b, a } = color.rgb;
                            const alpha = a ?? 1; // ✅ ensures `a` is always a number
                            setCustomColors((prev) => ({
                              ...prev,
                              background: { r, g, b, a: alpha },
                            }));
                            handleChange(key, "backgroundColor", `rgba(${r}, ${g}, ${b}, ${alpha})`);
                          }}
                        />
                        <motion.button
                          onClick={() => handleChange(key, "backgroundColor", defaultStyles[key].backgroundColor)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-2 py-1 border rounded self-start"
                        >
                          Reset
                        </motion.button>
                      </div>

                    </div>
                  </Accordion>
                ))}

                {/* LIST (OL) Accordion */}
                <Accordion title="LIST (OL)">
                  <div className="flex flex-col gap-2">
                    {/* Font Family, Text Align, Font Weight, List Style, Size, Color, Padding Left */}
                    {/* Similar structure to headings, with Reset buttons for each property */}
                    {/* Example for Font Family */}
                    <div className="flex items-center gap-2">
                      <label className="text-xs w-36">Font Family</label>
                      <select
                        value={styles.ol.fontFamily || "Inter"}
                        onChange={(e) => handleChange("ol", "fontFamily", e.target.value)}
                        className="border rounded px-2 py-1 text-xs"
                      >
                        {Object.keys(fontMap).map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                      <motion.button
                        onClick={() => handleChange("ol", "fontFamily", defaultStyles.ol.fontFamily)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xs px-2 py-1 border rounded"
                      >
                        Reset
                      </motion.button>
                    </div>
                    {/* Repeat similar blocks for textAlign, fontWeight, listStyleType, size, color, paddingLeft */}
                  </div>
                </Accordion>



                {/* Settings Import/Export Row */}
                <div className="flex justify-between mt-4">
                  <motion.button
                    onClick={handleExportCSS}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded px-3 py-2"
                  >
                    Export CSS
                  </motion.button>



                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-red-600"
                  >
                    Reset All
                  </motion.button>
                </div>
                
              </div>
            </div>
          )}
        </Rnd>
      )}
    </div>
  );
}
