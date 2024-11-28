export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`/api/products?q=${search}`, {
        cache: 'force-cache',
    });

    if (!response.ok) throw new Error('Unable to fetch products.');

    return response.json();
};

export const getProductById = async (id: number) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`); // Укажите полный URL

    return response.json();
}


