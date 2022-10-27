import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Background,FlexA,FlexB,FlexC,FlexContent,Button,MypageContent,MypageImg,Title} from './styledComponent'
import Dimg from "../images/Dimg.png"
import { useNavigate } from 'react-router-dom'
import { nftAction } from '../middleware/nftAction'
import swal from "swal"


const Mypage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.login)
  const [Image, setImage] = useState(user.img)
  const [Data, setData] = useState("")
  const config = {header: {"content-type" : "multipart/form-data"}}
const fileInput = useRef(null)
const onChange = (e) => {
	if(e.target.files[0]){
          const formData = new FormData();
          formData.append('files',e.target.files[0])
          formData.append('nickname', user.nickname);
          setData(formData)
        }else{ //업로드 취소할 시
            setImage(user.img)
            return
        }
	//화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
const Click = ()=>{
  dispatch(nftAction.imgUpload(user.nickname,Data,config)).then(()=>{
    swal("안내","프로필 변경 되었습니다")
  })
}

    const nav = useNavigate()
    
  return (
    <Background>
        <MypageContent>
            <Title>{user.nickname}님의 마이페이지</Title>
            <FlexA>
              <FlexB>
                <MypageImg src={Image} alt=''/>
                <Button onClick={()=>{fileInput.current.click()}}>프로필 변경</Button>
                <Button onClick={Click}>적용</Button>
              </FlexB>
              <FlexC>
                <FlexContent>
                  닉네임 : {user.nickname}
                </FlexContent>
                <FlexContent>
                  화이트리스트 : {user.whitelist === 0 ? "X" : "O"}
                </FlexContent>
                <FlexContent>
                  포인트 : {user.point}
                </FlexContent>
                <FlexB>
                  <Button onClick={()=>{nav("/shop")}}>나의 NFT 보기</Button>
                  <Button onClick={()=>{nav("/")}}>돌아가기</Button>
                  
                </FlexB>
              </FlexC>   
            </FlexA>
            <form encType="multipart/form-data" style={{ display: 'flex' }}>
                 <input type='file' style={{display:'none'}}accept='image/jpg,impge/png,image/jpeg' name='profile_img' onChange={onChange} ref={fileInput}/>
            </form>

    </MypageContent>
    </Background>
    
  )
}

export default Mypage