import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import PricePage from './pages/pricepage';
import SignUpPage from './pages/signuppage';
import { init } from './store/ProductSlice';
import { getProducts } from './services/ProductService';
import SubscriptionDetails from './components/register/payment/SubscriptionDetails';
import Payment from './components/register/payment/Payment';
import Login from './pages/login';
import Settings from './components/dashboard/Settings';




function App() {
  console.log(process.env.REACT_APP_SERVER_URL)
  const dispatch = useDispatch();

  useEffect(()=> {
    getProducts().then(
        (result)=> {
            console.log(result);
            dispatch(init(result));
        }
    )
  },[]);



  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<PricePage/>} />
          <Route path="/signup/:id" element={<SignUpPage/>}/>  
          <Route path='/subdetails' element={<SubscriptionDetails/>}/>
          <Route path='/payment/*' element={<Payment/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user/settings/*' element={<Settings/>}/>
        </Routes>
    </div>
  );
}

export default App;
