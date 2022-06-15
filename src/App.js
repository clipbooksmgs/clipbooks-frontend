import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import PricePage from './pages/PricePage';
import SignUpPage from './pages/SignUpPage';



function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact>
            <PricePage/>
          </Route> 
          <Route path="/signup" exact>
            <SignUpPage/>
          </Route>  
        </Switch>
    </div>
  );
}

export default App;
