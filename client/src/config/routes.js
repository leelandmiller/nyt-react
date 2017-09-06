import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';
import Main from '../components/Main';
import Saved from '../components/SavedArticles/SavedList';

const routes = (
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={Main} />
            <Route path='/saved' component={Saved} />
        </div>
    </Router>
);

export default routes;
