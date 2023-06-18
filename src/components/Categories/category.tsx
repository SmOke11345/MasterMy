import cloth from '../../pages/Main/img/cloth.svg';
import electronics from '../../pages/Main/img/electronics.svg';
import appliances from '../../pages/Main/img/appliances.svg';
import autoParts from '../../pages/Main/img/auto-parts.svg';
import books from '../../pages/Main/img/books.svg';
import all from '../../pages/Main/img/all.svg';

export const arrCategories: Record<string, string>[] = [
    {
        name: 'Одежда',
        img: cloth,
        link: '/catalog',
    },
    {
        name: 'Электроника',
        img: electronics,
        link: '/catalog',
    },
    {
        name: 'Бытовая техника',
        img: appliances,
        link: '/catalog',
    },
    {
        name: 'Автозапчасти',
        img: autoParts,
        link: '/catalog',
    },
    {
        name: 'Книги',
        img: books,
        link: '/catalog',
    },
    {
        name: 'Все',
        img: all,
        link: '/catalog',
    },
];
