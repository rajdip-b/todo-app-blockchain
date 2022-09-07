import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AppSliceState {
    wallet: string | null;
    isDarkMode: boolean;
}

const initialState: AppSliceState = {
    wallet: null,
    isDarkMode: false
}

export const appSlice = createSlice({
    name: 'todo-app',
    initialState,
    reducers: {
        setWallet: (state: AppSliceState, action: PayloadAction<string | null>) => {
            state.wallet = action.payload;
        },
        toggleTheme: (state: AppSliceState) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer;