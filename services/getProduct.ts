export const getAllPosts = async () => {
    const response = await fetch("/api/products");

    if (!response.ok) throw new Error("Unable to fetch products.");

    return response.json();
};

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(
        `/api/products?q=${search}`
    );

    if (!response.ok) throw new Error("Unable to fetch products.");

    return response.json();
};