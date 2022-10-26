import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Background,Box,Input,Button,Label,Title} from './styledComponent'
import { loginAction } from '../middleware/loginAction'
import { Login } from '../redux/reducer/login'
import swal from "sweetalert"
const Logins = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.login)
    const id = useRef()
    const pw = useRef()
    if(user.isLogin){
      if(user.userStop === 1){
        swal("안내","정지된 아이디 입니다.").then(()=>{
          const data = false
          dispatch(Login.logout({data}))
          nav("/")
        })
      }
      else{
        swal({
            title :"환영합니다",
            text : "로그인 되었습니다.",
            closeOnClickOutside : false
        }).then(()=>{
            nav("/")
        })
      }
    }
    const login = ()=>{
        dispatch(loginAction.login(id.current.value,pw.current.value))
    }
  return (
    <Background>
      <Box>
        <Title>로그인</Title>
        <Label>아이디</Label>
        <Input ref={id} ></Input>
        <Label>비밀번호</Label>
        <Input type="password" ref={pw} ></Input>
        <div>
            <Button onClick={login}>로그인</Button>
            <Button onClick={()=>{nav("/signup")}}>회원가입</Button>
        </div>
      </Box> 
    </Background>
  )
}

export default Logins