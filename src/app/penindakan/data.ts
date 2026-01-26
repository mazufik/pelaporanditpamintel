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

export const penindakanMenus: Category[] = [
    {
        category: "Laporan Insidentil",
        menus: [
            {
                title: "Data Pemetaan, Verifikasi dan Koordinasi Kegiatan Rekonsiliasi, Rehabilitasi, dan Rekonstruksi pada saat Gangguan Keamanan dan Ketertiban",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1krsDjtJy7ErJz_JPkrZbAt5LcDO8CmhKdEPyDSBJEFY/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdajuSQ4o3R79nWiWW6hsln9IZS0awnfQBjTZSl13GBhbY2WA/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "Laporan Atensi Pimpinan Terkait Gangguan Keamanan dan Ketertiban (by Whatsapp) / Kejadian menonjol",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1BQdQrHnIYWAUwMWqWcrBFcGjuyxUYl_55vPbogzOSg4/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan (by Whatsapp)",
                        href: "https://wa.me/6281200000000",
                    },
                ],
            },
            {
                title: "Data Pemindahan Narapidana Ke Nusakambangan",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/13d-rtIuM5PzBtaCkQmG3AA79Txq9XFmXOGJIFnG8wxY/edit?gid=997410699",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/p6ApwwqSLfT4vX1q9",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Bulanan",
        menus: [
            {
                title: "Data Gangguan Keamanan dan Ketertiban",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1baSp1AhFWxH3C4hDMUh-SeK-qHX-NTgXijCCi9hGDAE/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdCixN0lwGy53v1V_7lsAOvKbqYpEsngM_jOM5GxX5Gfo1Dbg/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "Data Tahanan/Narapidana Terlibat Perkara Baru Di Dalam Lapas/Rutan",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1xkqWBVwrJ-qMQ_R60pOtu9kCI8zTMUd1JLUkjO_uyLQ/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/4dNpQ61641FpZPVS9",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Tahunan",
        menus: [
            {
                title: "Tim Correctional Crisis Center (SK Tim CC)",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1Z80izeF5t1foqQat8NvlP_ZKz04hMJ_T/edit?usp=sharing&ouid=103176946432927424485&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/xauz6Wnpegn%203rSFcA",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Menyesuaikan/Laporan per Kasus",
        menus: [
            {
                title: "Data Pelarian, Tertangkap kembali dan Analisa pelarian narapidana",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1aY2GNPL2iRAD0Q3wdbMma3AQC3XljXvTIgl3Ufn1Krs/edit?gid=1354759459",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/xauz6Wnpegn%203rSFcAhttps://docs.google.com/forms/d/e/1FAIpQLSd3wGWw5NkFaJ7oeL6STr5ZLuu-Vv6yCb1gnywLNQ1et4jqcQ/viewform",
                    },
                ],
            },
        ],
    },
];
