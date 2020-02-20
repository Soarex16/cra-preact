import styles from '../../app/App.module.css';
import logo from '../../../logo.svg';
import React from 'react';
import {Link, RouteChildrenProps} from 'react-router-dom';

interface ParamPageRouteProps {
    somestr: string;
}

const ParamPage: React.FC<Partial<RouteChildrenProps<ParamPageRouteProps>>> = (props) => (
    <div className={styles.App}>
        <header className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt='logo' />

            <p>
                <code>This is a simple boilerplate for aliasing React.JS with PreactX</code>
            </p>

            <p>
                I can see route props! <code>{props?.match?.params.somestr}</code>
            </p>

            <Link className={styles.appButtonLink} to={'/'}>Go to main page</Link>
        </header>
    </div>
);

export default ParamPage;
