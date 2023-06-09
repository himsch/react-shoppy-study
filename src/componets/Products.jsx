import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/firebase.js';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard.jsx';
import useProducts from '../hooks/useProducts.jsx';

function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products &&
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ul>
  );
}

export default Products;
