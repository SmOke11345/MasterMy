import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

import App from './layout/App.tsx';
import Contacts from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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
                element: <div>hello</div>,
            },
            {
                path: '/cart',
                element: <Cart />,
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
