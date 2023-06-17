import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

import './scss/all.module.css';
import styles from './scss/all.module.css';

function App() {
    return (
        <div className={styles.layout_shell}>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
