"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, memo } from "react";
import Link from "next/link";

// Tipe Item untuk Dropdown
type Item = {
    label: string;
    href: string;
};

// Tipe Props untuk DropdownCard
type DropdownCardProps =
    | {
          title: string;
          items: Item[]; // Dropdown menu memiliki item
          href?: never; // Tidak ada href
      }
    | {
          title: string;
          href: string; // Link menu memiliki href
          items?: never; // Tidak ada items
      };

const DropdownCard = memo((props: DropdownCardProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Auto-close dropdown ketika klik di luar
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    /* =======================
       MODE: LINK LANGSUNG
    ======================= */
    if (props.href) {
        return (
            <Link
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-center
                           p-5 rounded-xl
                           bg-white/10 backdrop-blur-md
                           border border-white/20
                           hover:bg-white/20 hover:-translate-y-1
                           transition-all"
            >
                <span className="font-semibold text-base leading-relaxed">
                    {props.title}
                </span>
            </Link>
        );
    }

    /* =======================
       MODE: DROPDOWN
    ======================= */
    return (
        <div
            ref={ref}
            className="rounded-xl bg-white/10 backdrop-blur-md
                       border border-white/20 overflow-hidden"
        >
            {/* BUTTON */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="group flex items-center w-full p-5
                           hover:bg-white/20 transition"
            >
                {/* TITLE */}
                <span className="flex-1 text-center font-semibold text-base leading-relaxed">
                    {props.title}
                </span>

                {/* ICON */}
                <span
                    className={`shrink-0 transition-transform duration-300
                                ${open ? "rotate-180" : ""}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white/70 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="px-6 pb-4 space-y-3 text-center"
                    >
                        {props.items?.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="block text-sm text-white/70
                                           hover:text-white hover:underline"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

export default DropdownCard;
