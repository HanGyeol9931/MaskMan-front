import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import main from '../../images/main.png'
import { Login } from '../../redux/reducer/login';

const Header = () => {
  const nav = useNavigate()
  const login = useSelector(state=>state.login)
 
  const dispatch = useDispatch()
  const change = ()=>{
  const data = false
    dispatch(Login.logout({data}))
    nav("/")
  }
  return (
    <div className='header' >
      <div className='headerTitle' onClick={()=>{nav("/")}}>
        <img src={main} alt="" />
        <div>MASK MAN</div> 
      </div>
      <div className='headerMenu'>
        {login&& login.admin ===1 ? <div className='headerMenuContents' onClick={()=>{nav("/admin")}}>관리자</div> : ""}
        <div className='headerMenuContents' onClick={()=>{nav("/border")}}>게시판</div>
        <div className='headerMenuContents' onClick={()=>{nav("/nft")}}>NFT</div>
        <div className='headerMenuContents' onClick={()=>{nav("/minting")}}>민팅</div>
        <div className='headerMenuContents' onClick={()=>{nav("/exchange")}}>거래소</div>
        <div className='headerMenuContents' onClick={()=>{nav("/mypage")}}>마이 페이지</div>
      </div>

      <div className='login'>
        {login.isLogin ? 
        <>
        <div>
          <div className="">닉네임 : {login.nickname}</div> 
          <div className="userPoint">포인트 : {login.point}</div>
        </div>
        <div className='bnt' onClick={change}>로그아웃</div>
        </>
        : 
        <>
        <div className='bnt' onClick={()=>nav("/login")}>로그인</div>
        <div className='bnt' onClick={()=>nav("/signup")}>회원가입</div>
        </>
        }
      </div>
    </div>
  )
}

export default Header