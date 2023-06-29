import React from 'react';

// Countries
import armenia from './img/countries/emojione_flag-for-armenia.svg';
import kazakhstan from './img/countries/emojione_flag-for-kazakhstan.svg';
import belarus from './img/countries/emojione_flag-for-belarus.svg';
import israel from './img/countries/emojione_flag-for-israel.svg';
import kyrgyzstan from './img/countries/emojione_flag-for-kyrgyzstan.svg';
import russia from './img/countries/emojione_flag-for-russia.svg';
import uzbekistan from './img/countries/emojione_flag-for-uzbekistan.svg';

// Cards
import delivery from './img/cards/delivery.svg';
import persent from './img/cards/persent.svg';
import point from './img/cards/point.svg';
import baggage from './img/cards/baggage.svg';

// Subject
import cart from './img/subjects/cart.svg';
import goods from './img/subjects/goods.svg';
import store from './img/subjects/store.svg';

import styles from './styles/styles.module.css';

const arrSubject: Record<string, string>[] = [
    {
        img: cart,
        title: '1 млн +',
        subtitle: 'заказов в день',
    },
    {
        img: store,
        title: '1 млн м²',
        subtitle: 'складских помещений',
    },
    {
        img: goods,
        title: '100 млн +',
        subtitle: 'товаров на складе',
    },
];

const arrCard: Record<string, string>[] = [
    {
        title_inner: 'Быстрая доставка',
        img: delivery,
        title: 'Более 90 %',
        subtitle: 'Доставляется на следующий день',
    },
    {
        title_inner: 'Скидки и акции',
        img: persent,
        title: 'Более 90 %',
        subtitle: 'Скидка постоянным покупателям',
    },
    {
        title_inner: 'Удобный самовывоз',
        img: point,
        title: '10 тыс +',
        subtitle: 'Пунктов выдачи заказов',
    },
    {
        title_inner: 'Широкий ассортимент',
        img: baggage,
        title: '1 млн +',
        subtitle: 'Ежедневно отправляемых товаров со складов',
    },
];

const arrCountries: Record<string, string>[] = [
    {
        name: 'Россия',
        img: russia,
    },
    {
        name: 'Беларусь',
        img: belarus,
    },
    {
        name: 'Казахстан',
        img: kazakhstan,
    },
    {
        name: 'Киргизия',
        img: kyrgyzstan,
    },
    {
        name: 'Армения',
        img: armenia,
    },
    {
        name: 'Израиль',
        img: israel,
    },
    {
        name: 'Узбекистан',
        img: uzbekistan,
    },
];

const AboutUs: React.FC = () => {
    return (
        <div className={`${styles.AboutUs} ${styles.shell}`}>
            <div className={styles.container}>
                <section>
                    <div className={styles.title}>
                        <h2>О нас</h2>
                    </div>
                    <div className={styles.hero}>
                        <div>
                            <div className={styles.hero__title}>
                                <h1>Добро пожаловать на MasterMy</h1>
                            </div>
                            <div className={styles.hero__subtitle}>
                                <h3>
                                    5 лет мы стремимся сделать для Вас шопинг удобным и доступным
                                </h3>
                            </div>
                        </div>
                        <div className={styles.hero__img}>
                            <svg
                                width="211"
                                height="211"
                                viewBox="0 0 211 211"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M210.458 153.208C210.458 184.791 184.791 210.458 153.208 210.458V196.146C177.063 196.146 196.146 177.062 196.146 153.208H210.458ZM0.541848 57.7917C0.541848 26.2087 26.2089 0.541656 57.7918 0.541656V14.8542C33.9377 14.8542 14.8543 33.9375 14.8543 57.7917H0.541848ZM67.3335 32.22L23.5373 76.1117C-7.1869 106.836 -7.1869 156.739 23.5373 187.463C54.2614 218.187 104.164 218.187 134.889 187.463L202.348 119.812C207.023 115.328 207.023 107.79 202.348 103.115C201.24 102.004 199.924 101.123 198.475 100.521C197.026 99.9201 195.473 99.6105 193.904 99.6105C192.335 99.6105 190.781 99.9201 189.332 100.521C187.883 101.123 186.567 102.004 185.459 103.115L143.285 145.289L136.511 138.514L198.913 76.1117C203.589 71.4362 203.589 63.8983 198.913 59.2229C194.238 54.5475 186.604 54.5475 181.833 59.2229L126.396 115.042L119.813 108.076L185.364 42.3342C190.039 37.6587 190.039 30.1208 185.364 25.4454C180.689 20.77 173.151 20.77 168.475 25.4454L102.733 91.1875L95.9585 84.5083L148.438 32.22C153.209 27.5446 153.209 20.0067 148.438 15.3312C143.667 10.6558 136.224 10.6558 131.549 15.3312L58.8414 88.0387C64.5344 95.3823 67.3552 104.549 66.7756 113.823C66.196 123.097 62.2557 131.841 55.6927 138.419L48.9181 131.644C54.2786 126.277 57.2896 119.001 57.2896 111.416C57.2896 103.83 54.2786 96.5547 48.9181 91.1875L45.5785 87.8479L84.4131 49.0133C89.0885 44.3379 89.0885 36.8 84.4131 32.1246C79.6423 27.5446 72.1043 27.5446 67.3335 32.22Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.subject}>
                        {arrSubject.map((obj, index) => {
                            return (
                                <div key={index} className={styles.subject__item}>
                                    <div className={styles.subject__img}>
                                        <img src={obj.img} alt="" />
                                    </div>
                                    <div>
                                        <div className={styles.subject__title}>
                                            <h4>{obj.title}</h4>
                                        </div>
                                        <div className={styles.subject__subtitle}>
                                            <p>{obj.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <div className={styles.title}>
                        <h2>Покупайте на MasterMy</h2>
                    </div>
                    <div className={styles.card}>
                        {arrCard.map((obj, index) => {
                            return (
                                <div key={index} className={styles.card__item}>
                                    <div className={styles.card__inner}>
                                        <div className={styles.card__title_inner}>
                                            <h4>{obj.title_inner}</h4>
                                        </div>
                                        <div className={styles.card__img}>
                                            <img src={obj.img} alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.card__title}>
                                        <h4>{obj.title}</h4>
                                    </div>
                                    <div className={styles.card__subtitle}>
                                        <p>{obj.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <div className={styles.title}>
                        <h2>Доставляем в разные страны</h2>
                    </div>
                    <div className={styles.countries}>
                        {arrCountries.map((obj, index) => {
                            return (
                                <div key={index} className={styles.countries__item}>
                                    <div className={styles.countries__img}>
                                        <img src={obj.img} alt="" />
                                    </div>
                                    <div className={styles.countries__title}>
                                        <h4>{obj.name}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
