

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
    let cart = []
    const products = [
        { id: 1, name: 'PRODUCT 1', price: 100 },
        { id: 2, name: 'PRODUCT 2', price: 200 },
        { id: 3, name: 'PRODUCT 3', price: 300 },
    ];

    function displayProducts() {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Rate: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">ADD IN CART</button>
            `;
            productList.appendChild(productElement);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        displayCart();
    }

    function displayCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>Rate: ₹${item.price}</p>
            `;
            cartItems.appendChild(cartItemElement);
        });
    }

    checkoutButton.addEventListener('click', function() {
        alert('CHECKING NOW ');
        
    });

    displayProducts();
});
