import Link from "next/link";

export const metadata = {
    title: "Subdit Pencegahan",
};

export default function PencegahanPage() {
    return (
        <main className="w-full max-w-3xl px-6 py-12">
            <h1 className="text-3xl font-bold mb-4">
                Pencegahan Gangguan Keamanan
            </h1>

            <p className="text-white/70 mb-8">
                Layanan dan informasi terkait pencegahan gangguan keamanan dan
                pemeliharaan keamanan pemasyarakatan.
            </p>

            <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white/10 border border-white/20">
                    📌 SOP Pencegahan
                </div>
                <div className="p-5 rounded-xl bg-white/10 border border-white/20">
                    📌 Pelaporan Deteksi Dini
                </div>
                <div className="p-5 rounded-xl bg-white/10 border border-white/20">
                    📌 Dashboard Monitoring
                </div>
            </div>

            <Link
                href="/"
                className="inline-block mt-10 text-sm text-white/60 hover:text-white"
            >
                ← Kembali ke Portal Utama
            </Link>
        </main>
    );
}
