import React from 'react';

import ReactPaginate from 'react-paginate';

import styles from './styles/styles.module.css';

const arrow_next = (
    <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 27L18 16.9495" stroke="#BCBABA" strokeWidth="7" strokeLinecap="round" />
        <path
            d="M18.0001 17.0505L8.00015 7"
            stroke="#BCBABA"
            strokeWidth="7"
            strokeLinecap="round"
        />
    </svg>
);

const arrow_prev = (
    <svg width="25" height="35" viewBox="0 0 25 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7L8.00003 17.0505" stroke="#BCBABA" strokeWidth="7" strokeLinecap="round" />
        <path d="M8 16.9495L18 27" stroke="#BCBABA" strokeWidth="7" strokeLinecap="round" />
    </svg>
);

type PaginationProps = {
    page: number;
    onChangePage: (page: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({ page, onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.paginate}
            breakLabel="..."
            nextLabel={arrow_next}
            previousLabel={arrow_prev}
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={page - 1}
        />
    );
};

export default Pagination;
