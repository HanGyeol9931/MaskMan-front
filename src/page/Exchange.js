import React from 'react'
import { Background,BorderBody,BorderBodyContent,BorderTitle,ExchangeContent,Button} from './styledComponent'
import { ExchangeCom } from '../component'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Exchange = () => {
  const nav = useNavigate()
  const login = useSelector(state => state.login)
  const nftsell = useSelector(state => state.nft.nftsell)

  return (
    <Background>
      <BorderBody>
        <BorderBodyContent>
          <BorderTitle >
            거래소
            {login.isLogin ?  <Button onClick={()=>{nav("/exchangewrite")}} >판매하기</Button> : null }
          </BorderTitle>
          <ExchangeContent>
              {nftsell && nftsell.map((el)=> <ExchangeCom id={el.shop_id} writer={el.shop_writer} price={el.shop_price} img ={el.shop_img} name={el.shop_title} />)}
          </ExchangeContent>
        </BorderBodyContent>
      </BorderBody>
    </Background>
  )
}

export default Exchange