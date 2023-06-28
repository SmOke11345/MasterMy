import { Items } from '../redux/cart/types.ts';

export const GetLocalStorage = () => {
    // получаем данные из localStorage
    const localStorageCart = localStorage.getItem('cart');
    const localStorageFav = localStorage.getItem('favorite');

    // если данные есть, то преобразуем в массив
    const cart = localStorageCart ? JSON.parse(localStorageCart) : [];
    const favorite = localStorageFav ? JSON.parse(localStorageFav) : [];

    return {
        itemsCart: cart as Items[],
        itemsFav: favorite as Items[],
    };
};
