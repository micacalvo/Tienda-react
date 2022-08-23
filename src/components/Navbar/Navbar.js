import CartWidget from './CartWidget';
import estilos from './navbar.module.css';

const Navbar = () => {
    return ( 
<nav className={estilos.headerContainer}>
    <h3>MI BORREGUITO</h3>
      <ul>
        <li>
            <a href="#">Sobre mí</a>
        </li>
        <li>
            <a href="#">Productos</a>
        </li>
        <li>
            <a href="#">Contacto</a>
        </li> 
        </ul>
        <CartWidget/>
    </nav>
)
}

export default Navbar;