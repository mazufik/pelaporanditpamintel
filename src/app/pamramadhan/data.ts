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

export const pamramadhanMenus: Category[] = [
    {
        category:
            "Laporan Peningkatan Kewaspadaan Selama Ramadhan dan Idul Fitri 1447 H/2026",
        menus: [
            {
                title: "Format Laporan",
                href: "https://docs.google.com/spreadsheets/d/1ebfo1Tcqp6E9BFPRQZMLrVrKL1cibM6w/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
            },
            {
                title: "Laporan Kesiapan Awal",
                items: [
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/MrdixnccdiCaxrzz7",
                    },
                ],
            },
            {
                title: "Laporan Berkala Mingguan",
                items: [
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/Ejq2dmZ1FJQ4qkZr6",
                    },
                ],
            },
            {
                title: "Laporan Hari Raya Idul Fitri",
                items: [
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/PXLGAAi4eYVGpukZA",
                    },
                ],
            },
            {
                title: "Laporan Evaluasi Akhir",
                items: [
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/Sc13Q9gCWQp1bapXA",
                    },
                ],
            },
            {
                title: "Laporan Insidentil",
                items: [
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/bfJbDovEhJJYUtZp8",
                    },
                ],
            },
        ],
    },
];
