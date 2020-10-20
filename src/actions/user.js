import { 
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    
} from './types';

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                id: 0,
                product: {
                    id: 0,
                    name: 'Colac',
                    description: 'Colac dulce din faina integrala',
                    price: 100,
                    imageUrl: 'https://bakeryproducts-0506.restdb.io/media/5f693796db00907500005fca'
                },
                quantity: 2
            },
            {
                id: 1,
                product: {
                    id: 1,
                    name: 'Cozonac',
                    description: 'Cozonac cu nuca si ciocolata',
                    price: 80,
                    imageUrl: 'https://bakeryproducts-0506.restdb.io/media/5f693835db00907500005fcf'
                },
                quantity: 1
            },
        ]
    })
}