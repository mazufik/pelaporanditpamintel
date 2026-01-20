// data.ts

import { Menu } from "@/helper/utils"; // Mengimpor tipe Menu dari helper/utils.ts

export type MenuItem = {
    label: string;
    href: string;
};

export type Category = {
    category: string;
    menus: Menu[]; // Menggunakan tipe Menu yang telah diekspor dari helper/utils.ts
};

export const kontigensiMenus: Category[] = [
    {
        category: "Laporan Bulanan",
        menus: [
            {
                title: "Laporan Pelaksanaan Tanggap Darurat UPT Terdampak Bencana Alam dan Non Alam",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1ebfo1Tcqp6E9BFPRQZMLrVrKL1cibM6w/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdCgasRFb6So3wwp0nkatbD9FLV_ylxYdUM-bPz2Jn4sRqw_Q/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "SK Tim Tanggap Darurat",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1mf1qkdd7DxConjQvQ0gZZTOQIlXtHoYZ/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSca_3k80E4raSjhJA-ObaHjvHhUc5w6YnjByLni0FC000FMqQ/viewform?usp=dialog",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Semester",
        menus: [
            {
                title: "Laporan Penilaian Kerawanan Bencana Alam",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1OqMraorBpIwWuHfBXvogS0Per9D2TW-Y/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSeGwpXIJGpQYoGZC53n4C0hJkIa0-Ez5x8jSIvYxuVpd8T0WQ/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "Laporan Rencana Kontijensi Penanggulangan dan Operasi Tanggap Darurat Bencana Alam",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1c6c_D8YDvWSheYjNYsAchW4l-xEUbOx9/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdbjAct7rW8OGQX43QoMElYUN0yyQl2ITrQ81lWQHl7bGZ6IQ/viewform?usp=dialog",
                    },
                ],
            },
        ],
    },
];
