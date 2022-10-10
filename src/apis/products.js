import { fetchDeal } from "../redux/slices/collectionSlice";

export async function getHotDealsProducts(dispatch) {
    const response = await fetch('../data/categories.json');
    const { data } = await response.json();
    const products = [];
    Object.keys(data).forEach(catKey => {
        let subCategories = {};
        if (data[catKey].order <= 5) {
            subCategories = data[catKey].__collections__.subCategories;
        } 
        Object.keys(subCategories).forEach(subKey => {
            const productsObj = subCategories[subKey].__collections__.products;
            Object.keys(productsObj).forEach(productKey => {
                const productObj = productsObj[productKey];
                if (productObj.old_price && productObj.new_price) {
                    productObj.new_price = parseInt(productObj.new_price.slice(4));
                    productObj.old_price = parseInt(productObj.old_price.slice(4));
                    const sale = Math.floor(100 - (productObj.new_price / productObj.old_price) * 100);
                    if (sale > 50) products.push(productObj);
                }
            });
        });
    });
    dispatch(fetchDeal({ title:"Hot deals", products }));
}

export async function getAllDealsProducts(dispatch) {
    const response = await fetch('../data/categories.json');
    const { data } = await response.json();
    let products = [];
    Object.keys(data).forEach(catKey => {
        let subCategories = {};
        if (data[catKey].order <= 5) {
            subCategories = data[catKey].__collections__.subCategories;
        } 
        Object.keys(subCategories).forEach(subKey => {
            const productsObj = subCategories[subKey].__collections__.products;
            Object.keys(productsObj).forEach(productKey => {
                const productObj = productsObj[productKey];
                if (productObj.old_price && productObj.new_price) {
                    productObj.new_price = parseInt(productObj.new_price.slice(4));
                    productObj.old_price = parseInt(productObj.old_price.slice(4));
                    const sale = Math.floor(100 - (productObj.new_price / productObj.old_price) * 100);
                    if (sale > 30) products.push(productObj);
                }
            });
            if (products.length > 6) dispatch(fetchDeal({ title: `${subCategories[subKey].title} deals`, products }));
            products = [];
        });
    });
    // dispatch(fetchDeal({ title:"Hot deals", products }));
}