import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import myReducer from './reducers/MainReducers';
import {Provider} from 'react-redux';
const store = createStore(myReducer);


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , 
    document.getElementById('root'));
registerServiceWorker();
