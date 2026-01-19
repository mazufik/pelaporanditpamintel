import Image from "next/image";
import DropdownCard from "@/components/DropDownCard";
import { pencegahanMenus } from "./data";

export const metadata = {
    title: "Subdit Pencegahan Gangguan Keamanan dan Pemeliharaan Keamanan",
};

export default function PencegahanPage() {
    return (
        <main className="w-full max-w-md px-6 py-10">
            {/* HEADER */}
            <header className="text-center mb-10">
                <div className="flex justify-center mb-5">
                    <div
                        className="w-[110px] h-[110px] rounded-full overflow-hidden
                        border border-white/20 bg-white/10"
                    >
                        <Image
                            src="/icons.png"
                            alt="Subdit Pencegahan Gangguan Keamanan dan Pemeliharaan Keamanan"
                            width={115}
                            height={115}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold leading-tight">
                    SUBDIT PENCEGAHAN GANGGUAN KEAMANAN DAN PEMELIHARAAN
                    KEAMANAN
                </h1>
                <p className="text-white/70 text-sm mt-2">
                    Pelaporan Pencegahan Gangguan Keamanan dan Pemeliharaan
                    Keamanan
                </p>
            </header>

            {/* MENU */}
            <section className="space-y-4">
                {pencegahanMenus.map((menu, i) => (
                    <DropdownCard
                        key={i}
                        title={menu.title}
                        items={menu.items}
                        href={menu.href}
                    />
                ))}
            </section>

            {/* FOOTER */}
            <footer className="mt-12 text-center text-xs text-white/60">
                <div className="border-t border-white/20 pt-4">
                    <p>© {new Date().getFullYear()} DITPAMINTEL</p>
                    <p className="mt-1">Official Digital DITPAMINTEL</p>
                </div>
            </footer>
        </main>
    );
}
