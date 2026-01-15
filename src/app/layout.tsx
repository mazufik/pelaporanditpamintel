import "./globals.css";

export const metadata = {
    title: "Linktree Pemerintah",
    description: "Portal resmi layanan & media pemerintahan",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className="min-h-screen flex items-center justify-center">
                {children}
            </body>
        </html>
    );
}
