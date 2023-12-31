import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

import App from './layout/App.tsx';
import Contacts from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';
import NotFound from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Main />,
                index: true,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
            {
                path: '/catalog',
                element: <Catalog />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/favorite',
                element: <Favorite />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
