import React from 'react'
import "./com.css"
import Dimg from "../../images/Dimg.png"
import { useDispatch, useSelector } from 'react-redux'
import { nftAction } from '../../middleware/nftAction'
import swal from 'sweetalert'

const ExchangeCom = ({id,price,name,img,writer}) => {
  const dispatch = useDispatch()
  const login  = useSelector(state=>state.login)
  const click = ()=>{
            <div className='exchangeCom_content_sed'>{price}포인트</div>
    swal("구매",`${name}를 ${price} 포인트에 구매하시겠습니까?`,{
      closeOnClickOutside : false,
      buttons: ["아니요", "예"],
    })
    .then((e)=>{
      if(e){
        if(login.point-price < 0){
          swal("안내","잔액이 부족합니다.")
        }
        else{
          dispatch(nftAction.nftBuy(id,price,name,login.nickname,writer)).then(()=>{
            swal("안내","구매성공")
          })
        }
      }
    })
  }
  return (
    <div className='exchangeCom' >
        <img src={img} alt=""/>
        <div className='exchangeCom_title'>{name}</div>
        <div className='exchangeCom_content'>
            <div className='exchangeCom_content_first'>Price</div>
            <div className='exchangeCom_content_sed'>{price}포인트</div>
            {login.nickname ==="유저" ? 
              ""
            :
            login.nickname === writer ? <div className='writer_sell'>판매자</div>  : <button onClick={click} className='exchangeCom_content_btn'>구매하기</button> 
            }
        </div>
    </div>
  )
}

export default ExchangeCom