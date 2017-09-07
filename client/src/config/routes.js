import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';
import Main from '../components/Main';
import SavedMain from '../components/SavedMain';

const routes = (
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={Main} />
            <Route path='/saved' component={SavedMain} />
        </div>
    </Router>
);

export default routes;
