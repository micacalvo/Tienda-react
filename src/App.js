import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
    return (
        <>
         <Navbar/>
         <ItemListContainer saludo= "¡Bienvenidos a mi tienda!"/>
         <Footer/>
        </>
    )
}

export default App;