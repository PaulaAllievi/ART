import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import { products } from '../data/products'
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 1000);
    });

      getData.then(res => setData(res.find(product => product.id === parseInt(detalleId)))); 

  }, [])


  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer