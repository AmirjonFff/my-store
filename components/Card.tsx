import { IProduct } from "@/services/type";
import Link from 'next/link';


export default function Card({ id, title, description, price, image }: IProduct) {
    return (
        <Link href={'product/' + id} className="mx-auto mt-11 w-full transform cursor-pointer overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img className="h-48 w-full object-cover object-center" src={image} alt="Product Image" />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{title}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{description.slice(0, 30)}...</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
                </div>
            </div>
        </Link>
    )
} 