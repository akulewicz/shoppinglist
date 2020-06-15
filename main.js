const form = document.querySelector('.form--js');
const productsList = document.querySelector('.products-list--js');

const products = JSON.parse(localStorage.getItem('products')) || [];

const displayShoppingList = () => {
    productsList.textContent = '';
    products.forEach(product => {
        const li = document.createElement('li');
        const i = document.createElement('i');
        li.classList.add('products-list__item');
        i.classList.add('far', 'fa-trash-alt', 'products-list__delete-icon')
        li.textContent = product;
        li.append(i);
        productsList.prepend(li);
    })
}

const updateShoppingList = () => {
    localStorage.setItem('products', JSON.stringify(products));
    displayShoppingList();
}

const addProduct = newProduct => {
    if (newProduct.length) {
        products.push(newProduct);
    }
    form.reset();
    updateShoppingList();
}

const deleteProduct = product => {
    products.splice(products.indexOf(product.parentNode.textContent), 1);
    updateShoppingList(); 
}

if (products.length) {
    displayShoppingList();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const newProduct = product.value.trim();
    addProduct(newProduct);
})

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('products-list__delete-icon')) {
        const product = e.target;
        deleteProduct(product);
    }
})