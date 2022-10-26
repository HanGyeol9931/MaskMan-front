import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    replies : []
}

const repliesSlice = createSlice({
    name: "replies",
    initialState,
    reducers:{
        replie(state,action){
            state.replies = action.payload.userData
        },
    }
})

export const Replie = repliesSlice.actions
export default repliesSlice.reducer

