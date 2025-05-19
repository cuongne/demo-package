import { useState } from 'react';
import styles from './style.module.css';
import { ArrowDown, MdAccountCircle } from '../../constants/icon';
import { MENU_CONFIG } from '../../constants/menu';

interface SubMenuProps {
  user?: {
    display_name?: string;
    roles?: string[];
  };
  type?: 'resume' | 'employer';
}

export const SubMenu = ({ user, type = 'resume' }: SubMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuItems = MENU_CONFIG.account[type];

  return (
    <div className={styles.accountContainer}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={styles.accountButton}
      >
        <span className={styles.accountIcon}>
          <MdAccountCircle />
        </span>
        <span className={styles.accountName}>
          {user?.display_name ?? 'user'}
        </span>
        <span
          className={
            isDropdownOpen ? styles.arrowIconRotated : styles.arrowIcon
          }
        >
          <ArrowDown />
        </span>
      </button>

      <div
        className={
          isDropdownOpen ? styles.dropdownVisible : styles.dropdownHidden
        }
      >
        {menuItems.map((item, index) => {
          return (
            <a key={index} href={item.href} className={styles.menuItem}>
              <span className={styles.menuIcon}>{item.icon}</span>
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
