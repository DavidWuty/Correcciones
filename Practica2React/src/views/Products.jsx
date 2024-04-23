import React, { useEffect, useState, useNavigate } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function Products() {
    const[data,setData]= useState(null)
    const navigate = useNavigate()
    useEffect(() => {
      axios
      .get("http://localhost:8000/api/bebidas/")
      .then(response => {
        setData(response.data)
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
    },[])
  

  return (
    <div>{data?
      data.map(item => (
        <>
          <ProductCard 
            nombre={item.nombre}
            sabor={item.sabor}
            cantidadml={item.cantidadml}
            alcoholica={item.alcoholica}
            onClick={() => {navigate(`/products/${item.id}`)}}
          />
        </>
      ))
      :<Text>Esperando elementos</Text>}</div>
  )
}

export default Products