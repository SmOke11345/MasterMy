import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { setCategory, setCurrentPage, setSort } from '../../redux/filter/slice.ts';
import { SortProp } from '../../redux/filter/types.ts';
import { fetchProducts } from '../../redux/catchItems/asyncThunk.ts';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import Pagination from '../../components/Pagination';
import Skeleton from '../../components/CardItem/Skeleton.tsx';
import CardItem from '../../components/CardItem';
import NotFound from '../../components/NotFound';

import styles from './styles/styles.module.css';

const Catalog: React.FC = () => {
    const { category, currentPage, sort, search } = useAppSelector((state) => state.filter);
    const { status, items } = useAppSelector((state) => state.fetchProducts);
    const dispatch = useAppDispatch();

    const handleCategory = (name: string): void => {
        dispatch(setCategory(name));
    };

    const handleSortValue = (name: SortProp): void => {
        dispatch(setSort(name));
    };

    const onChangePage = (page: number): void => {
        dispatch(setCurrentPage(page));
    };

    // Параметры фильтрации
    React.useEffect(() => {
        const searchValue = search ? `&search=${search}` : '';
        const categoryValue = category === 'все' ? '&' : `&category_name=${category}`;

        const sortValue = sort.value;
        const sortReplace = sortValue.replace('-', '');
        const growth = sortValue.includes('-') ? 'asc' : 'desc';
        dispatch(
            fetchProducts({
                currentPage: currentPage.toString(),
                search: searchValue,
                category: categoryValue,
                sort: sortReplace,
                growth,
            }),
        );
    }, [currentPage, category, search, sort]);

    const skeleton = [...new Array(6)].map((_, index) => {
        return <Skeleton key={index} />;
    });

    const products = items.map((item) => {
        return <CardItem key={item.id} {...item} />;
    });

    return (
        <section className={`${styles.Catalog} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_filters}>
                    <Categories handleCategory={handleCategory} category={category} />
                    <Sort handleSortValue={handleSortValue} sort={sort} />
                </div>
                <div className={styles.grid}>{status === 'loading' ? skeleton : products}</div>
                {status === 'error' && <NotFound />}
                <Pagination page={currentPage} onChangePage={onChangePage} />
            </div>
        </section>
    );
};

export default Catalog;
