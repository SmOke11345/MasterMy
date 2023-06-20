import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { clearCart, decItem, incItem, removeItem } from '../../redux/cart/slice.ts';

import styles from './styles/styles.module.css';
import TotalCountAll from '../../utils/TotalCountItems.ts';
import NotFound from '../../components/NotFound';

const Cart: React.FC = () => {
    const { items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const totalCountAll = TotalCountAll();

    const totalPriceAll = items.reduce((sum, item) => sum + item.price * item.count, 0);

    React.useEffect(() => {
        // полученный массив преобразуем в строку
        const json = JSON.stringify(items);
        // И сохраняем в хранилище
        localStorage.setItem('cart', json);
    }, [items]);

    // Сделать отдельным компонентом и передавать в него title и text
    if (items.length === 0) {
        return <NotFound />;
    }

    return (
        <section className={`${styles.Cart} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.wrapper_top}>
                    <div className={styles.title}>
                        <h2>Корзина</h2>
                    </div>
                    <div className={styles.clear}>
                        <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.product}>
                        {items.map((obj) => {
                            return (
                                <div key={obj.id} className={styles.product__item}>
                                    <div
                                        className={styles.product__img}
                                        style={{
                                            backgroundImage: `url(${obj.img})`,
                                            backgroundSize: 'cover',
                                            borderRadius: '5px 0 0 5px',
                                        }}></div>
                                    <div className={styles.product__title}>
                                        <h2>{obj.title}</h2>
                                    </div>
                                    <div className={styles.center}>
                                        <div className={styles.price}>
                                            <h4>за шт. {obj.price}₽</h4>
                                        </div>
                                        <div className={styles.wrapper_buttons}>
                                            <button
                                                disabled={obj.count === 1}
                                                className={styles.button}
                                                onClick={() => dispatch(decItem(obj.id))}>
                                                <svg
                                                    width="35"
                                                    height="35"
                                                    viewBox="0 0 35 35"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect
                                                        x="0.462891"
                                                        width="35"
                                                        height="35"
                                                        rx="17.5"
                                                        fill="#BCBABA"
                                                    />
                                                    <path
                                                        d="M23.4629 17H13.4629"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                            <div className={styles.count}>{obj.count}</div>
                                            <button
                                                className={styles.button}
                                                onClick={() => dispatch(incItem(obj.id))}>
                                                <svg
                                                    width="35"
                                                    height="35"
                                                    viewBox="0 0 35 35"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect
                                                        x="0.462891"
                                                        width="35"
                                                        height="35"
                                                        rx="17.5"
                                                        fill="#BCBABA"
                                                    />
                                                    <path
                                                        d="M18.4629 12V22"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M23.4629 17H13.4629"
                                                        stroke="white"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(removeItem(obj.id))}>
                                        <svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.96973 8L22.1367 22.1421"
                                                stroke="#00AEC5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M22.1365 8L7.96953 22.1421"
                                                stroke="#00AEC5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.wrapper_bottom}>
                        <div className={styles.content_wrapper}>
                            <div className={styles.price}>
                                <h4>Товары ({totalCountAll})</h4>
                            </div>
                            <div className={styles.price}>
                                <h4>{totalPriceAll}₽</h4>
                            </div>
                        </div>
                        <div className={styles.content_wrapper}>
                            <div className={styles.price}>
                                <h3>Итого:</h3>
                            </div>
                            <div className={styles.price}>
                                <h2>{totalPriceAll}₽</h2>
                            </div>
                        </div>
                        <button className={styles.btn_submit}>
                            <h2>Оформить заказ</h2>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
