import Image from "next/image";
import DropdownCard from "@/components/DropDownCard";
import { intelijenMenus } from "./data";

export const metadata = {
    title: "Subdit Intelijen",
};

export default function IntelijenPage() {
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
                            src="/intelijen.png"
                            alt="Subdit Intelijen"
                            width={115}
                            height={115}
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold leading-tight">
                    SUBDIT INTELIJEN
                </h1>
                <p className="text-white/70 text-sm mt-2">
                    Pelaporan Intelijen Pemasyarakatan
                </p>
            </header>

            {/* MENU */}
            <section className="space-y-8">
                {intelijenMenus.map((group, i) => (
                    <div key={i}>
                        {/* Judul Kategori */}
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                            {group.category}
                        </h2>

                        {/* List Menu */}
                        <div className="space-y-4">
                            {group.menus.map((menu, idx) => (
                                <DropdownCard
                                    key={idx}
                                    title={menu.title}
                                    items={menu.items}
                                    href={menu.href}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* FOOTER */}
            <footer className="mt-12 text-center text-xs text-white/60">
                <div className="border-t border-white/20 pt-4">
                    <p>© {new Date().getFullYear()} DITPAMINTEL</p>
                    <p className="mt-1">Official Digital Intelijen</p>
                </div>
            </footer>
        </main>
    );
}
