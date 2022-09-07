import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AppSliceState {
    wallet: string | null;
}

const initialState: AppSliceState = {
    wallet: null,
}

export const appSlice = createSlice({
    name: 'todo-app',
    initialState,
    reducers: {
        setWallet: (state: AppSliceState, action: PayloadAction<string | null>) => {
            state.wallet = action.payload;
        },
    }
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer;