import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';


const App = () => {

return (
<CartProvider>
    <BrowserRouter>
        <Navbar/>        
          <Routes>
           <Route path="/" element={<ItemListContainer saludo= "¡Bienvenidos a mi tienda!"/>}/>
           <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
           <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/> 
           <Route path="/cart" element= {<Cart/>}/>               
         </Routes>
    </BrowserRouter>
</CartProvider>
    )
}

export default App;