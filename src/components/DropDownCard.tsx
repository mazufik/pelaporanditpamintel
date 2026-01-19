"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Item = {
    label: string;
    href: string;
};

type DropdownCardProps =
    | {
          title: string;
          items: Item[];
          href?: never;
      }
    | {
          title: string;
          href: string;
          items?: never;
      };

export default function DropdownCard(props: DropdownCardProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // 🔹 Auto close ketika klik di luar
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
    if ("href" in props) {
        return (
            <Link
                href={props.href}
                className="flex items-center justify-center text-center
                p-5 rounded-xl
                bg-white/10 backdrop-blur-md
                border border-white/20
                hover:bg-white/20 hover:-translate-y-1
                transition-all"
            >
                <span className="font-semibold text-base">{props.title}</span>
            </Link>
        );
    }

    /* =======================
       MODE: DROPDOWN
    ======================= */
    return (
        <div
            ref={ref}
            className="rounded-xl
            bg-white/10 backdrop-blur-md
            border border-white/20
            overflow-hidden"
        >
            {/* BUTTON */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="relative w-full p-5
                hover:bg-white/20 transition"
            >
                {/* TITLE */}
                <span className="block text-center font-semibold text-base">
                    {props.title}
                </span>

                {/* ICON */}
                <span
                    className={`absolute right-5 top-1/2 -translate-y-1/2
                    text-xs transition-transform ${open ? "rotate-180" : ""}`}
                >
                    ▼
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
                        {props.items.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
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
}
