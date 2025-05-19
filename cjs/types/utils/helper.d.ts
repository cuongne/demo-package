interface LoginPopupProps {
    name: string;
    value: unknown;
}
declare const openLoginPopup: (popupParams?: Array<LoginPopupProps> | null) => Promise<void>;
export default openLoginPopup;
