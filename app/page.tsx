import Card from '@/components/Card';
import CardSkelet from '@/components/CardSkelet';
import Search from '@/components/Search';
import { getProduct } from '@/services/getProduct';
import { IProduct } from '@/services/type';

export default async function Page() {

  const product: IProduct[] = await getProduct()

  return (
    <div className='container mx-auto py-5 pt-24'>
      <Search />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto'>
        {!product ? [...Array(10)].map((_, i) => <CardSkelet key={i} />) : product?.length === 0 ? 'Нет продукт' :
          product?.map((product) => <Card key={product.id} {...product} />)}
      </div>
    </div>
  );
}

