import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';

//Estilos base:
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.css";

import App from './App';

//Reducers del aplicativo:
import userReducer from './storage/userReducer';
import backendReducer from './storage/backendReducer';

const reduxStore = combineReducers({
  userReducer: userReducer,
  backendReducer: backendReducer
});
const storeRedux = createStore(reduxStore);

ReactDOM.render(
    <Provider store={storeRedux}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
