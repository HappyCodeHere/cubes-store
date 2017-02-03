import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js';
/*import ContactForm from './components/ContactForm.js';*/
import CubesList from './components/CubesList.js';
import CubesInfo from './components/CubesInfo.js';

import './index.scss';

import reducers from './reducers';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);








ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	<Router history={browserHistory} >
	    	<Route path="/" component={App}>
			{/*<IndexRoute component={CubesList} /> */}
		</Route>
		<Route path=":id" component={CubesInfo} />
    </Router>
  </Provider>
  , document.querySelector('#root'));

/*ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ContactForm />
  </Provider>
  , document.querySelector('.here'));*/
