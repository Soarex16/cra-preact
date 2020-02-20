import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './components/app/App';

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
    console.log("hydrated");
    ReactDOM.hydrate(<App />, rootElement);
} else {
    console.log("rendered");
    ReactDOM.render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
