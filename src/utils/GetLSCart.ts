import { Items } from '../redux/cart/types.ts';

export const GetLSCart = () => {
    // получаем данные из localStorage
    const localStorageItems = localStorage.getItem('cart');
    // если данные есть, то преобразуем в массив
    const items = localStorageItems ? JSON.parse(localStorageItems) : [];

    return {
        items: items as Items[],
    };
};
