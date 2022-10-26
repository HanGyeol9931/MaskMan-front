import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { nftAction } from '../middleware/nftAction';


const AdminCom = ({nickname,whitelist,stop,admin}) => {
    const dispatch = useDispatch()
    const choice = useRef()
    const click = (e)=>{
        let value = choice.current.value
        swal("안내",`${nickname}님을 ${value} 하시겠습니까?`,{
            closeOnClickOutside : false,
            buttons: ["아니요", "예"],
          }).then((e)=>{
            if(e){
                dispatch(nftAction.usersChange(nickname,value)).then(()=>{
                    swal("안내",`${nickname}님을 ${value} 했습니다.`)
                    choice.current.value = "일반유저"
                })
            }
          })
    }
  return (
    <>
    <tr className='admin_table'>
        <td>{nickname}</td>
        <td>{stop === 1 ? "O":"X"}</td>
        <td>{whitelist === 1 ? "O":"X"}</td>
        <td>{admin === 1 ? "O":"X"}</td>
        <td>
            <select ref={choice} defaultValue="일반유저">
                <option value="일반유저">일반유저</option>
                <option value="화이트리스트">화이트리스트</option>
                <option value="정지">정지</option>
                <option value="정지 해제">정지 해제</option>
                <option value="관리자">관리자</option>
                <option value="관리자 해제">관리자 해제</option>
            </select>

        </td>
        <td>
            <button onClick={click}>적용</button>
        </td>
    </tr>
    </>
  )
}

export default AdminCom