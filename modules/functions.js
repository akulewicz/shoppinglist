import {
    productsBox,
    productsList,
    form
} from '../main.js';
export {
    displayShoppingList,
    addProduct,
    changeProductStatus
};

const displayShoppingList = () => {
    productsBox.textContent = '';
    productsList.forEach((product, index) => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        const span = document.createElement('span');
        li.classList.add('products-list__item');
        li.dataset.productId = index;
        span.classList.add('product-list__item-text')
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

const deleteProduct = (index) => {
    productsList.splice(index, 1);
}

const toggleDone = (product) => {
    if (product.done) {
        product.done = false;
    } else {
        product.done = true;
    }
}

const changeProductStatus = e => {
    if (e.target.classList.contains('products-list__delete-icon')) {
        const index = Math.round(e.target.parentNode.dataset.productId);
        deleteProduct(index);
    } else if (e.target.classList.contains('product-list__item-text')) {
        let product = productsList[Math.round(e.target.parentNode.dataset.productId)];
        toggleDone(product);
    } else {
        let product = productsList[Math.round(e.target.dataset.productId)];
        toggleDone(product);
    }
    updateShoppingList();
}