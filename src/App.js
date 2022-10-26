import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {Header} from "./component"
import { Route,Routes,Navigate } from 'react-router-dom';
import {Main,Shop,Mypage,Nft,Minting,Border,Login,SignUp,Borderpage,Exchange,ExchangeWrite,Staking,Admin} from './page';
import swal from "sweetalert"
import { useEffect } from 'react';
import { borderAction } from './middleware/borderAction';
import {nftAction} from "./middleware/nftAction"

function App() {
  const dispatch = useDispatch()
  const islogin = useSelector(state=>state.login)
  const LoginRedirect = () =>{
    return islogin.isLogin ? <Mypage/> : loginMessage();
  }
  const MintingRedirect = () =>{
    return islogin.isLogin ? <Minting/> : loginMessage();
  }
  const ExchangeRedirect = () =>{
    return islogin.isLogin ? <ExchangeWrite/> : loginMessage();
  }
  const StakingRedirect = () =>{
    return islogin.isLogin ? <Staking/> : loginMessage();
  }
  const AdminRedirect = () =>{
    return islogin.admin === 1 ? <Admin/> : loginMessage();
  }
  function loginMessage(){
    swal("주의","로그인해주세요")
    return <Navigate to="/"/>
  }
  useEffect(()=>{
    dispatch(borderAction.borderCount())
    dispatch(nftAction.nftData(islogin.nickname))
    dispatch(nftAction.usersData())
  },[])




  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/mypage" element={<LoginRedirect/>}/>
        <Route path="/nft" element={<Nft/>}/>
        <Route path="/minting" element={<MintingRedirect/>}/>
        <Route path="/border" element={<Border/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/borderpage/:id" element={<Borderpage/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/exchangewrite" element={<ExchangeRedirect/>}/>
        <Route path="/staking" element={<StakingRedirect/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      {/* <button onClick={change}>버튼</button>
      <div>
      {image.map((e)=> <img src={e} alt="" /> )}
      </div> */}
    </div>
  );
}

export default App;
