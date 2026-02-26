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
        category: "",
        menus: [
            {
                title: "Format Laporan",
                href: "https://docs.google.com/spreadsheets/d/18R0CI1a7GcGiHp-2m864tUywGDKgg_2QLma5By85IjU/edit?gid=1901766786#gid=1901766786",
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
