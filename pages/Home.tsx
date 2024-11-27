import Link from 'next/link';

export default function Home({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products?.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) {
    return { props: { products: [] } };
  }
  const products = await res.json();

  return {
    props: { products },
  };
}
