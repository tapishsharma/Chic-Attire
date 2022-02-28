import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/logo.png';

const Header=()=>(
<div className="header">

  <Link className="logo-container" to="/"> <img className="design-logo" src={logo} alt="logo"/></Link> 

<div className="options">

<Link className="option" to='/shop'>SHOP</Link>
<Link className="option" to='/shop'>CONTACT</Link>
<Link className="option" to='/shop'>ABOUT US</Link>
</div>
</div>

)
export default Header;