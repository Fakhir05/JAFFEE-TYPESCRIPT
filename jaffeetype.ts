

// Interfaces


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}


interface ProductSection {
    category: string;
    items: Product[];
}


interface CartItem extends Product {
    qty: number;
}


interface Order {
    orderNo: number;
    date: string;
    time: string;
    payment: string;
    items: CartItem[];
    total: number;
}


// Dom Elements


const cartIcon = document.querySelector('.cart-icon') as HTMLElement;
const cartTab = document.querySelector('.cart') as HTMLElement;
const closeBtn = document.querySelector('.close-btn') as HTMLElement;
const loginPopup = document.querySelector(".login-overlay") as HTMLElement;
const openLoginBtns = document.querySelectorAll<HTMLElement>(".open-login");
const closeLogin = document.querySelector(".close-login") as HTMLElement;
const loginForm = document.querySelector(".login-form") as HTMLFormElement;
const registerForm = document.querySelector(".register-form") as HTMLFormElement;
const loginTitle = document.querySelector(".title-login") as HTMLElement;
const registerTitle = document.querySelector(".title-register") as HTMLElement;
const loginLink = document.getElementById("loginLink") as HTMLAnchorElement;
const registerLink = document.getElementById("registerLink") as HTMLAnchorElement;
const signInBtn = document.getElementById("SignInBtn") as HTMLButtonElement;
const signUpBtn = document.getElementById("SignUpBtn") as HTMLButtonElement;
const toaster = document.querySelector(".toaster") as HTMLElement;
const checkoutToast = document.querySelector(".checkout-toast") as HTMLElement;
const menuContainer = document.getElementById("menu-container") as HTMLElement;
const cartList = document.querySelector(".cart-list") as HTMLElement;
const hamburger = document.querySelector(".hamburger") as HTMLElement;
const mobileMenu = document.querySelector(".mobile-menu") as HTMLElement;
const hamburgerIcon = hamburger.querySelector("i") as HTMLElement;
const orderBtn = document.querySelector(".order-btn") as HTMLElement;
const menu = document.querySelector("#menu12") as HTMLElement;
const checkoutBtn = document.querySelector(".checkout-btn") as HTMLElement;
const checkoutOverlay = document.querySelector(".checkout-overlay") as HTMLElement;
const closeCheckout = document.querySelector(".close-checkout") as HTMLElement;
const checkoutCartItems = document.getElementById("checkout-cart-items") as HTMLElement;
const checkoutSubtotal = document.getElementById("checkout-subtotal") as HTMLElement;
const checkoutTotal = document.getElementById("checkout-total") as HTMLElement;
const zip = document.getElementById("zip") as HTMLInputElement;
const paymentMethods = document.querySelectorAll<HTMLInputElement>('input[name="payment"]');
const creditCardInfo = document.getElementById("credit-card-info") as HTMLElement;
const cardNumber = document.getElementById("card-number") as HTMLInputElement;
const expiry = document.getElementById("card-expiry") as HTMLInputElement;
const cvv = document.getElementById("card-cvv") as HTMLInputElement;
const codInfo = document.getElementById("cod-info") as HTMLElement;
const checkoutForm = document.getElementById("checkout-form") as HTMLFormElement;
const historyIcon = document.querySelector(".history-icon") as HTMLElement;
const historyOverlay = document.querySelector(".history-overlay") as HTMLElement;
const closeHistory = document.querySelector(".close-history") as HTMLElement;
const historyList = document.getElementById("history-list") as HTMLElement;
const clearHistoryBtn = document.querySelector(".clear-history-btn") as HTMLElement;
const policiesOverlay = document.querySelector(".policies-overlay") as HTMLElement;
const closePolicies = document.querySelector(".close-policies") as HTMLElement;
const openPoliciesBtns = document.querySelectorAll<HTMLElement>(".open-policies");
const termsBtn = document.getElementById("termsBtn") as HTMLElement;
const privacyBtn = document.getElementById("privacyBtn") as HTMLElement;
const termsContent = document.querySelector(".terms-content") as HTMLElement;
const privacyContent = document.querySelector(".privacy-content") as HTMLElement;
const footerTerms = document.querySelector(".footer-terms") as HTMLElement;
const footerPrivacy = document.querySelector(".footer-privacy") as HTMLElement;
const filterButtons = document.querySelectorAll<HTMLElement>(".filter-btn");
const footerCategoryBtns = document.querySelectorAll<HTMLElement>(".footer-category");
let registeredUser: string = "";
let registeredPass: string = "";


// cart tab open and close 


cartIcon.addEventListener('click', () => cartTab.classList.add('cart-active'));
cartIcon.addEventListener('click', (e: MouseEvent) => e.preventDefault());
closeBtn.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    cartTab.classList.remove('cart-active');
});


// products list


class ProductCatalog {

    constructor(public readonly sections: ProductSection[]) {}

    getAllProducts(): Product[] {
        return this.sections.flatMap(
            (section: ProductSection) => section.items
        );
    }

    findById(id: number): Product | undefined {
        return this.getAllProducts().find(
            (product: Product) => product.id === id
        );
    }

    renderMenu(container: HTMLElement): void {
        container.innerHTML = this.sections.map(
            (section: ProductSection) => `
                <div class="menu-category"
                    data-category="${section.category
                        .toLowerCase()
                        .replace(/\s+/g, '-')}">

                    <div class="menu1 text-center gap-2">

                        ${section.items.map(
                            (item: Product) => `
                                <div class="item11">

                                    <div class="item11-image">
                                        <img src="${item.image}">
                                    </div>

                                    <p>${item.name}</p>
                                    <p>Rs.${item.price}</p>

                                    <a class="btn add-cart"
                                        data-id="${item.id}">
                                        Add to cart
                                    </a>

                                </div>
                            `
                        ).join("")}

                    </div>
                </div>

                <br>
            `
        ).join("");
    }
}


const products: ProductSection[] = [
    {
        category: "High Volume",
        items: [
            { id: 1, name: "ESPRESSO", price: 765, image: "images/espresso-removebg-preview.png" },
            { id: 2, name: "AMERICANO", price: 1050, image: "images/Americano-removebg-preview.png" },
            { id: 3, name: "CAPPUCCINO", price: 1250, image: "images/Cappuccino-removebg-preview.png" },
            { id: 4, name: "CORTADO", price: 1100, image: "images/Cortado-removebg-preview.png" },
            { id: 5, name: "CAFE MOCHA", price: 1460, image: "images/Café_Mocha-removebg-preview.png" }
        ]
    },

    {
        category: "Summer Favourites",
        items: [
            { id: 6, name: "ICED AMERICANO", price: 1100, image: "images/Iced_Americano-removebg-preview.png" },
            { id: 7, name: "ICED LATTE", price: 1320, image: "images/Iced_Latte-removebg-preview.png" },
            { id: 8, name: "AFFOGATO", price: 1550, image: "images/Affogato-removebg-preview.png" },
            { id: 9, name: "CARAMEL FRAPPE", price: 1600, image: "images/Caramel_Frappé-removebg-preview.png" },
            { id: 10, name: "MATCHA FRAPPE", price: 1460, image: "images/Matcha_Frappé-removebg-preview.png" }
        ]
    },

    {
        category: "Brews & Teas",
        items: [
            { id: 11, name: "MATCHA LATTE", price: 1400, image: "images/Matcha_Latte-removebg-preview.png" },
            { id: 12, name: "CHAI TEA LATTE", price: 1400, image: "images/Chai_Tea_Latte-removebg-preview.png" },
            { id: 13, name: "FRENCH PRESS", price: 1100, image: "images/french-press-removebg-preview.png" },
            { id: 14, name: "HOT CHOCOLATE", price: 1200, image: "images/Hot_Chocolate-removebg-preview.png" },
            { id: 15, name: "GREEN TEA", price: 975, image: "images/Jasmine_Green_Tea-removebg-preview.png" }
        ]
    },

    {
        category: "Artisan Bakery",
        items: [
            { id: 16, name: "BUTTER CROISSANT", price: 1050, image: "images/Butter_Croissant-removebg-preview.png" },
            { id: 17, name: "ALMOND CROISSANT", price: 1250, image: "images/Almond_Croissant-removebg-preview.png" },
            { id: 18, name: "BLUEBERRY MUFFIN", price: 1100, image: "images/Blueberry_Muffin-removebg-preview.png" },
            { id: 19, name: "CINNAMON ROLL", price: 1250, image: "images/Cinnamon_Roll-removebg-preview.png" },
            { id: 20, name: "AVOCADO TOAST", price: 2360, image: "images/Sourdough_Avocado_Toast-removebg-preview.png" }
        ]
    }
];


const productCatalog = new ProductCatalog(products);


// add menu in html

productCatalog.renderMenu(menuContainer);


// Hide all menu categories by default

document.querySelectorAll<HTMLElement>(".menu-category").forEach(
    (category: HTMLElement) => {
        category.classList.add("hide-category");
    }
);


// Smooth Menu Category Filter

filterButtons.forEach((button: HTMLElement) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn: HTMLElement) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;
        const categories = document.querySelectorAll<HTMLElement>(".menu-category");

        categories.forEach((category: HTMLElement) => {
            category.style.animation = "fadeOut .3s ease forwards";
        });

        setTimeout(() => {

            categories.forEach((category: HTMLElement) => {

                if (filter === "all") {
                    category.classList.add("hide-category");

                } else if (category.dataset.category === filter) {
                    category.classList.remove("hide-category");

                } else {
                    category.classList.add("hide-category");
                }
            });

            document.querySelectorAll<HTMLElement>(
                ".menu-category:not(.hide-category)"
            ).forEach((category: HTMLElement) => {
                category.style.animation = "fadeCategory .4s ease";
            });

        }, 300);
    });
});


// add items in cart


class CartManager {

    public items: CartItem[] = [];

    add(product: Product): void {

        const existingItem = this.items.find(
            (item: CartItem) => item.id === product.id
        );

        if (existingItem) {
            existingItem.qty++;
        } else {
            this.items.push({
                ...product,
                qty: 1
            });
        }
    }

    increase(id: number): void {

        const item = this.items.find(
            (cartItem: CartItem) => cartItem.id === id
        );

        if (item) {
            item.qty++;
        }
    }

    decrease(id: number): void {

        const item = this.items.find(
            (cartItem: CartItem) => cartItem.id === id
        );

        if (!item) return;

        item.qty--;

        if (item.qty <= 0) {
            this.items = this.items.filter(
                (cartItem: CartItem) => cartItem.id !== id
            );
        }
    }

    clear(): void {
        this.items = [];
    }

    getTotal(): number {
        return this.items.reduce(
            (total: number, item: CartItem) =>
                total + item.price * item.qty,
            0
        );
    }

    getCount(): number {
        return this.items.reduce(
            (count: number, item: CartItem) =>
                count + item.qty,
            0
        );
    }
}


const cartManager = new CartManager();


document.addEventListener("click", (e: MouseEvent) => {

    const target = e.target as HTMLElement;

    if (!target.classList.contains("add-cart")) return;

    const id = Number(target.dataset.id);
    const product = productCatalog.findById(id);

    if (!product) return;

    cartManager.add(product);

    renderCart();
    showAddCartToast("Item added to cart!");
});


function renderCart(): void {

    cartList.innerHTML = "";

    cartManager.items.forEach((item: CartItem) => {

        cartList.innerHTML += `
        <div class="item">

            <div class="img-cont">
                <img src="${item.image}">
            </div>

            <div>
                <p>${item.name}</p>
                <h4>Rs.${item.price * item.qty}</h4>
            </div>

            <div class="flex">

                <a class="quantity-btn minus"
                    data-id="${item.id}">
                    <i class="fa-solid fa-minus"></i>
                </a>

                <h4 class="quantity-value">
                    ${item.qty}
                </h4>

                <a class="quantity-btn plus"
                    data-id="${item.id}">
                    <i class="fa-solid fa-plus"></i>
                </a>

            </div>

        </div>`;
    });

    (document.querySelector(".cart-total") as HTMLElement).innerHTML =
        `Rs. ${cartManager.getTotal()}`;

    (document.querySelector(".cart-value") as HTMLElement).innerHTML =
        cartManager.getCount().toString();
}


// plus and minus

document.addEventListener("click", (e: MouseEvent) => {

    const target = e.target as HTMLElement;

    const plusElement = target.closest(".plus") as HTMLElement | null;
    const minusElement = target.closest(".minus") as HTMLElement | null;

    if (plusElement) {

        const id = Number(plusElement.dataset.id);

        cartManager.increase(id);
        renderCart();
    }

    if (minusElement) {

        const id = Number(minusElement.dataset.id);

        cartManager.decrease(id);
        renderCart();
    }
});


// mobile menu hamburger active and deactive


hamburger.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    mobileMenu.classList.toggle("mobile-menu-active");

    if (mobileMenu.classList.contains("mobile-menu-active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-xmark");
    } else {
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    }
});

document.querySelectorAll<HTMLElement>(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu-active");
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    });
});

document.addEventListener("keydown", function (e: KeyboardEvent) {
    if (e.key === "Escape") {
        mobileMenu.classList.remove("mobile-menu-active");
        hamburgerIcon.classList.remove("fa-xmark");
        hamburgerIcon.classList.add("fa-bars");
    }
});


// smooth scrolling


orderBtn.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    menu.scrollIntoView({ behavior: "smooth" });
});


// login & register open & close


function openPopup(): void {
    loginPopup.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePopup(): void {
    loginPopup.classList.remove("active");
    document.body.style.overflow = "";
}


// sign in to login & register 


openLoginBtns.forEach(btn => {
    btn.addEventListener("click", function (e: MouseEvent) {
        e.preventDefault();
        openPopup();
    });
});

closeLogin.addEventListener("click", closePopup);


loginPopup.addEventListener("click", function (e: MouseEvent) {
    if (e.target === loginPopup) closePopup();
});


// escape key 


document.addEventListener("keydown", function (e: KeyboardEvent) {
    if (e.key === "Escape") {
        closePopup();
        closePoliciesPopup();
        closeHistory.click();
        closeCheckout.click();
        closeBtn.click();
    }
});


// login & register animation 


function showLogin(): void {
    loginForm.style.left = "50%";
    loginForm.style.opacity = "1";
    registerForm.style.left = "150%";
    registerForm.style.opacity = "0";
    (document.querySelector(".login-wrapper") as HTMLElement).style.height = "520px";
    loginTitle.style.top = "50%";
    loginTitle.style.opacity = "1";
    registerTitle.style.top = "120%";
    registerTitle.style.opacity = "0";
}



function showRegister(): void {
    loginForm.style.left = "-50%";
    loginForm.style.opacity = "0";
    registerForm.style.left = "50%";
    registerForm.style.opacity = "1";
    (document.querySelector(".login-wrapper") as HTMLElement).style.height = "610px";
    loginTitle.style.top = "-50%";
    loginTitle.style.opacity = "0";
    registerTitle.style.top = "50%";
    registerTitle.style.opacity = "1";
}


// login & and Register link 


registerLink.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();
    showRegister();
});



loginLink.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();
    showLogin();
});


// Notification 


function showToast(message: string): void {
    toaster.textContent = message;
    toaster.classList.add("toggle");
    setTimeout(() => {
        toaster.classList.remove("toggle");
    }, 3000);
}


function showCheckoutToast(message: string): void {
    if (!checkoutToast) return;
    checkoutToast.textContent = message;
    checkoutToast.classList.add("show");
    setTimeout((): void => {
        checkoutToast.classList.remove("show");
    }, 3000);
}


let addCartToastTimer: number;

function showAddCartToast(message: string): void {
    checkoutToast.classList.remove("show");
    clearTimeout(addCartToastTimer);
    setTimeout(() => {
        checkoutToast.textContent = message;
        checkoutToast.classList.add("show");
        addCartToastTimer = window.setTimeout(() => {
            checkoutToast.classList.remove("show");
        }, 3000);
    }, 80);
}


// Form Sign in button 


signInBtn.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();
    const username = (document.getElementById("user") as HTMLInputElement).value.trim();
    const password = (document.getElementById("pass") as HTMLInputElement).value.trim();

    if (username === "" || password === "") {
        showToast("Please fill all fields.");
        return;
    }

    if (username === registeredUser && password === registeredPass) {
        showToast("Login Successful!");
        (document.querySelector(".login-form") as HTMLFormElement).reset();
        setTimeout(() => closePopup(), 1200);
    } else {
        showToast("Account Not Found!");
    }
});


// Form Sign up button


signUpBtn.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();
    const username = (document.getElementById("reg-user") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const password = (document.getElementById("reg-pass") as HTMLInputElement).value.trim();
    const agree = document.getElementById("remember") as HTMLInputElement;

    if (username === "" || email === "" || password === "") {
        showToast("Please fill all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("Enter valid email.");
        return;
    }

    if (password.length < 6) {
        showToast("Password must be at least 6 characters.");
        return;
    }

    if (!agree.checked) {
        showToast("Accept Terms & Conditions.");
        return;
    }

    registeredUser = username;
    registeredPass = password;
    showToast("Registration Successful!");
    (document.querySelector(".register-form") as HTMLFormElement).reset();

    setTimeout(() => showLogin(), 1200);
});

showLogin();


// checkout system opener 


checkoutBtn.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    if (cartManager.items.length === 0) {
        showCheckoutToast("Your cart is empty!");
        return;
    }
    renderCheckout();
    checkoutOverlay.classList.add("active");
});


// checkout system closer 


closeCheckout.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    checkoutOverlay.classList.remove("active");
});

checkoutOverlay.addEventListener("click", (e: MouseEvent) => {
    if (e.target === checkoutOverlay) {
        checkoutOverlay.classList.remove("active");
    }
});


// display total amount


function renderCheckout(): void {
    checkoutCartItems.innerHTML = "";
    let subtotal = 0;

    cartManager.items.forEach((item: CartItem) => {
        subtotal += item.price * item.qty;
        checkoutCartItems.innerHTML += `
        <div class="checkout-cart-item">
            <div class="flex gap-2">
                <img src="${item.image}">
                <div>
                    <p>${item.name}</p>
                    <small>Qty : ${item.qty}</small>
                </div>
            </div>
            <strong>Rs.${item.price * item.qty}</strong>
        </div>`;
    });

    checkoutSubtotal.innerHTML = `Rs.${subtotal}`;
    checkoutTotal.innerHTML = `Rs.${subtotal + 250}`;
}


// History


class OrderHistoryManager {

    private readonly storageKey: string = "orderHistory";

    getOrders(): Order[] {

        return JSON.parse(
            localStorage.getItem(this.storageKey) || "[]"
        ) as Order[];
    }

    saveOrder(order: Order): void {

        const orders = this.getOrders();

        orders.push(order);

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(orders)
        );
    }

    findOrder(orderNo: number): Order | undefined {

        return this.getOrders().find(
            (order: Order) => order.orderNo === orderNo
        );
    }

    clear(): void {

        localStorage.removeItem(this.storageKey);
    }

    getNextOrderNumber(): number {

        return this.getOrders().length + 1001;
    }
}


const orderHistoryManager = new OrderHistoryManager();


function renderHistory(): void {

    const orders = orderHistoryManager.getOrders();

    historyList.innerHTML = "";

    if (orders.length === 0) {

        historyList.innerHTML = "<p>No orders yet.</p>";

        return;
    }

    orders.slice().reverse().forEach((order: Order) => {

        historyList.innerHTML += `
        <div class="history-order">

            <h3>Order #${order.orderNo}</h3>

            <p>
                <strong>Date:</strong> ${order.date}
            </p>

            <p>
                <strong>Time:</strong> ${order.time}
            </p>

            <p>
                <strong>Payment:</strong> ${order.payment}
            </p>

            <hr>

            ${order.items.map((item: CartItem) => `
                <div class="history-item">

                    <span>
                        ${item.name} × ${item.qty}
                    </span>

                    <span>
                        Rs.${item.price * item.qty}
                    </span>

                </div>
            `).join("")}

            <hr>

            <h4>Total : Rs.${order.total}</h4>

            <div style="margin-top:15px;display:flex;gap:10px;">

                <button
                    class="btn repeat-order"
                    data-order="${order.orderNo}">
                    Repeat Order
                </button>

            </div>

        </div>`;
    });
}


historyIcon.addEventListener("click", (e: MouseEvent) => {

    e.preventDefault();

    renderHistory();

    historyOverlay.classList.add("active");
});


closeHistory.addEventListener("click", (e: MouseEvent) => {

    e.preventDefault();

    historyOverlay.classList.remove("active");
});


historyOverlay.addEventListener("click", (e: MouseEvent) => {

    if (e.target === historyOverlay) {
        historyOverlay.classList.remove("active");
    }
});


clearHistoryBtn.addEventListener("click", () => {

    const history = orderHistoryManager.getOrders();

    if (history.length === 0) {

        showCheckoutToast("History is empty!");

        return;
    }

    orderHistoryManager.clear();

    renderHistory();

    showCheckoutToast("History cleared!");
});


// zip code 


zip.addEventListener("input", () => {
    zip.value = zip.value.replace(/\D/g, "");
});


// payment methods 


paymentMethods.forEach((method: HTMLInputElement) => {
    method.addEventListener("change", () => {
        if (method.value === "card" && method.checked) {
            creditCardInfo.classList.remove("hidden");
            codInfo.classList.add("hidden");
        }
        if (method.value === "cod" && method.checked) {
            creditCardInfo.classList.add("hidden");
            codInfo.classList.remove("hidden");
        }
    });
});


// card numbers 


cardNumber.addEventListener("input", () => {
    let value = cardNumber.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    value = value.match(/.{1,4}/g)?.join("-") || "";
    cardNumber.value = value;
});


// expiry date


expiry.addEventListener("input", () => {
    let value = expiry.value.replace(/\D/g, "");
    value = value.substring(0, 4);
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }
    expiry.value = value;
});


// CVV


cvv.addEventListener("input", () => {
    cvv.value = cvv.value.replace(/\D/g, "");
});


// submit form 


checkoutForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    if (cartManager.items.length === 0) {
        showCheckoutToast("Your cart is empty!");
        return;
    }

    const inputs = checkoutForm.querySelectorAll<HTMLInputElement>("input[required]");

    for (const input of inputs) {

        // When COD is selected

        if (input.offsetParent === null) continue;

        if (!input.checkValidity()) {
            showCheckoutToast("Please complete all required information.");
            input.focus();
            return;
        }
    }


    // When Credit Card is selected


    const selectedPayment = (document.querySelector('input[name="payment"]:checked') as HTMLInputElement).value;

    if (selectedPayment === "card") {

        // Card Number

        if (cardNumber.value.length !== 19) {
            showCheckoutToast("Enter a valid card number.");
            cardNumber.focus();
            return;
        }

        // Expiry

        const exp = expiry.value.split("/");
        const month = Number(exp[0]);
        const year = Number(exp[1]);
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear() % 100;

        if (expiry.value.length !== 5) {
            showCheckoutToast("Enter expiry in MM/YY format.");
            expiry.focus();
            return;
        }

        if (month < 1 || month > 12) {
            showCheckoutToast("Expiry month must be between 01 and 12.");
            expiry.focus();
            return;
        }

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            showCheckoutToast("Your card has expired.");
            expiry.focus();
            return;
        }

        // CVV

        if (cvv.value.length !== 3) {
            showCheckoutToast("Enter a valid CVV.");
            cvv.focus();
            return;
        }
    }

    setTimeout(() => {
        showCheckoutToast("Thank you for ordering from JAFFEE!");
    }, 300);

    // SAVE ORDER

    const now = new Date();

    const order: Order = {
        orderNo: orderHistoryManager.getNextOrderNumber(),
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        payment: selectedPayment === "card" ? "Credit Card" : "Cash On Delivery",
        items: [...cartManager.items],
        total: cartManager.getTotal() + 250
    };

    orderHistoryManager.saveOrder(order);

    cartManager.clear();
    renderCart();
    cartTab.classList.remove("cart-active");
    checkoutOverlay.classList.remove("active");
    checkoutForm.reset();
    creditCardInfo.classList.remove("hidden");
    codInfo.classList.add("hidden");
});

document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains("repeat-order")) return;
    
    const orderNo = Number(target.dataset.order);
    const history: Order[] = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    const order = history.find(o => o.orderNo === orderNo);
    
    if (!order) return;
    cartManager.clear();

    cartManager.clear();

    order.items.forEach((item: CartItem) => {
        cartManager.items.push({ ...item });
    });

    renderCart();
    historyOverlay.classList.remove("active");
    cartTab.classList.add("cart-active");
    showCheckoutToast("Previous order added to cart!");
});


// Open Policies Popup


function openPolicies(): void {
    policiesOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}


// Close Policies Popup


function closePoliciesPopup(): void {
    policiesOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

openPoliciesBtns.forEach(button => {
    button.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        openPolicies();
        showTerms();
    });
});

closePolicies.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    closePoliciesPopup();
});

policiesOverlay.addEventListener("click", (e: MouseEvent) => {
    if (e.target === policiesOverlay) {
        closePoliciesPopup();
    }
});


// terms & conditions content


function showTerms(): void {
    termsContent.style.display = "block";
    privacyContent.style.display = "none";
    termsBtn.classList.add("active-policy");
    privacyBtn.classList.remove("active-policy");
}


// Privacy policy content


function showPrivacy(): void {
    privacyContent.style.display = "block";
    termsContent.style.display = "none";
    privacyBtn.classList.add("active-policy");
    termsBtn.classList.remove("active-policy");
}

termsBtn.addEventListener("click", showTerms);
privacyBtn.addEventListener("click", showPrivacy);


// Footer Buttons


footerTerms.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    openPolicies();
    showTerms();
});

footerPrivacy.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    openPolicies();
    showPrivacy();
});


// Footer Category Menu Buttons


footerCategoryBtns.forEach(btn => {
    btn.addEventListener("click", function (this: HTMLElement, e: MouseEvent) {
        e.preventDefault();

        // Scroll to menu

        menu.scrollIntoView({ behavior: "smooth" });
        const selectedCategory = this.dataset.filter;

        // Remove active class

        filterButtons.forEach((button: HTMLElement) => {
            button.classList.remove("active");
        });

        // Activate matching top button

        filterButtons.forEach((button: HTMLElement) => {
            if (button.dataset.filter === selectedCategory) {
                button.classList.add("active");
            }
        });

        const categories = document.querySelectorAll<HTMLElement>(".menu-category");
        categories.forEach((category: HTMLElement) => {
            if (category.dataset.category === selectedCategory) {
                category.classList.remove("hide-category");
                category.style.animation = "fadeCategory .4s ease";
            } else {
                category.classList.add("hide-category");
            }
        });
    });
});