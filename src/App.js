import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/itemCount';


const App = () => {

const onAdd = () => {
    alert("Has agregado un elemento al carrito")
}

    return (
        <>
         <Navbar/>
         <ItemListContainer saludo= "¡Bienvenidos a mi tienda!"/>
         <ItemCount stock= {7} initial= {0} onAdd= {onAdd} />
         <Footer/>
        </>
    )
}

export default App;