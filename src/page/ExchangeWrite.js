import React, {useState } from 'react'
import { Background,BorderBody,BorderBodyContent,BorderTitle,ExchangeWriteContent,Button,ExchangeWriteNft} from './styledComponent'
import {WriteCom } from '../component'
import ShopCom from "./ShopCom"
import swal from "sweetalert"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import a from "../images/index"
import { nftAction } from '../middleware/nftAction'

export const ExchangeWrite = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const login = useSelector(state => state.login)
    const mynft = useSelector(state => state.nft.mynft)
    const nonStaking = []
    const [img,setImg] = useState(null)
    const [name,setName] = useState("이름")
    const clickme  = (e)=>{
      setImg(e.currentTarget.children[0].children[0].src)
      setName(e.currentTarget.children[0].children[1].innerHTML)
    }
    if(mynft !== null){
        mynft.forEach((e)=>{
            if(e.nft_staking === false || e.nft_staking === 0){
              if(e.nft_sell === 0){
                nonStaking.push(<div onClick={clickme}><ShopCom img={a[e.id-1]} name={e.nft_tilte}/></div>)
              }
            }
        })
    }
    const registration = ()=>{

      if(name==="이름"){
        swal("안내",`상품을 선택해주세요`)  
      }
      else{
        swal("판매",`${name}를 ${document.querySelector(".price_value").value} 포인트에 판매하시겠습니까?`,{
          closeOnClickOutside : false,
          buttons: ["아니요", "예"],
        }).then((e)=>{
          if(e){
            dispatch(nftAction.nftSell(document.querySelector(".price_value").value,img,name,login.nickname,login.img)).then(()=>{
              swal("성공","성공적으로 상품이 등록되었습니다.").then(()=>{
                nav("/exchange")
              }) 
            })
          }
        })
      }
  }
    return (
      <Background>
           <BorderBody>
            <BorderBodyContent>
              <BorderTitle >
                판매하기
                <Button onClick={()=>{nav("/exchange")}}>돌아가기</Button>
                <Button onClick={registration}>등록하기</Button>
              </BorderTitle>
              <ExchangeWriteContent>
              <WriteCom img={img} name={name} />
              </ExchangeWriteContent>
                <div className='shop_title'>
                        보유한 NFT
                </div>
              <ExchangeWriteNft>
              {nonStaking.length === 0 ? <div className='shop_text'>NFT가 존재하지 않습니다.</div>  : nonStaking.map((el)=> el)}
              </ExchangeWriteNft>
            </BorderBodyContent>
          </BorderBody>
  
      </Background>
    )
}

export default ExchangeWrite
  

