import React from 'react'

function ProductSkelet() {
    return (
        <div className="bg-white p-2 sm:p-4 sm:h-96 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
            <div className="h-52 sm:h-full sm:w-80 rounded-xl bg-gray-200 animate-pulse" ></div>
            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-1 flex-col gap-3 w-72">
                    <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                    <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
                </div>
                <div className="mt-auto flex justify-between">
                    <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                    <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                    <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
                </div>
            </div>
        </div>
    )
}

export default ProductSkelet
