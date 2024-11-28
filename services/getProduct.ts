export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`/api/products?q=${search}`, {
      cache: 'force-cache',
    });
  
    if (!response.ok) throw new Error('Unable to fetch products.');
  
    return response.json();
  };
  