const validateUsername = (username) => /^[a-zA-Z0-9_]{2,15}$/.test(username);

const validateEmail = (email) => {
    if (email.length > 30) {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

    // Добавляем проверку на отсутствие кириллических символов
    const hasCyrillic = /[а-яА-ЯЁё]/.test(email);
    if (hasCyrillic) {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => password.length >= 6 && password.length <= 12;

const saveUserData = () => {

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert("Заповніть усі поля.");
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
        username,
        email,
        password,
    };

    const userDataJSON = JSON.stringify(userData);
    localStorage.setItem('userData', userDataJSON);

    console.log("username:", username);

    // Перенаправлення на основну сторінку після успішної реєстрації
    window.location.href = '/index.html';
};

// Заповнення полів вводу збереженими даними після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    const LS = localStorage;
    
    if (LS.getItem('userData')) {
        const userData = JSON.parse(LS.getItem('userData'));
        document.getElementById('username').value = userData.username;
        document.getElementById('email').value = userData.email;
        document.getElementById('password').value = userData.password;
    }
});

