let signupBtn = document.getElementById('signup');
let card = document.getElementById('card');
let sign = document.getElementById('s');
let loginBTn = document.getElementById('login');

signupBtn.addEventListener('click', () => {
    card.classList.remove("circle-open");
    card.classList.add('circle');
    setTimeout(() => {
        card.classList.remove('circle');
        card.style.display = "none";
        sign.style.display = 'flex';
        sign.classList.remove("close");
        sign.classList.add('open');
    }, 1100);
});


loginBTn.addEventListener('click', () => {
    sign.classList.remove('open');
    sign.classList.add("close");
    setTimeout(() => {
        sign.classList.remove('close');
        sign.style.display = 'none';
        card.style.display = "flex";
        card.classList.add("circle-open");
    }, 1100);
});

let inner = document.getElementById('inner');
let loginAndsignBtn = document.getElementById('loginAndsignBtn');
let returnBtn = document.getElementById('return');

loginAndsignBtn.addEventListener('click', () => {
    inner.classList.add('showlogin');
});

returnBtn.addEventListener('click', () => {
    inner.classList.remove('showlogin');
});