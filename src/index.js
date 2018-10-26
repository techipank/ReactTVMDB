import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Reducers'
import App from './Containers/App';
import thunk from 'redux-thunk'
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer,applyMiddleware(thunk));

// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App/></BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);