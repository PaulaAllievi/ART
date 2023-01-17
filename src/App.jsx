import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext'




function App() {
  return (
    <>
    <div className='body'>
    <BrowserRouter>
    <CartProvider>
      <div style={{overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
     <NavBar/>    
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />        
      </Routes>
     <Footer/>
     </div>
    </CartProvider>    
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
