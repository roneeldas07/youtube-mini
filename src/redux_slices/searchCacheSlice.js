import { createSlice } from "@reduxjs/toolkit";

const search_cache_slice = createSlice({
    name: 'search_cache',
    initialState: {},
    reducers:{
        addToCache: (state, action) => {
            state = {...state, ...action.payload}
            return state
        },
    }
})

export default search_cache_slice.reducer
export const { addToCache } = search_cache_slice.actions