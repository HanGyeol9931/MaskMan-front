import React from 'react'
import {Background, LoadingText} from './Styles';
import Spinner from './assets/spinner.gif';

const Loading = () => {
  return (
    <Background>
        <LoadingText>잠시만 기달려주세요</LoadingText>
        <img src={Spinner} alt="" />
    </Background>

  )
}

export default Loading