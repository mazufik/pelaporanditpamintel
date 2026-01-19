export default function PencegahanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-black flex justify-center">
            {children}
        </section>
    );
}
