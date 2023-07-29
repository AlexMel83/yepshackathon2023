function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{2,15}$/;
    return usernameRegex.test(username);
}

function validateEmail(email) {
    if (email.length > 30) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    if (password.length > 12) {
        return false;
    }
    return password.length >= 6;
}

function saveUserData() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Заполните все поля');
        return;
    }

    if (!validateUsername(username)) {
        alert("Некоректне ім'я користувача. Ім'я користувача повинне містити лише букви, цифри та знак підкреслення (_). Довжина повинна бути від 2 до 15 символів.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Некоректна адреса електронної пошти.");
        return;
    }

    if (!validatePassword(password)) {
        alert("Пароль повинен містити від 6 до 12 символів.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData', userDataJSON);

    window.location.href = '/index.html';
}