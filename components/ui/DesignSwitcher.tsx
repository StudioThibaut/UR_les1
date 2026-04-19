"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DesignToggle() {
  const [active, setActive] = useState(false);

  const toggleStyle = () => {
    setActive(!active);
  };

  useEffect(() => {
    // Remove old link if exists
    const oldLink = document.getElementById("theme-css") as HTMLLinkElement;
    if (oldLink) oldLink.remove();

    // Add new link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "theme-css";
    link.href = active
      ? "/data/css/style1.css" // active = true -> style1
      : "/data/css/style2.css"; // active = false -> style2
    document.head.appendChild(link);
  }, [active]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       <motion.button
              className="px-2 py-2 rounded"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
                      onClick={toggleStyle}

            >
              <span className="material-symbols-outlined">autorenew</span>
            </motion.button>

    </div>
  );
}
