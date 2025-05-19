export declare const LIST_MENU: ({
    id: number;
    name: string;
    icon: import("react/jsx-runtime").JSX.Element;
    color: string;
    subMenu: {
        id: string;
        name: string;
        link: string;
        icon: import("react/jsx-runtime").JSX.Element;
    }[];
    link?: undefined;
} | {
    id: number;
    name: string;
    subMenu: {
        id: string;
        name: string;
        link: string;
        icon: import("react/jsx-runtime").JSX.Element;
    }[];
    icon?: undefined;
    color?: undefined;
    link?: undefined;
} | {
    id: number;
    name: string;
    link: string;
    icon?: undefined;
    color?: undefined;
    subMenu?: undefined;
} | {
    id: number;
    name: string;
    link: string;
    color: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subMenu?: undefined;
} | {
    id: number;
    name: string;
    color: string;
    link: string;
    icon?: undefined;
    subMenu?: undefined;
})[];
