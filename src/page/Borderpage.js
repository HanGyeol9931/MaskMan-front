import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Background,BorderBody,BorderBodyContent,BorderTitle,BorderWriter,BorderRepliesContent,BorderRepliesTitle,BorderRepliesBody,BorderWriterBody,Button,BorderWriterBnt,BorderRepliesWriter} from './styledComponent'
import Dimg from "../images/Dimg.png"
import { Replie } from '../component'
import { useDispatch, useSelector } from 'react-redux'
import { borderAction } from '../middleware/borderAction'
import Loading from '../component/loading/Loading'
import swal from 'sweetalert'


const Borderpage = () => {
    const params = useParams()
    const title = useRef()
    const content = useRef()
    const id = params.id
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(true);
    useEffect(()=>{
        setLoading(true)
        dispatch(borderAction.borderShow(id)).then(()=>{setLoading(false)})
        dispatch(borderAction.repliesShow(id))
    },[])
    const data = useSelector( state =>  state.show.show)
    const login =  useSelector( state =>  state.login)
    const replies = useSelector( state =>  state.replie.replies)
    const nav = useNavigate()
    const content_value = useRef()
    const [replieSwitch,setReplieSwitch] = useState(true)
    const  replieOnff =()=>{
        setReplieSwitch(!replieSwitch)
    }
    const registration = ()=>{
        dispatch(borderAction.replies(id,login.nickname,login.img,content_value.current.value))
        content_value.current.value = ""
    }
    const Delete = ()=>{
        swal("안내","게시글이 삭제 하시겠습니까?.", {
            closeOnClickOutside : false,
            buttons: ["아니요", "예"],
          }).then((e)=>{
            if(e){
                dispatch(borderAction.borderDelete(id)).then(()=>{ swal("안내", "삭제 되었습니다."); nav("/border")})
            }
          });

    }
    const Update = ()=>{
        setUpdate(!update)
    }
    const UpdatePost = ()=>{
        swal("안내", "정말로 수정 하시겠습니까?", {
            closeOnClickOutside : false,
            buttons: ["아니요", "예"],
          }).then((e)=>{
            if(e){
                dispatch(borderAction.borderUpdate(id,title.current.value,content.current.value))
                .then(()=>{
                    swal("안내", "수정 되었습니다.").then(()=>{setUpdate(!update)})
                })
            }
          });
    }
  return (
      
    <Background>
        {loading ?
    <Loading/>
    :
    <BorderBody>
            <BorderBodyContent>
                <BorderTitle>
                    <BorderWriter>
                        {update ? data.border_title : <input ref={title} type="text" placeholder={data.border_title}/>}
                        <div> 
                            <div>
                                <img src={data && data.border_writer_profil} alt="" /> {data && data.border_writer}
                            </div>
                            <div>조회수 : {data && data.border_view_count}</div>
                        </div>
                    </BorderWriter>
                </BorderTitle>
                <BorderWriterBody>
                    {update ? data.border_content : <textarea ref={content} name="" id="" cols="30" rows="10" placeholder={data.border_content}/>}
                </BorderWriterBody>
                <BorderWriterBnt>
                    {replieSwitch ?
                    <Button onClick={replieOnff}>댓글 {replies && Object.keys(replies).length}⬇️</Button>
                    :
                    <Button onClick={replieOnff}>댓글  {replies && Object.keys(replies).length}⬆️</Button>
                    }
                    {login.nickname === data.border_writer || login.admin === 1 ?
                        update ? 
                            <div>
                                <Button onClick={Update}>수정</Button>
                                <Button onClick={Delete}>삭제</Button>
                                <Button onClick={()=>{nav("/border")}}>돌아가기</Button>
                            </div>
                            :
                            <div>
                                <Button onClick={UpdatePost}>수정</Button>
                                <Button onClick={Update}>취소</Button>
                            </div>
                    :
                        <div><Button onClick={()=>{nav("/border")}}>돌아가기</Button></div>
                    }
                </BorderWriterBnt>
                {replieSwitch ?
                ""
                :
                <>
                {replies.map((el) => <Replie border_id={id} id ={el.replies_id} writer={el.replies_writer} user_profil ={el.replies_profil} content={el.replies_content}/>)}
                {login.isLogin ?
                <BorderRepliesBody>
                    <BorderRepliesWriter>
                        <BorderRepliesTitle>
                            <BorderRepliesTitle>
                                <img src={login.img} alt="" />
                                <span>
                                    {login.nickname}
                                </span>
                            </BorderRepliesTitle>
                        </BorderRepliesTitle>
                        <BorderRepliesContent>
                            <textarea ref={content_value} name="" id="" cols="30" rows="10" placeholder="댓글 내용 입력해주세요"></textarea>
                        </BorderRepliesContent>
                        <Button onClick={registration}>작성</Button>
                    </BorderRepliesWriter>
                </BorderRepliesBody>
                :
                ""
                }
                </>
                }
            </BorderBodyContent>
        </BorderBody>
    }
        
    </Background>
  )
}

export default Borderpage