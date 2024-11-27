export default async function Home() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a> - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
