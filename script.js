// Array of products
const products = [{
        id: 1,
        name: "iPhone 14 Pro",
        price: 999,
        image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500"
    },
    {
        id: 2,
        name: "iPhone 14",
        price: 799,
        image: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/320937527_1509193299587436_8456292887926143724_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeGItuG4QJ5krXXO6BmuU_d88GHXMDtIh0_wYdcwO0iHT6W15NqKuhKDdfZnvznyoVqm15VcFi__m-wnjL3x1Vvj&_nc_ohc=zhDfTKINrZEQ7kNvgFc4mZu&_nc_zt=23&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AQH1qi79b7B_00k2rUVk9jx&oh=00_AYDhCr6u27H_izTVy5pjFjmqlHKBl5rkw-BSXKH8eoCOvA&oe=672AF526"
    },
    {
        id: 3,
        name: "iPhone 13",
        price: 599,
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500"
    },
];

// Array to store items added to the cart
const cart = [];

// Function to display the products on the page
function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        // Create a div for each product
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Function to update the cart count in the cart icon
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Function to toggle the cart overlay visibility
function toggleCart() {
    const cartOverlay = document.getElementById("cart-overlay");
    cartOverlay.style.display = cartOverlay.style.display === "flex" ? "none" : "flex";
    displayCartItems();
}

// Function to display items in the cart
function displayCartItems() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear the existing cart items
    cart.forEach(item => {
        // Create a div for each cart item
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemDiv);
    });
}

// Run the displayProducts function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayProducts);