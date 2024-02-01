import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    userToken: string
}

const initialState: UserState = {
    userToken: "",
}

export const accountSlice: any = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userToken = action.payload;
        },
        sigeup: (state, action) => {
            console.log(action.payload);
        }
    },

})

// Action creators are generated for each case reducer function
export const { login } = accountSlice.actions

export default accountSlice.reducer