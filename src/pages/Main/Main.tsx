import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import sale from './img/sale.png';

// Categories
import cloth from './img/cloth.svg';
import electronics from './img/electronics.svg';
import appliances from './img/appliances.svg';
import autoParts from './img/auto-parts.svg';
import books from './img/books.svg';
import fruits from './img/fruits.svg';
import all from './img/all.svg';

import styles from './styles/styles.module.css';

const arrCategories: Record<string, string>[] = [
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
        name: 'Фрукты',
        img: fruits,
        link: '/catalog',
    },
    {
        name: 'Все',
        img: all,
        link: '/catalog',
    },
];

const Main: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.Main} ${styles.shell}`}>
            <div className={styles.container}>
                <section>
                    <div className={styles.wrapper}>
                        <div>
                            <div className={styles.categories}>
                                {arrCategories.map((obj, index) => (
                                    <div
                                        key={index}
                                        onClick={() => navigate(`${obj.link}`)}
                                        className={styles.categories__item}>
                                        <div className={styles.categories__img}>
                                            <img src={obj.img} alt="" />
                                        </div>
                                        <div className={styles.categories__name}>
                                            <h5>{obj.name}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className={styles.banner}>
                                <div className={styles.banner__inner}>
                                    <div className={styles.banner__img}>
                                        <img src={sale} alt="" />
                                    </div>
                                    <div className={styles.banner_bottom}>
                                        <div className={styles.small_width}>
                                            <div className={styles.banner_bottom__title}>
                                                <h4>Выгодно сегодня</h4>
                                            </div>
                                            <div className={styles.banner_bottom__subtitle}>
                                                <p>
                                                    Скидки на все, Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.btn}>
                                                <a href="#">Все товары</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.title}>
                        <h2>Одежда</h2>
                    </div>
                    <div className={styles.grid_wrapper}>
                        <div className={styles.grid}>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                        </div>
                        <div className={styles.link}>
                            <Link to="/catalog">Посмотреть все</Link>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h2>Электроника</h2>
                    </div>
                    <div className={styles.grid_wrapper}>
                        <div className={`${styles.grid} ${styles.grid_reverse}`}>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                            <div className={styles.grid__item}></div>
                        </div>
                        <div className={styles.link}>
                            <Link to="/catalog">Посмотреть все</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Main;
