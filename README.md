# <div align="center">**Mask Man**</div>

프로젝트 배포 주소 : [MaskMan](http://ec2-3-35-48-37.ap-northeast-2.compute.amazonaws.com/)

### 개발자 : [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgjbae1212%2Fhit-counter)](https://github.com/HanGyeol9931)<a href="https://www.notion.so/38f029f575d64814ace22b130119320d"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></a>(HanGyeol)

### 기간 : 2022.10.12 ~ 2022.10.28

## 목차

> 1주차 : 아이디어 기획 , 프론트 설계 , DB설계 ,NFT 이미지

> 2주차 : Front, Back 구현 , AWS 배포

> 3주차 : 테스트 , 오류 수정

<br/>


## 사용 **기술**

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white"> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/cors-blue?style=for-the-badge&logo=&logoColor=white"> 

---

<br/>

- [**주요 페이지**](#주요-페이지)

  - [MainPage](#Main-Page)

  - [LoginPage](#Login-Page)

  - [MyPage](#My-Page)

  - [MintingPage](#Minting-Page)

  - [NFTPage](#NFT-Page)

  - [SellPage](#Sell-Page)

  - [BorderPage](#Border-Page)

  - [AdminPage](#Admin-Page)

- [**주요 기능**](#주요-기능)

  - [스테이킹](#스테이킹)

  - [NFT정보 DB로 옮기는 기능](#NFT정보-DB로-옮기는-기능)

  - [민팅](#민팅)

- [**참고**](#참고)
  - [노션주소](https://fourth-saturn-12d.notion.site/react-f00de4353afe4feeb0292b052ce5ae7a)

---

## **프로젝트 소개**

### 개인 프로젝트로 무엇을 할까 고민을 하다가

<br/>

### 어렸을때 봤었던 히어로 마스크맨이 세계를 구한다는 컨셉으로 페이지를 구성을 하게 되었다.

<br/>



## 주요 페이지


### **Main Page**

<br/>

<img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6846dabd-95c1-4c7e-b4ea-59a75d3bda67/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-21_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.59.28.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230102T135800Z&X-Amz-Expires=86400&X-Amz-Signature=8825989ea80fa3f21b602ce1ff33e8c6c19a1390ff8c735a572f94850abd828e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-11-21%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%252010.59.28.png%22&x-id=GetObject' />

<br/>

- 로그인 전

<br/>
<img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9e3ca178-e13d-4f33-bf9f-1eecc268c1ff/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-22_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_12.02.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230102T135839Z&X-Amz-Expires=86400&X-Amz-Signature=e85ff31d0799686a37653737593e612326f876f852255a058346673111b84376&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-11-22%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%252012.02.24.png%22&x-id=GetObject' />

<br/>

- 로그인 후

### **Login Page**

<br/>

<img src='https://user-images.githubusercontent.com/107897972/210246475-c335f162-7cc1-4683-8a94-733df9426f0e.png' />

<br/>

- 로그인 페이지

<br/>
<img src="https://user-images.githubusercontent.com/107897972/210246515-81c54e00-5600-4757-90db-21983608edb3.png" />

<br/>

- 로그인 모달창

<br/>

### **My Page**

<br/>

<img src="https://user-images.githubusercontent.com/107897972/210246697-a8d32468-724a-4a8f-b665-19f2fbfff406.png"/>

<br/>

<img src="https://user-images.githubusercontent.com/107897972/210246718-e429bca6-fda1-4c3b-8a32-25a5868641fa.png"/>

<br/>

<img src="https://user-images.githubusercontent.com/107897972/210246975-7e565436-0ec7-4341-9633-596b705284ba.png"/>

<br/>

- 프로필 변경

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210247094-cb3ef5f7-9cc5-4ab1-98ab-06ac1a4299b2.png"/>

<br/>

- 나의 NFT 보기 창

<br/>

### **Minting Page**
<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210286441-08671f22-f295-40e9-b05f-245a4ec7f77a.png"/>

<br/>

- 민팅에는 일반유저와 화이트리스트 유저를 나눠서 민팅을 할 수 있게 나눴다.

- 일반유저일 경우에는 화이트리스트 칸은 비활성화 된다.

<br/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210286444-48052522-43d4-42c3-8df9-550c27765197.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210286554-b3d8ed4b-6010-4351-8732-1440729d0aa4.png"/>

<br/>


- 민팅 후 나의 NFT 보기에서 확인 가능

<br/>

### **NFT Page**

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210290526-f3335968-b667-46e8-87f9-37becfd6c693.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210290535-89696a9c-1ba6-494a-b50f-11387663d6ad.png"/>

<br/>


<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210290635-5f950331-6572-4333-927e-4b172eb92f78.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210307684-72209e39-46d5-43ac-98c4-e34b1d452fab.png"/>

<br/>

- 스테이킹 페이지

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210308170-7609765d-1dbb-4919-ad3e-76a197c5a10d.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210286575-5706cad6-04fd-4f14-9279-eb07bc04bb53.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210307705-5526c09d-28ed-4279-ae56-f3a0e97c9d7c.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210307714-91a697ee-c2e7-49a7-8a2e-281d32a88b01.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210307722-89663724-3a3b-47c7-9a1a-77fcf706c388.png"/>

<br />

- NFT 확인

- 페이지 네이션 구현

- NFT 소유자 확인가능

- 스테이킹 버튼으로 스테이킹 페이지로 이동 가능

- 스테이킹 페이지에서 나의 NFT를 파악하고 스테이킹을 하면 사진들의 특성에 따라서 포인트가 다르게 지급이 된다.

- 스테이킹한 NFT를 클릭하면 취소하겠냐는 안내창이 나오고 확인을 누르면 스테이킹 했던 포인트를 지급해주고 스테이킹이 취소가 된다.


<br/>

### **Sell Page**

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306069-cb0f56f2-ff36-42af-b0f7-38ab883ab121.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306139-2246df6e-3ec9-49bc-aa04-9e71954b8493.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306213-d1a7557b-dfb6-4098-b2e9-e4b41ccad807.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306229-ffe6bd25-1c6d-4f6c-9b6e-2da7fc0a47d1.png"/>

<br/>

- 판매하기 버튼 누르면 내가 가진 NFT를 팔수 있는 페이지로 이동

- 팔수있는 최소가격은 1포인트 음수는 X

- 판매중인 NFT는 보이지 않음

### **Border Page**

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306461-a25066f0-ff56-4a4d-a60c-355e8fdb5ad0.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306498-f0fa70c7-a444-465c-8e31-9657c4735499.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306558-5f74bc10-960d-411a-85b5-9add2ce8f3ed.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306580-be471355-bedf-45ee-9f59-72720c2535c4.png"/>

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210306630-984d40b2-5904-4909-8b34-0fe5ec822d2f.png"/>

<br/>


<br/>

- 게시판 페이지 글쓰기 모달창으로 만듬

- 글쓰기 완료시 안내창

- 작성한 글 페이지로 가면 조회수 확인가능

- 댓글 버튼에 댓글의 총 개수 파악

- 로그인이 안되어있을때 댓글 확인만 가능 로그인 시 댓글 작성 가능

- 글 작성자 또는 댓글 작성자는 수정 또는 삭제 가능

- 관리자는 모든 수정 삭제 권한을 가지고 있다.

<br/>

### **Admin Page**

<br/>

  <img src="https://user-images.githubusercontent.com/107897972/210307385-7dfe1601-912c-42ad-903e-71d550d1ec33.png"/>

<br/>

- 관리자일 경우 페이지에서 유저의 권한을 부여할수 있다.

## 주요 기능


### **NFT관리**

```JS
setInterval(() => {
    staking()
}, 10000);
const staking = ()=>{
    nft.findAll({
        raw:true,
        where:{nft_staking : 1}
    }).then((e)=>{
        if(e === null){
            return
        }
        e.map((el)=>{
            if(el.nft_background === el.nft_face){
                if (el.nft_eyes === "Hidden") {
                    if (el.nft_mouse === "Smile") {
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 300
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                    else{
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 250
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                }
                else{
                    if (el.nft_mouse === "Smile") {
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 150
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                    else{
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 100
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                }
            }
            else{
                if(el.nft_background === "Hidden" || el.nft_eyes ==="Hidden"){
                    if (el.nft_mouse === "Smile") {
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 200
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                    else{
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 150
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                }
                else if(el.nft_background === "Hidden" && el.nft_eyes ==="Hidden"){
                    if (el.nft_mouse === "Smile") {
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 250
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                    else{
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 200
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                }
                else{
                    if (el.nft_mouse === "Smile") {
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 100
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                    else{
                        nft.update({
                            nft_stakingPoint : el.nft_stakingPoint + 50
                        },{
                            where : {nft_tilte : el.nft_tilte}
                        })
                    }
                }
            }
        })
    })
}

```

### **NFT정보 DB로 옮기는 기능**

``` JS
function createinit(index){
    let el = nft_data[index];
    nft.findOrCreate({
        where: {nft_tilte : el.name},
        defaults:{
            nft_tilte : el.name,
            nft_background : el.attributes[0].value,
            nft_header : el.attributes[1].value,
            nft_face : el.attributes[2].value,
            nft_eyes : el.attributes[3].value,
            nft_mouse : el.attributes[4].value,
        }
    }).then(()=>{
        if(!(nft_data.length-1 <= index))
        {
            createinit(index + 1);
        }
    })
}
```

### **민팅**
```JS
app.post("/minting",async(req,res)=>{
    const {nickname,point,minting_id} = req.body
    await user.update({user_point:point},{where : {user_nickname : nickname}}).then(()=>{
        nft.update({nft_owner:nickname},{where: {id :minting_id}}).then(()=>{
            user.findOne({
                raw:true,
                where : {user_nickname : nickname}
            }).then((user)=>{
                nft.findAll({
                    raw:true
                }).then((nftdata)=>{
                    nft.findAll({raw:true,where:{nft_owner : "null"}}).then((nftcount)=>{
                        nft.findAll({raw:true,where:{nft_owner:nickname}}).then((mynft)=>{
                            res.send({user:user,nft:nftdata,nftcount:nftcount,mynft:mynft})
                        })
                    })
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
    })
})
```

### **참고**

[프로젝트 후기](https://fourth-saturn-12d.notion.site/react-f00de4353afe4feeb0292b052ce5ae7a)
