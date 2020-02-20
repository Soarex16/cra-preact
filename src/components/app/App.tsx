import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.css';

function App() {

    return (
        <div className={styles.App}>
            <header className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt='logo' />

                <p>
                    <code>This is a simple boilerplate for aliasing React.JS with PreactX</code>
                </p>

                <a className={styles.appButtonLink} href={'https://github.com/Soarex16'}>Visit my GitHub for more information</a>
            </header>
        </div>
    );
}

export default App;
