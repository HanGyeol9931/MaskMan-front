import React, { useRef, useState } from 'react'
import Dimg from "../../images/Dimg.png"
import swal from 'sweetalert'

const WriteCom = (props) => {
    const {img,name} = props
    const  price = useRef()
    const [priceValue,setPriceValue] = useState(1)
    const priceChange = ()=>{
        if(price.current.value.split("").length >= 11){
            swal("글자수 초과","다시입력하세요")
            price.current.value = 1
            setPriceValue(price.current.value)
        }
        else if(price.current.value < 0){
            swal("음수 불가","다시입력하세요")
            price.current.value = 1
            setPriceValue(price.current.value)
        }
        else{
            setPriceValue(price.current.value)
        }
    }
    
  return (
      <> 
        <div className='write_title'>
            <div>판매할 NFT</div>
            <div className='default_img'>
                 <div>이미지</div>
                 <img src={img} alt="" />
            </div>
            <div>{name}</div>
            <div className='write_price'>
                <div>Price</div>
                {priceValue}포인트
            </div>
        </div>
        <div className='write_content'>
                <h1>판매</h1>
                <div className='write_value'>가격 : <input className='price_value' type="number" defaultValue="1" onChange={priceChange} ref={price}/>포인트</div>
        </div>
      </>
  )
}

export default WriteCom