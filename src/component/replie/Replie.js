import React, { useRef, useState } from 'react'
import { BorderRepliesBody,BorderRepliesTitle,BorderRepliesContent,Button} from '../../page/styledComponent'
import Dimg from "../../images/Dimg.png"
import { useDispatch, useSelector } from 'react-redux'
import { borderAction } from '../../middleware/borderAction'

const Replie = ({border_id,id,writer,user_profil,content}) => {
    const user = useSelector(state => state.login)
    const update_value = useRef()
    const dispatch = useDispatch()
    const [change , setChange] = useState(true)
    const Delete = ()=>{
        dispatch(borderAction.repliesDelete(id,border_id))
    }
    const Update = ()=>{
        dispatch(borderAction.repliesUpdate(id,border_id,update_value.current.value))
        setChange(!change)
    }
    const changeBtn = ()=>{
        setChange(!change)
    }
  return (
    <BorderRepliesBody>
        <BorderRepliesTitle>
            <BorderRepliesTitle>
                <img src={user_profil} alt="" />
                {writer}
            </BorderRepliesTitle>
            {user.nickname === writer || user.admin === 1 ?
            <div>
                <Button onClick={changeBtn}>수정</Button>
                <Button onClick={Delete}>삭제</Button>
            </div>
            :
            ""
            }
            
        </BorderRepliesTitle>
        <BorderRepliesContent>
            {change ? 
            content
            :
            <>
                <textarea ref={update_value} name="" id="" cols="30" rows="10" placeholder={content}></textarea>
                <Button onClick={Update}>적용</Button>
            </>
            }
            {/* {content} */}
        </BorderRepliesContent>
    </BorderRepliesBody>
  )
}

export default Replie