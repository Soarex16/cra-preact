import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import IndexPage from '../routes/indexPage/IndexPage';
import ParamPage from '../routes/param/ParamPage';


function App() {

    return (
        <Router>
            <Switch>
                <Route path={'/:somestr'}>
                    <ParamPage />
                </Route>

                <Route path={'/'}>
                    <IndexPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
