import { getShoppingCart } from "../components/utilities/fakedb";

const cartProductsLoader = async () => {
    const loaddedProducts = await fetch('products.json')
    const products = await loaddedProducts.json();
    // console.log(products);
    // if cart data is in database , you have to use async await
    const storedCart = getShoppingCart();
    console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

        }
    }
    return savedCart;

    // if you need to send two things
    // return [products, savedCart]
    // another options 
    // return {products, savedCart}
    // return {products, cart: savedCart}

}

export default cartProductsLoader;