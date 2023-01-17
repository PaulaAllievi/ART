import React, { useEffect, useState } from 'react'
import './styles.css'


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])


  return (
    <div className='count_container'>
        <div className='count'>
             <button className='button_count' disabled={count <= 1} onClick={decrease} >-</button>
             <span className='number' >{count}</span>
             <button className='button_count' disabled={count >= stock} onClick={increase}>+</button>
        </div>
        <div className='agregar'>
             <button className='button_comprar' disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount