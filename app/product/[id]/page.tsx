import { getPostsById } from "@/services/getProduct";
import { IProduct } from "@/services/type";

type Props = {
    params: {
        id: number;
    };
};
export default async function Page({ params: { id } }: Props) {
    const { product } = await getPostsById(id)

    return (
        <>
            <h1 className="text-4xl">{product.title}</h1>
        </>
    )
}
