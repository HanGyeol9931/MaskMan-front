import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    nickname : "유저",
    point : null,
    isLogin : false,
    img : null,
    whitelist : 0,
    userStop : 0,
    admin : 0
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        login(state,action){
            state.isLogin = action.payload.data
            state.nickname = action.payload.userData.user_nickname
            state.point = action.payload.userData.user_point
            state.img = action.payload.userData.user_profil
            state.whitelist = action.payload.userData.user_whitelist
            state.userStop = action.payload.userData.user_stop
            state.admin = action.payload.userData.user_admin
        },
        logout(state,action){
            state.isLogin = false
            state.nickname = "유저"
            state.point = null
            state.img = null
            state.whitelist = 0
            state.userStop = 0
            state.admin = 0
        }
    }
})

export const Login = loginSlice.actions
export default loginSlice.reducer

