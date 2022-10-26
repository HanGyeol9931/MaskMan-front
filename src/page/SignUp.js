import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '../middleware/loginAction'
import { Background,Box,Input,Button,Label,Title} from './styledComponent'
import swal from "sweetalert"

const SignUp = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const id = useRef()
    const pw = useRef()
    const nickname = useRef()
    const signup = ()=>{
        dispatch(loginAction.signUp(id.current.value,pw.current.value,nickname.current.value,meg))
    }
    const meg = ()=>{
        swal("환영합니다.","가입완료되었습니다.").then(()=>{
            nav("/login")
        })
    }
  return (
    <Background>
        <Box>
            <Title>회원가입</Title>
            <Label>아이디</Label>
            <Input ref={id}></Input>
            <Label>비밀번호</Label>
            <Input ref={pw}></Input>
            <Label>닉네임</Label>
            <Input ref={nickname}></Input>
            <div>
                <Button onClick={signup}>회원가입</Button>
                <Button onClick={()=>{nav("/")}}>메인으로</Button>
            </div>
        </Box> 
    </Background>
    
  )
}

export default SignUp