import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import IndexPage from '../routes/indexPage/IndexPage';
import ParamPage from '../routes/param/ParamPage';


function App() {

    return (
        <Router>
            <Route path={'/'}>
                <IndexPage />
            </Route>

            <Route path={'/:somestr'}>
                <ParamPage />
            </Route>
        </Router>
    );
}

export default App;
