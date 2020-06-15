const form = document.querySelector('.form--js');
const productsList = document.querySelector('.products-list--js');

const products = JSON.parse(localStorage.getItem('products'));

const displayShoppingList = () => {
    productsList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('products-list__item');
        li.innerHTML = `${product}<i class="far fa-trash-alt products-list__delete-icon"></i>`;
        productsList.prepend(li);
    })
}

const updateShoppingList = () => {
    localStorage.setItem('products', JSON.stringify(products));
    displayShoppingList();
}

const addProduct = (newProduct) => {
    if (newProduct.length) {
        products.push(newProduct);
    }
    form.reset();
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
        products.splice(products.indexOf(e.target.parentNode.textContent), 1);
    }
    updateShoppingList();  
})