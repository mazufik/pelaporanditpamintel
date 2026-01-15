import Image from "next/image";
import LinkCard from "@/components/LinkCard";
import { links } from "@/data/links";

export default function Home() {
    return (
        <main className="w-full max-w-md px-6 py-10">
            {/* HEADER */}
            <header className="text-center mb-10">
                <div className="flex justify-center mb-5">
                    <Image
                        src="/logo.png" // pastikan ada di public/
                        alt="Logo Instansi"
                        width={110}
                        height={110}
                        priority
                        className="object-contain"
                    />
                </div>

                <h1 className="text-2xl font-bold leading-tight">
                    DIREKTORAT PENGAMANAN DAN INTELIJEN
                </h1>
                <p className="text-white/70 text-sm mt-2">
                    Portal Pelaporan Direktorat Pengamanan dan Intelijen
                </p>
            </header>

            {/* LINKS */}
            <section className="space-y-4">
                {links.map((link, index) => (
                    <LinkCard
                        key={index}
                        title={link.title}
                        url={link.url}
                        icon={link.icon}
                    />
                ))}
            </section>

            {/* FOOTER */}
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
