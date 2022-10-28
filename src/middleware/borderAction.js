import axios from "axios"
import {Border} from "../redux/reducer/border"
import { Show } from "../redux/reducer/show"
import { Replie } from "../redux/reducer/replie"
import swal from "sweetalert"

function borderCreate(nickname,img,title,content,back){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://52.78.111.36/bordercreact",
            data :{
                nickname,img,title,content
            }
        }).then((e)=>{
            swal("안내","글 등록이 완료되었습니다.").then(()=>{
                back()
                const userData = e.data
                dispatch(Border.border({userData}))
            })
        }).catch((err)=>{
            swal("안내","실패").then(()=>{
                back()
            })
            console.log(err)
        })
    }
}
function borderCount(){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/border",
        }).then((e)=>{
            const userData = e.data
            dispatch(Border.border({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function borderShow(id){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/bordershow",
            data :{
                id
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Show.show({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function borderDelete(id){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/borderdelete",
            data :{
                id
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Show.show({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function borderUpdate(id,title,content){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/borderupdate",
            data :{
                id,title,content
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Show.show({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function replies(borderid,nickname,profil,content){
    return async(dispatch,getState)=>{
        await axios({
            method : "post",
            url:"http://52.78.111.36/replie",
            data :{
                borderid,nickname,profil,content
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Replie.replie({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function repliesShow(borderid){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/replieshow",
            data :{
                borderid
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Replie.replie({userData}))
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}
function repliesDelete(replies_id,border_id){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/repliesdelete",
            data :{
                replies_id,border_id
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Replie.replie({userData}))
        }).catch((err)=>{
            console.log(err)
            console.log(user.data)
            swal("안내","실패")
        })
    }
}
function repliesUpdate(replies_id,border_id,content){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://52.78.111.36/repliesupdate",
            data :{
                replies_id,border_id,content
              } 
        }).then((e)=>{
            const userData = e.data
            dispatch(Replie.replie({userData}))
            swal("안내","수정 완료")
        }).catch((err)=>{
            console.log(err)
            swal("안내","실패")
        })
    }
}

export const borderAction = {borderCreate,borderCount,borderShow,replies,repliesShow,repliesDelete,repliesUpdate,borderDelete,borderUpdate}