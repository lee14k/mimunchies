// src/ProductList.js

import React, { useState, useEffect } from 'react';

const SQUARESPACE_ENDPOINT = 'https://api.squarespace.com/1.0/commerce/products';
const API_KEY = 'sq0idp-EmZEe0kPM5v9VF_p6qDlSQ'; // Ideally, you should use environment variables to hide this.

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(SQUARESPACE_ENDPOINT, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'User-Agent': 'My Vite App'
        }
      });

      const data = await response.json();
      if (data && data.result) {
        setProducts(data.result);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.mainImage.url} alt={product.name} width={300} />
          <p>{product.description}</p>
          <button onClick={() => {
            // Implement the buying logic here, e.g., redirecting to Squarespace's checkout page.
          }}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList;
