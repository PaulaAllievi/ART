import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart';
import './styles.css';

const Cart = () => {

  const {cart, totalPrice} = useCartContext();
  
  if (cart.length ===0 ) {
    return (
      
      <div className='carro_vacio'>
        <p>Carrito vacío</p>
        <Link className='link' to='/'>Realizar compras</Link>
      </div>
      
    )
  } 
    return (
      <div className='cart_container' >
      
      <div>
       {
           cart.map(product => <ItemCart key={product.id} product={product}/>)
       }
       </div>
       <div className='total'>
           <p>
           Total: ${totalPrice()} 
           </p>
       </div>
       <div className='final'>
          <Link className='linkfinalizar' to='/'>Seguir comprando</Link>
          <Link className='linkfinalizar' to=''>Finalizar compra</Link>
       </div>
      </div>
  )
}

export default Cart