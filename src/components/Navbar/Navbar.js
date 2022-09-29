import React from 'react';
import CartWidget from './CartWidget';
import estilos from './navbar.module.css';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
<nav className={estilos.container}>
    <Link to='/'><h3 className={estilos.titulo}>Little Quokka</h3></Link>
    <img className={estilos.img}src="TheQuokka.jpg" alt="Imagen del logo" />
      <ul className={estilos.headerContainer}>
        <li> 
             <NavLink to='/category/cambiadores'>Cambiadores</NavLink>
        </li>
        <li>
            <NavLink to='/category/organizadores'>Organizadores</NavLink>
        </li>
        <li>
            <NavLink to='/category/baberos'>Baberos</NavLink>
        </li>
      </ul>
       <Link to='/cart'><CartWidget/></Link>
    </nav>
)
}

export default Navbar;