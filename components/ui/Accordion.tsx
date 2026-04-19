"use client";

import { useState } from "react";
import "material-symbols"; // Make sure material-symbol-outlined  is installed and imported

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-gray-300">
        <button
          className="w-full text-left px-4 flex justify-between items-center font-semibold transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4>
          {title}
          </h4>
          <span
            className={`ml-2 material-symbols-outlined  transition-transform duration-300  hover:underline  ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>

        </button>
    {isOpen && <div className="p-2">{children}</div>}
      </div>
  );
}