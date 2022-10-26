import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    nft : [],
    nftcount : [],
    mynft : null,
    nftsell : null
}

const nftSlice = createSlice({
    name: "nft",
    initialState,
    reducers:{
        nft(state,action){
            state.nft = action.payload.nft
        },
        nftcount(state,action){
            state.nftcount = action.payload.nftcount
        },
        mynft(state,action){
            state.mynft = action.payload.mynft
        },
        nftsell(state,action){
            state.nftsell = action.payload.nftsell
        },
    }
})

export const Nft = nftSlice.actions
export default nftSlice.reducer

