import axios from "axios"
import swal from "sweetalert"
import {Nft} from "../redux/reducer/nft"
import {Login} from "../redux/reducer/login"
import {Users} from "../redux/reducer/users"

function nftData(){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/nft",
        }).then((e)=>{
            const nft= e.data.nft
            const nftcount= e.data.nftcount
            const nftsell = e.data.nftsell
            dispatch(Nft.nft({nft}))
            dispatch(Nft.nftcount({nftcount}))
            dispatch(Nft.nftsell({nftsell}))
            
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function nftSell(price,img,name,nickname,user_profil){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/nftsell",
            data :{
                price,img,name,nickname,user_profil
            }
        }).then((e)=>{
            const nftsell= e.data.nftsell
            const mynft = e.data.mynft
            dispatch(Nft.nftsell({nftsell}))
            dispatch(Nft.mynft({mynft}))
            
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function nftBuy(id,price,name,nickname,writer){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/nftbuy",
            data :{
                id,price,name,nickname,writer
            }
        }).then((e)=>{
            const nftsell= e.data.nftsell
            const nft= e.data.nft
            const mynft = e.data.mynft
            const data = true
            const userData = e.data.user
            dispatch(Nft.nftsell({nftsell}))
            dispatch(Nft.nft({nft}))
            dispatch(Nft.mynft({mynft}))
            dispatch(Login.login({userData,data}))
            swal("성공")
            
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function nftStaking(name,nickname){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/nftstaking",
            data :{
                name,nickname
            }
        }).then((e)=>{
            const mynft = e.data.mynft
            dispatch(Nft.mynft({mynft}))
            swal("성공")
            
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function nftNonstaking(name,nickname){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/nftnonstaking",
            data :{
                name,nickname
            }
        }).then((e)=>{
            const mynft = e.data.mynft
            const data = true
            const userData = e.data.user
            dispatch(Login.login({data,userData}))
            dispatch(Nft.mynft({mynft}))
            swal("성공")
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function stakingCheck(nickname){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/stakingcheck",
            data :{
               nickname
            }
        }).then((e)=>{
            const mynft = e.data.mynft
            dispatch(Nft.mynft({mynft}))
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function stakingPoint(nickname,stakingpoint,userpoint){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://43.201.104.136/stakingPoint",
            data :{
               nickname,stakingpoint,userpoint
            }
        }).then((e)=>{
            const mynft = e.data.mynft
            const data = true
            const userData = e.data.user
            dispatch(Login.login({data,userData}))
            dispatch(Nft.mynft({mynft}))
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
            })
            console.log(err)
        })
    }
}
function imgUpload(formData,config){
    return async(dispatch,getState)=>{
        await  axios({
            method: 'post',
            url: 'http://43.201.104.136/imgupload',
            data: formData,config
          }).then((e) => {
            const userData = e.data.user
            const data = true
            dispatch(Login.login({data,userData}))
          }).catch((err)=>{
            console.log(err);
          })
    }
}
function usersData(){
    return async(dispatch,getState)=>{
        await  axios({
            method: 'post',
            url: 'http://43.201.104.136/usersdata'
          }).then((e) => {
            const users = e.data.users
            dispatch(Users.users({users}))
          }).catch((err)=>{
            console.log(err);
          })
    }
}
function usersChange(nickname,type){
    return async(dispatch,getState)=>{
        await  axios({
            method: 'post',
            url: 'http://43.201.104.136/userschange',
            data : {nickname,type}
          }).then((e) => {
            const users = e.data.users
            dispatch(Users.users({users}))
          }).catch((err)=>{
            console.log(err);
          })
    }
}



export const nftAction = {nftData,nftSell,nftBuy,nftStaking,nftNonstaking,stakingCheck,stakingPoint,imgUpload,usersData,usersChange}