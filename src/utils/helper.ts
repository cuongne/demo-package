interface LoginPopupProps {
  name: string;
  value: unknown;
}
const openLoginPopup = async (
  popupParams: Array<LoginPopupProps> | null = null,
): Promise<void> => {
  const redirectUrl = new URL(
    process.env.NEXT_PUBLIC_OAUTH2_URL_ACCOUNT as string,
  );
  redirectUrl.searchParams.append('redirect_uri', window.location.href);
  if (popupParams !== null && popupParams.length > 0) {
    popupParams.forEach((param) => {
      return param.name === 'isEmployer'
        ? (redirectUrl.hash = 'tab-employer')
        : redirectUrl.searchParams.append(param.name, String(param.value));
    });
  }
  window.location.href = redirectUrl.toString();
};

export default openLoginPopup;
