import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from './Product';



const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    }, [])
    // const addToCart = (products) => {
    //     console.log(products);
    // }
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        // step 1: get id
        // console.log(products);
        for (const id in storedCart) {
            // console.log(id);
            // step 2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if (addedProduct) {
                // step 3: get quantity of the product
            const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            };
            // console.log(addedProduct);
            // step: 5 set data
            setCart(savedCart);
        }

    },[products])
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        // setCart(newCart);
        // addToDb(product.id)


       /* let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining]
        }
        setCart(newCart);
        addToDb(product.id);
        */
    }
    return (
        <div className="grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2">
            <div className='products-here'>
                <h2>Products comming here total: <span className="btn btn-xs">{products.length}</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            // addToCart={addToCart}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                </div>
            </div>
            <div className='cart-products'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;