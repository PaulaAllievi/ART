import React, { useEffect, useState } from 'react'
import Title from '../Title'
import ItemList from '../ItemList'
import {products} from '../data/products'
import { useParams } from 'react-router-dom'
import './styles.css'

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(product => product.category === categoriaId)));

    } else {
      getData.then(res => setData(res));

    }

  }, [categoriaId])

  
  return (
    <>
    <Title/>
    <div className='container'>
      <ItemList data={data} />
    </div>
    </>
  )
}

export default ItemListContainer