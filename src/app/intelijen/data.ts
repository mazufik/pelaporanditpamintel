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

export const intelijenMenus: Category[] = [
    {
        category: "Laporan Bulanan",
        menus: [
            {
                title: "Data Warga Binaan Risiko Tinggi (Highrisk)",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1sIqGkR4zb33y3jJsEvZfxbj3yGn2TEii/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/jeUQesJCtccGLJcN8",
                    },
                ],
            },
            {
                title: "Laporan Konsolidasi Intelijen Pemasyarakatan tingkat wilayah",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1qw_oVXt_qPsOOHX2KBlSnAlwjzdOpoED/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSf8GBqhP9LNlwIeWPg1n3p9FcXwnRBUkSNKBkjK7uySzhvB6w/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "Laporan Intelijen",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1Sg5FNZeN7ZOMegHzHnnWqOu2jKn55NTe/edit?usp=drive_link&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLScTuRiXbgeJCcvZd_mc_57nsYWSx3NOcS15ETiJ6idWj216zQ/viewform?usp=dialog",
                    },
                ],
            },
            {
                title: "Laporan Analisa Pengawasan Komunikasi/WARTELSUSPAS",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/10RA2AF87dk6n9HklpQf7Bo0JS8T1Czbv/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSdGZ8tR-jL2cbdDSaNHoGN5g5MBZHhwbNgUlPcvsBskmfx3sA/viewform?usp=dialog",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Triwulan",
        menus: [
            {
                title: "Laporan Pengisian Deteksi Dini",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1Y5ni60kRinZs8BgShBMUwt2LGGaLEbiD/edit?usp=drive_link&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Format Instrument",
                        href: "https://docs.google.com/spreadsheets/d/1ojcF9A02tyK_J7eNCAEsFgQ-UkfUm2WJ/edit?usp=sharing&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/u3g97rhTGK94ccuHA",
                    },
                ],
            },
        ],
    },
    {
        category: "Laporan Tahunan",
        menus: [
            {
                title: "Laporan Penetapan Tim Unit Intelijen Pemasyarakatan, Unit Intelijen Pemasyarakatan (SK Tim UIP)",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/document/d/1CldavX_wi6HaOGqxuVcU9AAtxD-M7xiV/edit?usp=drive_link&ouid=112817817845458025084&rtpof=true&sd=true",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://forms.gle/sBcXR1qyUrPnz5kK7",
                    },
                ],
            },
        ],
    },
];
