import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/styles.module.css';

const menu = [
    { name: 'Главная', link: '/' },
    { name: 'О нас', link: '/about' },
    { name: 'Каталог', link: '/catalog' },
    { name: 'Контакты', link: '/contacts' },
];

const Header: React.FC = () => {
    const [openSearch, setOpenSearch] = React.useState(false);
    console.log(openSearch);
    // const [openLeng, setOpenLeng] = React.useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_top}>
                    <div className={styles.logo}>
                        <svg
                            width="181"
                            height="49"
                            viewBox="0 0 181 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M60.5361 31.9688V18.6377C60.5361 18.3441 60.6328 18.097 60.8262 17.8965C61.0195 17.696 61.2559 17.5957 61.5352 17.5957H65.9072C66.1865 17.5957 66.4515 17.696 66.7021 17.8965C66.9528 18.097 67.1211 18.3369 67.207 18.6162L70.376 27.79L73.5449 18.6162C73.6309 18.3369 73.7992 18.097 74.0498 17.8965C74.3005 17.696 74.5654 17.5957 74.8447 17.5957H79.2168C79.4961 17.5957 79.7288 17.696 79.915 17.8965C80.1084 18.097 80.2051 18.3441 80.2051 18.6377V31.9688C80.2051 32.2624 80.1048 32.5094 79.9043 32.71C79.7109 32.9033 79.4746 33 79.1953 33H77.2617C76.9824 33 76.7425 32.9033 76.542 32.71C76.3486 32.5094 76.252 32.2624 76.252 31.9688V21.4736L72.46 32.0332C72.3597 32.2982 72.1842 32.5273 71.9336 32.7207C71.6829 32.9069 71.418 33 71.1387 33H69.6025C69.3232 33 69.0583 32.9069 68.8076 32.7207C68.5641 32.5273 68.3887 32.2982 68.2812 32.0332L64.5 21.4736V31.9688C64.5 32.2624 64.3997 32.5094 64.1992 32.71C64.0059 32.9033 63.7695 33 63.4902 33H61.5566C61.2773 33 61.0374 32.9033 60.8369 32.71C60.6364 32.5094 60.5361 32.2624 60.5361 31.9688ZM83.8252 32.2266C82.8799 31.5677 82.4072 30.6367 82.4072 29.4336C82.4072 28.2305 82.8799 27.3066 83.8252 26.6621C84.7777 26.0176 86.0023 25.6953 87.499 25.6953H91.0547C91.0547 24.8574 90.8792 24.2738 90.5283 23.9443C90.1774 23.6149 89.5615 23.4502 88.6807 23.4502C87.807 23.4502 87.1911 23.6686 86.833 24.1055C86.4821 24.5352 86.0488 24.75 85.5332 24.75H83.9326C83.7393 24.75 83.5781 24.6891 83.4492 24.5674C83.3275 24.4385 83.2666 24.2809 83.2666 24.0947C83.2666 22.0394 85.2181 21.0117 89.1211 21.0117C90.8255 21.0117 92.1934 21.3949 93.2246 22.1611C94.2559 22.9202 94.7715 24.0983 94.7715 25.6953V32.3447C94.7715 32.5381 94.7106 32.6956 94.5889 32.8174C94.4671 32.9391 94.3096 33 94.1162 33H92.043C91.8496 33 91.6921 32.9391 91.5703 32.8174C91.4486 32.6885 91.3877 32.5309 91.3877 32.3447V32.0117C90.2562 32.821 88.9492 33.222 87.4668 33.2148C85.9915 33.2148 84.7777 32.8854 83.8252 32.2266ZM87.7568 28.1338C87.2555 28.1338 86.8581 28.2555 86.5645 28.499C86.278 28.7425 86.1348 29.0576 86.1348 29.4443C86.1348 29.8311 86.2852 30.1497 86.5859 30.4004C86.8867 30.651 87.3128 30.7764 87.8643 30.7764C88.9671 30.7764 90.0306 30.4541 91.0547 29.8096V28.1338H87.7568ZM96.7588 24.4814C96.7588 22.1683 98.6243 21.0117 102.355 21.0117C106.28 21.0117 108.242 22.0394 108.242 24.0947C108.242 24.2809 108.181 24.4385 108.06 24.5674C107.938 24.6891 107.78 24.75 107.587 24.75H105.986C105.471 24.75 105.037 24.5352 104.687 24.1055C104.336 23.6686 103.645 23.4502 102.613 23.4502C101.195 23.4502 100.486 23.7939 100.486 24.4814C100.486 24.8037 100.762 25.0723 101.313 25.2871C101.872 25.502 102.549 25.6917 103.344 25.8564C104.146 26.014 104.944 26.2181 105.739 26.4688C106.534 26.7194 107.207 27.1204 107.759 27.6719C108.317 28.2161 108.597 28.9072 108.597 29.7451C108.597 32.0583 106.627 33.2148 102.688 33.2148C98.7497 33.2148 96.7803 32.1908 96.7803 30.1426C96.7803 29.9492 96.8411 29.7917 96.9629 29.6699C97.0918 29.541 97.2529 29.4766 97.4463 29.4766H99.0469C99.5625 29.4766 99.9958 29.695 100.347 30.1318C100.698 30.5615 101.389 30.7764 102.42 30.7764C104.06 30.7764 104.88 30.4326 104.88 29.7451C104.88 29.4229 104.601 29.1543 104.042 28.9395C103.491 28.7246 102.814 28.5348 102.012 28.3701C101.21 28.1982 100.411 27.9906 99.6162 27.7471C98.8285 27.4964 98.1553 27.0954 97.5967 26.5439C97.0381 25.9925 96.7588 25.305 96.7588 24.4814ZM116.202 30.6689L117.674 30.54H118.071C118.265 30.54 118.422 30.6009 118.544 30.7227C118.673 30.8444 118.737 31.002 118.737 31.1953V32.3447C118.737 32.5023 118.673 32.6455 118.544 32.7744C118.422 32.8962 118.265 32.9714 118.071 33C117.341 33.1432 116.388 33.2148 115.214 33.2148C112.134 33.2148 110.595 31.6035 110.595 28.3809V18.2617C110.595 18.0684 110.656 17.9108 110.777 17.7891C110.906 17.6602 111.064 17.5957 111.25 17.5957H113.656C113.842 17.5957 113.996 17.6602 114.118 17.7891C114.247 17.9108 114.312 18.0684 114.312 18.2617V21.8496H117.309C117.495 21.8496 117.649 21.9105 117.771 22.0322C117.899 22.154 117.964 22.3115 117.964 22.5049V23.7832C117.964 23.9766 117.899 24.1341 117.771 24.2559C117.649 24.3776 117.495 24.4385 117.309 24.4385H114.312V28.3809C114.312 29.1113 114.483 29.6771 114.827 30.0781C115.171 30.472 115.629 30.6689 116.202 30.6689ZM121.38 31.6465C120.277 30.6009 119.726 29.097 119.726 27.1348C119.726 25.1654 120.281 23.6543 121.391 22.6016C122.501 21.5417 124.04 21.0117 126.01 21.0117C127.979 21.0117 129.515 21.5273 130.618 22.5586C131.721 23.5827 132.272 25.0544 132.272 26.9736V27.5859C132.272 27.7793 132.208 27.9404 132.079 28.0693C131.957 28.1911 131.8 28.252 131.606 28.252H123.518C123.589 29.1328 123.84 29.7738 124.27 30.1748C124.706 30.5758 125.401 30.7764 126.354 30.7764C127.306 30.7764 127.958 30.5615 128.309 30.1318C128.66 29.7021 129.093 29.4837 129.608 29.4766H131.209C131.402 29.4766 131.56 29.541 131.682 29.6699C131.811 29.7917 131.875 29.9492 131.875 30.1426C131.875 32.1979 129.916 33.222 125.999 33.2148C124.022 33.2148 122.483 32.6921 121.38 31.6465ZM123.496 25.9854H128.491C128.42 24.2952 127.589 23.4502 125.999 23.4502C124.416 23.4502 123.582 24.2952 123.496 25.9854ZM142.392 23.9551L140.737 23.8906C139.771 23.8906 138.847 24.4206 137.966 25.4805V32.3447C137.966 32.5381 137.901 32.6956 137.772 32.8174C137.651 32.9391 137.497 33 137.311 33H134.904C134.711 33 134.553 32.9391 134.432 32.8174C134.31 32.6956 134.249 32.5381 134.249 32.3447V21.8926C134.249 21.6992 134.31 21.5417 134.432 21.4199C134.561 21.291 134.718 21.2266 134.904 21.2266H137.311C137.504 21.2266 137.661 21.291 137.783 21.4199C137.905 21.5417 137.966 21.6992 137.966 21.8926V22.5693C138.696 22.0394 139.398 21.6491 140.071 21.3984C140.752 21.1406 141.64 21.0117 142.735 21.0117C142.929 21.0117 143.086 21.0762 143.208 21.2051C143.337 21.3268 143.401 21.4808 143.401 21.667V23.2998C143.401 23.4932 143.337 23.6507 143.208 23.7725C143.086 23.8942 142.929 23.9551 142.735 23.9551H142.392ZM145.163 31.9688V18.6377C145.163 18.3441 145.26 18.097 145.453 17.8965C145.646 17.696 145.883 17.5957 146.162 17.5957H150.534C150.813 17.5957 151.078 17.696 151.329 17.8965C151.58 18.097 151.748 18.3369 151.834 18.6162L155.003 27.79L158.172 18.6162C158.258 18.3369 158.426 18.097 158.677 17.8965C158.927 17.696 159.192 17.5957 159.472 17.5957H163.844C164.123 17.5957 164.356 17.696 164.542 17.8965C164.735 18.097 164.832 18.3441 164.832 18.6377V31.9688C164.832 32.2624 164.732 32.5094 164.531 32.71C164.338 32.9033 164.102 33 163.822 33H161.889C161.609 33 161.369 32.9033 161.169 32.71C160.976 32.5094 160.879 32.2624 160.879 31.9688V21.4736L157.087 32.0332C156.987 32.2982 156.811 32.5273 156.561 32.7207C156.31 32.9069 156.045 33 155.766 33H154.229C153.95 33 153.685 32.9069 153.435 32.7207C153.191 32.5273 153.016 32.2982 152.908 32.0332L149.127 21.4736V31.9688C149.127 32.2624 149.027 32.5094 148.826 32.71C148.633 32.9033 148.396 33 148.117 33H146.184C145.904 33 145.664 32.9033 145.464 32.71C145.263 32.5094 145.163 32.2624 145.163 31.9688ZM169.988 34.1172L171.396 34.2998C172.405 34.2998 173.111 33.5586 173.512 32.0762C172.294 32.0762 171.277 31.7109 170.461 30.9805C169.645 30.2428 168.943 28.9359 168.355 27.0596L166.755 21.8711C166.733 21.8138 166.723 21.7493 166.723 21.6777C166.723 21.599 166.766 21.5059 166.852 21.3984C166.945 21.291 167.081 21.2337 167.26 21.2266H169.505C169.713 21.2266 169.91 21.2982 170.096 21.4414C170.289 21.5775 170.414 21.7493 170.472 21.957L171.879 26.5117C172.23 27.6289 172.584 28.4023 172.942 28.832C173.308 29.2617 173.737 29.4766 174.231 29.4766L176.369 21.957C176.426 21.7493 176.537 21.5775 176.702 21.4414C176.874 21.2982 177.064 21.2266 177.271 21.2266H179.538C179.717 21.2266 179.85 21.2839 179.936 21.3984C180.021 21.513 180.064 21.6097 180.064 21.6885C180.064 21.7601 180.057 21.821 180.043 21.8711L177.229 31.9043C176.727 33.6803 176.104 34.9479 175.359 35.707C174.622 36.4661 173.669 36.8457 172.502 36.8457C171.335 36.8457 170.507 36.8027 170.021 36.7168C169.541 36.6309 169.24 36.5234 169.118 36.3945C168.996 36.2728 168.936 36.1296 168.936 35.9648V34.7832C168.936 34.5898 168.996 34.4287 169.118 34.2998C169.24 34.1781 169.397 34.1172 169.591 34.1172H169.988Z"
                                fill="black"
                            />
                            <path
                                d="M11.2965 0.51355C10.3417 3.66665 9.56535 6.87756 9.96404 9.96871C10.4047 13.3448 12.1673 16.6693 16.8571 19.8492C11.2335 27.5719 7.82372 40.9525 10.6355 48.5203C11.7791 42.9451 12.1253 38.423 16.2486 33.5911C24.3797 30.948 29.2479 29.7091 30.9686 20.6132C31.6191 19.0955 32.2905 18.6206 34.3154 18.0631C35.4276 17.7637 36.6446 17.2888 36.6341 16.0808C36.6131 10.9908 33.665 9.01885 30.5909 9.07048C27.5063 9.1221 24.2958 11.1973 23.7292 14.2121C23.0997 14.3979 22.4807 14.6767 21.8722 15.038C15.2729 10.5262 13.2585 6.17343 11.2965 0.51355ZM0 9.13242C1.13311 11.9407 2.77403 14.7696 5.16195 16.9894C7.70831 19.3537 11.0867 21.0469 15.745 21.3463C12.1253 18.8478 9.99551 16.1531 8.90437 13.3758C5.81979 12.2504 2.97966 10.7947 0 9.13242ZM31.4827 11.8478C31.8218 11.8488 32.1467 11.9819 32.3865 12.2179C32.6263 12.4539 32.7616 12.7736 32.7627 13.1073C32.7616 13.4411 32.6263 13.7608 32.3865 13.9968C32.1467 14.2328 31.8218 14.3658 31.4827 14.3669C31.1435 14.3658 30.8186 14.2328 30.5788 13.9968C30.339 13.7608 30.2038 13.4411 30.2027 13.1073C30.2038 12.7736 30.339 12.4539 30.5788 12.2179C30.8186 11.9819 31.1435 11.8488 31.4827 11.8478ZM37.7777 17.6398C37.4105 18.1663 37.0328 18.6929 36.0886 19.0026C39.6453 21.6147 44.3876 26.9009 47 29.8433C45.8249 26.4156 41.1456 20.6958 37.7777 17.6398Z"
                                fill="#00AEC5"
                            />
                        </svg>
                    </div>
                    <div className={styles.content_wrapper}>
                        <div className={styles.search_wrapper}>
                            <div
                                className={`${styles.search_inner} ${
                                    openSearch ? '' : styles.display_none
                                }`}>
                                <input
                                    type="text"
                                    id="search_field"
                                    name="search"
                                    placeholder="Поиск..."
                                />
                            </div>
                            <div
                                onClick={() => setOpenSearch(!openSearch)}
                                className={`${styles.button_wrapper} ${styles.small} ${
                                    openSearch ? styles.search : ''
                                }`}>
                                <svg
                                    width="29"
                                    height="29"
                                    viewBox="0 0 29 29"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27 27L20.9681 20.9681M20.9681 20.9681C21.9999 19.9363 22.8184 18.7115 23.3767 17.3634C23.9351 16.0153 24.2225 14.5704 24.2225 13.1113C24.2225 11.6521 23.9351 10.2073 23.3767 8.85917C22.8184 7.51109 21.9999 6.28619 20.9681 5.25442C19.9363 4.22264 18.7115 3.40419 17.3634 2.8458C16.0153 2.2874 14.5704 2 13.1113 2C11.6521 2 10.2073 2.2874 8.85917 2.8458C7.51109 3.40419 6.28619 4.22264 5.25442 5.25442C3.17065 7.33818 2 10.1644 2 13.1113C2 16.0582 3.17065 18.8844 5.25442 20.9681C7.33818 23.0519 10.1644 24.2225 13.1113 24.2225C16.0582 24.2225 18.8844 23.0519 20.9681 20.9681Z"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={`${styles.button_wrapper} ${styles.small} ${styles.heart}`}>
                            <svg
                                width="25"
                                height="23"
                                viewBox="0 0 25 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5 22.9375L10.6875 21.2875C4.25 15.45 0 11.5875 0 6.875C0 3.0125 3.025 0 6.875 0C9.05 0 11.1375 1.0125 12.5 2.6C13.8625 1.0125 15.95 0 18.125 0C21.975 0 25 3.0125 25 6.875C25 11.5875 20.75 15.45 14.3125 21.2875L12.5 22.9375Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div className={`${styles.button_wrapper} ${styles.big}`}>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.8356 22.7999C23.2487 19.9128 20.7707 17.6632 17.8006 16.4133C19.2776 15.265 20.3686 13.6641 20.9191 11.8374C21.4696 10.0106 21.4517 8.05059 20.8678 6.23499C20.284 4.41938 19.1639 2.84022 17.6661 1.72119C16.1683 0.602162 14.3688 0 12.5226 0C10.6763 0 8.87681 0.602162 7.37903 1.72119C5.88126 2.84022 4.76112 4.41938 4.17727 6.23499C3.59343 8.05059 3.57549 10.0106 4.12599 11.8374C4.67648 13.6641 5.76752 15.265 7.24454 16.4133C4.2744 17.6632 1.79642 19.9128 0.209488 22.7999C0.111156 22.9638 0.0456187 23.1465 0.0167712 23.3372C-0.0120762 23.5278 -0.0036445 23.7226 0.0415653 23.9098C0.086775 24.0971 0.16784 24.273 0.27994 24.4271C0.392041 24.5812 0.532889 24.7103 0.69411 24.8069C0.855332 24.9034 1.03364 24.9654 1.21842 24.9891C1.40321 25.0128 1.59071 24.9977 1.76977 24.9448C1.94883 24.8919 2.1158 24.8022 2.26075 24.6811C2.4057 24.5599 2.52567 24.4098 2.61353 24.2396C4.71085 20.4819 8.41473 18.2406 12.5226 18.2406C16.6304 18.2406 20.3343 20.4831 22.4316 24.2396C22.622 24.557 22.924 24.7852 23.2738 24.876C23.6236 24.9667 23.9937 24.9129 24.3059 24.7259C24.6181 24.539 24.8479 24.2335 24.9468 23.874C25.0456 23.5146 25.0058 23.1294 24.8356 22.7999ZM6.50376 9.12211C6.50376 7.88816 6.85676 6.68191 7.51811 5.65592C8.17946 4.62992 9.11947 3.83026 10.2193 3.35804C11.3191 2.88583 12.5292 2.76228 13.6968 3.00301C14.8643 3.24374 15.9367 3.83795 16.7785 4.71048C17.6202 5.58302 18.1935 6.6947 18.4257 7.90495C18.6579 9.11519 18.5387 10.3696 18.0832 11.5097C17.6277 12.6497 16.8562 13.6241 15.8664 14.3096C14.8766 14.9952 13.713 15.3611 12.5226 15.3611C10.9268 15.3592 9.397 14.7013 8.26866 13.5316C7.14031 12.362 6.5056 10.7762 6.50376 9.12211Z"
                                    fill="white"
                                />
                            </svg>
                            <h5>Профиль</h5>
                        </div>
                        <div className={`${styles.button_wrapper} ${styles.big}`}>
                            <svg
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00223 25C7.31453 25 6.7256 24.755 6.23546 24.265C5.74531 23.775 5.50065 23.1867 5.50149 22.5C5.50149 21.8125 5.74656 21.2237 6.23671 20.7337C6.72685 20.2437 7.31536 19.9992 8.00223 20C8.68994 20 9.27886 20.245 9.76901 20.735C10.2592 21.225 10.5038 21.8133 10.503 22.5C10.503 23.1875 10.2579 23.7762 9.76776 24.2662C9.27761 24.7562 8.6891 25.0008 8.00223 25ZM20.506 25C19.8182 25 19.2293 24.755 18.7392 24.265C18.249 23.775 18.0044 23.1867 18.0052 22.5C18.0052 21.8125 18.2503 21.2237 18.7404 20.7337C19.2306 20.2437 19.8191 19.9992 20.506 20C21.1937 20 21.7826 20.245 22.2727 20.735C22.7629 21.225 23.0075 21.8133 23.0067 22.5C23.0067 23.1875 22.7616 23.7762 22.2715 24.2662C21.7813 24.7562 21.1928 25.0008 20.506 25ZM8.00223 18.75C7.06445 18.75 6.35591 18.3383 5.8766 17.515C5.39729 16.6917 5.37645 15.8742 5.81408 15.0625L7.50208 12L3.00074 2.5H1.71911C1.36484 2.5 1.07309 2.38 0.843852 2.14C0.614617 1.9 0.5 1.60334 0.5 1.25C0.5 0.895837 0.620036 0.598754 0.860107 0.358754C1.10018 0.118754 1.39693 -0.000829008 1.75037 4.32526e-06H3.78223C4.01146 4.32526e-06 4.23028 0.0625044 4.43867 0.187504C4.64707 0.312504 4.80336 0.489588 4.90756 0.718754L5.75156 2.5H24.1946C24.7572 2.5 25.1427 2.70834 25.3511 3.125C25.5595 3.54167 25.5491 3.97917 25.3199 4.4375L20.8811 12.4375C20.6518 12.8542 20.3497 13.1771 19.9745 13.4063C19.5994 13.6354 19.1722 13.75 18.6929 13.75H9.37764L8.00223 16.25H21.7876C22.1419 16.25 22.4336 16.37 22.6628 16.61C22.8921 16.85 23.0067 17.1467 23.0067 17.5C23.0067 17.8542 22.8867 18.1512 22.6466 18.3912C22.4065 18.6312 22.1098 18.7508 21.7563 18.75H8.00223Z"
                                    fill="white"
                                />
                            </svg>
                            <h5>Корзина</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.header_bottom}>
                    <div className={styles.content_wrapper}>
                        <nav className={styles.nav}>
                            {menu.map((item, index) => {
                                return (
                                    <NavLink to={item.link} key={index}>
                                        {item.name}
                                    </NavLink>
                                );
                            })}
                        </nav>
                    </div>
                    <div className={styles.content_wrapper}>
                        {/*
                        Подумать как сделать выпадающий список,
                        чтобы было удобнее его стилизовать, можно попробовать через select
                        */}
                        {/*<div className={styles.list}>*/}
                        {/*    <div className={styles.list__item}>Ru</div>*/}
                        {/*    <div className={styles.list__item}>Ru</div>*/}
                        {/*    <div className={styles.list__item}>EU</div>*/}
                        {/*</div>*/}
                        <div className={styles.tel}>
                            <a href="tel:+7 800 800 80 80">+7 (800) 800-80-80</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
