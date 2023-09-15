import { configureStore } from '@reduxjs/toolkit'
import generalSlice from '../redux_slices/generalSlice'

export const store = configureStore({
    reducer: {
        general : generalSlice
    },
})