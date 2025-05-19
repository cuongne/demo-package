export declare const LIST_MENU: ({
    id: number;
    name: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subMenu: {
        id: string;
        name: string;
        link: string;
        icon: import("react/jsx-runtime").JSX.Element;
    }[];
    link?: undefined;
    color?: undefined;
} | {
    id: number;
    name: string;
    link: string;
    icon: import("react/jsx-runtime").JSX.Element;
    subMenu?: undefined;
    color?: undefined;
} | {
    id: number;
    name: string;
    color: string;
    link: string;
    icon?: undefined;
    subMenu?: undefined;
})[];
