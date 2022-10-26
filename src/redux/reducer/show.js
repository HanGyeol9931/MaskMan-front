import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    show : null,
    modal : false,
}

const showSlice = createSlice({
    name: "show",
    initialState,
    reducers:{
        show(state,action){
            state.show = action.payload.userData
        },
        modalClose(state,action){
            state.modal = false
        },
        modalOpen(state,action){
            state.modal = true
        },
    }
})

export const Show = showSlice.actions
export default showSlice.reducer

