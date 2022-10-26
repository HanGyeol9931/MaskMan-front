import React, { useEffect } from 'react'
import "./shop.css"
import a from "../images/index"
import { Background } from './styledComponent'
import { useSelector } from 'react-redux'
import ShopCom from "./ShopCom"
import { useNavigate } from 'react-router-dom'


const Shop = () => {
  const nav = useNavigate()
  const mynft = useSelector(state => state.nft.mynft)
  const nonStaking = []
  const Staking = []
  if(mynft !== null){
    mynft.forEach((e)=>{
      if(e.nft_staking === 0){
        nonStaking.push(<ShopCom img={a[e.id-1]} name = {e.nft_tilte} />)
      }
      else{
        Staking.push(<ShopCom img={a[e.id-1]} name = {e.nft_tilte} />)
      }
    })
  }
  return (
    <Background>
        <div className='shop_body'>
          <div className='shop_main'>

            <div className='shop_title'>
              보유한 NFT
            </div>
            <div className="shop_content">
              
              {nonStaking.length === 0 ? <div className='shop_text'>NFT가 존재하지 않습니다.</div>  : nonStaking.map((el)=> el)}
              {/* <ShopCom img={a[1]} name = "집" /> */}
            </div>
            <div className='shop_title'>
              스테이킹한 NFT
            </div>
            <div className="shop_content">
            {Staking.length === 0 ? <div className='shop_text'>NFT가 존재하지 않습니다.</div> : Staking.map((el)=> el)}
            </div>
            <div className="shop_button_content">
              <button className='shop_button' onClick={()=>{nav("/mypage")}}>돌아가기</button>
            </div>
          </div>
        </div>
    </Background>
  )
}
export default Shop