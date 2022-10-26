import axios from "axios"
import {Login} from "../redux/reducer/login"
import {Nft} from "../redux/reducer/nft"
import swal from "sweetalert"

function login(id,pw){
    return async(dispatch,getState)=>{
        const user = await axios({
            method : "post",
            url:"http://192.168.0.112:8000/login",
            data :{
                id,pw
            }
        })
        if(user.data === false)
        {   
            alert("없는 아이디 입니다. 회원가입 하세요")
        }else{
            const data = true
            const userData = user.data.user
            const mynft = user.data.mynft
            dispatch(Login.login({data,userData}))
            dispatch(Nft.mynft({mynft}))
        }
    }
}
function signUp(id,pw,nickname,meg){
    return async(dispatch,getState)=>{
        const user = await axios({
            withCredentials: true,
            method : "post",
            url:"http://192.168.0.112:8000/signup",
            data :{
                id,pw,nickname
            }
        })
        swal("주의",user.data)
        if(user.data ==="가입이 완료되었습니다."){
            meg()
        }
    }
} 


export const loginAction = {login,signUp}