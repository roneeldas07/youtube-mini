import { createSlice } from "@reduxjs/toolkit";

const videos_list_slice = createSlice({
    name: 'videos_list',
    initialState: {
        videos: []
    },
    reducers:{
        setVideos: (state, action) => {
            state.videos = action.payload
            return state
        },
        addVideos: (state, action) => {
            state.videos = [...state.videos, ...action.payload]
            return state
        },
    }
})

export default videos_list_slice.reducer
export const { setVideos,addVideos } = videos_list_slice.actions