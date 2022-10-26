import styled from "styled-components";

const NftBox = styled.div` 
    margin-top: 70px;
    width: 300px;
    height: 380px;
    border: 5px solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 20px;
    }
    div{
        margin-top: 20px;
        font-size: 20px;
    }
    transition: all 0.5s;
    box-shadow: 1px 1px 20px #ddd;
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
    background-color: white;
    :hover {
        /* transform: translateY(-70px) scale(1.1); */
        transform: rotateY(360deg) translate(0,-40px) scale(1.1) !important;
        
        
        box-shadow: 0 5px 18px -7px rgba(0,0,0,1);    
    }
`
const NftContent = styled.div` 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export {NftBox,NftContent}