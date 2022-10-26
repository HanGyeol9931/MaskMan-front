import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    users : null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        users(state,action){
            state.users = action.payload.users
        },
    }
})

export const Users = usersSlice.actions
export default usersSlice.reducer

