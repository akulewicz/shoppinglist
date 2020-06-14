const form = document.querySelector('.form--js');

const products = [];

const addProduct = (newProduct) => {
    if(newProduct.length) {
        products.push(newProduct);
    }
    form.reset();
    console.log(products);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const newProduct = product.value.trim();
    addProduct(newProduct);
})