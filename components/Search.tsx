"use client"


import { getProductBySearch } from '@/services/getProduct';
import { IProduct } from '@/services/type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface SearchProps {
    initialProducts: IProduct[]; // Объявляем, что компонент ожидает этот пропс
}

function Search({ initialProducts }: SearchProps) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<IProduct[]>(initialProducts);

    useEffect(() => {
        async function fetchProducts() {
            if (query) {
                setLoading(true);
                const fetchedProducts: IProduct[] = await getProductBySearch(query);
                setLoading(false);
                setProducts(fetchedProducts);
            } else {
                setProducts(initialProducts); // Сбрасываем к начальным продуктам, если запрос пустой
            }
        }
        fetchProducts();
    }, [query, initialProducts]);

    return (
        <div className='fixed w-full p-2 bg-white border-b z-50 top-0 left-0'>
            <div className="flex px-4 py-3 mx-auto rounded-md border-2 border-slate-800 overflow-hidden max-w-md font-[sans-serif]">
                <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search Something..."
                    className="w-full outline-none bg-transparent text-gray-600 text-sm"
                />
            </div>
            {products.length > 0 && (
                <div className='absolute bg-white left-[50%] p-5 -translate-x-[50%] w-[500px]'>
                    {loading ? 'Loading...' : products.length === 0 ? 'Ничего не найдено' : products.map(product => (
                        <Link key={product.id} href={'/product/' + product.id} className='font-bold text-base mt-3 block'>
                            {product.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;