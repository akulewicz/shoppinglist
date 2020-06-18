import {
    productsBox,
    productsList,
    form
} from '../main.js';
export {
    displayShoppingList,
    addProduct,
    deleteProduct
};

const displayShoppingList = () => {
    productsBox.textContent = '';
    productsList.forEach((product, index) => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        const span = document.createElement('span');
        li.classList.add('products-list__item');
        li.dataset.productId = index;
        span.textContent = product.name;
        if (product.done) {
            span.style.textDecoration = 'line-through';
        }
        li.append(span);
        li.append(i);
        i.classList.add('far', 'fa-trash-alt', 'products-list__delete-icon')
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
        productsList.push({
            name: newProduct,
            done: false
        });
    }
    form.reset();
    form.product.focus();
    updateShoppingList();
}

const deleteProduct = e => {
    const product = e.target;
    if (product.classList.contains('products-list__delete-icon')) {
        productsList.splice(Math.round(product.parentNode.dataset.productId), 1);
    } else {
        if (productsList[Math.round(product.dataset.productId)].done) {
            productsList[Math.round(product.dataset.productId)].done = false;
        } else {
            productsList[Math.round(product.dataset.productId)].done = true;
        }
    }
    updateShoppingList();
}