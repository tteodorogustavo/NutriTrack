import React, { Component } from "react";
import {StackNavigatior} from "react-navigation";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./src/reducers";

import Preload from "./src/screens/Preload";
//import Home from "./src/screens/Home";
//import Login from "./src/screens/Login";

let store = createStore(reducers, applyMiddleware(ReduxThunk));

const AppNavigaror = StackNavigatior({
        Preload: {
            screen: Preload
        },
        /*Home: {
            screen: Home
        },
        Login: {
            screen: Login
        }*/
    });

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigaror />
            </Provider>
        );
    }
} 