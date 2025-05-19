import { useEffect, useRef, useState } from 'react';
import { LIST_MENU } from '../../constants/enum';
import { IoIosArrowDown, IoIosArrowForward } from '../../constants/icon';
import { Category, Role } from '../../types';
import styles from './scroll.module.css';

const MagicScroll = ({
  isNonScroll = false,
  categories,
}: {
  isNonScroll?: boolean;
  categories: Category[];
}) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [activeButtons, setActiveButtons] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (categories.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      const categoryIds = searchParams.get('category_id');

      if (categoryIds) {
        const ids = categoryIds.split(',').map(Number);
        setActiveButtons(ids);

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
    }
  }, [categories]);

  const handleMouseEnter = (index: number) => {
    if (dropdownRefs.current[index]) {
      dropdownRefs.current[index]!.style.display = 'block';
    }
  };

  const handleMouseLeave = (index: number) => {
    if (dropdownRefs.current[index])
      dropdownRefs.current[index]!.style.display = 'none';
  };

  const handleClose = (index: number) => {
    if (dropdownRefs.current[index])
      dropdownRefs.current[index]!.style.display = 'none';
  };
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

  const handleClickJobs = () => {
    if (roles.length === 0) return;

    const params = roles.map((role) => role.id).join(',');
    const locate = 'it-jobs';
    const url = `/${locate}/?category_id=${params}`;
    window.location.href = url;
  };

  const handleRemoveCheck = () => {
    setActiveButtons([]);
    setRoles([]);
  };

  return (
    <>
      {LIST_MENU.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={styles.menuItem}
        >
          <a
            href={item.link ?? '/'}
            className={`${styles.menuLink} ${isNonScroll ? styles.nonScrollLink : ''}`}
            style={{ color: item.color ?? '#404040' }}
          >
            {item.icon}
            {item.name}
            {item.subMenu && <IoIosArrowDown />}
          </a>
          {item?.subMenu && item?.name !== 'Jobs' && (
            <div className={styles.submenu}>
              {item.subMenu.map((subItem) => (
                <a
                  key={subItem.id}
                  href={subItem.link}
                  className={styles.submenuLink}
                >
                  <span className={styles.submenuIcon}>{subItem.icon}</span>
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
          {categories?.length > 0 && item?.subMenu && item?.name === 'Jobs' && (
            <div
              ref={(el) => {
                dropdownRefs.current[index] = el;
              }}
              className={styles.submenu}
            >
              <div className={styles.jobsContainer}>
                <div className={styles.jobsList}>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onMouseEnter={() => setSelectedCategory(category)}
                      className={styles.jobLink}
                    >
                      <div className={styles.submenuLinkJobs}>
                        <span className={styles.submenuIcon}>
                          {/* {subItem.icon} */}
                        </span>
                        {category.name}
                      </div>
                      <IoIosArrowForward />
                    </button>
                  ))}
                </div>
                <div className={styles.divider} />
                <div className={styles.jobButtons}>
                  {selectedCategory?.roles?.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => handleButtonClick(role.id, role)}
                      className={`${styles.jobButton} ${
                        activeButtons.includes(role.id)
                          ? styles.jobButtonActive
                          : styles.jobButtonInactive
                      }`}
                    >
                      {role.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.footerButtons}>
                  {activeButtons.length > 0 && (
                    <>
                      <button
                        className={styles.clearButton}
                        onClick={handleRemoveCheck}
                      >
                        Bỏ chọn tất cả ({activeButtons.length})
                      </button>
                      <div className={styles.dividerSmall} />
                    </>
                  )}
                  <button
                    onClick={() => handleClose(index)}
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
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MagicScroll;
