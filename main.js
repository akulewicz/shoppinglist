import { displayShoppingList, addProduct, changeProductStatus } from './modules/functions.js';
import {registerSW} from './modules/pwa.js';
export { form, productsBox, productsList };

registerSW();


const form = document.querySelector('.form--js');
const productsBox = document.querySelector('.products-list--js');
const productsList = JSON.parse(localStorage.getItem('products')) || [];

if (productsList.length) {
    displayShoppingList();
}

form.addEventListener('submit', addProduct);
productsBox.addEventListener('click', changeProductStatus);