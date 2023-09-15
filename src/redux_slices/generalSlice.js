import { createSlice } from "@reduxjs/toolkit";

const general_slice = createSlice({
    name: 'general',
    initialState: {
        burger: false,
        theme: "light"
    },
    reducers:{
        toggleBurger: (state) => {
            state.burger = !state.burger
            return state
        },
        toggleTheme: (state) => {
            state.theme = (state.theme == "light") ? "dark" : "light"
            return state
        }
    }
})

export default general_slice.reducer
export const { toggleBurger, toggleTheme } = general_slice.actions