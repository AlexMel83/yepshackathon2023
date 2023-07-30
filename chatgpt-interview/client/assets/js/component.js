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
                if (lengthPath == 1 || !isIndex) {
                    hrefEn = hrefEn.concat("index-en.html");
                } else {
                    hrefEn = hrefEn.concat("-en.html");
                }
            }
        }
    }
    return hrefEn;
}



drawHeader();
drawFooter();

function drawHeader() {
    let navLangSelect = `UA</span>
                    <ul class="dropdown-menu lang">
                    <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                    <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
    let mobLangSelect = `<a class="lang-select" href=${hrefLangUA()}>UA</a>
                    <div class="vertical"></div>
                <a href=${hrefLangEN()}>EN</a>`;
    let aboutus = 'Про нас', abutuslink = 'https://careerboosters.fromavdiivka.city/index.html', navlern = 'Навчальний розділ', navlernlink = 'https://careerboosters.fromavdiivka.city/education.html',
        navorder = 'Замовити проект', navorderlink = 'https://careerboosters.fromavdiivka.city/customers.html', ansvers = 'Відповіді', ansverslink = 'https://careerboosters.fromavdiivka.city/index.html#block-3';

    if (langEn) {
        aboutus = 'About us', abutuslink = 'https://careerboosters.fromavdiivka.city/index-en.html', navlern = 'Study section', navlernlink = 'https://careerboosters.fromavdiivka.city/education-en.html',
            navorder = 'Order a project', navorderlink = 'https://careerboosters.fromavdiivka.city/customers-en.html', ansvers = 'Ansvers', ansverslink = 'https://careerboosters.fromavdiivka.city/index.html-en#block-3';
        navLangSelect = `EN</span>
                    <ul class="dropdown-menu lang">
                    <li><a class="dropdown-item lang" href=${hrefLangUA()}>UA</a></li>
                    <li><a class="dropdown-item lang" href=${hrefLangEN()}>EN</a></li>`;
        mobLangSelect = `<a href=${hrefLangUA()}>UA</a>
                    <div class="vertical"></div>
                <a class="lang-select" href=${hrefLangEN()}>EN</a>`;
    }

    if (document.title == 'ChatGPT Front-end') {
        abutuslink = 'https://careerboosters.fromavdiivka.city/index.html', navlernlink = 'https://careerboosters.fromavdiivka.city/education.html', navorderlink = 'https://careerboosters.fromavdiivka.city/customers.html', ansverslink = 'https://careerboosters.fromavdiivka.city/index.html#block-3';
        if (langEn) {
            abutuslink = 'https://careerboosters.fromavdiivka.city/index-en.html', navlernlink = 'https://careerboosters.fromavdiivka.city/education-en.html', navorderlink = 'https://careerboosters.fromavdiivka.city/customers-en.html', ansverslink = 'https://careerboosters.fromavdiivka.city/index-en.html#block-3';

        }

        header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu">
        <div class="container-fluid header-menu">
            <a href="https://careerboosters.fromavdiivka.city/index.html" title="">
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
                    <li class="nav-item" id="about-link"><a class="nav-link menu-link" href="${abutuslink}">${aboutus}</a></li>
                    <li class="nav-item" id="lern-link"><a class="nav-link menu-link" href="${navlernlink}"
                            >${navlern}</a></li>
                    <li class="nav-item" id="project-link"><a class="nav-link menu-link" href="${navorderlink}"
                            >${navorder}</a></li>
                    <li class="nav-item" id="contact-link"><a class="nav-link menu-link"
                            href="${ansverslink}">${ansvers}</a></li>
    
    
                    <li class="nav-item dropdown" id="navlang">
                        <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            ${navLangSelect}</ul>
                        </ul>
                    </li>
                </ul>
                <div class="header-icon-social">
                    <a href="#" class="social-link icon" title="facebook" target="_blank">
                        <svg svg="" class="icon">
                            <use xlink:href="../img/sprite.svg#facebook"></use>
                        </svg>
                    </a>
                    <a href="#" class="social-link icon" title="instagram" target="_blank">
                        <svg class="icon">
                            <use xlink:href="../img/sprite.svg#instagram"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>`;

    } else {
        header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu">
    <div class="container-fluid header-menu">
        <a href="index.html" title="">
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
                <li class="nav-item" id="about-link"><a class="nav-link menu-link" href="${abutuslink}">${aboutus}</a></li>
                <li class="nav-item" id="lern-link"><a class="nav-link menu-link" href="${navlernlink}"
                        >${navlern}</a></li>
                <li class="nav-item" id="project-link"><a class="nav-link menu-link" href="${navorderlink}"
                        >${navorder}</a></li>
                <li class="nav-item" id="contact-link"><a class="nav-link menu-link"
                        href="${ansverslink}">${ansvers}</a></li>


                <li class="nav-item dropdown" id="navlang">
                    <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        ${navLangSelect}</ul>
                    </ul>
                </li>
            </ul>
            <div class="header-icon-social">
                <a href="#" class="social-link icon" title="facebook" target="_blank">
                    <svg svg="" class="icon">
                        <use xlink:href="../img/sprite.svg#facebook"></use>
                    </svg>
                </a>
                <a href="#" class="social-link icon" title="instagram" target="_blank">
                    <svg class="icon">
                        <use xlink:href="../img/sprite.svg#instagram"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>`;
    }
}

function drawFooter() {
    let footerdevelop = '© Розроблено студентами Вінницької ІТ-академії 2023', developerlink = 'https://careerboosters.fromavdiivka.city/developer.html';

    if (langEn) {
        footerdevelop = '© Developed by students of Vinnytsia IT Academy 2023', developerlink = 'https://careerboosters.fromavdiivka.city/developer-en.html';
    }
    if (document.title == 'ChatGPT Front-end') {
        developerlink = 'https://careerboosters.fromavdiivka.city/developer.html'
        if (langEn) {
            footerdevelop = '© Developed by students of Vinnytsia IT Academy 2023', developerlink = 'https://careerboosters.fromavdiivka.city/developer-en.html';
        }
    }
    footer.innerHTML = `<div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
            <symbol id="bootstrap" viewBox="0 0 118 94">
                <title>Bootstrap</title>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z">
                </path>
            </symbol>
            <symbol id="facebook" viewBox="0 0 16 16">
                <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                </path>
            </symbol>
            <symbol id="instagram" viewBox="0 0 16 16">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                </path>
            </symbol>
            <symbol id="twitter" viewBox="0 0 16 16">
                <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                </path>
            </symbol>
        </svg>
        <a href="${developerlink}" type="button">
            <p>${footerdevelop}</p>
        </a>
        <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                        <use xlink:href="#twitter"></use>
                    </svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                        <use xlink:href="#instagram"></use>
                    </svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
                        <use xlink:href="#facebook"></use>
                    </svg></a></li>
        </ul>
    </div>
    <svg class="scroll-up">
        <use xlink:href="../img/sprite.svg#scroll-up"></use>
    </svg>`;
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