const form = document.querySelector('.form--js');
const productsList = document.querySelector('.products-list--js');
const products = [];

const displayShoppingList = () => {
    let html = '';
    products.forEach(product => {
        html += `<li class="products-list__item">${product}<i class="far fa-trash-alt delete"></i></li>`;
    })
    productsList.innerHTML = html;
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