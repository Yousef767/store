// Menu 
let menuBtn = document.getElementById('menu');
let navBar = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navBar.classList.add('color-nav');
    } else {
        navBar.classList.remove('color-nav');
    }
});

// Cart
let hearts = document.querySelectorAll('.fa-heart');
let heartCount = document.getElementById('heart-count');
let cartCount = document.getElementById('cart-count');

hearts.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.className == '') {
            e.onClick = function () { preventDefault() };
        } else {
            heartCount.innerHTML = +heartCount.innerHTML + 1;
            e.className = "";
            e.innerHTML = `
        <lord-icon class="lord-heart"
            src="https://cdn.lordicon.com/hqrgkqvs.json"
            colors="outline:#121331,primary:#e83a30,secondary:#ebe6ef"
        </lord-icon>
        `;
            shakeChild(e);
            shakeHeart();
        }
    });
});

let carts = document.querySelectorAll('.fa-cart-shopping');

carts.forEach((e) => {
    e.addEventListener('click', () => {
        if (e.className == '') {
            e.onClick = function(){ preventDefault() };
        } else {
            cartCount.innerHTML = +cartCount.innerHTML + 1;
            e.className = "";
            e.innerHTML = `
        <lord-icon class="lord"
            src="https://cdn.lordicon.com/ivayzoru.json"
            colors="outline:#121331,primary:#ffffff,secondary:#109121">
        </lord-icon>
        `
            shakeChild(e);
            shakeCart();
        }
        
    });
});

// Adding Effects
let icon = document.getElementById('icon');
let heart = document.getElementById('heart');

icon.addEventListener('click', () => {
    likedInner.classList.remove('show');
    cartItemsInner.classList.toggle('show');
});

heart.addEventListener('click', () => {
    cartItemsInner.classList.remove('show');
    likedInner.classList.toggle('show');
    
});

function shakeHeart() {
    heart.setAttribute('trigger', 'loop');
    setTimeout(() => { heart.removeAttribute('trigger') }, 500);
}
function shakeCart() {
    icon.setAttribute('trigger', 'loop');
    setTimeout(() => { icon.removeAttribute('trigger') }, 500);
}
function shakeChild(e) {
    e.firstElementChild.setAttribute('trigger', 'loop');
    setTimeout(() => { e.firstElementChild.removeAttribute('trigger') }, 500);
}

// adding id automaticaly to items
let items = document.querySelectorAll('.item');
items.forEach((e, i) => {
    e.id = `p${i + 1}`;
});


// Adding items to the cart

let addCarts = document.querySelectorAll('.fa-cart-shopping');
let cartItemsInner = document.getElementById('cart-inner');
let emptySpan = document.getElementById('empty');
let totalSpan = document.getElementById('total');
let cartInner = document.getElementById('cart-items-inner');

addCarts.forEach((e,i) => {
    e.addEventListener('click', () => {
        if (e.id != 'added') {
            emptySpan.style.display = 'none';
            window.localStorage.setItem(`cart-item${i + 1}`, e.parentElement.parentElement.id);
            // Info about card
            let imgSrc = e.parentElement.firstElementChild.src;
            let itemName = e.parentElement.parentElement.lastElementChild.firstElementChild.innerHTML;
            let itemPrice = e.parentElement.parentElement.lastElementChild.lastElementChild.innerHTML;
            
            //card structure
            let divItem = document.createElement('div');
            divItem.classList.add('added-item');
            divItem.id = `c${i+1}`;

            let img = document.createElement('img');
            img.src = imgSrc;

            let descDiv = document.createElement('div');
            descDiv.classList.add('desc');

            let h3 = document.createElement('h3');
            h3.innerHTML = itemName;

            let spanPrice = document.createElement('span');
            spanPrice.innerHTML = itemPrice;

            let editDiv = document.createElement('div');
            editDiv.classList.add('edit');

            let plusMinusDiv = document.createElement('div');
            plusMinusDiv.classList.add('plus-minus');

            let spanPlus = document.createElement('span');
            spanPlus.innerHTML = "+";
            spanPlus.addEventListener('click', () => {
                let numerOfItems = spanPlus.nextElementSibling;
                numerOfItems.innerHTML = +numerOfItems.innerHTML + 1;
                totalSpan.innerHTML = +totalSpan.innerHTML + +itemPrice;
            });

            let spanCount = document.createElement('span');
            spanCount.innerHTML = "1";

            let spanMinus = document.createElement('span');
            spanMinus.innerHTML = "-";
            spanMinus.addEventListener('click', () => {
                let numerOfItems = spanMinus.previousElementSibling;
                if (+numerOfItems.innerHTML > 1) {
                    numerOfItems.innerHTML = +numerOfItems.innerHTML - 1;
                    totalSpan.innerHTML = +totalSpan.innerHTML - +itemPrice;
                }
            });

            let trashIcon = document.createElement('i');
            trashIcon.className = 'fa-light fa-trash';
            trashIcon.addEventListener('click', () => {
                divItem.classList.add('removeFromCart');
                setTimeout(() => { divItem.remove() }, 650);
                window.localStorage.removeItem(`cart-item${i + 1}`);
                cartCount.innerHTML = +cartCount.innerHTML - 1;
                e.id = '';
                e.innerHTML = '';
                e.className = 'fa-thin fa-cart-shopping';
                totalSpan.innerHTML = +totalSpan.innerHTML - parseInt(itemPrice * spanCount.innerHTML);
                if (cartItemsInner.childElementCount == 4) {
                    setTimeout(() => { emptySpan.style.display = 'flex'; }, 650);
                }
            });
            // Appending Elements
            cartInner.appendChild(divItem);
            divItem.appendChild(img);
            divItem.appendChild(descDiv);
            descDiv.appendChild(h3);
            descDiv.appendChild(spanPrice);
            divItem.appendChild(editDiv);
            editDiv.appendChild(plusMinusDiv);
            plusMinusDiv.appendChild(spanPlus);
            plusMinusDiv.appendChild(spanCount);
            plusMinusDiv.appendChild(spanMinus);
            editDiv.appendChild(trashIcon);
            e.id = 'added';
            totalSpan.innerHTML = +totalSpan.innerHTML + +itemPrice;
            
        }
    });
});

// Liked Items
let likedInner = document.getElementById('liked-inner');

let noItemsSpan = document.getElementById('no-items');
hearts.forEach((e,i) => {
    e.addEventListener('click', () => {
        if (e.id != 'added') {
            noItemsSpan.style.display = 'none';
            // Addind item to localstorage
            //window.localStorage.setItem(`liked-item${i+1}`, e.parentElement.parentElement.id);
            // Info about card
            let imgSrc = e.parentElement.firstElementChild.src;
            let itemName = e.parentElement.parentElement.lastElementChild.firstElementChild.innerHTML;


            //card structure
            let divItem = document.createElement('div');
            divItem.classList.add('added-item');

            let img = document.createElement('img');
            img.src = imgSrc;


            let descDiv = document.createElement('div');
            descDiv.classList.add('desc');

            let h1 = document.createElement('h1');
            h1.innerHTML = itemName;
            
            h1.addEventListener('click', () => {
                likedInner.classList.remove('show');
                let item = e.parentElement.firstElementChild;
                let itemId = item.id;
                let element = document.getElementById(itemId);
                let boundries = element.getBoundingClientRect();
                window.scrollBy(0, boundries.top - 200);
                let animations = [
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.1)'},
                    { transform: 'scale(1)' },
                ];

                setTimeout(() => { item.animate(animations, 700) }, 1000);
            });

            let trashIcon = document.createElement('i');
            trashIcon.className = 'fa-light fa-trash';
            trashIcon.addEventListener('click', () => {
                //window.localStorage.removeItem(`liked-item${i + 1}`);
                divItem.classList.add('removeFromCart');
                setTimeout(() => { divItem.remove() }, 650);
                heartCount.innerHTML = +heartCount.innerHTML - 1;
                e.id = '';
                e.innerHTML = '';
                e.className = 'fa-thin fa-heart';
                if (likedInner.childElementCount == 3) {
                    setTimeout(() => { noItemsSpan.style.display = 'flex'; }, 650);
                }
            });
            // Appending Elements
            likedInner.prepend(divItem);
            divItem.appendChild(img);
            divItem.appendChild(descDiv);
            descDiv.appendChild(h1);
            divItem.appendChild(trashIcon);
            e.id = 'added';
        }
    });
});

let allImgs = document.querySelectorAll('.item-img img');

allImgs.forEach((e, i) => {
    // adding id automaticaly to imgs
    e.id = `i${i + 1}`;
    e.addEventListener('click', () => {
        let section = document.createElement('section');
        section.classList.add('img-view');

        let img = document.createElement('img');
        img.src = e.src;

        let icon = document.createElement('i');
        icon.className = 'fa-light fa-circle-xmark';
        icon.addEventListener('click', () => {
            icon.parentElement.remove();
        });

        document.body.appendChild(section);
        section.appendChild(img);
        section.appendChild(icon);
    });
});





let clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    window.localStorage.clear();
    document.querySelectorAll('.ci .added-item').forEach((e) => {
        e.classList.add('removeFromCart');
        setTimeout(() => { e.remove() }, 650);
    });
    cartCount.innerHTML = 0;
    totalSpan.innerHTML = 0;
    setTimeout(() => { emptySpan.style.display = 'flex'; }, 650);

    carts.forEach((e) => {
        e.className = "fa-thin fa-cart-shopping";
        e.innerHTML = '';
    });
});


window.addEventListener('load', () => {
    for (let i = 0; i < window.localStorage.length; i++) {
        let itemid = window.localStorage.getItem(window.localStorage.key(i));

        let e = document.getElementById(itemid);
        emptySpan.style.display = 'none';
        // Info about card
        let imgSrc = e.firstElementChild.firstElementChild.src;
        let itemName = e.lastElementChild.firstElementChild.innerHTML;
        let itemPrice = e.lastElementChild.lastElementChild.innerHTML;

        //card structure
        let divItem = document.createElement('div');
        divItem.classList.add('added-item');
        divItem.id = `c${itemid}`;

        let img = document.createElement('img');
        img.src = imgSrc;

        let descDiv = document.createElement('div');
        descDiv.classList.add('desc');

        let h3 = document.createElement('h3');
        h3.innerHTML = itemName;

        let spanPrice = document.createElement('span');
        spanPrice.innerHTML = itemPrice;

        let editDiv = document.createElement('div');
        editDiv.classList.add('edit');

        let plusMinusDiv = document.createElement('div');
        plusMinusDiv.classList.add('plus-minus');

        let spanPlus = document.createElement('span');
        spanPlus.innerHTML = "+";
        spanPlus.addEventListener('click', () => {
            let numerOfItems = spanPlus.nextElementSibling;
            numerOfItems.innerHTML = +numerOfItems.innerHTML + 1;
            totalSpan.innerHTML = +totalSpan.innerHTML + +itemPrice;
        });

        let spanCount = document.createElement('span');
        spanCount.innerHTML = "1";

        let spanMinus = document.createElement('span');
        spanMinus.innerHTML = "-";
        spanMinus.addEventListener('click', () => {
            let numerOfItems = spanMinus.previousElementSibling;
            if (+numerOfItems.innerHTML > 1) {
                numerOfItems.innerHTML = +numerOfItems.innerHTML - 1;
                totalSpan.innerHTML = +totalSpan.innerHTML - +itemPrice;
            }
        });

        let trashIcon = document.createElement('i');
        trashIcon.className = 'fa-light fa-trash';
        trashIcon.addEventListener('click', () => {
            divItem.classList.add('removeFromCart');
            setTimeout(() => { divItem.remove() }, 650);
            let num = Array.from(divItem.id).slice(2,).join('');
            localStorage.removeItem(`cart-item${num}`);
            cartCount.innerHTML = +cartCount.innerHTML - 1;
            cart.id = '';
            cart.innerHTML = '';
            cart.className = 'fa-thin fa-cart-shopping';
            totalSpan.innerHTML = +totalSpan.innerHTML - parseInt(itemPrice * spanCount.innerHTML);
            if (cartItemsInner.childElementCount == 4) {
                setTimeout(() => { emptySpan.style.display = 'flex'; }, 650);
            }
        });
        // Appending Elements
        cartInner.appendChild(divItem);
        divItem.appendChild(img);
        divItem.appendChild(descDiv);
        descDiv.appendChild(h3);
        descDiv.appendChild(spanPrice);
        divItem.appendChild(editDiv);
        editDiv.appendChild(plusMinusDiv);
        plusMinusDiv.appendChild(spanPlus);
        plusMinusDiv.appendChild(spanCount);
        plusMinusDiv.appendChild(spanMinus);
        editDiv.appendChild(trashIcon);
        totalSpan.innerHTML = +totalSpan.innerHTML + +itemPrice;
        cartCount.innerHTML = window.localStorage.length;
        let cart = e.firstElementChild.lastElementChild;
        cart.className = "";
        cart.innerHTML = `
        <lord-icon class="lord"
            src="https://cdn.lordicon.com/ivayzoru.json"
            colors="outline:#121331,primary:#ffffff,secondary:#109121">
        </lord-icon>
        `;
        setTimeout(() => { e.id = 'added'; });
    }
});

