interface SubMenuProps {
    user?: {
        display_name?: string;
        roles?: string[];
    };
    type?: 'resume' | 'employer';
}
export declare const SubMenu: ({ user, type }: SubMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
