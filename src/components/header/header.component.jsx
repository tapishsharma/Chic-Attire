import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

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
const mapStateToProps=state=>({
  currentUser:state.user.currentUser
})
//connect is a function that takes a function as an argument and returns a function that takes a component as an argument and returns a component that has access to the state and the dispatch function of the store , it is higher order component
export default connect(mapStateToProps)(Header);