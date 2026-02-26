// LinkCard.tsx

import Image from "next/image";

interface LinkCardProps {
    title: string;
    url: string;
    icon: string;
    highlight?: boolean; // ⭐ props baru
}

export default function LinkCard({
    title,
    url,
    icon,
    highlight,
}: LinkCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                flex items-center gap-5 p-5 rounded-xl
                backdrop-blur-md border transition-all
                hover:-translate-y-1
                ${
                    highlight
                        ? "bg-blue-500/20 border-blue-400 scale-[1.02]"
                        : "bg-white/10 border-white/20 hover:bg-white/20"
                }
            `}
        >
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
                <Image
                    src={icon}
                    alt={title}
                    width={44}
                    height={44}
                    className="object-contain"
                />
            </div>

            <span
                className={`text-base leading-snug ${
                    highlight ? "font-bold text-white" : "font-bold"
                }`}
            >
                {title}
            </span>
        </a>
    );
}
