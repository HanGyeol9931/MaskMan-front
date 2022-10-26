import React, {useEffect, useRef, useState } from 'react'
import { Background,BorderBody,BorderBodyContent,BorderTitle,Button,BorderBox,BorderCount,BorderCountContent} from './styledComponent'
import { Bordercontent } from '../component'
import swal from "sweetalert"
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../component'
import { borderAction } from '../middleware/borderAction'
import { useNavigate } from 'react-router-dom'
import Loading from '../component/loading/Loading'

const Border = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    dispatch(borderAction.borderCount()).then(()=>{setLoading(false)})
  },[])
  const test = (e)=>{
    const url = "/borderpage/" 
    nav(url+e.currentTarget.className)
  }
  const login = useSelector(state=>state.login)
  const border =  useSelector(state=>state.border)
  const a = []
  for (let index = 0; index < border.border.length; index++) {
    a.push(<div onClick={test} className={border && border.border[index].border_id}><Bordercontent num={index+1} content={border && border.border[index].border_title} nickname={border && border.border[index].border_writer} view={border && border.border[index].border_view_count} date={border && border.border[index].createdAt}/></div>)
  }

  const header = login.nickname + "님 글 쓰기"
  
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const num  = []
  const [numlimit, setNumlimit] = useState(5);
  const [numpage, setNumpage] = useState(1);
  const numoffset = (numpage - 1) * numlimit;
  const choice = (e)=>{
      setPage(Number(e.target.innerHTML))
  }
  const numUp = ()=>{
    if(Math.floor((a.length/10)/5)+1=== numpage){
      swal("안내","더이상 페이지가 없습니다.")
    }
    else{
      setPage(page+5)
      setNumpage(numpage+1)
    }
  }
  const numDown = ()=>{
    if(numpage === 1){
      swal("안내","더이상 페이지가 없습니다.")
    }
    else{
      setPage(page-5)
      setNumpage(numpage-1)
    }
  }
  const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
  const modal = ()=>{
    openModal()
  }
  for (let index = 1; index <= Math.floor(border.border.length/10)+1; index++) {
    num.push(<BorderCountContent onClick={choice}>{index}</BorderCountContent>)
  }
  return (
    <>
      {loading ? 
      <Loading/>
      :
      <Background>
        {modalOpen ? <Modal open={ modalOpen } close={ closeModal } header={header}></Modal> : null}
        <BorderBody>
          <BorderBodyContent>
            <BorderTitle >
              게시판
              {border && login.isLogin ? <Button onClick={modal}>글쓰기</Button> : ""}
            </BorderTitle>
            <Bordercontent num="목차" content="제목" nickname="작성자" view="조회수" date="시간" />
            <BorderBox>
              {border && a.slice(offset, offset + limit).map((el) => el)}
            </BorderBox>
            <BorderCount>
              <BorderCountContent onClick={numDown}>◀️</BorderCountContent>
                {border && num.slice(numoffset, numoffset + numlimit).map((el)=> el )}
              <BorderCountContent onClick={numUp}>▶️</BorderCountContent>
            </BorderCount>
          </BorderBodyContent>
        </BorderBody>
      </Background>
      }
    </>
  )
}
export default Border