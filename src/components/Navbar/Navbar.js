import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
<nav className={estilos.headerContainer}>
    <Link to='/'><h3>MI BORREGUITO</h3></Link>
      <ul>
        <li>
            <Link to='/category/Cambiadores'>Cambiadores</Link>
        </li>
        <li>
            <Link to='/category/Organizadores'>Organizadores</Link>
        </li>
        <li>
            <Link to='/category/Baberos'>Baberos</Link>
        </li> 
        </ul>
       <Link to='/cart'><CartWidget/></Link>
    </nav>
)
}

export default Navbar;