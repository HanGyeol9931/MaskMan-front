import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './modal.css';
import { borderAction } from '../../middleware/borderAction';

const Modal = (props) => {
  const login = useSelector(state => state.login)
  const border = useSelector(state => state.border)
  const dispatch = useDispatch()
  const title = useRef()
  const content = useRef()
  const post = ()=>{
    dispatch(borderAction.borderCreate(login.nickname,login.img,title.current.value,content.current.value,close))

  }
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
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
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
              <div className='flex'>
                제목 
                <input type="text" ref={title}/>
              </div>
              <div className='flex'>
                내용
                <textarea name="" id="" cols="30" rows="10" ref={content}/>
              </div>
          </main>
          <footer>
              <div className='mainbox'>
                <button className="box" onClick={post}>
                    작성
                </button>
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
 export default Modal