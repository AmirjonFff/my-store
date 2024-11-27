'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Home from '@/pages/Home';

export default function Page() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products on the client
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      if (!res.ok) {
        console.error('Failed to fetch products');
        return;
      }
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Home products={products} />
    </>
  );
}
