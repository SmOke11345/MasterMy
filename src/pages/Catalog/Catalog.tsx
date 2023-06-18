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
    // const[(isLoading, setIsLoading)] = React.useState(true);

    const { category, currentPage, sort } = useAppSelector((state) => state.filter);
    const { status, items } = useAppSelector((state) => state.fetchProducts);
    const dispatch = useAppDispatch();

    const handleCategory = (index: number): void => {
        dispatch(setCategory(index));
    };

    const handleSortValue = (name: SortProp): void => {
        dispatch(setSort(name));
    };

    const onChangePage = (page: number): void => {
        dispatch(setCurrentPage(page));
    };

    // Параметры фильтрации
    React.useEffect(() => {
        dispatch(fetchProducts(currentPage.toString()));
    }, []);

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
                    <Categories handleCategory={handleCategory} value={category} />
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
