import { IProduct } from "@/services/type";
import Link from 'next/link';


export default function Card({ id, title, description, price, image }: IProduct) {
    return (
        <Link href={'product/' + id} className="mx-auto w-full transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            {image ? <img className="h-56 w-full object-contain object-center" src={image} alt="Product Image" /> : <div className="grid h-36 w-36 place-items-center rounded-lg bg-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-12 w-12 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>
            </div>}
            <div className="dark:bg-slate-800 p-4 h-[100%]">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{title}</h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{description.slice(0, 30)}...</p>
                <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
                </div>
            </div>
        </Link>
    )
} 