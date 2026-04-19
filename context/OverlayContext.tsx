"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface OverlayContextType {
  visible: boolean;
  setVisible: (v: boolean) => void;
  opacity: number;
  setOpacity: (v: number) => void;
}

const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0.1);

  return (
    <OverlayContext.Provider value={{ visible, setVisible, opacity, setOpacity }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlay must be used inside OverlayProvider");
  return ctx;
}