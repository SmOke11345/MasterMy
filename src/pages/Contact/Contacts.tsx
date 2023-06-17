import React from 'react';

import styles from './styles/styles.module.css';

const Contacts: React.FC = () => {
    return (
        <section className={`${styles.contacts} ${styles.shell}`}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Контакты</h2>
                </div>
                <div className={styles.wrapper}>
                    <div className={`${styles.grid_top} ${styles.grid}`}>
                        <div className={`${styles.grid__item} ${styles.grid_first}`}>
                            <div className={styles.grid__inner}>
                                <div>
                                    <div className={styles.grid__title}>
                                        <h3>Обращения</h3>
                                    </div>
                                    <div className={styles.grid__subtitle}>
                                        <p>Если у Вас возник вопрос - напишите нам</p>
                                    </div>
                                    <div className={styles.grid__btn}>
                                        <a href="#">Частые вопросы</a>
                                    </div>
                                </div>
                                <div>
                                    <svg
                                        width="224"
                                        height="225"
                                        viewBox="0 0 224 225"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect
                                            width="197.985"
                                            height="198.357"
                                            transform="matrix(0.990044 0.14076 -0.140221 0.99012 27.8254 0.510422)"
                                            fill="url(#pattern0)"
                                        />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1">
                                                <use
                                                    xlinkHref="#image0_158_713"
                                                    transform="matrix(0.0019568 0 0 0.00195312 -0.000940454 0)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_158_713"
                                                width="512"
                                                height="512"
                                                xlinkHref="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <div className={styles.grid__item}>
                                <div className={`${styles.grid__inner} ${styles.link_bottom}`}>
                                    <div>
                                        <div className={styles.grid__title}>
                                            <h3>Официальные запросы</h3>
                                        </div>
                                        <div className={styles.grid__subtitle}>
                                            <p>Для отправки или получения деловой документации</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>sales@mastermy.ru</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <div className={styles.grid__item}>
                                <div className={styles.grid__inner}>
                                    <div>
                                        <div className={styles.grid__title}>
                                            <h3>Правообладателям</h3>
                                        </div>
                                        <div className={styles.grid__subtitle}>
                                            <p>
                                                Претензии по нарушению прав на ителлектуальную
                                                собственность
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.grid_bottom} ${styles.grid} ${styles.grid_bottom}`}>
                        <div className={styles.grid__item}>
                            <div className={styles.grid__item}>
                                <div className={`${styles.grid__inner} ${styles.link_bottom}`}>
                                    <div>
                                        <div className={styles.grid__title}>
                                            <h3>Партнерам</h3>
                                        </div>
                                        <div className={styles.grid__subtitle}>
                                            <p>Узнайте подробные условия для сотрудничества</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Подробнее</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <div className={styles.grid__item}>
                                <div className={`${styles.grid__inner} ${styles.link_bottom}`}>
                                    <div>
                                        <div className={styles.grid__title}>
                                            <h3>Пресс-служба</h3>
                                        </div>
                                        <div className={styles.grid__subtitle}>
                                            <p>Для запросов СМИ и на участие в мероприятиях</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>pr@mastermy.ru</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.grid__item}>
                            <div className={styles.grid__inner}>
                                <div>
                                    <div className={styles.grid__title}>
                                        <h3>Юридический адрес</h3>
                                    </div>
                                    <div className={styles.grid__subtitle}>
                                        <p>
                                            142451, Московская область, г. Электросталь, п.
                                            Случайный, здание бригадирского дома
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contacts;
