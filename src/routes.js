import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './App';
import Home from './components/home';
const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
export default (
    <Route path={baseUrl + "/"} component={App} >
        <IndexRedirect to="pokemon/1" />
        <Route path="pokemon/:page" component={Home} />
    </Route>
)