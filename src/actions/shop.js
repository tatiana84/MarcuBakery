import {
    SET_SHOP_PRODUCTS,
} from './types';

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                image: src="../productImage/colac.jpg",
                name: "Colac",
                description:"Colac dulce cu faina integrala",
                price: 100,
            },
            {
                _id: 1,
                image: src="../productImage/cozonac.jpg",
                name: "Cozonac",
                description:"Cozonac cu nuca si ciocolata",
                price: 80,
            },
            {
                _id: 2,
                image: src="../productImage/cupcakes.jpg",
                name: "Cupcakes",
                description:"Cupcakes cu tiramisu",
                price: 15,
            },
            {
                _id: 3,
                image: src="../productImage/eclere.jpg",
                name: "Eclere",
                description:"Eclere cu ciocolata, crema de vanilie",
                price: 6,
            },
            {
                _id: 4,
                image: src="../productImage/galeta-cu-mere.jpg",
                name: "Galeta",
                description:"Galeta cu mere, prune, cirese",
                price: 40,
            },
            {
                _id: 5,
                image: src="../productImage/rulada-halva.jpg",
                name: "Rulada",
                description:"Rulada cu halva",
                price: 70,
            },
            {
                _id: 6,
                image: src="../productImage/gateau.jpg",
                name: "Gateau",
                description:"Gateau de ciocolata. A fost preparat cu ciocolata belgiana.",
                price: 200,
            },
            {
                _id: 7,
                image: src="../productImage/mini-tarte.jpg",
                name: "Mini-tarte",
                description:"Mini-tarte cu ciocolata",
                price: 30,
            },
            {
                _id: 8,
                image: src="../productImage/mousse.jpg",
                name: "Mousse de ciocolata",
                description:"Mousse trio de ciocolata",
                price: 400,
            },
            {
                _id: 9,
                image: src="../productImage/mousse-fistic.jpg",
                name: "Prajitura",
                description:"Prajitura mousse de fistic",
                price: 40,
            },
            {
                _id: 10,
                image: src="../productImage/piine.jpg",
                name: "Piine",
                description:"Piine din faina integrala, coapta in cuptorul bunicii",
                price: 100,
            },
            {
                _id: 11,
                image: src="../productImage/placinte.jpg",
                name: "Placinte",
                description:"Placinte la tigaie cu brinza si verdeata",
                price: 20,
            },
        ]
    })
}