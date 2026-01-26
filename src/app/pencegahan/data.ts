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

export const pencegahanMenus: Category[] = [
    {
        category: "Laporan Insidentil",
        menus: [
            {
                title: "Data Penggagalan penyelundupan Narkotika",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1xTTzmwY_-P3gAID_sphtRVeWOC__ALlw-AE0ZT5wYmo/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/T9n97E7f3bXhLW1h7",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Bulanan",
        menus: [
            {
                title: "Laporan Pelaksanaan Pembinaan Prosedur",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1meVyUJIL1uCKJwr8YzrKLdC1rSAlZ6MDf6CU-Cv7HzI/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/27KSvzBVXnRu5hix8",
                    },
                ],
            },
            {
                title: "Pelaksanaan Tes Urine",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1eFtuD8rj2TD-Ojp_ZlDtUdEGXupBQDc3oi0mC82T-4I/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/hkfRzQgUrr96Z9Rv8",
                    },
                ],
            },
            {
                title: "Data Penggeledahan Blok Hunian",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1BSdSXiRvTiw0zoWqUvcsWmK29elR34A53g326q5745g/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/2nUmsXrXrjGHie829",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Semester",
        menus: [
            {
                title: "Laporan Penilaian Kerawanan Bencana Non Alam",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/159NXcUNGqOM8ihF94gZ8fTNI4ATPi_KD/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/nGYsujEUhwm3BaMd8",
                    },
                ],
            },
            {
                title: "Data pengendalian peralatan pengamanan dan penyiapan peralatan kondisi darurat",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1Qnc23UIMqEjk65kKF0W2d4RCv7S8x75jmx9bUt1-uQw/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/vRo4JWQRkJvQDWcF6",
                    },
                ],
            },
            {
                title: "Laporan Rencana Kontijensi Penanggulangan dan Operasi Tanggap Darurat Bencana Non Alam",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1StgsEB1FxIUZaaBEoRYHLwZGOjyo0X1V5Df_wOX3GfA/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/addDd8nrsHapyBU17",
                    },
                ],
            },
        ],
    },
];
