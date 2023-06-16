import React from 'react';

import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';
import vk from './img/vk.svg';

import styles from './styles/styles.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <svg
                        width="182"
                        height="49"
                        viewBox="0 0 182 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M60.7861 30.9688V17.6377C60.7861 17.3441 60.8828 17.097 61.0762 16.8965C61.2695 16.696 61.5059 16.5957 61.7852 16.5957H66.1572C66.4365 16.5957 66.7015 16.696 66.9521 16.8965C67.2028 17.097 67.3711 17.3369 67.457 17.6162L70.626 26.79L73.7949 17.6162C73.8809 17.3369 74.0492 17.097 74.2998 16.8965C74.5505 16.696 74.8154 16.5957 75.0947 16.5957H79.4668C79.7461 16.5957 79.9788 16.696 80.165 16.8965C80.3584 17.097 80.4551 17.3441 80.4551 17.6377V30.9688C80.4551 31.2624 80.3548 31.5094 80.1543 31.71C79.9609 31.9033 79.7246 32 79.4453 32H77.5117C77.2324 32 76.9925 31.9033 76.792 31.71C76.5986 31.5094 76.502 31.2624 76.502 30.9688V20.4736L72.71 31.0332C72.6097 31.2982 72.4342 31.5273 72.1836 31.7207C71.9329 31.9069 71.668 32 71.3887 32H69.8525C69.5732 32 69.3083 31.9069 69.0576 31.7207C68.8141 31.5273 68.6387 31.2982 68.5312 31.0332L64.75 20.4736V30.9688C64.75 31.2624 64.6497 31.5094 64.4492 31.71C64.2559 31.9033 64.0195 32 63.7402 32H61.8066C61.5273 32 61.2874 31.9033 61.0869 31.71C60.8864 31.5094 60.7861 31.2624 60.7861 30.9688ZM84.0752 31.2266C83.1299 30.5677 82.6572 29.6367 82.6572 28.4336C82.6572 27.2305 83.1299 26.3066 84.0752 25.6621C85.0277 25.0176 86.2523 24.6953 87.749 24.6953H91.3047C91.3047 23.8574 91.1292 23.2738 90.7783 22.9443C90.4274 22.6149 89.8115 22.4502 88.9307 22.4502C88.057 22.4502 87.4411 22.6686 87.083 23.1055C86.7321 23.5352 86.2988 23.75 85.7832 23.75H84.1826C83.9893 23.75 83.8281 23.6891 83.6992 23.5674C83.5775 23.4385 83.5166 23.2809 83.5166 23.0947C83.5166 21.0394 85.4681 20.0117 89.3711 20.0117C91.0755 20.0117 92.4434 20.3949 93.4746 21.1611C94.5059 21.9202 95.0215 23.0983 95.0215 24.6953V31.3447C95.0215 31.5381 94.9606 31.6956 94.8389 31.8174C94.7171 31.9391 94.5596 32 94.3662 32H92.293C92.0996 32 91.9421 31.9391 91.8203 31.8174C91.6986 31.6885 91.6377 31.5309 91.6377 31.3447V31.0117C90.5062 31.821 89.1992 32.222 87.7168 32.2148C86.2415 32.2148 85.0277 31.8854 84.0752 31.2266ZM88.0068 27.1338C87.5055 27.1338 87.1081 27.2555 86.8145 27.499C86.528 27.7425 86.3848 28.0576 86.3848 28.4443C86.3848 28.8311 86.5352 29.1497 86.8359 29.4004C87.1367 29.651 87.5628 29.7764 88.1143 29.7764C89.2171 29.7764 90.2806 29.4541 91.3047 28.8096V27.1338H88.0068ZM97.0088 23.4814C97.0088 21.1683 98.8743 20.0117 102.605 20.0117C106.53 20.0117 108.492 21.0394 108.492 23.0947C108.492 23.2809 108.431 23.4385 108.31 23.5674C108.188 23.6891 108.03 23.75 107.837 23.75H106.236C105.721 23.75 105.287 23.5352 104.937 23.1055C104.586 22.6686 103.895 22.4502 102.863 22.4502C101.445 22.4502 100.736 22.7939 100.736 23.4814C100.736 23.8037 101.012 24.0723 101.563 24.2871C102.122 24.502 102.799 24.6917 103.594 24.8564C104.396 25.014 105.194 25.2181 105.989 25.4688C106.784 25.7194 107.457 26.1204 108.009 26.6719C108.567 27.2161 108.847 27.9072 108.847 28.7451C108.847 31.0583 106.877 32.2148 102.938 32.2148C98.9997 32.2148 97.0303 31.1908 97.0303 29.1426C97.0303 28.9492 97.0911 28.7917 97.2129 28.6699C97.3418 28.541 97.5029 28.4766 97.6963 28.4766H99.2969C99.8125 28.4766 100.246 28.695 100.597 29.1318C100.948 29.5615 101.639 29.7764 102.67 29.7764C104.31 29.7764 105.13 29.4326 105.13 28.7451C105.13 28.4229 104.851 28.1543 104.292 27.9395C103.741 27.7246 103.064 27.5348 102.262 27.3701C101.46 27.1982 100.661 26.9906 99.8662 26.7471C99.0785 26.4964 98.4053 26.0954 97.8467 25.5439C97.2881 24.9925 97.0088 24.305 97.0088 23.4814ZM116.452 29.6689L117.924 29.54H118.321C118.515 29.54 118.672 29.6009 118.794 29.7227C118.923 29.8444 118.987 30.002 118.987 30.1953V31.3447C118.987 31.5023 118.923 31.6455 118.794 31.7744C118.672 31.8962 118.515 31.9714 118.321 32C117.591 32.1432 116.638 32.2148 115.464 32.2148C112.384 32.2148 110.845 30.6035 110.845 27.3809V17.2617C110.845 17.0684 110.906 16.9108 111.027 16.7891C111.156 16.6602 111.314 16.5957 111.5 16.5957H113.906C114.092 16.5957 114.246 16.6602 114.368 16.7891C114.497 16.9108 114.562 17.0684 114.562 17.2617V20.8496H117.559C117.745 20.8496 117.899 20.9105 118.021 21.0322C118.149 21.154 118.214 21.3115 118.214 21.5049V22.7832C118.214 22.9766 118.149 23.1341 118.021 23.2559C117.899 23.3776 117.745 23.4385 117.559 23.4385H114.562V27.3809C114.562 28.1113 114.733 28.6771 115.077 29.0781C115.421 29.472 115.879 29.6689 116.452 29.6689ZM121.63 30.6465C120.527 29.6009 119.976 28.097 119.976 26.1348C119.976 24.1654 120.531 22.6543 121.641 21.6016C122.751 20.5417 124.29 20.0117 126.26 20.0117C128.229 20.0117 129.765 20.5273 130.868 21.5586C131.971 22.5827 132.522 24.0544 132.522 25.9736V26.5859C132.522 26.7793 132.458 26.9404 132.329 27.0693C132.207 27.1911 132.05 27.252 131.856 27.252H123.768C123.839 28.1328 124.09 28.7738 124.52 29.1748C124.956 29.5758 125.651 29.7764 126.604 29.7764C127.556 29.7764 128.208 29.5615 128.559 29.1318C128.91 28.7021 129.343 28.4837 129.858 28.4766H131.459C131.652 28.4766 131.81 28.541 131.932 28.6699C132.061 28.7917 132.125 28.9492 132.125 29.1426C132.125 31.1979 130.166 32.222 126.249 32.2148C124.272 32.2148 122.733 31.6921 121.63 30.6465ZM123.746 24.9854H128.741C128.67 23.2952 127.839 22.4502 126.249 22.4502C124.666 22.4502 123.832 23.2952 123.746 24.9854ZM142.642 22.9551L140.987 22.8906C140.021 22.8906 139.097 23.4206 138.216 24.4805V31.3447C138.216 31.5381 138.151 31.6956 138.022 31.8174C137.901 31.9391 137.747 32 137.561 32H135.154C134.961 32 134.803 31.9391 134.682 31.8174C134.56 31.6956 134.499 31.5381 134.499 31.3447V20.8926C134.499 20.6992 134.56 20.5417 134.682 20.4199C134.811 20.291 134.968 20.2266 135.154 20.2266H137.561C137.754 20.2266 137.911 20.291 138.033 20.4199C138.155 20.5417 138.216 20.6992 138.216 20.8926V21.5693C138.946 21.0394 139.648 20.6491 140.321 20.3984C141.002 20.1406 141.89 20.0117 142.985 20.0117C143.179 20.0117 143.336 20.0762 143.458 20.2051C143.587 20.3268 143.651 20.4808 143.651 20.667V22.2998C143.651 22.4932 143.587 22.6507 143.458 22.7725C143.336 22.8942 143.179 22.9551 142.985 22.9551H142.642ZM145.413 30.9688V17.6377C145.413 17.3441 145.51 17.097 145.703 16.8965C145.896 16.696 146.133 16.5957 146.412 16.5957H150.784C151.063 16.5957 151.328 16.696 151.579 16.8965C151.83 17.097 151.998 17.3369 152.084 17.6162L155.253 26.79L158.422 17.6162C158.508 17.3369 158.676 17.097 158.927 16.8965C159.177 16.696 159.442 16.5957 159.722 16.5957H164.094C164.373 16.5957 164.606 16.696 164.792 16.8965C164.985 17.097 165.082 17.3441 165.082 17.6377V30.9688C165.082 31.2624 164.982 31.5094 164.781 31.71C164.588 31.9033 164.352 32 164.072 32H162.139C161.859 32 161.619 31.9033 161.419 31.71C161.226 31.5094 161.129 31.2624 161.129 30.9688V20.4736L157.337 31.0332C157.237 31.2982 157.061 31.5273 156.811 31.7207C156.56 31.9069 156.295 32 156.016 32H154.479C154.2 32 153.935 31.9069 153.685 31.7207C153.441 31.5273 153.266 31.2982 153.158 31.0332L149.377 20.4736V30.9688C149.377 31.2624 149.277 31.5094 149.076 31.71C148.883 31.9033 148.646 32 148.367 32H146.434C146.154 32 145.914 31.9033 145.714 31.71C145.513 31.5094 145.413 31.2624 145.413 30.9688ZM170.238 33.1172L171.646 33.2998C172.655 33.2998 173.361 32.5586 173.762 31.0762C172.544 31.0762 171.527 30.7109 170.711 29.9805C169.895 29.2428 169.193 27.9359 168.605 26.0596L167.005 20.8711C166.983 20.8138 166.973 20.7493 166.973 20.6777C166.973 20.599 167.016 20.5059 167.102 20.3984C167.195 20.291 167.331 20.2337 167.51 20.2266H169.755C169.963 20.2266 170.16 20.2982 170.346 20.4414C170.539 20.5775 170.664 20.7493 170.722 20.957L172.129 25.5117C172.48 26.6289 172.834 27.4023 173.192 27.832C173.558 28.2617 173.987 28.4766 174.481 28.4766L176.619 20.957C176.676 20.7493 176.787 20.5775 176.952 20.4414C177.124 20.2982 177.314 20.2266 177.521 20.2266H179.788C179.967 20.2266 180.1 20.2839 180.186 20.3984C180.271 20.513 180.314 20.6097 180.314 20.6885C180.314 20.7601 180.307 20.821 180.293 20.8711L177.479 30.9043C176.977 32.6803 176.354 33.9479 175.609 34.707C174.872 35.4661 173.919 35.8457 172.752 35.8457C171.585 35.8457 170.757 35.8027 170.271 35.7168C169.791 35.6309 169.49 35.5234 169.368 35.3945C169.246 35.2728 169.186 35.1296 169.186 34.9648V33.7832C169.186 33.5898 169.246 33.4287 169.368 33.2998C169.49 33.1781 169.647 33.1172 169.841 33.1172H170.238Z"
                            fill="white"
                        />
                        <path
                            d="M11.5465 0C10.5917 3.21833 9.81535 6.49568 10.214 9.65078C10.6547 13.0967 12.4173 16.49 17.1071 19.7357C11.4835 27.6182 8.07372 41.2756 10.8855 49C12.0291 43.3094 12.3753 38.6937 16.4986 33.7619C24.6297 31.0642 29.4979 29.7996 31.2186 20.5155C31.8691 18.9664 32.5405 18.4817 34.5654 17.9126C35.6776 17.607 36.8946 17.1223 36.8841 15.8893C36.8631 10.6941 33.915 8.68128 30.8409 8.73397C27.7563 8.78666 24.5458 10.9048 23.9792 13.9819C23.3497 14.1716 22.7307 14.4561 22.1222 14.825C15.5229 10.2198 13.5085 5.77698 11.5465 0ZM0.25 8.79719C1.38311 11.6636 3.02403 14.551 5.41195 16.8167C7.95831 19.2299 11.3367 20.9581 15.995 21.2638C12.3753 18.7135 10.2455 15.9631 9.15437 13.1284C6.06979 11.9797 3.22966 10.4938 0.25 8.79719ZM31.7327 11.5687C32.0718 11.5698 32.3967 11.7056 32.6365 11.9465C32.8763 12.1874 33.0116 12.5137 33.0127 12.8544C33.0116 13.195 32.8763 13.5214 32.6365 13.7622C32.3967 14.0031 32.0718 14.1389 31.7327 14.14C31.3935 14.1389 31.0686 14.0031 30.8288 13.7622C30.589 13.5214 30.4538 13.195 30.4527 12.8544C30.4538 12.5137 30.589 12.1874 30.8288 11.9465C31.0686 11.7056 31.3935 11.5698 31.7327 11.5687ZM38.0277 17.4806C37.6605 18.018 37.2828 18.5555 36.3386 18.8716C39.8953 21.5377 44.6376 26.9332 47.25 29.9366C46.0749 26.438 41.3956 20.5999 38.0277 17.4806Z"
                            fill="#00AEC5"
                        />
                    </svg>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.content_wrapper}>
                        <ul className={styles.list}>
                            <li className={styles.title}>Компания</li>
                            <li>Главная</li>
                            <li>О нас</li>
                            <li>Новости и акции</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className={styles.content_wrapper}>
                        <ul className={styles.list}>
                            <li className={styles.title}>Сервис</li>
                            <li>Как заказать</li>
                            <li>Доставка</li>
                            <li>Возврат товара</li>
                            <li>Оплата</li>
                        </ul>
                    </div>
                    <div className={styles.content_wrapper}>
                        <ul className={styles.list}>
                            <li className={styles.title}>Контакты</li>
                            <li>+7 (800) 800-80-80</li>
                            <li className={styles.separator}></li>
                            <li>+7 (800) 800-80-80</li>
                            <li className={styles.social}>
                                {/*Telegram*/}
                                <div className={styles.social__item}>
                                    <a href="#">
                                        <img src={telegram} alt="telegram" />
                                    </a>
                                </div>
                                {/*WhatsApp*/}
                                <div className={styles.social__item}>
                                    <a href="#">
                                        <img src={whatsapp} alt="whatsapp" />
                                    </a>
                                </div>
                                {/*Вконтакте*/}
                                <div className={styles.social__item}>
                                    <a href="#">
                                        <img src={vk} alt="vk" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.content_wrapper} ${styles.copyright}`}>
                    © Artyom Lymar, 2023 г.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
