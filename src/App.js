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




function App() {
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
        </Routes>
    </div>
  );
}

export default App;
