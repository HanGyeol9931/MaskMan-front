import React from 'react'

const ShopCom = (props) => {
    const {img,name} = props
    
  return (
    <div className="shop_img">
        <img src={img} alt="" />
        <div className="shop_img_text">{name}</div>
    </div>
  )
}
export default ShopCom