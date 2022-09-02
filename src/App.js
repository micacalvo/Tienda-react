import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';


const App = () => {

    return (
        <BrowserRouter>
         <Navbar/>
         <ItemListContainer saludo= "¡Bienvenidos a mi tienda!"/>
         <ItemDetailContainer/>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;