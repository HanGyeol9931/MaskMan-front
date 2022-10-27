import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Background,BorderBody,BorderBodyContent,BorderTitle,BorderCount,BorderCountContent} from './styledComponent'
import { NftContent } from './nftStyled'
// import Dimg from "../images/Dimg.png"
import a from "../images/index"
import { useDispatch, useSelector } from 'react-redux'
import { Nft2 } from '../component'
import { nftAction } from '../middleware/nftAction'
import Loading from '../component/loading/Loading'
import swal from 'sweetalert'
import { NftModal } from '../component'

const Nft = () => {
  const nav = useNavigate()
  const [loading,setLoading] = useState(true)
  const [img,setImg] = useState("")
  const [content,setContent] = useState("")
  const dispatch = useDispatch()
  useEffect(()=>{
    setLoading(true)
    dispatch(nftAction.nftData()).then(()=>{setLoading(false)})
  },[])
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const num  = []
  const [numlimit, setNumlimit] = useState(5);
  const [numpage, setNumpage] = useState(1);
  const numoffset = (numpage - 1) * numlimit;
  const nftArray = []
  const choice = (e)=>{
    setPage(Number(e.target.innerHTML))
  }
  const numUp = ()=>{
    if(Math.floor((a.length/9))+1=== page){
      swal("안내","더이상 페이지가 없습니다.")
    }
    else{
      if(page%5 === 0){
        setNumpage(numpage+1)
        setPage(page+1)
      }
      else{
        setPage(page+1)
      }
    }
  }
  const test = (e)=>{
    let b = e.currentTarget.children[0].children[1].innerHTML.split("#")
    b = b[1]-1
    setImg(a[b])
    setContent(nft[b])
    openModal()
  }
  const numDown = ()=>{
    if(page === 1){
      swal("안내","더이상 페이지가 없습니다.")
    }
    else{
      if(page > 5 &&page%((numpage*5)-4) === 0){
        setNumpage(numpage-1)
        setPage(page-1)
      }
      else{
        setPage(page-1)
      }
    }
  }
  const nft = useSelector(state => state.nft.nft)  
  for (let index = 0; index < a.length; index++) {
    nftArray.push(<div onClick={test}><Nft2 img={a[index]} title={nft[index].nft_tilte} owner ={nft[index].nft_owner}/></div>)
  }
  for (let index = 1; index <= Math.floor(a.length/9)+1; index++) {
    num.push(<BorderCountContent onClick={choice}>{index}</BorderCountContent>)
  }
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
    {loading ?
    <Loading/>
    :
    <Background>
      {modalOpen ? <NftModal open={ modalOpen } close={ closeModal } img={img} content={content}></NftModal> : null}
       <BorderBody>
          <BorderBodyContent>
            <BorderTitle >
              NFT GALLERY
              <button onClick={()=>{nav("/staking")}}>Staking</button>
            </BorderTitle>
            <NftContent>
              {nftArray.slice(offset, offset + limit).map(e=>e)}
            </NftContent>
            <BorderCount>
              <BorderCountContent onClick={numDown}>◀️</BorderCountContent>
              {nft && num.slice(numoffset, numoffset + numlimit).map((el)=> el )}
              <BorderCountContent onClick={numUp}>▶️</BorderCountContent>
            </BorderCount>
          </BorderBodyContent>
        </BorderBody>
    </Background>
    }
    </>
    
  )
}

export default Nft