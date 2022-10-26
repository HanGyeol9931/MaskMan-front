import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Background,BorderBody,BorderBodyContent,BorderTitle} from './styledComponent'
import a from '../images'
import StakingCom from './StakingCom'
import { nftAction } from '../middleware/nftAction'
import swal from 'sweetalert'

const Staking = () => {
    const dispatch = useDispatch()
    const mynft = useSelector(state => state.nft.mynft)
    const login = useSelector(state => state.login)
    const nonStaking = []
    const Staking = []
    let stakingPoint = 0
    useEffect(()=>{
        setTimeout(() => {
            dispatch(nftAction.stakingCheck(login.nickname))
        }, 500);
    })
    const point = ()=>{
        swal("안내",`모든 포인트를 받으시겠습니까?
            (총 포인트 ${stakingPoint} 포인트 입니다.)`,{
                closeOnClickOutside : false,
                buttons: ["아니요", "예"],
              }).then((e)=>{
                if(e){
                    dispatch(nftAction.stakingPoint(login.nickname,stakingPoint,login.point))
                }
              })
    }
    mynft.forEach((e)=>{
        if(e.nft_staking === false || e.nft_staking === 0){
          if(e.nft_sell === false || e.nft_sell === 0){
            nonStaking.push(<StakingCom staking = {e.nft_staking} img={a[e.id-1]} name = {e.nft_tilte}  />)
          }
        }
        else{
          if(e.nft_sell === false || e.nft_sell === 0){
            stakingPoint = stakingPoint + e.nft_stakingPoint
            Staking.push(<StakingCom img={a[e.id-1]} name = {e.nft_tilte} point={e.nft_stakingPoint} />)
          }
          
        }
      })
  return (
    <Background>
       <BorderBody>
          <BorderBodyContent>
            <BorderTitle >
              STAKING
            </BorderTitle>
            <div className='staking_title'>스테이킹 중인 NFT</div>
            <div className='staking_point'>
                스테이킹 획득 포인트 : {stakingPoint} 포인트 
                <button onClick={point}>모두 받기</button>
            </div>
            <div className="shop_content">
              {Staking.length === 0 ? <div className='shop_text'>NFT가 존재하지 않습니다.</div>  : Staking.map((el)=> el )}
            </div>
            
            
            <div className='shop_title'>
              보유한 NFT
            </div>
            <div className="shop_content">
              {nonStaking.length === 0 ? <div className='shop_text'>NFT가 존재하지 않습니다.</div>  : nonStaking.map((el)=> el)}
            </div>
          </BorderBodyContent>
        </BorderBody>
    </Background>
  )
}

export default Staking