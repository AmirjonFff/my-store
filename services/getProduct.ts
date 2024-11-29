
export const getProductBySearch = async (search: string) => {
    if (search) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products?q=${search}`, {
            cache: 'force-cache',
        });

        if (!response.ok) throw new Error('Unable to fetch products.');

        return response.json();
    }
};

export const getProduct = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`);

    if (!response.ok) throw new Error('Unable to fetch products.');

    return response.json();
};

export const getProductById = async (id: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/${id}`); // Укажите полный URL

    return response.json();
}


