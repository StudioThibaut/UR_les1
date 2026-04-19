"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Style = {
  size: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  opacity: number;
  color: string;
  backgroundColor: string;
  textAlign: string;
  fontFamily: string;
  fontWeight: string;
  textTransform: string;
  listStyleType: string;
};

export type ButtonStyle = {
  size: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  opacity: number;
  color: string;
  backgroundColor: string;
  fontFamily: string;
  fontWeight: string;
  textAlign: string;
  textTransform: string;
};

export type Styles = {
  h1: Style;
  h2: Style;
  h3: Style;
  h4: Style;
  h5: Style;
  h6: Style;
  p: Style;
  button: ButtonStyle;
  ol: Style;
};

export type ContextType = {
  styles: Styles;
  setStyles: (s: Styles) => void;
  getColor: (type: keyof Styles) => string;
  getBackground: (type: keyof Styles) => string;
  getFontFamily: (type: keyof Styles) => string;
};

const defaultStyles: Styles = {
  h1: { size: 64, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "center", fontFamily: "Inter", fontWeight: "900", textTransform : "none", listStyleType: "" },
  h2: { size: 48, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "800", textTransform : "none", listStyleType: "" },
  h3: { size: 32, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "700", textTransform : "none", listStyleType: "" },
  h4: { size: 24, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "700", textTransform : "none", listStyleType: "" },
  h5: { size: 20, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "600", textTransform : "none", listStyleType: "" },
  h6: { size: 18, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "600", textTransform : "none", listStyleType: "" },
  p:  { size: 16, marginTop: 1, marginRight: 0, marginBottom: 2, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 20, paddingLeft: 0, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "400", textTransform : "none", listStyleType: "" },
  button: { size: 14, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, opacity: 1, color: "", backgroundColor: "", fontFamily: "Inter", textAlign: "center", fontWeight: "600", textTransform : "none" },
  ol: { size: 16, marginTop: 0, marginRight: 0, marginBottom: 4, marginLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 20, paddingLeft: 20, opacity: 1, color: "", backgroundColor: "", textAlign: "left", fontFamily: "Inter", fontWeight: "400", textTransform: "none", listStyleType: "decimal" },
};

const TitleStyleContext = createContext<ContextType>({
  styles: defaultStyles,
  setStyles: () => {},
  getColor: () => "inherit",
  getBackground: () => "inherit",
  getFontFamily: () => "Inter",
});

export const useTitleStyles = () => useContext(TitleStyleContext);

export const TitleStyleProvider = ({ children }: { children: ReactNode }) => {
  const [styles, setStyles] = useState<Styles>(defaultStyles);

  // 1. Inladen uit LocalStorage bij opstarten
  useEffect(() => {
    const saved = localStorage.getItem("site-styles");
    if (saved) {
      try {
        setStyles(JSON.parse(saved));
      } catch (e) {
        console.error("Fout bij laden styles", e);
      }
    }
  }, []);

  // 2. Synchroniseer styles naar CSS Variabelen en LocalStorage
  useEffect(() => {
    localStorage.setItem("site-styles", JSON.stringify(styles));

    Object.keys(styles).forEach((tag) => {
      const s = styles[tag as keyof Styles];
      const root = document.documentElement;

      root.style.setProperty(`--${tag}-font`, s.fontFamily);
      root.style.setProperty(`--${tag}-size`, `${s.size}px`);
      root.style.setProperty(`--${tag}-weight`, s.fontWeight);
      root.style.setProperty(`--${tag}-align`, s.textAlign);
      root.style.setProperty(`--${tag}-color`, s.color || "inherit");
      root.style.setProperty(`--${tag}-transform`, s.textTransform);
      root.style.setProperty(`--${tag}-mt`, `${s.marginTop}px`);
      root.style.setProperty(`--${tag}-mb`, `${s.marginBottom}px`);
    });
  }, [styles]);

  const getColor = (type: keyof Styles) =>
    styles[type].color === "none" ? "inherit" : styles[type].color;

  const getBackground = (type: keyof Styles) =>
    styles[type].backgroundColor === "none" ? "inherit" : styles[type].backgroundColor;

  const getFontFamily = (type: keyof Styles) =>
    styles[type].fontFamily || "Inter"; 

  return (
    <TitleStyleContext.Provider value={{ styles, setStyles, getColor, getBackground, getFontFamily }}>
      {children}
    </TitleStyleContext.Provider>
  );
};