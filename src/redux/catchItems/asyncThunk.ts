import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Items } from '../cart/types.ts';
import { ArgsFetchProducts } from './types.ts';

// Получает данные и ждет когда его вызовут
export const fetchProducts = createAsyncThunk<Items[], ArgsFetchProducts>(
    'products/fetchProducts',
    async (props) => {
        const { currentPage, search, category, sort } = props;
        const { data } = await axios.get(
            `https://648eeb6175a96b6644447928.mockapi.io/products?${currentPage}${category}${sort}${search}`,
        );
        return data;
    },
);
