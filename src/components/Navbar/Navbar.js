// Creo el componente navbar que va a tener mi header Error en cartwidget!!!  
import CartWidget from './CartWidget';

const Navbar = () => {
    return ( 
<nav>
    <h3>MI BORREGUITO</h3>
      <ul>
           <li><a href="#">Sobre mí</a></li>
           <li><a href="#">Productos</a></li>
           <li><a href="#">Contacto</a></li> 
        </ul>
        <CartWidget/>
    </nav>

)
}

export default Navbar;