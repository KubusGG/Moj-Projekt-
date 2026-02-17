// --- 1. LISTA PRODUKTÓW (Poprawione zdjęcia - Final Version) ---
const products = [
    { 
        id: 1, 
        name: "Razer Blade 15", 
        category: "Laptopy", 
        price: 9499, 
        // Ciemny laptop gamingowy
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 2, 
        name: "iPhone 15 Pro", 
        category: "Smartfony", 
        price: 4200, 
        // iPhone tytanowy
        image: "https://www.bing.com/th?id=OPEC.K4ZvdF0BBSyl7Q474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1&o=2&bw=6&bc=FFFFFF"
    },
    { 
        id: 4, 
        name: "Klawiatura Mechaniczna", 
        category: "Gaming", 
        price: 499, 
        // Klawiatura RGB z bliska
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 5, 
        name: "Samsung S24 Ultra", 
        category: "Smartfony", 
        price: 6499, 
        // Smartfon z rysikiem
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 6, 
        name: "MacBook Air M3", 
        category: "Laptopy", 
        price: 7999, 
        // Srebrny MacBook
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 7, 
        name: "Konsola PS5", 
        category: "Gaming", 
        price: 2699, 
        // Biała konsola
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 8, 
        name: "Głośnik JBL Pulse", 
        category: "Audio", 
        price: 999, 
        // Świecący głośnik
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 9, 
        name: "Pad DualSense", 
        category: "Gaming", 
        price: 349, 
        // Pad z bliska
        image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 10, 
        name: "Mikrofon Streaming", 
        category: "Audio", 
        price: 649, 
        // Mikrofon studyjny
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80" 
    },
    { 
        id: 11, 
        name: "Meta Quest 3 VR", 
        category: "Gaming", 
        price: 2299, 
        // Gogle VR leżące na stole (wyraźny sprzęt)
        image: "https://tse1.mm.bing.net/th/id/OIP.7zrYSxm1EcRUlWrVCWcc4AHaD3?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
        id: 12, 
        name: "Mysz Logitech G", 
        category: "Gaming", 
        price: 249, 
        // Myszka gamingowa
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80" 
    }
];

let cart = [];

// --- 2. START APLIKACJI ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); 
    updateCartUI();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            renderProducts(filteredProducts);
        });
    }
});

// --- 3. RYSOWANIE KAFELKÓW ---
function renderProducts(list) {
    const grid = document.getElementById('products-grid');
    if (!grid) return; 
    grid.innerHTML = "";
    
    if (list.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #888; font-size: 1.2rem;'>Nie znaleziono produktów 😔</p>";
        return;
    }

    list.forEach(p => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <div class="img-box">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <h3>${p.name}</h3>
            <p style="color:#888; font-size:0.9rem">${p.category}</p>
            <div class="price-row">
                <span class="price">${formatPrice(p.price)}</span>
                <button class="add-btn" onclick="addToCart(${p.id})">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- 4. KOSZYK ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    showToast(`Dodano: ${product.name}`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const totalCount = document.getElementById('cart-total-count');
    const container = document.getElementById('cart-items');
    const finalPrice = document.getElementById('final-price');

    if (badge) badge.innerText = cart.length;
    if (totalCount) totalCount.innerText = `(${cart.length})`;

    let total = 0;
    
    if (container) {
        container.innerHTML = "";
        if (cart.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#888; margin-top:20px;">Twój koszyk jest pusty</p>`;
        } else {
            cart.forEach((item, index) => {
                total += item.price;
                container.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="">
                        <div>
                            <h4 style="font-size:0.9rem; margin-bottom:5px;">${item.name}</h4>
                            <b>${formatPrice(item.price)}</b>
                            <br>
                            <span class="remove-item" onclick="removeFromCart(${index})">Usuń</span>
                        </div>
                    </div>
                `;
            });
        }
    }

    if (finalPrice) finalPrice.innerText = formatPrice(total);
}

// --- 5. POMOCNICZE ---
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-check"></i> ${message}`;
    container.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

function filterProducts(category, btn) {
    document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const searchInput = document.getElementById('search-input');
    if(searchInput) searchInput.value = ""; 

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function formatPrice(amount) {
    return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(amount);
}

function toggleKoszyk() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    }
}

function checkout() {
    if (cart.length === 0) return alert("Koszyk jest pusty!");
    alert("Dzięki za zakupy! To tylko wersja demo.");
    cart = [];
    updateCartUI();
    toggleKoszyk();
}