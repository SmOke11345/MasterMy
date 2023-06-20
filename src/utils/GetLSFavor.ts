import { Items } from '../redux/cart/types.ts';

export const GetLSCart = () => {
    const localStorageItems = localStorage.getItem('favorite');
    const items = localStorageItems ? JSON.parse(localStorageItems) : [];

    return {
        items: items as Items[],
    };
};
