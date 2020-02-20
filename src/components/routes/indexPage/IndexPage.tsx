import styles from '../../app/App.module.css';
import logo from '../../../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => (
    <div className={styles.App}>
        <header className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt='logo' />

            <p>
                <code>This is a simple boilerplate for aliasing React.JS with PreactX</code>
            </p>

            <Link className={styles.appButtonLink} to={'/Soarex16'}>Go to page with params</Link>
        </header>
    </div>
);

export default IndexPage;
