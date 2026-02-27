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

export const bhaktipasMenus: Category[] = [
    {
        category: "Laporan Hari Bhakti Pemasyarakatan",
        menus: [
            {
                title: "Laporan Test Urine",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1CK_4a_YRghpdfHpy0Zul3dJloWHbmcW9tUpLE3vlzBQ/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSf22h_qCJCgocwpJwCo0xTTnXy-Ds-KanTx5o7BdFcrY34W6A/viewform?usp=sharing&ouid=112817817845458025084",
                    },
                ],
            },
            {
                title: "Laporan Penggeledahan (Razia)",
                items: [
                    {
                        label: "Format Laporan",
                        href: "https://docs.google.com/spreadsheets/d/1vXqC76VTUQHZmre-GY_2EtFOaHyELN6JPkpi7lS8G5A/edit?usp=sharing",
                    },
                    {
                        label: "Upload Laporan",
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSe-qfuHDt5i5ObNaJ7cq0ZyL6pO17INhKKCx7amxZEIixEvHw/viewform?usp=sharing&ouid=112817817845458025084",
                    },
                ],
            },
            {
                title: "Laporan Kebersihan Lingkungan",
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
        ],
    },
];
