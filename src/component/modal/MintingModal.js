import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modal.css';
import { mintingAction } from '../../middleware/mintingAction';
import { Show } from '../../redux/reducer/show';

const MintingModal = (props) => {
const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  
  const { open, content,close ,img ,list} = props;
    const [data,setData] = useState({})
    const [minting_img,setImg] = useState("")
  document.onclick = (e)=>{
    if(e.target.className === "openModal modal"){
        close()
        console.log("실행");
    }
  }
  
  useEffect(()=>{
    if(open){
      if(list){
        setData(content);
        setImg(img)
        dispatch(mintingAction.minting(login.nickname,login.point - 5000,content.id))
      }
      else{
        setData(content);
        setImg(img)
        dispatch(mintingAction.minting(login.nickname,(login.point - 1000),content.id))
      }
    }
  },[])

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className='minting_section'>
          <header>
            {list ? "일반 뽑기 결과":"화이트리스트 뽑기 결과"}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main className='minting_main'>
              <div>
                  <img src={minting_img} alt="" />
              </div>
              <div className='minting_body'>
                  <div className='minting_content'>{data.nft_tilte}</div>
              </div>
          </main>
          <footer>
              <div className='mainbox'>
                <button className="box" onClick={close}>
                    확인
                </button>
              </div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
 export default React.memo(MintingModal)