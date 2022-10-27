import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { nftAction } from '../middleware/nftAction'


const StakingCom = (props) => {
    const dispatch = useDispatch()
    const nickname = useSelector(state => state.login.nickname)
    const {img,name,point,staking} = props
    const click = ()=>{
        if(staking !== undefined){
            swal("안내",`${name}을 스테이킹 하시겠습니까?`,{
                closeOnClickOutside : false,
                buttons: ["아니요", "예"],
              }).then((e)=>{
                if(e){
                    dispatch(nftAction.nftStaking(name,nickname))
                }
              })
        }
        else{
            swal("안내",`${name}을 스테이킹을 취소 하시겠습니까?
            (취소할 경우 포인트는 자동으로 회수 됩니다.)`,{
                closeOnClickOutside : false,
                buttons: ["아니요", "예"],
              }).then((e)=>{
                if(e){
                    dispatch(nftAction.nftNonstaking(name,nickname))
                }
              })
        }
    }
  return (
    <div className="shop_img" onClick={click}>
        <img src={img} alt="" />
        <div className="shop_img_text">
            <div>{name}</div>
            {point !== undefined ? <div>{point}포인트</div> : ""}
        </div>
    </div>
  )
}
export default StakingCom