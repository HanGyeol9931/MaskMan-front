import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/login"
import borderSlice from "./reducer/border"
import showSilice from "./reducer/show"
import replieSilce from "./reducer/replie";
import nftSilce from "./reducer/nft"
import usersSlice from "./reducer/users";



const store = configureStore({
    reducer:{
       login : loginSlice,
       border : borderSlice,
       show : showSilice,
       replie : replieSilce,
       nft : nftSilce,
       users : usersSlice
    }
})

export default store;