import Image from "next/image";
import { kontigensiMenus } from "./data";
import DropdownCard from "@/components/DropDownCard";
import { isDropdownMenu } from "@/helper/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bidang Rencana Kontigensi dan Penanggulangan Bencana Alam",
};

export default function KontigensiPage() {
    return (
        <main className="w-full max-w-md px-6 py-10 mx-auto">
            {/* ================= HEADER ================= */}
            <header className="text-center mb-10">
                {/* LOGO */}
                <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md">
                        <Image
                            src="/logo.png"
                            alt="Pokja Kontigensi"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold leading-tight">
                    BIDANG RENCANA KONTIGENSI DAN PENANGGULANGAN BENCANA ALAM
                </h1>
                <p className="text-white/70 text-sm mt-2">
                    Pelaporan Bidang Rencana Kontigensi dan Penanggulangan
                    Bencana Alam
                </p>
            </header>

            {/* ================= MENU ================= */}
            <section className="space-y-8">
                {kontigensiMenus.map((group, i) => (
                    <div key={i}>
                        {/* Judul Kategori */}
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                            {group.category}
                        </h2>

                        {/* List Menu */}
                        <div className="space-y-4">
                            {group.menus.map((menu, idx) => {
                                if (isDropdownMenu(menu)) {
                                    return (
                                        <DropdownCard
                                            key={idx}
                                            title={menu.title}
                                            items={menu.items}
                                        />
                                    );
                                }

                                return (
                                    <DropdownCard
                                        key={idx}
                                        title={menu.title}
                                        href={menu.href}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="mt-12 text-center text-xs text-white/60">
                <div className="border-t border-white/20 pt-4">
                    <p>© {new Date().getFullYear()} DITPAMINTEL</p>
                    <p className="mt-1">Melayani • Profesional • Transparan</p>
                    <p className="mt-2 text-white/40">
                        Dikembangkan oleh Tim TIK DITPAMINTEL
                    </p>
                </div>
            </footer>
        </main>
    );
}
