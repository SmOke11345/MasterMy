import React from 'react';

import styles from './styles/styles.module.css';
import { useOnClickOutside } from 'usehooks-ts';
import { SortProp, SortType } from '../../redux/filter/types.ts';

interface SortProps {
    sort: SortProp;
    handleSortValue: (name: SortProp) => void;
}

const list: SortProp[] = [
    {
        name: 'По умолчанию',
        value: SortType.DEFAULT,
    },
    {
        name: 'По возрастанию цены',
        value: SortType.PRICE,
    },
    {
        name: 'По убыванию цены',
        value: SortType.PRICE_DESC,
    },
    {
        name: 'По названию',
        value: SortType.NAME,
    },
];

const Sort: React.FC<SortProps> = ({ sort, handleSortValue }) => {
    const [open, setOpen] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);
    // При нажатии не на элемент к которому привязан ref
    useOnClickOutside(ref, () => setOpen(false));
    return (
        <div ref={ref} className={`${styles.sort} ${open ? styles.open : ''}`}>
            <div className={styles.sort__inner} onClick={() => setOpen(!open)}>
                <div className={styles.sort__title}>
                    <h4>{sort.name}</h4>
                </div>
                <div className={styles.sort__arrow}>
                    {open ? (
                        <svg
                            style={{ transform: 'rotate(180deg)' }}
                            width="13"
                            height="7"
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.28845 0.537201L6.81553 5.5365"
                                stroke="white"
                                strokeOpacity="0.75"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6.75928 5.5372L12.2858 0.537228"
                                stroke="white"
                                strokeOpacity="0.75"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="13"
                            height="7"
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.28845 0.537201L6.81553 5.5365"
                                stroke="white"
                                strokeOpacity="0.75"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6.75928 5.5372L12.2858 0.537228"
                                stroke="white"
                                strokeOpacity="0.75"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {open && (
                <div className={styles.sort__list}>
                    <ul>
                        {list.map((obj) => {
                            return (
                                <li
                                    key={obj.name}
                                    onClick={() => {
                                        handleSortValue(obj);
                                        setOpen(false);
                                    }}>
                                    {obj.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
