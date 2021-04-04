// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./redux/_reducers";
import "./assets/styles/common.scss";

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddleware,
    ReduxThunk
)(createStore);

ReactDOM.render(
    <React.StrictMode>
        <Provider
            store={createStoreWidthMiddleware(
                Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
            )}
        >
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
