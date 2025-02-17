// Fetch product data
const productList = document.getElementById('product-list');
const cartModal = document.getElementById('cart-modal');
const cartCount = document.getElementById('cart-count');
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
let cart = [];

// Product display
function fetchProducts() {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
        });
}

// Add product to cart
function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

// Update cart UI
function updateCart() {
    cartCount.textContent = cart.length;
    updateCartItems();
    updateTotalPrice();
}

// Update cart items display
function updateCartItems() {
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <div>${item.name}</div>
            <div>$${item.price} x <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></div>
            <button onclick="removeItemFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });
}

// Update item quantity
function updateQuantity(id, quantity) {
    if (quantity < 1) {
        alert("Quantity cannot be less than 1.");
        return;
    }
    const item = cart.find(item => item.id === id);
    item.quantity = parseInt(quantity);
    updateCart();
}

// Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update total price
function updateTotalPrice() {
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalPriceSpan.textContent = total.toFixed(2);
}

// Show/Hide cart modal
document.getElementById('view-cart-btn').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

document.getElementById('close-cart-btn').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Clear cart
document.getElementById('clear-cart-btn').addEventListener('click', () => {
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

// Checkout process
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout process is not implemented in this example.');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

// Initialize
fetchProducts();
