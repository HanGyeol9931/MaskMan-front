import styled from "styled-components";

const MintingContent = styled.div`
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MintingList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px solid;
    border-radius: 20px;
    width: 500px;
    min-height: 650px;
    button{
        background-color: white;
        border: 5px solid;
        padding: 0 10px;
        margin: 0;
        margin-bottom: 20px;
        height: 60px;
        transition: all 0.5s;
        box-shadow: 1px 3px 10px rgba(0,0,0,0.4);
        :hover{
            color: black;
            transform: scale(1.1) translateY(-5px);
            box-shadow: 1px 3px 10px rgba(0,0,0,0.8);
        }
    }
`
const MintingTitle = styled.div`
    margin: 15px 0;
    font-size: 50px;
`
const MintingImg = styled.div`
    img{
        width: 300px;
        border-radius: 10px;
        box-shadow: 1px 3px 10px black;
    }
`
const MintingPoint = styled.div`
    margin:20px 0;
    font-size: 35px;
`
const MintingNormal = styled.div`
    margin: auto 0;
    font-size: 35px ;
`
const MintingBodyContent = styled.div`
    box-sizing: border-box;
    border: 10px solid black;
    margin-top: 70px;
    border-radius: 50px;
    padding:0 50px 50px 50px;
    width: 1200px;
    overflow: hidden;
    min-height: 877px;
    background-color: rgb(255, 255, 255);
    ::-webkit-scrollbar{
        display: none;
    }
`
export {MintingContent,MintingList,MintingTitle,MintingImg,MintingPoint,MintingNormal,MintingBodyContent}