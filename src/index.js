import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import { Router, browserHistory } from 'react-router';


import Routes from './routes';
import reducers from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(
    ReduxPromise
)(createStore);
//<App /> replaces Router

ReactDOM.render(
	<Provider  store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} routes={Routes} />
	</Provider>	
	, document.getElementById('root'));
registerServiceWorker();
