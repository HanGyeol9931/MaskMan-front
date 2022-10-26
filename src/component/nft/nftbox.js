
import React from 'react'
import {NftBox} from "../../page/nftStyled"

const nftbox = (props) => {
    // console.log(props)
  return (
    <NftBox><img src={props.img} alt="" /><div>{props.title}</div><div>소유자 : {props.owner === "null" ? "없음" : props.owner}</div></NftBox>
  )
}

export default nftbox