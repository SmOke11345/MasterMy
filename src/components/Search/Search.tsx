import React from 'react';

import { useAppDispatch } from '../../redux/hooks.ts';
import { setCategory, setSearch } from '../../redux/filter/slice.ts';

import styles from '../Header/styles/styles.module.css';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
    const [openSearch, setOpenSearch] = React.useState(false);
    const [value, setValue] = React.useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Доделать страницу с поиском
    const inputSubmit = () => {
        if (!value) {
            setOpenSearch(!openSearch);
        } else {
            navigate('/catalog');
            dispatch(setSearch(value));
            dispatch(setCategory('все'));
        }
    };

    return (
        <div className={styles.search_wrapper}>
            <div className={`${styles.search_inner} ${openSearch ? '' : styles.display_none}`}>
                <input
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    type="text"
                    id="search_field"
                    name="search"
                    placeholder="Поиск..."
                />
            </div>
            <div
                onClick={() => {
                    inputSubmit();
                    setValue('');
                }}
                className={`${styles.button_wrapper} ${styles.small} ${
                    openSearch ? styles.search : ''
                }`}>
                <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M27 27L20.9681 20.9681M20.9681 20.9681C21.9999 19.9363 22.8184 18.7115 23.3767 17.3634C23.9351 16.0153 24.2225 14.5704 24.2225 13.1113C24.2225 11.6521 23.9351 10.2073 23.3767 8.85917C22.8184 7.51109 21.9999 6.28619 20.9681 5.25442C19.9363 4.22264 18.7115 3.40419 17.3634 2.8458C16.0153 2.2874 14.5704 2 13.1113 2C11.6521 2 10.2073 2.2874 8.85917 2.8458C7.51109 3.40419 6.28619 4.22264 5.25442 5.25442C3.17065 7.33818 2 10.1644 2 13.1113C2 16.0582 3.17065 18.8844 5.25442 20.9681C7.33818 23.0519 10.1644 24.2225 13.1113 24.2225C16.0582 24.2225 18.8844 23.0519 20.9681 20.9681Z"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Search;
