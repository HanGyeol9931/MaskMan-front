import styled from "styled-components";
import background from "../images/background.jpeg"
// 마켓 플레이스 가면 vscode-styled-components
const Background = styled.div`
    background-image: url(${background});
    background-color: rgb(246,167,85);
    background-size: cover;
    min-height: calc(100% - 90px);
`
const MainContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`
const Content = styled.div`
    text-align: center;
    min-width: 1000px;
    
    font-size: 80px;
    margin: 50px;
    :last-child{
        height: 100px;
        margin: 0;
    }
    button{
        position: relative;
        bottom: 20px;
        height: 80px;
        font-size: 30px;
        border: 8px solid;
        padding: 0 30px;
        transition: all 1s;
    }
    button:hover{
        color : black;
        transform: scale(1.1);
    }
`
const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* border: 10px solid rgba(0,0,0,0.7); */
    width: 50%;
    border-radius: 10px;
    height: 50%;
    min-width: 370px;
    min-height: 400px;
    /* background-color: rgb(250,134,85); */
    /* background-color: rgba(250,134,85,0.8); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Input = styled.input`
    border: 0;
    border: 5px solid;
    width: 290px;
    height: 30px;
    padding: 10px;
    font-size: 20px;
    border-radius: 10px;
    margin: 10px;
    :focus{
        outline: none;
    }
`
const Label = styled.label`
    font-size  : 25px;
`
const Button = styled.button`
    background: none;
    border: 0;
    border-radius: 10px;
    font-size: 30px;
    margin: 10px 20px;
    :hover{
        color : white
    }
`
const Title = styled.div`
    
    font-size: 60px;
    margin-bottom: 40px;
`
const MypageImg = styled.img`
    box-sizing: border-box;
    border: 10px solid black;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background-color: white;
    margin-bottom: 30px;
`
const MypageContent = styled.div`
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    border: 10px solid;
    margin-top: 50px;
    padding: 50px 120px;
    background-color: rgba(255,255,255);
    box-sizing: border-box;
`
const FlexA = styled.div`
    display: flex;
    button{
        margin: 25px 20px;
        width: 260px;
        height: 80px;
        border: 5px solid ;
        transition: all 0.5s;
        /* color : white */
    }
    button:hover{
        transform : scale(1.1) ;
        color : black
    }
`
const FlexB = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
    margin-left: 60px;
    button{
        margin-left: 0;
    }
`
const FlexContent = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    font-size: 30px;
`
const BorderBody = styled.div`
    height: calc(100% - 70px) ;
    display: flex;
    justify-content: center;
`
const BorderBodyContent = styled.div`
    box-sizing: border-box;
    border: 10px solid black;
    margin-top: 70px;
    border-radius: 50px;
    padding:0 50px 50px 50px;
    width: 1220px;
    overflow: auto;
    min-height: 877px;
    background-color: rgb(255, 255, 255);
    ::-webkit-scrollbar{
        display: none;
    }
`
const BorderTitle = styled.div`
    font-size: 50px;
    padding: 20px 0 20px 30px ;
    border-bottom: 5px solid black;
    button{
        font-size: 30px;
        float: right;
        margin: 8px 40px 0 0;
        padding: 0 10px;
        border-radius: 10px;
        background-color: transparent;
        
        border: 5px solid black;
        transition: all .5s;
        :hover{
            color : black;
            transform: translateY(-10px);
            
        }
    }
`
const BorderUserBody = styled.div`
    display: flex;
    padding: 14px 30px;
    font-size: 20px;
    border-bottom: 2.5px solid black;
    text-align: center;
`
const BorderUserNum= styled.div`
    width: 150px;
`
const BorderUserContent = styled.div`
    width: 600px;
`
const BorderUserNickname = styled.div`
    width: 200px;
`
const BorderUserDate = styled.div`
    width: 200px;
`
const BorderBox = styled.div`
    height: 560px;
`
const BorderCount = styled.div`
    margin-top: 40px;
    font-size: 30px;
    text-align: center;
`
const BorderCountContent = styled.div`
    width: 40px;
    display: inline-block;
    padding: 0 20px;
    :first-child ,:last-child{
        border:  0;
        transition: all 0.5s;
    }
    :first-child:hover{
        transform: translateX(-5px);
    }
    :last-child:hover{
        transform: translateX(5px);
    }
`
const BorderWriter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 50px;
    img{
        /* border: 5px solid; */
        margin-right: 20px;
        width: 50px;
        border-radius: 50%;
    }
    div{
        font-size: 30px;
        display: block;
        text-align: center;
        div{
            display: flex;
            align-items: center;
            :last-child{
                margin: 15px 0 0 15px;
                font-size: 20px;
            }
        }
        
    }
    input{
        box-sizing: border-box;
        border: 0;
        width: 100%;
        font-size: 50px;
    }
` 
const BorderWriterBody = styled.div`
    padding: 20px 30px;
    height: 500px;
    font-size: 35px;
    overflow: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    textarea{
        box-sizing: border-box;
        border: 0;
        width: 100%;
        font-size: 35px;
    }
` 
const BorderWriterBnt = styled.div`
    margin-top : 50px;
    display: flex;
    justify-content: space-between;
    height: 60px;
    button{
        height: 40px;
        font-size: 15px;
        border: 5px solid black;
        padding: 5px 20px;
        transition: all 0.5s;
        :hover{
            color : black;
            transform: scale(1.1);
        }
    }
    
` 
const BorderRepliesBody = styled.div`
    padding: 10px 30px;
    background-color: beige;
`
const BorderRepliesWriter = styled.div`
    background-color: white;
    padding: 10px 20px;
    border: 5px solid;
    border-radius: 8px;
    textarea{
        letter-spacing: 2px;
        resize: none;
        box-sizing: border-box;
        border: none;
        padding: 10px;
        min-width: 100px;
        width: 965px;
        min-height: 150px;
        height: 150px;
        font-size: 25px;
    }
    button{
        box-sizing: border-box;
        font-size: 25px;
        border: 5px solid black;
        transition: all 0.5s;
        margin: 10px 0;
        /* float: right; */
        text-align: end;
        :hover{
            color: black;
            transform: scale(1.1);
        }
    }
    /* border-radius: 8px; */
`
const BorderRepliesTitle = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 25px;
        img{
            /* border: 5px solid; */
            margin-right: 20px;
            width: 50px;
            border-radius: 50%;
        }
        button{
        margin: 0 10px;
        height: 40px;
        font-size: 20px;
        padding: 5px 20px;
        transition: all 0.5s;
        :hover{
            color : black;
            transform: scale(1.1);
        }
        div{
            display: flex;
            align-items: center;
            /* padding-left: 20px; */
        }
        
    }
`
const BorderRepliesContent = styled.div`
    margin-top: 30px;
    font-size: 20px;
    padding-bottom: 10px;
    textarea{
        letter-spacing: 2px;
        padding: 20px;
        width: calc(100% - 40px);
        resize: none;
        border: none;
        font-size: 25px;
        border-radius: 8px;
        height: 130px;
    }
    button{
        margin: 0 10px;
        height: 40px;
        font-size: 20px;
        padding: 5px 20px;
        transition: all 0.5s;
        :hover{
            color : black;
            transform: scale(1.1);
        }
    }
`
const ExchangeContent = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    place-items: center;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`
const ExchangeWriteContent = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
`
const ExchangeWriteNft = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    place-items: center;
    .shop_title{
        grid-column: 1 / 5;
        border-bottom: 0;
    }
`


export {Background,Content,MainContent,Box,Input,Button,Label,Title,MypageImg,MypageContent,FlexA,FlexB,FlexC,FlexContent,BorderBody,BorderBodyContent,BorderUserBody,BorderTitle,
    BorderUserNum,BorderUserContent,BorderUserNickname,BorderUserDate,BorderBox,BorderCount,BorderCountContent,BorderWriter,BorderWriterBody,BorderWriterBnt,BorderRepliesBody,BorderRepliesTitle,BorderRepliesContent
    ,BorderRepliesWriter,ExchangeContent,ExchangeWriteContent,ExchangeWriteNft
}