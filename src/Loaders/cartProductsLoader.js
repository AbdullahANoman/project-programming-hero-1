import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =  async() =>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    console.log(storedCart)
        // step-1 get id 
        const savedProduct = [];
        for(const id in storedCart){
            // console.log(id,storedCart)
            // step -2 : get the product using id 
        const addedProduct  = products.find(product=>(product.id === id ))
            if(addedProduct){
                // step-3 : get quantity of  the product
                // console.log(addedProduct)
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedProduct.push(addedProduct)
            }
        }
        
    return savedProduct;
}

export {cartProductsLoader}