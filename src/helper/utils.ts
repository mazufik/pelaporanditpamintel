// helper/utils.ts

interface MenuWithItems {
    title: string;
    items: { label: string; href: string }[];
    href?: never; // Menu dengan items, tidak memiliki href
}

interface MenuWithHref {
    title: string;
    href: string; // Menu dengan href, tidak memiliki items
    items?: never;
}

// Union type untuk Menu
export type Menu = MenuWithItems | MenuWithHref; // Menggabungkan tipe MenuWithItems dan MenuWithHref

// Fungsi untuk memeriksa apakah menu adalah dropdown
export function isDropdownMenu(menu: Menu): menu is MenuWithItems {
    return (menu as MenuWithItems).items !== undefined; // Mengecek apakah menu memiliki items
}
