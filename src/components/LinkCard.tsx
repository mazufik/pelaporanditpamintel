import Image from "next/image";

interface LinkCardProps {
    title: string;
    url: string;
    icon: string;
}

export default function LinkCard({ title, url, icon }: LinkCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-5 rounded-xl
                 bg-white/10 backdrop-blur-md
                 border border-white/20
                 hover:bg-white/20 hover:-translate-y-1
                 transition-all"
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

            <span className="font-semibold text-base leading-snug">
                {title}
            </span>
        </a>
    );
}
