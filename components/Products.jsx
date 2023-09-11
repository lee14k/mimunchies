// src/ProductList.js

import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      // Fetch from your local serverless function endpoint
      const response = await fetch('http://localhost:3001');

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
