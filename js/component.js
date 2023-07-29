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



drawHeader();

function drawHeader() {
    let aboutus = 'Про нас', navlern = 'Навчальний розділ', navorder = 'Замовити проект', navcontact = 'Контакти';


    if (!isIndex && lengthPath > 1) {
        if (langEn) {

        } else {

        }
    } else {
        if (langEn) {

        } else {

        }
    }

    header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu">
    <div class="container-fluid header-menu">
        <a href="index.html" title="">
            <div class="header-logo"></div>
        </a>
        <div class="mob-lang-select">
            <a class="lang-select" href="/">UA</a>
            <div class="vertical"></div>
            <a href="/index-en.html">EN</a>
        </div>
        <div class="header-burger navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span></span></div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
                <div></div>
                <li class="nav-item" id="about-link"><a class="nav-link menu-link" href="master.html">${aboutus}</a></li>
                <li class="nav-item" id="lern-link"><a class="nav-link menu-link" href="education.html"
                        >${navlern}</a></li>
                <li class="nav-item" id="project-link"><a class="nav-link menu-link" href="customers.html"
                        >${navorder}</a></li>
                <li class="nav-item" id="contact-link"><a class="nav-link menu-link"
                        href="#contacts">${navcontact}</a></li>


                <li class="nav-item dropdown" id="navlang">
                    <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        UA</span>
                    <ul class="dropdown-menu lang">
                        <li><a class="dropdown-item lang" href="/">UA</a></li>
                        <li><a class="dropdown-item lang" href="/index-en.html">EN</a></li>
                    </ul>
                </li>
            </ul>
            <div class="header-icon-social">
                <a href="#" class="social-link icon" title="facebook" target="_blank">
                    <svg svg="" class="icon">
                        <use xlink:href="img/sprite.svg#facebook"></use>
                    </svg>
                </a>
                <a href="#" class="social-link icon" title="instagram" target="_blank">
                    <svg class="icon">
                        <use xlink:href="img/sprite.svg#instagram"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
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