import React from 'react';
import './modal.css';

const NftModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, content ,img } = props;
  document.onclick = (e)=>{
    if(e.target.className === "openModal modal"){
        close()
    }
  }


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            NFT ({content.nft_tilte}) 소개
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main className='nft_main'>
              <div >
                  <img src={img} alt="" />
              </div>
              <div className='nft_body'>
                  <div className='nft_content'>배경 : {content.nft_background}</div>
                  <div className="nft_content">안대 : {content.nft_face}</div>
                  <div className="nft_content">눈 : {content.nft_eyes}</div>
                  <div className="nft_content">입 : {content.nft_mouse}</div>
              </div>
          </main>
          <footer>
              <div className='mainbox'>
                <button className="box" onClick={close}>
                    취소
                </button>
              </div>
           
          </footer>
        </section>
      ) : null}
    </div>
  );
};
 export default NftModal