import cloth from '../../pages/Main/img/cloth.svg';
import electronics from '../../pages/Main/img/electronics.svg';
import appliances from '../../pages/Main/img/appliances.svg';
import autoParts from '../../pages/Main/img/auto-parts.svg';
import books from '../../pages/Main/img/books.svg';
import all from '../../pages/Main/img/all.svg';

export const arrCategories: Record<string, string>[] = [
    {
        name: 'одежда',
        img: cloth,
        link: '/catalog',
    },
    {
        name: 'электроника',
        img: electronics,
        link: '/catalog',
    },
    {
        name: 'бытовая техника',
        img: appliances,
        link: '/catalog',
    },
    {
        name: 'автозапчасти',
        img: autoParts,
        link: '/catalog',
    },
    {
        name: 'книги',
        img: books,
        link: '/catalog',
    },
    {
        name: 'все',
        img: all,
        link: '/catalog',
    },
];
