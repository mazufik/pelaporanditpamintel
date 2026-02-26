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
                title: "Laporan Peningkatan Kewaspadaan Selama Ramadhan dan Idul Fitri",
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
