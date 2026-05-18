// components/AccessMenu.tsx

"use client";

import { FileText, MessageCircle } from "lucide-react";

export default function AccessMenu() {
    return (
        <div className="relative">
            {/* Tombol Floating */}
            <button
                className="
                    absolute
                    -left-12
                    top-1/2
                    -translate-y-1/2
                    w-14
                    h-14
                    rounded-l-full
                    rounded-r-2xl
                    bg-gradient-to-b
                    from-orange-400
                    to-pink-500
                    flex
                    items-center
                    justify-center
                    shadow-xl
                "
            >
                <span className="text-white text-3xl leading-none">
                    ‹
                </span>
            </button>

            {/* Card */}
            <div
                className="
                    bg-white/95
                    backdrop-blur-xl
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    border
                    border-white/30
                "
            >
                {/* Header */}
                <div className="px-5 py-4 border-b border-gray-100">
                    <h3 className="text-gray-800 font-semibold text-lg">
                        Menu Akses
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                        Shortcut bantuan & dokumentasi
                    </p>
                </div>

                {/* Menu Items */}
                <div className="p-4 space-y-3">
                    {/* Manual Book */}
                    <a
                        href="/manual-book.pdf"
                        target="_blank"
                        className="
                            flex
                            items-center
                            gap-4
                            p-3
                            rounded-2xl
                            hover:bg-gray-50
                            transition-all
                            duration-200
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-red-100
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >
                            <FileText className="w-5 h-5 text-red-500" />
                        </div>

                        {/* Text */}
                        <div>
                            <h4 className="font-semibold text-gray-700 leading-tight">
                                Download Manual Book
                            </h4>

                            <p className="text-sm text-gray-400 mt-1">
                                Preview PDF di tab baru
                            </p>
                        </div>
                    </a>

                    {/* Kontak Admin */}
                    <a
                        href="https://wa.me/628123456789"
                        target="_blank"
                        className="
                            flex
                            items-center
                            gap-4
                            p-3
                            rounded-2xl
                            hover:bg-gray-50
                            transition-all
                            duration-200
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-green-100
                                flex
                                items-center
                                justify-center
                                shrink-0
                            "
                        >
                            <MessageCircle className="w-5 h-5 text-green-500" />
                        </div>

                        {/* Text */}
                        <div>
                            <h4 className="font-semibold text-gray-700 leading-tight">
                                Kontak Admin
                            </h4>

                            <p className="text-sm text-gray-400 mt-1">
                                Hubungi melalui WhatsApp
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
