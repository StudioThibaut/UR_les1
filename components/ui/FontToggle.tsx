"use client";
import { motion } from "framer-motion";
import { useTitleStyles } from "@/context/StyleContext"; // Gebruik de nieuwe context

export default function FontToggle() {
  const { styles, setStyles } = useTitleStyles();
  
  // De fonts waar je tussen wilt wisselen
  const fonts = ["Inter", "Syne", "Oswald", "Playfair Display"];

  const handleToggle = () => {
    // We kijken naar de huidige font van de H1
    const currentFont = styles.h1.fontFamily;
    const currentIndex = fonts.indexOf(currentFont);
    const nextIndex = (currentIndex + 1) % fonts.length;
    const nextFont = fonts[nextIndex];

    // We updaten de styles voor ALLE belangrijke elementen tegelijk (optioneel)
    // Of je doet alleen de h1, dat kies je zelf.
    const newStyles = { ...styles };
    newStyles.h1.fontFamily = nextFont;
    newStyles.h2.fontFamily = nextFont;
    newStyles.p.fontFamily = nextFont;

    setStyles(newStyles);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100"
      title={`Switch font (current: ${styles.h1.fontFamily})`}
    >
      {/* Lucide-react icoon als vervanger voor Google Symbols voor consistentie */}
      <span className="text-xs font-black uppercase tracking-tighter text-blue-600">
        Abc
      </span>
    </motion.button>
  );
}