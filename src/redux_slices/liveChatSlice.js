import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "../utils/constants";

const live_chat_slice = createSlice({
    name: 'live_chat_cache',
    initialState: {
        chats: []
    },
    reducers:{
        addToChat: (state, action) => {
            state.chats.splice(LIVE_CHAT_OFFSET,1)
            state.chats.unshift(action.payload)
        },
    }
})

export default live_chat_slice.reducer
export const { addToChat } = live_chat_slice.actions