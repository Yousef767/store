

function validEmail() {
    let email = document.getElementById('email');
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig;
    if (email.value == '') {
        email.style.border = '1px solid red';
        return false;
    }

    if (!email.value.match(regex)) {
        email.style.border = '1px solid red';
        return false;
    }
    email.style.border = '1px solid green';
    return true;

}
function validName() {
    let name = document.getElementById('name');
    let regex = /^[a-z]{3,10}\s{1}[a-z]{3,}$/ig;
    if (name.value == '') {
        name.style.border = '1px solid red';
        return false;
    }
    if (!name.value.match(regex)) {
        name.style.border = '1px solid red';
        return false;
    }
    name.style.border = '1px solid green';
    return true;

}
function validPassword() {
    let password = document.getElementById('password');
    let arr = Array.from(password.value);
    if (password.value == '') {
        password.style.border = '1px solid red';
        return false;
    }
    if (arr.length <= 8) {
        password.style.border = '1px solid red';
        return false;
    }
    password.style.border = '1px solid green';
    return true;

}


function validForm() {
    if (!validName() || !validEmail() || !validPassword()) {
        return false;
    }
}