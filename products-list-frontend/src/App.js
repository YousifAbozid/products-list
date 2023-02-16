import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      await axios.get('http://localhost:3001/products').then((res) => {
        setProducts(res.data)
      })
    }

    getData().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.length === 0 ? (
          <h1>There is no products</h1>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default App
