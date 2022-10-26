import React, { useEffect, useState } from 'react'
import a from '../../images'

const RadomImg = () => {
    const [num,setNum] = useState(Math.floor(Math.random()*100))
    useEffect(()=>{
        setInterval(() => {
            setNum(Math.floor(Math.random()*100))
        }, 500);
    },[])
  return (
    <>
    <img src={a[num]} alt="" />
    </>
  )
}

export default React.memo(RadomImg)