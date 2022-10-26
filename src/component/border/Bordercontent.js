import React from 'react'
import {BorderUserBody,
    BorderUserNum,BorderUserContent,BorderUserNickname,BorderUserDate
} from '../../page/styledComponent'

const Bordercontent = (props) => {
    const a = props.date.split(" ")
    if(a[0].includes("2022")){
        a.splice(1,1)
        // console.log(a)
    }


  return (
   <>
   <BorderUserBody>
        <BorderUserNum>
            {props.num}
        </BorderUserNum>
        <BorderUserContent>
            {props.content}
        </BorderUserContent>
        <BorderUserNickname>
            {props.nickname}
        </BorderUserNickname>
        <BorderUserDate>
            {props.view}
        </BorderUserDate>
        <BorderUserDate>
            {a}
        </BorderUserDate>
    </BorderUserBody>
   </>
  )}

export default Bordercontent