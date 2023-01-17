import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount'
import {Link} from 'react-router-dom'
import './styles.css'

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  } 

  return (
    <div className='itemdetail'>
        <div className='img_itemdetail'>
          <img src={data.image}/>
        </div>
        <div className='itemdetail_info' >
          <h1> {data.title}</h1>
          <h2>{data.description}</h2>
          <h3>${data.price}</h3>
               
          {
            goToCart
            ? <Link className='linkfinalizar' to='/cart'>Ir al carrito</Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
          }        
          
        </div>
    </div>
    
  )
}

export default ItemDetail