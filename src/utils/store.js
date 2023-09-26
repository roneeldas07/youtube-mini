import { configureStore } from '@reduxjs/toolkit'
import generalSlice from '../redux_slices/generalSlice'
import videosListSlice from '../redux_slices/videosListSlice'
import searchCacheSlice from '../redux_slices/searchCacheSlice'
import liveChatSlice from '../redux_slices/liveChatSlice'

export const store = configureStore({
    reducer: {
        general : generalSlice,
        videos_list : videosListSlice,
        search_cache: searchCacheSlice,
        live_chats: liveChatSlice
    },
})