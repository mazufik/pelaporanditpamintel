// components/AccessMenu.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, MessageCircle, ChevronLeft } from "lucide-react";

export default function AccessMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Tutup menu ketika klik di luar
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={menuRef}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
        >
            {/* BUTTON FLOATING */}
            <button
                onClick={() => setOpen(!open)}
                className="
                    w-14 h-14
                    rounded-r-2xl
                    bg-gradient-to-b
                    from-orange-400
                    to-pink-500
                    shadow-2xl
                    flex items-center justify-center
                    hover:scale-105
                    transition-all
                    duration-300
                "
            >
                <ChevronLeft
                    className={`text-white transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                    size={28}
                />
            </button>

            {/* MENU */}
            <div
                className={`
                    absolute
                    left-16
                    top-1/2
                    -translate-y-1/2
                    w-[320px]
                    transition-all
                    duration-300
                    ${
                        open
                            ? "opacity-100 translate-x-0 visible"
                            : "opacity-0 -translate-x-5 invisible"
                    }
                `}
            >
                <div
                    className="
                        bg-white/95
                        backdrop-blur-xl
                        rounded-3xl
                        shadow-2xl
                        overflow-hidden
                        border border-white/30
                    "
                >
                    {/* HEADER */}
                    <div className="px-5 py-4 border-b border-gray-100">
                        <h3 className="text-gray-800 font-semibold text-xl">
                            Menu Akses
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Shortcut bantuan & dokumentasi
                        </p>
                    </div>

                    {/* ITEMS */}
                    <div className="p-4 space-y-3">
                        {/* MANUAL BOOK */}
                        <a
                            href="https://bit.ly/ManualBookPelaporanDitpamintel"
                            target="_blank"
                            className="
                                flex items-center gap-4
                                p-3 rounded-2xl
                                hover:bg-gray-50
                                transition-all
                            "
                        >
                            <div
                                className="
                                    w-12 h-12
                                    rounded-2xl
                                    bg-red-100
                                    flex items-center justify-center
                                    shrink-0
                                "
                            >
                                <FileText className="w-5 h-5 text-red-500" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-700">
                                    Download Manual Book
                                </h4>

                                <p className="text-sm text-gray-400">
                                    Preview PDF di tab baru
                                </p>
                            </div>
                        </a>

                        {/* ADMIN */}
                        <a
                            href="mailto:ditpamintel26@gmail.com"
                            target="_blank"
                            className="
                                flex items-center gap-4
                                p-3 rounded-2xl
                                hover:bg-gray-50
                                transition-all
                            "
                        >
                            <div
                                className="
                                    w-12 h-12
                                    rounded-2xl
                                    bg-green-100
                                    flex items-center justify-center
                                    shrink-0
                                "
                            >
                                <MessageCircle className="w-5 h-5 text-green-500" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-700">
                                    Kontak Admin
                                </h4>

                                <p className="text-sm text-gray-400">
                                    Hubungi melalui Email
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
