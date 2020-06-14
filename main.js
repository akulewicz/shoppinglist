const form = document.querySelector('.form--js');
const productsList = document.querySelector('.products-list--js');
const products = [];

const displayShoppingList = () => {
    productsList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('products-list__item');
        li.innerHTML = `${product}<i class="far fa-trash-alt products-list__delete-icon"></i>`;
        productsList.prepend(li);
    })
}

const addProduct = (newProduct) => {
    if (newProduct.length) {
        products.push(newProduct);
    }
    form.reset();
    displayShoppingList();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const newProduct = product.value.trim();
    addProduct(newProduct);
})

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('products-list__delete-icon')) {
        products.splice(products.indexOf(e.target.parentNode), 1);
    }
    displayShoppingList();
})