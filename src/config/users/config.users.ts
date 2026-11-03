import { BookMarkedIcon, LayoutTemplate, User2Icon, WalletMinimal, type LucideIcon } from "lucide-react";

type TypesConfigSidebar = {
    id?: number;
    link?: string;
    label?: string;
    icon?: LucideIcon
    isActive: boolean
}

export const ConfigSidebar: TypesConfigSidebar[] = [
    {
        id: 1,
        link: "/dashboard",
        label: "Overview",
        icon: LayoutTemplate,
        isActive: true
    },
    {
        id: 2,
        link: "/savings",
        label: "My savings",
        icon: WalletMinimal,
        isActive: false
    },
    {
        id: 3,
        link: "/transaction",
        label: "NOTED",
        icon: BookMarkedIcon,
        isActive: false
    },
    {
        id: 4,
        link: "/profile",
        label: "PROFILE",
        icon: User2Icon,
        isActive: false
    }
]