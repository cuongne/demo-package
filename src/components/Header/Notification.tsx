import { useState, useRef, useEffect } from 'react';
import { NotificationTop } from '../../constants/icon';
import styles from './header.module.css';

// interface NotificationItem {
//   id: string;
//   title: string;
//   message: string;
//   createdAt: string;
// }

export const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // setNotifications([1,2,3])
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.notificationContainer} ref={dropdownRef}>
      <button
        className={styles.buttonNotification}
        onClick={() => setIsOpen(!isOpen)}
      >
        <NotificationTop />
      </button>

      <div
        className={
          isOpen
            ? styles.notificationDropdownVisible
            : styles.notificationDropdown
        }
      >
        <div className={styles.notificationHeader}>
          <h3 className={styles.notificationTitle}>Notifications</h3>
        </div>
      </div>
    </div>
  );
};
