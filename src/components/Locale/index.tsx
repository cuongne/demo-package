import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import type { Lang } from '../../types';
import styles from './styles.module.css';

interface SwitchLocaleProps {
  defaultLocale?: Lang;
}

const SwitchLocale = ({ defaultLocale = 'vi' }: SwitchLocaleProps) => {
  const [locale, setLocale] = useState<Lang>(defaultLocale);
  useEffect(() => {
    const cookieLocale = Cookies.get('topdev_locale');
    if (cookieLocale === 'en' || cookieLocale === 'vi') {
      setLocale(cookieLocale);
    }
  }, []);
  const handleChangeLocale = (lang: Lang) => {
    if (lang === locale) return;

    const currentUrl = window.location.href;
    const redirectUri = encodeURIComponent(currentUrl);
    window.location.href = `/${lang}?redirect_uri=${redirectUri}`;
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleChangeLocale('en')}
        type="button"
        className={locale === 'en' ? styles.buttonActive : styles.button}
      >
        En
      </button>
      <div className={styles.divider} />
      <button
        onClick={() => handleChangeLocale('vi')}
        type="button"
        className={locale === 'vi' ? styles.buttonActive : styles.button}
      >
        Vi
      </button>
    </div>
  );
};

export default SwitchLocale;
