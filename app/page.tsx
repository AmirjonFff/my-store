import Card from '@/components/Card';
import Search from '@/components/Search';
import { getProduct } from '@/services/getProduct';
import { IProduct } from '@/services/type';

export default function Page({ products }: { products: IProduct[] }) {
    return (
        <div className='container mx-auto py-5 pt-24'>
            <Search initialProducts={products} /> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto'>
                {products.length === 0 ? 'Нет продуктов' :
                    products.map((product) => <Card key={product.id} {...product} />)}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const products: IProduct[] = await getProduct();

    return {
        props: {
            products,
        },
    };
}