import { useEffect, useRef, useState, type ChangeEvent, type JSX } from 'react';
import { Hamburger, Notification, SearchIcon } from '../../constants/icon';
import useDebounce from '../../hooks/useDebounce';
import type { SuggestedType } from '../../types';
import DrawerMenu from '../DrawerMenu';
import { MENU_LIST } from './constants';
import styles from './HeaderMobile.module.css';
import { checkLogin, getSuggestedKeywords } from '../../services/api';
interface SubMenuItem {
  id: string;
  name: string;
  link?: string | null;
  icon: JSX.Element;
  subMenu?: SubMenuItem[];
}

// interface HeaderMobileProps {
//   locale?: string;
// }

// const InputSearch = ({ lang = 'vi' }) => {
//   const [isOpenSuggest, setIsOpenSuggest] = useState(false);
//   const [search, setSearch] = useState('');
//   const debouncedSuggest = useDebounce<string>(search, 500);
//   const [suggestData, setSuggestData] = useState<SuggestedType[]>([]);

//   const suggestRef = useRef<HTMLDivElement>(null);
//   const handleClickInputSearch = () => {
//     if (suggestData.length && !isOpenSuggest) {
//       setIsOpenSuggest(true);
//     }
//   };
//   const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };
//   const handleSuggestedKeywords = async () => {
//     if (search) {
//       try {
//         const response = await getSuggestedKeywords.get(search);
//         setSuggestData(response);
//         setIsOpenSuggest(true);
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       } catch (err) {
//         throw Error('Can not get suggested keywords!');
//       }
//     } else {
//       setIsOpenSuggest(false);
//       setSuggestData([]);
//     }
//   };
//   const handleClickSuggest = (suggestItem: SuggestedType) => {
//     const locate = lang === 'vie' ? 'it-jobs' : 'viec-lam-it';
//     const formattedUrl = `${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
//     window.location.href = formattedUrl;
//     setIsOpenSuggest(false);
//   };
//   useEffect(() => {
//     document.addEventListener('click', handleClickDocument);
//     return () => {
//       document.removeEventListener('click', handleClickDocument);
//     };
//   }, [isOpenSuggest]);
//   useEffect(() => {
//     handleSuggestedKeywords();
//   }, [debouncedSuggest]);

//   const handleClickDocument = (event: globalThis.MouseEvent) => {
//     if (
//       isOpenSuggest &&
//       suggestRef.current &&
//       !suggestRef.current.contains(event.target as Node)
//     ) {
//       setIsOpenSuggest((prev) => !prev);
//     }
//   };

//   return (
//     <div className={styles.containerSearch}>
//       <input
//         type="text"
//         className={styles.input}
//         placeholder="Search..."
//         onChange={handleChangeSearch}
//         value={search}
//         onClick={handleClickInputSearch}
//       />
//       <button className={styles.button}>
//         <SearchIcon />
//       </button>
//       {isOpenSuggest && suggestData.length > 0 && (
//         <div ref={suggestRef} className={styles.suggestContainer}>
//           <div className={styles.suggestList}>
//             {suggestData.map((suggestItem) => (
//               <button
//                 key={suggestItem.id}
//                 className={styles.suggestItem}
//                 onClick={() => handleClickSuggest(suggestItem)}
//               >
//                 {suggestItem.keyword}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const InputSearchSticky = ({ isSticky = false, lang = 'vie' }) => {
  const [isOpenSuggest, setIsOpenSuggest] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSuggest = useDebounce<string>(search, 500);
  const [suggestData, setSuggestData] = useState<SuggestedType[]>([]);

  const suggestRef = useRef<HTMLDivElement>(null);
  const handleClickInputSearch = () => {
    if (suggestData.length && !isOpenSuggest) {
      setIsOpenSuggest(true);
    }
  };
  const handleChangeSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSuggestedKeywords = async () => {
    if (search) {
      try {
        const response = await getSuggestedKeywords.get(search);
        setSuggestData(response);
        setIsOpenSuggest(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        throw Error('Can not get suggested keywords!');
      }
    } else {
      setIsOpenSuggest(false);
      setSuggestData([]);
    }
  };
  const handleClickSuggest = (suggestItem: SuggestedType) => {
    const locate = lang === 'vie' ? 'it-jobs' : 'viec-lam-it';
    const formattedUrl = `${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
    window.location.href = formattedUrl;
    setIsOpenSuggest(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickDocument);
    return () => {
      document.removeEventListener('click', handleClickDocument);
    };
  }, [isOpenSuggest]);
  useEffect(() => {
    handleSuggestedKeywords();
  }, [debouncedSuggest]);

  const handleClickDocument = (event: globalThis.MouseEvent) => {
    if (
      isOpenSuggest &&
      suggestRef.current &&
      !suggestRef.current.contains(event.target as Node)
    ) {
      setIsOpenSuggest((prev) => !prev);
    }
  };

  return (
    <div
      className={isSticky ? styles.containerSearchSticky : styles.hiddenSearch}
    >
      <input
        type="text"
        className={styles.inputSticky}
        placeholder="Search..."
        onChange={handleChangeSearch}
        value={search}
        onClick={handleClickInputSearch}
      />
      <button className={styles.buttonSticky}>
        <SearchIcon />
      </button>
      {isOpenSuggest && suggestData.length > 0 && (
        <div ref={suggestRef} className={styles.suggestContainer}>
          <div className={styles.suggestList}>
            {suggestData.map((suggestItem) => (
              <button
                key={suggestItem.id}
                className={styles.suggestItem}
                onClick={() => handleClickSuggest(suggestItem)}
              >
                {suggestItem.keyword}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header(){
  const [isSticky, setIsSticky] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<SubMenuItem | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  const isActive = (path: string | null, exact: boolean = false) => {
    if (!path) return false;

    const currentPath = window.location.pathname;
    const cleanPath = path.split('?')[0];

    return exact
      ? currentPath === cleanPath
      : currentPath === cleanPath || currentPath.startsWith(`${cleanPath}/`);
  };

  const handleMenuClick = (item: (typeof MENU_LIST)[0]) => {
    if (!isLogin && item.id === 'account') {
      window.location.href =
        'https://accounts.topdev.vn/' +
        '/?redirect_uri=' +
        encodeURIComponent(window.location.href);
    } else if (item.subMenu) {
      setActiveSubmenu((prevItem) => (prevItem?.id === item?.id ? null : item));
    }
  };

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
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMenuItem = (item: (typeof MENU_LIST)[0]) => {
    if (item.subMenu) {
      return (
        <button
          key={item.id}
          className={
            activeSubmenu?.id === item.id
              ? styles.menuItemActive
              : styles.menuItem
          }
          onClick={() => handleMenuClick(item)}
        >
          <span className={styles.menuIcon}>{item.icon}</span>
          {item.name}
        </button>
      );
    }

    return (
      <a
        key={item.id}
        href={item.link}
        className={
          isActive(item.link ?? null, true)
            ? styles.menuItemActive
            : styles.menuItem
        }
      >
        <span className={styles.menuIcon}>{item.icon}</span>
        {item.name}
      </a>
    );
  };

  const renderSubMenuItem = (subItem: SubMenuItem) => {
    return (
      <a
        key={subItem.id}
        href={subItem.link ?? '/'}
        className={
          isActive(subItem.link ?? '/')
            ? styles.subMenuItemActive
            : styles.subMenuItem
        }
      >
        <span className={styles.menuIcon}>{subItem.icon}</span>
        {subItem.name}
      </a>
    );
  };

  const renderDrawer = () => {
    return (
      <div
        className={activeSubmenu?.subMenu ? styles.drawerOpen : styles.drawer}
      >
        <div className={styles.wrapperStick}>
          <div className={styles.dragHandle} />
        </div>
        {activeSubmenu?.id === 'account' ? (
          <div className={styles.accountContainer}>
            <div className={styles.information}>
              <span className={styles.hello}>Hello,</span>
              <span className={styles.name}>Nguyễn Minh Anh</span>
              <span className={styles.email}>anh.ng@gmailcom</span>
            </div>
            <div className={styles.avatar}>
              <img
                src="https://c.topdevvn.com/v4/_next/static/media/no-avatar.6db79731.svg"
                alt=""
              />
            </div>
          </div>
        ) : null}
        {activeSubmenu?.subMenu?.map(renderSubMenuItem)}
      </div>
    );
  };

  return (
    <>
      <header
        className={isSticky ? styles.headerMobileSticky : styles.headerMobile}
      >
        <div className={styles.containerImage}>
          <a href="/">
            <img
              src="https://cdn.topdev.vn/v4/assets/images/common/logo-mobile-2.svg"
              width={114}
              height={20}
              loading="lazy"
              alt="TopDev"
              className={isSticky ? styles.logoLargeHidden : styles.logoLarge}
            />
          </a>
          <a
            className={isSticky ? styles.logoSmallVisible : styles.logoSmall}
            href="/"
          >
            <img
              src="https://c.topdevvn.com/v4/assets/images/common/logo-mobile.svg"
              width={24}
              height={24}
              loading="lazy"
              alt="TopDev"
            />
          </a>
          <InputSearchSticky isSticky={isSticky} />
        </div>
        <div className={styles.notificationGroup}>
          <button className={styles.wrapperButton}>
            <Notification />
          </button>
          <DrawerMenu>
            <span className={styles.wrapperButton}>
              <Hamburger />
            </span>
          </DrawerMenu>
        </div>
      </header>

      <nav className={styles.menuList}>{MENU_LIST.map(renderMenuItem)}</nav>
      {renderDrawer()}

      <div
        className={activeSubmenu ? styles.backdropOpen : styles.backdrop}
        onClick={() => setActiveSubmenu(null)}
      />
      {/* <InputSearch /> */}
    </>
  );
};
