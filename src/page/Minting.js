import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Background,BorderBody,BorderBodyContent,BorderTitle,Button} from './styledComponent'
import{MintingContent,MintingList,MintingTitle,MintingImg,MintingPoint,MintingNormal,MintingBodyContent} from "./mintingStyeld"
import a from '../images'
import RadomImg from "../component/img/RadomImg"
import swal from 'sweetalert'
import { MintingModal} from '../component'
import { Show } from '../redux/reducer/show'

const Minting = () => {
  const login = useSelector(state => state.login)
  const nft = useSelector(state => state.nft.nft)
  const minting =useSelector(state => state.nft.nftcount)
  const [random,setRandom] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(()=>{
    let num = Math.floor(Math.random()*100)
    while(nft[num].nft_owner !== "null"){
      num = Math.floor(Math.random()*100)
    }
    setRandom(num)
  },[])
  const [list,setList] = useState(true)

  const Normal = ()=>{
    if(login.point < 5000){
      swal("주의","포인트가 부족합니다")
    }
    else{
      swal("민팅","5000포인트가 차감이 됩니다.계속 하시겠습니까?.", {
        closeOnClickOutside : false,
        buttons: ["아니요", "예"],
      }).then((e)=>{
        if(e){
          setList(true)
          setModalOpen(true);
        }
      });
    }
  }
  const whilelist = ()=>{
    if(login.point < 1000){
      swal("주의","포인트가 부족합니다")
    }
    else{
      swal("민팅","1000포인트가 차감이 됩니다.계속 하시겠습니까?.", {
        closeOnClickOutside : false,
        buttons: ["아니요", "예"],
      }).then((e)=>{
        if(e){
          setList(false)
          setModalOpen(true);
        }
      });
    }
  }
  const close = ()=>{
    setModalOpen(false)
  }
  
  
  return (
    <Background>
      {modalOpen ? <MintingModal open={ modalOpen } close={close}  list={list}  img={a[random]} content={nft[random]}></MintingModal> : null}
      <BorderBody>
          <MintingBodyContent>
            <BorderTitle >
              MASK MAN ( MINTING )
            </BorderTitle>
            <MintingContent>
              <MintingList>
                <MintingTitle>일반</MintingTitle>
                <MintingImg>
                  <RadomImg />
                </MintingImg>
                <MintingPoint>남은 개수 {minting.length}</MintingPoint>
                <MintingPoint>가격 : 5000 포인트</MintingPoint>
                <Button onClick={Normal}>뽑기</Button>
              </MintingList>
              {login.whitelist === 0 ?
                <MintingList>
                  <MintingNormal>
                    화이트리스트가 아닙니다.
                  </MintingNormal>
                </MintingList>
               :
              <MintingList>
                <MintingTitle>화이트리스트</MintingTitle>
                <MintingImg>
                  <RadomImg/>
                </MintingImg>
                <MintingPoint>남은 개수 {minting.length}</MintingPoint>
                <MintingPoint>가격 : 1000 포인트</MintingPoint>
                <Button onClick={whilelist}>뽑기</Button>
              </MintingList>
              }
            </MintingContent>
          </MintingBodyContent>
        </BorderBody>
    </Background>
  )
}

export default React.memo(Minting) 