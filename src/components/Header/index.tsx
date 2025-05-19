import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Employer, FaPhoneAlt, FaUser } from '../../constants/icon';
import { checkLogin, getCategories } from '../../services/api';
import type { Category, Lang } from '../../types';
import MagicScroll from '../MagicScroll/MagicScroll';
import { SubMenu } from '../Submenu';
import styles from './header.module.css';
import { InputSearch } from './InputSearch';
import { Notification } from './Notification';

const HeaderButtonsNotLogin = ({ isSticky = false }) => {
  const handleClickLogin = () => {
    if (typeof window !== 'undefined') {
      window.location.href =
        'https://accounts.topdev.vn/' +
        '?redirect_uri=' +
        encodeURIComponent(window?.location.href);
    }
  };

  return (
    <>
      {!isSticky && (
        <a href="tel:0888 1555 00" className={styles.hiddenButtons}>
          <span className={styles.iconWrapper}>
            <FaPhoneAlt />
          </span>
          <span>0888 1555 00</span>
        </a>
      )}

      {!isSticky && (
        <a href="https://accounts.topdev.vn/" className={styles.hiddenEmployer}>
          <span className={styles.iconWrapper}>
            <Employer />
          </span>
          <span>Employer</span>
        </a>
      )}

      {!isSticky && <div className={styles.divider}></div>}

      <button onClick={handleClickLogin} className={styles.loginButton}>
        <FaUser />
        <span>Log in</span>
      </button>
    </>
  );
};
const HeaderButtonsLogin = ({ isSticky = false }) => {
  return (
    <>
      {!isSticky && (
        <a href="tel:0888 1555 00" className={styles.hiddenButtons}>
          <span className={styles.iconWrapper}>
            <FaPhoneAlt />
          </span>
          <span>0888 1555 00</span>
        </a>
      )}

      {!isSticky && <div className={styles.divider}></div>}
      <SubMenu />
      {isSticky ? <></> : <Notification />}
    </>
  );
};
export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [locale, setLocale] = useState<Lang>('vi');

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const categories = await getCategories.get();
        setCategories(categories);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    getCategory();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window?.scrollY;
      setIsSticky(scrollPosition > 50);
    };
    handleScroll();
    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const checkIsLogin = async () => {
      try {
        const isLogin = await checkLogin.get();
        setIsLogin(isLogin);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    checkIsLogin();
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cookieLocale = Cookies.get('topdev_locale');
      if (cookieLocale === 'en' || cookieLocale === 'vi') {
        setLocale(cookieLocale);
      }
    }
  }, []);

  const handleChangeLocale = (lang: Lang) => {
    if (typeof window !== 'undefined') {
      if (lang === locale) return;

      const currentUrl = window?.location.href;
      const redirectUri = encodeURIComponent(currentUrl);
      window.location.href = `/${lang}?redirect_uri=${redirectUri}`;
    }
  };

  return (
    <>
      <header className={isSticky ? styles.headerShadow : styles.header}>
        <div className={styles.container}>
          <div
            className={isSticky ? styles.groupSearchSticky : styles.groupSearch}
          >
            <a href="/">
              <img
                className={styles.logo}
                src="https://c.topdevvn.com/v4/assets/images/td-logo.png"
                alt="topdev-logo"
              />
            </a>
            {isSticky && (
              <div className={styles.stickyMenu}>
                <MagicScroll isNonScroll categories={categories} />
              </div>
            )}
            <div
              className={
                isSticky
                  ? styles.searchContainerSticky
                  : styles.searchContainerNonSticky
              }
            >
              <InputSearch />
            </div>
          </div>

          <div className={styles.loginContainer}>
            {isLogin ? (
              <HeaderButtonsLogin isSticky={isSticky} />
            ) : (
              <HeaderButtonsNotLogin isSticky={isSticky} />
            )}
            {isSticky ? (
              <></>
            ) : (
              <div className={styles.containerSwitch}>
                <button
                  onClick={() =>
                    handleChangeLocale(locale === 'vi' ? 'en' : 'vi')
                  }
                  type="button"
                  className={styles.localeButton}
                >
                  {locale === 'vi' ? 'En' : 'Vi'}
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={isSticky ? styles.dividerHidden : styles.dividerX}
        ></div>
      </header>
      <div
        className={
          isSticky
            ? styles.containerMenuScrollHidden
            : styles.containerMenuScroll
        }
      >
        <MagicScroll categories={categories} />
      </div>
    </>
  );
};
