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
function App() {
  return (
<div>
<BrowserRouter>
<Header />

      <Routes>

  

  <Route  path="/" element={<HomePage />}/>
        
  <Route path="/shop" element={<ShopPage />} />
  <Route path="/signin" element={<SignInAndSignUp />} />

      </Routes>
    
</BrowserRouter>


</div>

  );
}

export default App;
