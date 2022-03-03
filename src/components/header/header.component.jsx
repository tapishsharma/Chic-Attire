import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.utils'
const Header=({currentUser})=>(
<div className="header">

  <Link className="logo-container" to="/"> <img className="design-logo" src={logo} alt="logo"/></Link> 

<div className="options">

<Link className="option" to='/shop'>SHOP</Link>
<Link className="option" to='/shop'>CONTACT</Link>
{
  currentUser ? (
    <div className="option" onClick={()=>auth.signOut()}>
      SIGN OUT 
    </div>
  ):(
    <Link className="option" to='/signin'>
      SIGN IN
    </Link>
  )
}



<Link className="option" to='/shop'>ABOUT US</Link>

</div>
</div>

)
export default Header;