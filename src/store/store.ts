
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {appReducer, AppSliceState} from "./app-slice";

interface StoreStateType {
    app: AppSliceState;
}

const appPersistConfig = {
    key: 'todo-app',
    storage
};

const rootPersistConfig = {
    key: 'todo-root',
    storage,
}

const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
});

const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
})

export const persistor = persistStore(store);
export default store;
export type RootDispatch = ReturnType<typeof store.dispatch>;
export type {StoreStateType};