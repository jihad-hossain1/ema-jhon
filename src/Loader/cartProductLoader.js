const cartProductsLoader = async () => {
    const loaddedProducts = await fetch('products.json')
    const products = await loaddedProducts.json();
    console.log(products);

}

export default cartProductsLoader;