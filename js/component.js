let header = document.querySelector("header.header");
let footer = document.querySelector("footer.footer");
let href = document.location.pathname;
let html = href.includes(".html"),
    langEn = href.includes("-en"),
    isIndex = href.includes("index"),
    lengthPath = href.length,
    haveHashtag = href.includes("#");

function hrefLangUA() {
    let hrefUa = document.location.pathname;
    if (langEn) {
        if (html) {
            let placeHtml = hrefUa.indexOf("-en.html");
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat(".html");
        } else {
            let placeHtml = hrefUa.indexOf("-en");
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat(".html");
        }
    }
    return hrefUa;
}

function hrefLangEN() {
    let hrefEn = document.location.pathname;
    if (!langEn) {
        if (haveHashtag) {
            if (html) {
                let placeHtml = hrefEn.indexOf(".html");
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat("-en.html");
            } else {
                if (lengthPath == 1) {
                    let placeHtml = hrefEn.indexOf("#");
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat("index-en.html");
                } else {
                    let placeHtml = hrefEn.indexOf("#");
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat("-en.html");
                }
            }
        } else {
            if (html) {
                let placeHtml = hrefEn.indexOf(".html");
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat("-en.html");
            } else {
                if (lengthPath == 1) {
                    hrefEn = hrefEn.concat("index-en.html");
                } else {
                    hrefEn = hrefEn.concat("-en.html");
                }
            }
        }
    }
    return hrefEn;
}

let navAboutUs = ` Про студію</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#gallery">Галерея</a></li>
                    <li><a class="dropdown-item" href="#teachers">Викладачі</a></li>
                    <li><a class="dropdown-item" href="#feedback">Відгуки</a></li>
                    <li><a class="dropdown-item" href="#faq">Запитання та відповіді</a></li>`;
let navTeaching = `Навчання</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                    абітурієнтів</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                    дорослих</a></li>`;
let navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
let navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
let navLangSelect = `UA</span>
                    <ul class="dropdown-menu lang">
                    <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                    <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
let navOrderLesson = "Замовити урок";

// drawHeader();

function drawHeader() {
    if (!isIndex && lengthPath > 1) {
        if (langEn) {
            navAboutUs = `About us</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="index-en.html#gallery">Gallery</a></li>
                <li><a class="dropdown-item" href="index-en.html#teachers">Teachers</a></li>
                <li><a class="dropdown-item" href="index-en.html#feedback">Reviews</a></li>
                <li><a class="dropdown-item" href="index-en.html#faq">Questions and answers</a></li>`;
            navTeaching = `Teaching</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children-en.html">for children</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students-en.html">for applicants</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults-en.html">for adults</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master-en.html">Master classes</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Contacts</a>`;
            navLangSelect = `EN</span>
                            <ul class="dropdown-menu lang">
                            <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                            <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
            navOrderLesson = "Book a lesson";
            mobLangSelect = `<a href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a class="lang-select" href=${hrefLangEN()}>EN</a>`;
            logoLink = "index-en.html";
        } else {
            navAboutUs = ` Про студію</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="index.html#gallery">Галерея</a></li>
                <li><a class="dropdown-item" href="index.html#teachers">Викладачі</a></li>
                <li><a class="dropdown-item" href="index.html#feedback">Відгуки</a></li>
                <li><a class="dropdown-item" href="index.html#faq">Запитання та відповіді</a></li>`;
            navTeaching = `Навчання</span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                    абітурієнтів</a></li>
                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                    дорослих</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
            mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a href=${hrefLangEN()}>EN</a>`;
            navOrderLesson = "Замовити урок";
        }
    } else {
        if (langEn) {
            navAboutUs = `About us</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#gallery">Gallery</a></li>
                <li><a class="dropdown-item" href="#teachers">Teachers</a></li>
                <li><a class="dropdown-item" href="#feedback">Reviews</a></li>
                <li><a class="dropdown-item" href="#faq">Questions and answers</a></li>`;
            navTeaching = `Teaching</span>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="education-for-children-en.html">for children</a></li>
                <li><a class="dropdown-item" href="education-for-prospective-students-en.html">for applicants</a></li>
                <li><a id="adultlink" class="dropdown-item" href="education-for-adults-en.html">for adults</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master-en.html">Master classes</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Contacts</a>`;
            navLangSelect = `EN</span>
                        <ul class="dropdown-menu lang">
                        <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                        <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
            navOrderLesson = "Book a lesson";
            mobLangSelect = `<a href=${hrefLangUA()}>UA</a>
                                <div class="vertical"></div>
                            <a class="lang-select" href=${hrefLangEN()}>EN</a>`;
            logoLink = "index-en.html";
        } else {
            navAboutUs = ` Про студію</span>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#gallery">Галерея</a></li>
                                <li><a class="dropdown-item" href="#teachers">Викладачі</a></li>
                                <li><a class="dropdown-item" href="#feedback">Відгуки</a></li>
                                <li><a class="dropdown-item" href="#faq">Запитання та відповіді</a></li>`;
            navTeaching = `Навчання</span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="education-for-children.html">для дітей</a></li>
                                    <li><a class="dropdown-item" href="education-for-prospective-students.html">для
                                    абітурієнтів</a></li>
                                    <li><a id="adultlink" class="dropdown-item" href="education-for-adults.html">для
                                    дорослих</a></li>`;
            navMasterClasses = `<a class="nav-link menu-link" href="master.html">Майстер-класи</a>`;
            navContacts = `<a class="nav-link menu-link" href="#contacts">Контакти</a>`;
            mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                                                <div class="vertical"></div>
                                            <a href=${hrefLangEN()}>EN</a>`;
            navOrderLesson = "Замовити урок";
        }
    }

    header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu">
                            <div class="container-fluid header-menu">
                                <a href=${logoLink} title="">
                                    <div class="header-logo"></div>
                                </a>
                                <div class="mob-lang-select">
                                    ${mobLangSelect}
                                </div>
                                <div class="header-burger navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span></span></div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
                                    <div></div>
                                    <li class="nav-item dropdown">
                                        <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navAboutUs}</ul>
                                    </li>
                                    <li class="nav-item dropdown" id="navstudy">
                                        <span id="studylink" class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navTeaching}</ul>
                                    </li>
                                    <li class="nav-item" id="navmaster">${navMasterClasses}</li>
                                    <li class="nav-item" id="licontact">${navContacts}</li>
                                    <li class="nav-item dropdown" id="navlang">
                                        <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${navLangSelect}</ul>
                                    </li>
                                </ul>
                            <div class="flash-btn"><div class="menu-flash"></div>
                            <button class="header-btn popup-link" href="#popup">${navOrderLesson}</button>
                            </div>
                            <div class="header-icon-social">
                            <a href="https://www.facebook.com/profile.php?id=100086510772962" class="social-link icon" title="facebook" target="_blank">
                        <svg    svg class="icon">
                                    <use xlink:href="src/icons/sprite.svg#facebook"></use>
                                </svg>
                            </a>
                        <a href="https://www.instagram.com/art_studioleonardo/" class="social-link icon" title="instagram" target="_blank">
                            <svg class="icon">
                                <use xlink:href="src/icons/sprite.svg#instagram"></use>
                            </svg>
                        </a>
                        </div></div></div>
                    </nav>`;
}

//variables ScrolUp btn
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
/* Code scrolUp btn */
if (scrollUp) {
    window.addEventListener("scroll", () => {
        if (getTop() > offset) {
            scrollUp.classList.add("scroll-up-active");
        } else {
            scrollUp.classList.remove("scroll-up-active");
        }
    });
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

/* function for lock body and forbid scrol page*/
function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + "px";

    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    body.classList.add("lock");
    body.style.paddingRight = lockPaddingValue;
    if (menuClose) {
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
}

function bodyUnLock() {
    setTimeout(function () {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = "0px";
        }
        if (menuClose) {
            body.classList.remove("lock");
            body.style.paddingRight = "0px";
        }
    }, timeout);
    if (!menuClose) {
        unlock = false;
        setTimeout(() => (unlock = true), timeout);
    }
}

let unlock = true;
let menuClose = true;
const timeout = 800;
/* this code added toggleClass to btn for work burger-menu and block scrolling*/
$(".header-burger").click(function () {
    $(
        ".header-burger, .header-menu, .header-logo, .mob-lang-select"
    ).toggleClass("active");
});

$("#navbarSupportedContent").on("hidden.bs.collapse", function () {
    $("body").removeClass("no_scrolling");
});
$("#navbarSupportedContent").on("show.bs.collapse", function () {
    $("body").addClass("no_scrolling");
});
$(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
$(".dropdown-menu>li>a, .nav-item>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".container-fluid").removeClass("active");
    $(
        ".header-burger, .header-menu, .header-logo, .mob-lang-select"
    ).removeClass("active");
});