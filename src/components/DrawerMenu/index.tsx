import { useEffect, useRef, useState } from 'react';
import { LIST_MENU } from './constant';

import React from 'react';
import { IoIosArrowDown, MdClear, Translate } from '../../constants/icon';
import { getCategories } from '../../services/api';
import { Category, Role } from '../../types';
import SwitchLocale from '../Locale';
import styles from './styles.module.css';

interface SubMenuItem {
  id: string;
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface MenuItem {
  id: number;
  name: string;
  icon?: React.ReactNode;
  link?: string;
  color?: string;
  subMenu?: SubMenuItem[];
}

const DrawerMenu = ({ children }: { children: React.ReactNode }) => {
  const [isShow, setIsShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!);
  const [expandedItem, setExpandedItem] = useState<number | null>();
  const [activeButton, setActiveButton] = useState<string | null>();
  const [roles, setRoles] = useState<Role[]>([]);
  const [activeButtons, setActiveButtons] = useState<number[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(
    LIST_MENU[0] || null,
  );
  const handleButtonClick = (buttonId: number, role: Role) => {
    setActiveButtons((prev) => {
      if (prev.includes(buttonId)) {
        return prev.filter((id) => id !== buttonId);
      }
      return [...prev, buttonId];
    });
    setRoles((prev) => {
      if (prev.some((item) => item.id === role.id)) {
        return prev.filter((item) => item.id !== role.id);
      }
      return [...prev, role];
    });
  };
  const toggleExpand = (subMenuId: number | null) => {
    setExpandedItem((categoryId) =>
      subMenuId === categoryId ? null : subMenuId,
    );
  };
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
    const searchParams = new URLSearchParams(window.location.search);
    const categoryIds = searchParams.get('category_id');

    if (categoryIds) {
      const ids = categoryIds.split(',').map(Number);
      setActiveButtons(ids);

      // Find and set roles based on category IDs
      const selectedRoles: Role[] = [];
      categories.forEach((category) => {
        category.roles?.forEach((role) => {
          if (ids.includes(role.id)) {
            selectedRoles.push(role);
          }
        });
      });
      setRoles(selectedRoles);
    }
  }, [categories]);
  const handleRemoveCheck = () => {
    setActiveButtons([]);
    setRoles([]);
  };
  const handleClickJobs = () => {
    if (roles.length === 0) return;

    const params = roles.map((role) => role.id).join(',');
    const locate = 'it-jobs';
    const url = `/${locate}/?category_id=${params}`;
    window.location.href = url;
  };
  return (
    <div id="NavigationMenu" className={styles.container} ref={menuRef}>
      <button
        onClick={() => setIsShow(true)}
        className={styles.menuButton}
        role="button"
        aria-label="Menu"
        aria-labelledby="labelmenu"
        tabIndex={-1}
      >
        {children}
      </button>
      <div className={isShow ? styles.drawerVisible : styles.drawerHidden}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <a href="/" className={styles.logo}>
              <img
                src="https://c.topdevvn.com/v4/assets/images/td-logo.png"
                width={114}
                height={22}
                loading="lazy"
                className={styles.logoImage}
                alt="TopDev"
              />
            </a>
            <button role="button" onClick={() => setIsShow(false)}>
              <MdClear />
            </button>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.content}>
            <div className={styles.menuList}>
              {LIST_MENU.map((menu) => (
                <a
                  key={menu?.id}
                  href={menu?.link ?? '#'}
                  className={
                    activeMenu?.id === menu.id
                      ? styles.menuItemActive
                      : styles.menuItem
                  }
                  onClick={() => setActiveMenu(menu)}
                >
                  <span className={styles.menuIcon}>{menu?.icon}</span>
                  <span
                    style={{ color: menu?.color ?? '' }}
                    className={
                      menu?.name === 'NIPA'
                        ? styles.menuNameNIPA
                        : styles.menuName
                    }
                  >
                    {menu?.name}
                  </span>
                </a>
              ))}
            </div>

            {activeMenu?.subMenu && activeMenu?.name !== 'Jobs' && (
              <div className={styles.subMenuContainer}>
                {activeMenu?.subMenu.map((subMenu) => (
                  <a
                    href={subMenu?.link ?? '#'}
                    className={
                      activeButton === subMenu?.id
                        ? styles.subMenuItemActive
                        : styles.subMenuItem
                    }
                    key={subMenu?.id}
                    onClick={() => setActiveButton(subMenu.id)}
                  >
                    {subMenu?.icon}
                    <span className={styles.subMenuText}>{subMenu?.name}</span>
                  </a>
                ))}
              </div>
            )}

            {categories?.length > 0 && activeMenu?.name === 'Jobs' && (
              <div className={styles.subMenuContainer}>
                {categories.map((category) => (
                  <div className={styles.jobsContainer} key={category?.id}>
                    <button
                      className={
                        expandedItem === category.id
                          ? styles.jobButtonActive
                          : styles.jobButton
                      }
                      onClick={() => {
                        setSelectedCategory(category);
                        toggleExpand(category.id);
                      }}
                    >
                      <div className={styles.jobButtonContent}>
                        {/* {category?.icon} */}
                        <span className={styles.subMenuText}>
                          {category?.name}
                        </span>
                      </div>
                      <span
                        className={
                          expandedItem === category.id
                            ? styles.jobButtonArrowExpanded
                            : styles.jobButtonArrow
                        }
                      >
                        <IoIosArrowDown />
                      </span>
                    </button>
                    <div
                      className={
                        expandedItem === category.id
                          ? styles.jobOptionsExpanded
                          : styles.jobOptionsCollapsed
                      }
                    >
                      <div className={styles.jobOptionsList}>
                        {selectedCategory?.roles?.map((role) => (
                          <button
                            key={role.id}
                            onClick={() => handleButtonClick(role.id, role)}
                            className={
                              activeButtons.includes(role.id)
                                ? styles.jobOptionActive
                                : styles.jobOptionInactive
                            }
                          >
                            {role.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          {activeButtons.length > 0 && (
            <div className={styles.footerButtons}>
              <>
                <button
                  className={styles.clearButton}
                  onClick={handleRemoveCheck}
                >
                  Bỏ chọn tất cả ({activeButtons.length})
                </button>
                <div className={styles.dividerSmall} />
              </>

              <div className={styles.groupButton}>
                <button
                  role="button"
                  onClick={() => setIsShow(false)}
                  className={styles.cancelButton}
                >
                  Huỷ
                </button>
                <button
                  onClick={handleClickJobs}
                  className={styles.selectButton}
                >
                  Chọn
                </button>
              </div>
            </div>
          )}
          <div className={styles.footerContent}>
            <Translate />
            <SwitchLocale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
