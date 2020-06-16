import { displayShoppingList, addProduct, deleteProduct } from './modules/functions.js';
export { form, productsBox, productsList };

const form = document.querySelector('.form--js');
const productsBox = document.querySelector('.products-list--js');
const productsList = JSON.parse(localStorage.getItem('products')) || [];

if (productsList.length) {
    displayShoppingList();
}

form.addEventListener('submit', addProduct);
productsBox.addEventListener('click', deleteProduct);