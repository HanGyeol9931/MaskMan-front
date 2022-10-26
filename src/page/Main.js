import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Background,Content,MainContent,Button} from './styledComponent'
import { NftModal } from '../component'


const Main = () => {
    const user = useSelector(state => state.login.nickname)
  return (
    <Background>
        <MainContent>
            <Content>
                MASK MAN ,
            </Content>
            <Content>
                세계를 구할 {user} 님 ,
            </Content>
            <Content>
                이곳에 온 것을 환영합니다.
            </Content>
            <Content>
            </Content>
            
        </MainContent>

        
    </Background>
  )
}

export default Main