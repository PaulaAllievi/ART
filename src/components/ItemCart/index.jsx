import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './styles.css'

const ItemCart = ({product}) => {

const {removeProduct} = useCartContext();    
  return (
    <div className='item_cart'>
        <img src={product.image} alt={product.title}/>
        <div className='detalle_itemcart'>
            <p>Título: {product.title} </p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio unitario: ${product.price} </p>
            <p>Subtotal: ${product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart