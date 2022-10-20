import { removeSubCategories, selectProduct, selectSubCategories, selectSubCategory } from "../redux/slices/categorySlice";
import { fetchDeal } from "../redux/slices/collectionSlice";

export async function getHotDealsProducts(dispatch, minSale) {
    const response = await fetch('/data/categories.json');
    const { data } = await response.json();
    const products = [];
    Object.keys(data).forEach(catKey => {
        let subCategories = data[catKey].__collections__.subCategories;
        Object.keys(subCategories).forEach(subKey => {
            const productsObj = subCategories[subKey].__collections__.products;
            Object.keys(productsObj).forEach(productKey => {
                const productObj = productsObj[productKey];
                if (productObj.old_price && productObj.new_price) {
                    productObj.new_price = parseInt(productObj.new_price.slice(4));
                    productObj.old_price = parseInt(productObj.old_price.slice(4));
                    const sale = Math.floor(100 - (productObj.new_price / productObj.old_price) * 100);
                    if (sale > minSale) products.push({
                        ...productObj,
                        id: productKey,
                        category: { title: data[catKey].title, id: catKey },
                        subCategory: { title: subCategories[subKey].title, id: subKey }
                    });
                }
            });
        });
    });
    dispatch(fetchDeal({ title:"Hot deals", products }));
}

export async function getAllDealsProducts(dispatch, minSale) {
    const response = await fetch('/data/categories.json');
    const { data } = await response.json();
    let products = [];
    Object.keys(data).forEach(catKey => {
        let subCategories = data[catKey].__collections__.subCategories;
        Object.keys(subCategories).forEach(subKey => {
            const productsObj = subCategories[subKey].__collections__.products;
            Object.keys(productsObj).forEach(productKey => {
                const productObj = productsObj[productKey];
                if (productObj.old_price && productObj.new_price) {
                    productObj.new_price = parseInt(productObj.new_price.slice(4));
                    productObj.old_price = parseInt(productObj.old_price.slice(4));
                    const sale = Math.floor(100 - (productObj.new_price / productObj.old_price) * 100);
                    if (sale > minSale) products.push({
                        ...productObj,
                        id: productKey,
                        category: { title: data[catKey].title, id: catKey },
                        subCategory: { title: subCategories[subKey].title, id: subKey }
                    });
                }
            });
            if (products.length > 6) dispatch(fetchDeal({ title: `${subCategories[subKey].title} deals`, products }));
            products = [];
        });
    });
}

export async function getCategoryProducts(dispatch, categoryTitle) {
    const response = await fetch('/data/categories.json');
    const { data } = await response.json();

    dispatch(removeSubCategories());
    let products = [];
    Object.keys(data).forEach(catKey => {
        if (data[catKey].title === categoryTitle) {
            const subCategoriesObj = data[catKey].__collections__.subCategories;
            Object.keys(subCategoriesObj).forEach(subKey => {
                const productsObj = subCategoriesObj[subKey].__collections__.products;
                Object.keys(productsObj).forEach(productKey => {
                    const productObj = productsObj[productKey];
                    if (productObj.old_price) productObj.old_price = parseInt(productObj.old_price.slice(4));
                    if (productObj.new_price) productObj.new_price = parseInt(productObj.new_price.slice(4));
                    products.push({
                        ...productObj,
                        id: productKey,
                        category: { title: categoryTitle, id: catKey },
                        subCategory: { title: subCategoriesObj[subKey].title, id: subKey }
                    });
                });
                dispatch(selectSubCategories({ title: `${subCategoriesObj[subKey].title}`, products }))
                products = [];
            });
        }
    });
}

export async function getProduct(dispatch, subCategoryID, productID) {
    const response = await fetch('/data/categories.json');
    const { data } = await response.json();
    Object.keys(data).forEach(catKey => {
        const subCategoriesObj = data[catKey].__collections__.subCategories;
        Object.keys(subCategoriesObj).forEach(subKey => { 
            if (subKey === subCategoryID) {
                const product = subCategoriesObj[subKey].__collections__.products[productID];
                dispatch(selectProduct({
                    ...product,
                    id: productID,
                    category: { title: data[catKey].title, id: catKey },
                    subCategory: { title: subCategoriesObj[subKey].title, id: subCategoryID }
                }));
            }
        });
    });
}


export async function getSubCategory(dispatch, subCategoryID) {
    const response = await fetch('/data/categories.json');
    const { data } = await response.json();
    let products = [];
    Object.keys(data).forEach(catKey => {
        const subCategoriesObj = data[catKey].__collections__.subCategories;
        Object.keys(subCategoriesObj).forEach(subKey => { 
            if (subKey === subCategoryID) {
                const productsObj = subCategoriesObj[subKey].__collections__.products;
                Object.keys(productsObj).forEach(productKey => {
                    const productObj = productsObj[productKey];
                    if (productObj.old_price) productObj.old_price = parseInt(productObj.old_price.slice(4));
                    if (productObj.new_price) productObj.new_price = parseInt(productObj.new_price.slice(4));
                    products.push({
                        ...productObj,
                        id: productKey,
                        category: { title: data[catKey].title, id: catKey },
                        subCategory: { title: subCategoriesObj[subKey].title, id: subKey }
                    });
                });
                dispatch(selectSubCategory({
                    title: subCategoriesObj[subKey].title,
                    products: products
                }));
            }
        });
    });
}
