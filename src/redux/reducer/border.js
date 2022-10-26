import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    border : null
}

const borderSlice = createSlice({
    name: "border",
    initialState,
    reducers:{
        border(state,action){
            state.border = action.payload.userData
        },
    }
})

export const Border = borderSlice.actions
export default borderSlice.reducer

