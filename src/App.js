import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {

    return (
        <BrowserRouter>
        <Navbar/>        
        <Routes>
        <Route path="/" element={<ItemListContainer saludo= "¡Bienvenidos a mi tienda!"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/> 
        <Route path="/cart" element= {<CartWidget/>}/>               
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;