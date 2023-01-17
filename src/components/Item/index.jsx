import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


const Item = ({info}) => {

  return (
    <div  >
    <Link className='item' to={`/detalle/${info.id}`}>
      <div>
      <img src={info.image} />
      <h2>{info.title}</h2>
      <h3>{info.description}</h3>
      <h4>${info.price}</h4>
      </div>
    </Link>
    </div>
  );
}

export default Item