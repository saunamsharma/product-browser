const apiUrl = 'https://your-backend-api-url.com';

async function getProducts() {
    const response = await fetch(`${apiUrl}/products`);
    return response.json();
}

async function getProductDetails(productId) {
    const response = await fetch(`${apiUrl}/products/${productId}`);
    return response.json();
}

async function addItemToCart(productId) {
    const response = await fetch(`${apiUrl}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
    });
    return response.json();
}

async function getCartItems() {
    const response = await fetch(`${apiUrl}/cart`);
    return response.json();
}

async function checkoutCart() {
    const response = await fetch(`${apiUrl}/checkout`, {
        method: 'POST'
    });
    return response.json();
}
