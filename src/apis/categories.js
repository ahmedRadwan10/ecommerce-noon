

export const getCategories =  async (setState) => {
    const response = await fetch('http://localhost:4000/categories')
    const data = await response.json();   
    setState(data);
}
