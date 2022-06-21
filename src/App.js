import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import PricePage from './pages/PricePage';
import SignUpPage from './pages/SignUpPage';
import { init } from './store/ProductSlice';
import { getProducts } from './services/ProductService';
import SubscriptionDetails from './components/register/payment/SubscriptionDetails';
import Payment from './components/register/payment/Payment';
import PaymentStatus from './components/register/payment/PaymentStatus';




function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    getProducts().then(
        (result)=> {
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
        </Routes>
    </div>
  );
}

export default App;
