    var products = [{
            id: 1,
            name: 'Yellow Nutritive Mask/Coconut mask1',
            price: 2323,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        },
        {
            id: 2,
            name: 'Yellow Nutritive Mask/Coconut mask2',
            price: 2333,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        },
        {
            id: 3,
            name: 'Yellow Nutritive Mask/Coconut mask3',
            price: 1290,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 4,
            name: 'Yellow Nutritive Mask/Coconut mask41',
            price: 1423,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 5,
            name: 'Yellow Nutritive Mask/Coconut mask51',
            price: 2309,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 6,
            name: 'Yellow Nutritive Mask/Coconut mask6',
            price: 7424,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 7,
            name: 'Yellow Nutritive Mask/Coconut mask7',
            price: 3244,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 8,
            name: 'Yellow Nutritive Mask/Coconut mask8',
            price: 9331,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 9,
            name: 'Yellow Nutritive Mask/Coconut mask9',
            price: 3232,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }, {
            id: 10,
            name: 'Yellow Nutritive Mask/Coconut mask10',
            price: 3091,
            about: 'Маска поживна ефективно впливає на структуру сухих і схильних до ламкості волосся.',
            catagory: 'Маска',
            img: './img/product_1.webp'
        }
    ];
    var productDetails = {
        1: {
            description: 'Це опис товару 1'
        },
        2: {
            description: 'Це опис товару 2'
        },
        3: {
            description: 'Це опис товару 3'
        },
        4: {
            description: 'Це опис товару 4'
        },
        5: {
            description: 'Це опис товару 5'
        },
    };

    function getRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Кількість товарів, яку ви хочете вивести
    var numberOfProductsToShow = 3;

    // Вибираємо рандомні товари
    var randomProducts = [];
    while (randomProducts.length < numberOfProductsToShow) {
        var randomIndex = getRandomIndex(0, products.length - 1);
        randomProducts.push(products[randomIndex]);
    }

    // Виводимо товари в HTML
    var productsContainer = document.getElementById('top__main');
    randomProducts.forEach(function (product) {
        var productElement = document.createElement('div');
        productElement.innerHTML = `<div class="product-card">
    <div class="badge">Топ</div>
    <div class="product-tumb">
        <img src="./img/product_1.webp" alt="">
    </div>
    <div class="product-details">
        <span class="product-catagory">${product.catagory}</span>
        <h4><a href="">${product.name}</a></h4>
        <p>${product.about}</p>
        <div class="product-bottom-details">
            <div class="product-price"><small>600UAN</small>${product.price}UAN</div>
            <div class="product-links">
                <button onclick="addToCart(${product.id})"><svg xmlns="http://www.w3.org/2000/svg" width="30"
                        height="26" viewBox="0 0 30 26" fill="none">
                        <path
                            d="M12.0281 24C12.0281 24.3956 11.9108 24.7822 11.691 25.1111C11.4713 25.44 11.1589 25.6964 10.7934 25.8478C10.428 25.9991 10.0259 26.0387 9.6379 25.9616C9.24993 25.8844 8.89357 25.6939 8.61386 25.4142C8.33416 25.1345 8.14368 24.7781 8.06651 24.3902C7.98934 24.0022 8.02894 23.6001 8.18032 23.2346C8.33169 22.8692 8.58804 22.5568 8.91694 22.3371C9.24583 22.1173 9.63251 22 10.0281 22C10.5585 22 11.0672 22.2107 11.4423 22.5858C11.8174 22.9609 12.0281 23.4696 12.0281 24ZM23.0281 22C22.6325 22 22.2458 22.1173 21.9169 22.3371C21.588 22.5568 21.3317 22.8692 21.1803 23.2346C21.0289 23.6001 20.9893 24.0022 21.0665 24.3902C21.1437 24.7781 21.3342 25.1345 21.6139 25.4142C21.8936 25.6939 22.2499 25.8844 22.6379 25.9616C23.0259 26.0387 23.428 25.9991 23.7934 25.8478C24.1589 25.6964 24.4713 25.44 24.691 25.1111C24.9108 24.7822 25.0281 24.3956 25.0281 24C25.0281 23.4696 24.8174 22.9609 24.4423 22.5858C24.0672 22.2107 23.5585 22 23.0281 22ZM28.9843 6.29375L25.4181 17.8825C25.2313 18.4968 24.8515 19.0346 24.3349 19.416C23.8184 19.7975 23.1927 20.0022 22.5506 20H10.5368C9.88554 19.9976 9.25258 19.7842 8.73271 19.3919C8.21285 18.9996 7.83406 18.4494 7.65308 17.8237L3.13058 2H1.02808C0.76286 2 0.508506 1.89464 0.320969 1.70711C0.133433 1.51957 0.0280762 1.26522 0.0280762 1C0.0280762 0.734784 0.133433 0.48043 0.320969 0.292893C0.508506 0.105357 0.76286 0 1.02808 0H3.13058C3.56484 0.00144056 3.98695 0.143485 4.33374 0.404872C4.68053 0.666259 4.93334 1.03293 5.05433 1.45L6.06808 5H28.0281C28.1846 4.99994 28.3389 5.03661 28.4786 5.10706C28.6184 5.17751 28.7396 5.27976 28.8326 5.40561C28.9256 5.53145 28.9878 5.67737 29.0142 5.83163C29.0405 5.98588 29.0303 6.14417 28.9843 6.29375ZM26.6743 7H6.63933L9.57558 17.275C9.63531 17.4839 9.76143 17.6676 9.93486 17.7984C10.1083 17.9292 10.3196 18 10.5368 18H22.5506C22.7646 18.0001 22.9729 17.9315 23.145 17.8044C23.3172 17.6773 23.444 17.4983 23.5068 17.2938L26.6743 7Z"
                            fill="black" />
                    </svg></li></button>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
</div>`;
        productsContainer.appendChild(productElement);
    });

    // Функція для отримання даних з Local Storage
    function getCartFromLocalStorage() {
        var cartString = localStorage.getItem('cart');
        return cartString ? JSON.parse(cartString) : [];
    }

    // Функція для збереження даних в Local Storage
    function saveCartToLocalStorage(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    async function renderCart() {
        var cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = '';

        try {
            var cart = await getCartFromLocalStorage();
            cart.forEach(function (item) {
                var cartItemElement = document.createElement('li');
                cartItemElement.className = 'cartItem';
                cartItemElement.innerHTML = `                    
                    <div class="popup__main">
                        <img src="${item.img}" alt="">
                        <div class="popup__main-text">
                            <h3>ID: ${item.id}</h3>
                            <h2>${item.name}</h2>
                            <h3 id="price_${item.id}">${item.price * item.quantity}</h3>
                        </div>
                        <div class="popup__main-quantity">
                            <button onclick="increaseQuantity(${item.id})">+</button>
                            <h3 id="quantity_${item.id}">${item.quantity}</h3>
                            <button onclick="decreaseQuantity(${item.id})">-</button>

                            <button class="delete"  onclick="deleteQuantity(${item.id})">x</button>
                        </div>
                    </div>`;
                cartItemsContainer.appendChild(cartItemElement);
                displayCartItemCount();
                // console.log(int(cartItemElement.length)) 
                // var itemCount = cart.reduce((total, item) => total + item.quantity, 0);
            });
        } catch (error) {
            console.error('Помилка при завантаженні кошика:', error);
        }
    }

    async function displayCartItemCount() {
        let countCArt = document.querySelector(".countCArt")
        try {
            var cart = await getCartFromLocalStorage();
            var itemCount = cart.reduce((total, item) => total + item.quantity, 0);
            countCArt.innerHTML = ``;
            countCArt.innerHTML = `${itemCount}`;

            console.log('Кількість елементів в кошику:', itemCount);
        } catch (error) {
            console.error('Помилка при отриманні кошика:', error);
        }
    }

    displayCartItemCount();

    // Викликати цю функцію, коли ви хочете вивести кількість елементів в кошику



    var itemsPerPage;

    function setItemsPerPage() {
        if (window.matchMedia("(max-width: 650px)").matches) {
            itemsPerPage = 4;
        } else {
            itemsPerPage = 6;
        }
    } // // Викликати функцію при завантаженні сторінки та при зміні розмірів екрану
    // window.addEventListener('DOMContentLoaded', setItemsPerPage);
    // window.addEventListener('resize', setItemsPerPage);
    var currentPage = 1;

    setItemsPerPage()
    // Функція для виводу товарів в HTML

    // Функція для рендерингу пагінації

    // Функція для переходу на попередню сторінку
    // function prevPage() {
    //     if (currentPage > 1) {
    //         currentPage--;
    //         renderProducts();
    //     }
    // }

    // // Функція для переходу на наступну сторінку
    // function nextPage() {
    //     var totalPages = Math.ceil(products.length / itemsPerPage);
    //     if (currentPage < totalPages) {
    //         currentPage++;
    //         renderProducts();
    //     }
    // }

    // function prevPage() {
    //     if (currentPage > 1) {
    //         currentPage--;
    //         if (searchInput !== '') {
    //             // Якщо введений пошук, викликаємо searchAndSort
    //             searchAndSort();
    //         } else {
    //             // Якщо не введений пошук, викликаємо renderProducts
    //             renderProducts();
    //         }
    //     }
    // }

    // // Функція для переходу на наступну сторінку
    // function nextPage() {
    //     var totalPages = Math.ceil(products.length / itemsPerPage);
    //     if (currentPage < totalPages) {
    //         currentPage++;
    //         if (searchInput !== '') {
    //             // Якщо введений пошук, викликаємо searchAndSort
    //             searchAndSort();
    //         } else {
    //             // Якщо не введений пошук, викликаємо renderProducts
    //             renderProducts();
    //         }
    //     }
    //     updatePaginationButtonsVisibility();
    // }

    // function nextPageFilter(products) {
    //     var totalPages = Math.ceil(products.length / itemsPerPage);
    //     console.log(totalPages - 1)
    //     if (currentPage < totalPages - 1) {
    //         currentPage++;
    //         if (searchInput !== '') {
    //             // Якщо введений пошук, викликаємо searchAndSort
    //             searchAndSort();
    //         } else {
    //             // Якщо не введений пошук, викликаємо renderProducts
    //             renderProducts();
    //         }
    //     }
    //     // updatePaginationButtonsVisibility();
    // }



    // Оновлення видимості стрілок пагінації
    // function updatePaginationButtonsVisibility() {
    //     var totalPages = Math.ceil(products.length / itemsPerPage);
    //     var prevButton = document.getElementById('prev-button');
    //     var nextButton = document.getElementById('next-button');

    //     // Перевіряємо, чи потрібно приховати або показати стрілку "Previous"
    //     if (currentPage === 1) {
    //         prevButton.style.display = 'none';
    //     } else {
    //         prevButton.style.display = 'block';
    //     }

    //     // Перевіряємо, чи потрібно приховати або показати стрілку "Next"
    //     if (currentPage === totalPages - 1) {
    //         nextButton.style.display = 'none';
    //     } else {
    //         nextButton.style.display = 'block';
    //     }
    // }

    // Функція для оновлення інформації про поточну сторінку та загальну кількість сторінок

    function smt() {
        Swal.fire({
            title: "Все Класно!!!",
            text: "Товар вже в кошику!!!",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Далі за покупками",
            cancelButtonText: 'В кошик',
            reverseButtons: true
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                toggleCart()
            }
        });
    }

    // Функція для додавання товару в кошик
    async function addToCart(productId) {
        var cart = await getCartFromLocalStorage();
        var product = products.find(item => item.id === productId);

        if (product) {
            var existingCartItem = cart.find(item => item.id === productId);

            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    img: product.img,
                    quantity: 1
                });
            }

            // Зберігаємо кошик в Local Storage
            await saveCartToLocalStorage(cart);
            // Оновлюємо вивід кошика
            renderCart();
        }
        smt()
    }

    // Функція для отримання даних з Local Storage

    // Функція для виводу кошика

    // Функція renderCart
    // Оновлення кількості товару
    async function updateQuantityDisplay(productId) {
        var quantityElement = document.getElementById(`quantity_${productId}`);
        if (quantityElement) {
            var cart = await getCartFromLocalStorage();
            var cartItem = cart.find(item => item.id === productId);

            if (cartItem) {
                quantityElement.textContent = cartItem.quantity;
                quantityElement.textContent = cartItem.quantity;
            }
        }
    }

    // Функція для збільшення кількості товару в кошику
    // Решта коду...

    // Функція для збільшення кількості товару в кошику
    async function increaseQuantity(productId) {
        var cart = await getCartFromLocalStorage();
        var quantityElement = document.getElementById(`quantity_${productId}`);
        var priceElement = document.getElementById(`price_${productId}`);
        var cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
            console.log(productId)
            console.log(quantityElement)
            // await saveCartToLocalStorage(cart);
            // updateQuantityDisplay(productId);
            quantityElement.textContent = cartItem.quantity;
            priceElement.textContent = cartItem.quantity * cartItem.price;
            // console.log(quantityElement.textContent)
            // await updateQuantityDisplay(productId)
            updateTotalPrice(cart);
        }
        await saveCartToLocalStorage(cart);
    }

    // Функція для зменшення кількості товару в кошику
    async function decreaseQuantity(productId) {
        var cart = await getCartFromLocalStorage();
        var quantityElement = document.getElementById(`quantity_${productId}`);
        var priceElement = document.getElementById(`price_${productId}`);
        var cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                quantityElement.textContent = cartItem.quantity;
                priceElement.textContent = cartItem.quantity * cartItem.price;
            } else {
                cart = cart.filter(item => item.id !== productId);
                await saveCartToLocalStorage(cart);
                renderCart()
            }

            await saveCartToLocalStorage(cart);
            updateTotalPrice(cart);
            // updateQuantityDisplay(productId);
        }
    }

    // Функція для видалення товару з кошика
    async function deleteQuantity(productId) {
        var cart = await getCartFromLocalStorage();
        // var cartItem = cart.find(item => item.id === productId);
        // delete productId
        // await saveCartToLocalStorage(updatedCart);
        // updateQuantityDisplay(productId);
        cart = cart.filter(item => item.id !== productId);
        await saveCartToLocalStorage(cart);
        renderCart()
    }
    // Функція для отримання кошика з Local Storage
    function getCartFromLocalStorage() {
        return new Promise(resolve => {
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            resolve(cart);
        });
    }

    // Функція для збереження кошика в Local Storage та виклику колбека
    function saveCartToLocalStorage(cart, callback) {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (callback) {
            callback();
        }
    }
    // Вивести початковий список товарів та кошик
    renderProducts();


    function toggleCart() {
        var cartPopup = document.getElementById('cartPopup');
        var overlay = document.getElementById('overlay');
        if (cartPopup.style.display === 'none' || cartPopup.style.display === '') {
            cartPopup.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            cartPopup.style.display = 'none';
            overlay.style.display = 'none';
        }

        renderCart()
    }

    // Функція для закриття popup кошика та фону
    function closeCart() {
        var cartPopup = document.getElementById('cartPopup');
        var overlay = document.getElementById('overlay');
        cartPopup.style.display = 'none';
        overlay.style.display = 'none';
    }

    function calculateTotalPrice(cart) {
        var total = 0;

        cart.forEach(function (item) {
            total += item.price * item.quantity;
        });

        return total;
    }

    // Функція для оновлення загальної ціни
    function updateTotalPrice(cart) {
        var total = calculateTotalPrice(cart);
        console.log('Загальна ціна:', total);
        // Ваш код для оновлення загальної ціни на сторінці
        document.querySelector('#totalPrice').innerText = `Загальна ціна: ${total}`;
    }

    function sort() {
        searchAndSort()
        sortProducts()
    }

    function renderPagination() {
        var paginationButtonsContainer = document.getElementById('paginationButtons');

        // Визначте загальну кількість сторінок
        var totalPages = Math.ceil(products.length / itemsPerPage);
        renderPaginationArrow(totalPages)

        // Виведіть кнопки для кожної сторінки
        paginationButtonsContainer.innerHTML = '';
        for (var i = 1; i <= totalPages; i++) {
            var button = document.createElement('button');
            button.innerText = i;
            button.onclick = function () {
                currentPage = parseInt(this.innerText);
                renderProducts();
            };
            if (i === currentPage) {
                button.classList.add('active');
            }
            paginationButtonsContainer.appendChild(button);
        }
    }

    function renderPaginationArrow(totalPages) {

        var prev_block = document.querySelector('.prev-block')
        var next_block = document.querySelector('.next-block')

        prev_block.innerHTML = ``;
        next_block.innerHTML = ``;

        prev_block.innerHTML = `                    
        <button class="prev" class="pagination-button" id="prev-button"
                        aria-label="Previous page" title="Previous page">
                        &lt;
                    </button>`;

        next_block.innerHTML = `<div class="next-block">
                    <button class="next" class="pagination-button" id="next-button"
                        aria-label="Next page" title="Next page">
                        &gt;
                    </button>
                </div>`;

        prev_block.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                if (searchInput !== '') {
                    // Якщо введений пошук, викликаємо searchAndSort
                    searchAndSort();
                    console.log(currentPage)
                } else {
                    // Якщо не введений пошук, викликаємо renderProducts
                    renderProducts();
                    console.log(currentPage)
                }
            }

            // Функція для переходу на наступну сторінку
            updatePaginationButtonsVisibility();
        })

        next_block.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                if (searchInput !== '') {
                    // Якщо введений пошук, викликаємо searchAndSort
                    searchAndSort();
                    console.log(currentPage)
                } else {
                    // Якщо не введений пошук, викликаємо renderProducts
                    renderProducts();
                    console.log(currentPage)
                }
            }
        })

    }

    function renderProducts() {
        var productsContainer = document.getElementById('productsContainer');
        var paginationButtonsContainer = document.getElementById('paginationButtons');

        // Визначте початковий індекс та кінцевий індекс товарів для виводу
        var startIndex = (currentPage - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;

        // Отримайте поточну сторінку товарів
        var currentProducts = products.slice(startIndex, endIndex);

        // Виведіть товари
        productsContainer.innerHTML = '';
        currentProducts.forEach(function (product) {
            var productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `<div class="product-card">
    <div class="badge">Топ</div>
    <div class="product-tumb">
        <img src="${product.img}" alt="">
    </div>
    <div class="product-details">
        <span class="product-catagory">${product.catagory}</span>
        <h4><a href="">${product.name}</a></h4>
        <p>${product.about}</p>
        <div class="product-bottom-details">
            <div class="product-price"><small>600UAN</small>${product.price}UAN</div>
            <div class="product-links">
                <button onclick="addToCart(${product.id})"><svg xmlns="http://www.w3.org/2000/svg" width="30"
                        height="26" viewBox="0 0 30 26" fill="none">
                        <path
                            d="M12.0281 24C12.0281 24.3956 11.9108 24.7822 11.691 25.1111C11.4713 25.44 11.1589 25.6964 10.7934 25.8478C10.428 25.9991 10.0259 26.0387 9.6379 25.9616C9.24993 25.8844 8.89357 25.6939 8.61386 25.4142C8.33416 25.1345 8.14368 24.7781 8.06651 24.3902C7.98934 24.0022 8.02894 23.6001 8.18032 23.2346C8.33169 22.8692 8.58804 22.5568 8.91694 22.3371C9.24583 22.1173 9.63251 22 10.0281 22C10.5585 22 11.0672 22.2107 11.4423 22.5858C11.8174 22.9609 12.0281 23.4696 12.0281 24ZM23.0281 22C22.6325 22 22.2458 22.1173 21.9169 22.3371C21.588 22.5568 21.3317 22.8692 21.1803 23.2346C21.0289 23.6001 20.9893 24.0022 21.0665 24.3902C21.1437 24.7781 21.3342 25.1345 21.6139 25.4142C21.8936 25.6939 22.2499 25.8844 22.6379 25.9616C23.0259 26.0387 23.428 25.9991 23.7934 25.8478C24.1589 25.6964 24.4713 25.44 24.691 25.1111C24.9108 24.7822 25.0281 24.3956 25.0281 24C25.0281 23.4696 24.8174 22.9609 24.4423 22.5858C24.0672 22.2107 23.5585 22 23.0281 22ZM28.9843 6.29375L25.4181 17.8825C25.2313 18.4968 24.8515 19.0346 24.3349 19.416C23.8184 19.7975 23.1927 20.0022 22.5506 20H10.5368C9.88554 19.9976 9.25258 19.7842 8.73271 19.3919C8.21285 18.9996 7.83406 18.4494 7.65308 17.8237L3.13058 2H1.02808C0.76286 2 0.508506 1.89464 0.320969 1.70711C0.133433 1.51957 0.0280762 1.26522 0.0280762 1C0.0280762 0.734784 0.133433 0.48043 0.320969 0.292893C0.508506 0.105357 0.76286 0 1.02808 0H3.13058C3.56484 0.00144056 3.98695 0.143485 4.33374 0.404872C4.68053 0.666259 4.93334 1.03293 5.05433 1.45L6.06808 5H28.0281C28.1846 4.99994 28.3389 5.03661 28.4786 5.10706C28.6184 5.17751 28.7396 5.27976 28.8326 5.40561C28.9256 5.53145 28.9878 5.67737 29.0142 5.83163C29.0405 5.98588 29.0303 6.14417 28.9843 6.29375ZM26.6743 7H6.63933L9.57558 17.275C9.63531 17.4839 9.76143 17.6676 9.93486 17.7984C10.1083 17.9292 10.3196 18 10.5368 18H22.5506C22.7646 18.0001 22.9729 17.9315 23.145 17.8044C23.3172 17.6773 23.444 17.4983 23.5068 17.2938L26.6743 7Z"
                            fill="black" />
                    </svg></li></button>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
</div>`;
            productsContainer.appendChild(productElement);
        });
        // Виведіть пагінацію
        renderPagination();
        updatePaginationButtonsVisibility(products);
    }

    function handleSortChange() {
        var sortSelect = document.getElementById('sort');
        var selectedValue = sortSelect.value;

        if (selectedValue === 'default') {
            searchAndSort();
        } else {
            sortProducts();
        }
    }

    function sortProducts() {
        var sortSelect = document.getElementById('sort');
        var selectedValue = sortSelect.value;


        if (selectedValue === 'asc') {
            products.sort((a, b) => a.price - b.price);
        } else if (selectedValue === 'desc') {
            products.sort((a, b) => b.price - a.price);
        } else if (selectedValue === 'default') {
            products.sort((a, b) => a.id - b.id);
        }

        renderProducts()
    }

    function searchAndSort() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        var resultList = document.getElementById('productsContainer');
        var paginationButtonsContainer = document.getElementById('paginationButtons');
        var sortSelect = document.getElementById('sort');
        var selectedValue = sortSelect.value;

        // Очищаємо попередні результати та пагінацію
        resultList.innerHTML = '';
        paginationButtonsContainer.innerHTML = '';

        // Фільтруємо товари за введеним значенням
        var filteredProducts = products.filter(function (product) {
            return product.name.toLowerCase().includes(searchInput);
        });

        // Пагінація
        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        displayPagination(totalPages);

        // Виводимо результати для поточної сторінки
        displayResults(filteredProducts);

        // Додаємо обробник події
        sortSelect.removeEventListener('change', sortProducts);
        sortSelect.addEventListener('change', searchAndSort);

        // Встановлюємо значення select в поточне значення
        sortSelect.value = selectedValue;
    }



    function sorter(products) {
        // Встановлюємо атрибут selected
        var sortSelect = document.getElementById('sort');
        var selectedValue = sortSelect.value;

        if (selectedValue === 'asc') {
            products.sort((a, b) => a.price - b.price);
            // optionToSelectasc.selected = true;
        } else if (selectedValue === 'desc') {
            products.sort((a, b) => b.price - a.price);
            // optionToSelectdesc.selected = true;
        } else if (selectedValue === 'default') {
            products.sort((a, b) => a.id - b.id);
            // optionToSelectdefault.selected = true;
        }
    }

    function displayPagination(totalPages) {
        var paginationButtonsContainer = document.getElementById('paginationButtons');

        for (var i = 1; i <= totalPages; i++) {
            var button = document.createElement('button');
            button.innerText = i;
            button.onclick = function () {
                currentPage = parseInt(this.innerText);
                searchAndSort();
            };
            if (i === currentPage) {
                button.classList.add('active');
            }
            paginationButtonsContainer.appendChild(button);
        }
    }

    function displayPaginationArrow(totalPages) {
        // var paginationButtonsContainer = document.getElementById('paginationButtons');


        // for (var i = 1; i <= totalPages; i++) {
        //     var button = document.createElement('button');
        //     button.innerText = i;
        //     button.onclick = function () {
        //         currentPage = parseInt(this.innerText);
        //         searchAndSort();
        //     };
        //     if (i === currentPage) {
        //         button.classList.add('active');
        //     }
        //     paginationButtonsContainer.appendChild(button);
        // }

        var prev_block = document.querySelector('.prev-block')
        var next_block = document.querySelector('.next-block')

        prev_block.innerHTML = ``;
        next_block.innerHTML = ``;

        prev_block.innerHTML = `                    
        <button class="prev" class="pagination-button" id="prev-button"
                        aria-label="Previous page" title="Previous page">
                        &lt;
                    </button>`;

        next_block.innerHTML = `<div class="next-block">
                    <button class="next" class="pagination-button" id="next-button"
                        aria-label="Next page" title="Next page">
                        &gt;
                    </button>
                </div>`;

        prev_block.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                console.log(currentPage)
                searchAndSort();
            }

            // Функція для переходу на наступну сторінку
        })

        next_block.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                console.log(currentPage)
                searchAndSort();
            }
        })

    }

    function displayResults(filteredProducts) {
        var startIndex = (currentPage - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        var slicedResults = filteredProducts.slice(startIndex, endIndex);

        if (slicedResults.length === 0) {
            // Якщо немає товарів для виведення, можна вивести повідомлення або залишити порожній елемент
            document.getElementById('productsContainer').innerHTML = 'No results found.';
            return;
        }

        slicedResults.forEach(function (product) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `<div class="product-card">
    <div class="badge">Топ</div>
    <div class="product-tumb">
        <img src="${product.img}" alt="">
    </div>
    <div class="product-details">
        <span class="product-catagory">${product.catagory}</span>
        <h4><a href="">${product.name}</a></h4>
        <p>${product.about}</p>
        <div class="product-bottom-details">
            <div class="product-price"><small>600UAN</small>${product.price}UAN</div>
            <div class="product-links">
                <button onclick="addToCart(${product.id})"><svg xmlns="http://www.w3.org/2000/svg" width="30"
                        height="26" viewBox="0 0 30 26" fill="none">
                        <path
                            d="M12.0281 24C12.0281 24.3956 11.9108 24.7822 11.691 25.1111C11.4713 25.44 11.1589 25.6964 10.7934 25.8478C10.428 25.9991 10.0259 26.0387 9.6379 25.9616C9.24993 25.8844 8.89357 25.6939 8.61386 25.4142C8.33416 25.1345 8.14368 24.7781 8.06651 24.3902C7.98934 24.0022 8.02894 23.6001 8.18032 23.2346C8.33169 22.8692 8.58804 22.5568 8.91694 22.3371C9.24583 22.1173 9.63251 22 10.0281 22C10.5585 22 11.0672 22.2107 11.4423 22.5858C11.8174 22.9609 12.0281 23.4696 12.0281 24ZM23.0281 22C22.6325 22 22.2458 22.1173 21.9169 22.3371C21.588 22.5568 21.3317 22.8692 21.1803 23.2346C21.0289 23.6001 20.9893 24.0022 21.0665 24.3902C21.1437 24.7781 21.3342 25.1345 21.6139 25.4142C21.8936 25.6939 22.2499 25.8844 22.6379 25.9616C23.0259 26.0387 23.428 25.9991 23.7934 25.8478C24.1589 25.6964 24.4713 25.44 24.691 25.1111C24.9108 24.7822 25.0281 24.3956 25.0281 24C25.0281 23.4696 24.8174 22.9609 24.4423 22.5858C24.0672 22.2107 23.5585 22 23.0281 22ZM28.9843 6.29375L25.4181 17.8825C25.2313 18.4968 24.8515 19.0346 24.3349 19.416C23.8184 19.7975 23.1927 20.0022 22.5506 20H10.5368C9.88554 19.9976 9.25258 19.7842 8.73271 19.3919C8.21285 18.9996 7.83406 18.4494 7.65308 17.8237L3.13058 2H1.02808C0.76286 2 0.508506 1.89464 0.320969 1.70711C0.133433 1.51957 0.0280762 1.26522 0.0280762 1C0.0280762 0.734784 0.133433 0.48043 0.320969 0.292893C0.508506 0.105357 0.76286 0 1.02808 0H3.13058C3.56484 0.00144056 3.98695 0.143485 4.33374 0.404872C4.68053 0.666259 4.93334 1.03293 5.05433 1.45L6.06808 5H28.0281C28.1846 4.99994 28.3389 5.03661 28.4786 5.10706C28.6184 5.17751 28.7396 5.27976 28.8326 5.40561C28.9256 5.53145 28.9878 5.67737 29.0142 5.83163C29.0405 5.98588 29.0303 6.14417 28.9843 6.29375ZM26.6743 7H6.63933L9.57558 17.275C9.63531 17.4839 9.76143 17.6676 9.93486 17.7984C10.1083 17.9292 10.3196 18 10.5368 18H22.5506C22.7646 18.0001 22.9729 17.9315 23.145 17.8044C23.3172 17.6773 23.444 17.4983 23.5068 17.2938L26.6743 7Z"
                            fill="black" />
                    </svg></li></button>
                <a href=""><i class="fa fa-shopping-cart"></i></a>
            </div>
        </div>
    </div>
</div>`;
            document.getElementById('productsContainer').appendChild(listItem);
        });

        // Приховуємо або показуємо стрілки на основі поточної сторінки
        updatePaginationButtonsVisibility(filteredProducts);
    }

    function updatePaginationButtonsVisibility(filteredProducts) {
        var prev_block = document.querySelector('.prev-block');
        var next_block = document.querySelector('.next-block');
        var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        if (currentPage === 1) {
            // Приховуємо стрілку "Назад" на першій сторінці
            prev_block.style.display = 'none';
        } else {
            prev_block.style.display = 'block';
        }

        if (currentPage === totalPages) {
            // Приховуємо стрілку "Вперед" на останній сторінці
            next_block.style.display = 'none';
        } else {
            next_block.style.display = 'block';
        }
    }