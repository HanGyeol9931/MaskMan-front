import React from 'react'
import { useSelector } from 'react-redux'
import { Background,Button } from './styledComponent'
import AdminCom from './AdminCom'


const Admin = () => {
    const users = useSelector(state=>state.users.users)
  return (
    <Background>
        <div className='shop_body'>
          <div className='admin_main'>
              <div>
                <div className='admin_title'>
                    유저 정보
                </div>
                <div className="admin_content">
                    <tr className='admin_table'>
                        <td>유저 이름</td>
                        <td>정지</td>
                        <td>화이트리스트</td>
                        <td>관리자</td>
                        <td>권한</td>
                        <td>버튼</td>
                    </tr>
                     {users.map((el)=><AdminCom nickname={el.user_nickname} whitelist={el.user_whitelist} stop={el.user_stop} admin={el.user_admin}/>)}                   
                </div>
              </div>
            {/* <div className="shop_button_content">
              
            </div> */}
          </div>
        </div>
    </Background>
  )
}

export default Admin