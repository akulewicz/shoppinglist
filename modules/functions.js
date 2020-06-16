import {productsBox, productsList, form} from '../main.js';
export {displayShoppingList, addProduct, deleteProduct};

const displayShoppingList = () => {
    productsBox.textContent = '';
    productsList.forEach(product => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        li.classList.add('products-list__item');
        i.classList.add('far', 'fa-trash-alt', 'products-list__delete-icon')
        li.textContent = product;
        li.append(i);
        productsBox.prepend(li);
    })
}

const updateShoppingList = () => {
    localStorage.setItem('products', JSON.stringify(productsList));
    displayShoppingList();
}

const addProduct = e => {
    e.preventDefault();
    const newProduct = product.value.trim();
    if (newProduct.length) {
        productsList.push(newProduct);
    }
    form.reset();
    updateShoppingList();
}

const deleteProduct = e => {
    const product = e.target;;
    if (product.classList.contains('products-list__delete-icon')) {
        productsList.splice(productsList.indexOf(product.parentNode.textContent), 1);
        updateShoppingList();
    }
}