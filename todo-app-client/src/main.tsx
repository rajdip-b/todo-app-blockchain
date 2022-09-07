import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {ToastCard} from "./components";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ToastCard>
                <App/>
            </ToastCard>
        </PersistGate>
    </Provider>
)
