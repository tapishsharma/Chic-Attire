import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";

import {HomePage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
   this.unsubscribeFromAuth=  auth.onAuthStateChanged(user=>{
        this.setState({currentUser:user});
     })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
<div>
<BrowserRouter>
<Header currentUser={this.state.currentUser}/>

      <Routes>

  

  <Route  path="/" element={<HomePage />}/>
        
  <Route path="/shop" element={<ShopPage />} />
  <Route path="/signin" element={<SignInAndSignUp />} />

      </Routes>
    
</BrowserRouter>


</div>

  );
  }
  
}

export default App;
