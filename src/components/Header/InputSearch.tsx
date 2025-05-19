import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { SearchIcon } from '../../constants/icon';
import useDebounce from '../../hooks/useDebounce';
import { getSuggestedKeywords } from '../../services/api';
import type { SuggestedType } from '../../types';
import styles from './header.module.css';

export const InputSearch = ({ lang = 'vi' }) => {
  const [isOpenSuggest, setIsOpenSuggest] = useState(false);
  const [search, setSearch] = useState('');
  const debouncedSuggest = useDebounce<string>(search, 300);
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
    const formattedUrl = `/${locate}/${suggestItem.slug}-kt${suggestItem.id}`;
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
    <div className={styles.containerSearch}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        onChange={handleChangeSearch}
        value={search}
        onClick={handleClickInputSearch}
      />
      <button className={styles.button}>
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
