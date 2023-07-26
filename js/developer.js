// ------*****----------TEAM----------*****------
function dellclass() {
    for (let j = 1; j < 10; j++) {
        if (document.getElementById("team-" + [j]).classList.contains('-active')) {
            document.querySelector(".dev-" + [j]).classList.remove("-active");
            document.querySelector(".dev_Team-rec-" + [j]).classList.remove("-active");
        }
    }
}

document.getElementById("des").addEventListener("mouseover", function () {
    document.querySelector(".dev-12").classList.add("-active");
    document.querySelector(".dev-1").style.opacity = 1;

    dellclass();
})
document.getElementById("des").addEventListener("mouseout", function () {
    document.querySelector(".dev-12").classList.remove("-active");
    document.querySelector(".dev-1").style.opacity = 0.5;

})
document.getElementById("dev").addEventListener("mouseover", function () {
    document.querySelector(".dev-11").classList.add("-active");
    document.getElementById("dev").style.opacity = 1;
    document.querySelector(".dev-2").style.opacity = 1;
    document.querySelector(".dev-3").style.opacity = 1;
    document.querySelector(".dev-4").style.opacity = 1;
    document.querySelector(".dev-5").style.opacity = 1;
    document.querySelector(".dev-7").style.opacity = 1;
    document.querySelector(".dev-9").style.opacity = 1;
    dellclass();
})
document.getElementById("dev").addEventListener("mouseout", function () {
    document.querySelector(".dev-11").classList.remove("-active");
    document.getElementById("dev").style.opacity = 0.3;
    document.querySelector(".dev-2").style.opacity = 0.5;
    document.querySelector(".dev-3").style.opacity = 0.5;
    document.querySelector(".dev-4").style.opacity = 0.5;
    document.querySelector(".dev-5").style.opacity = 0.5;
    document.querySelector(".dev-7").style.opacity = 0.5;
    document.querySelector(".dev-9").style.opacity = 0.5;
})
document.getElementById("QA").addEventListener("mouseover", function () {
    document.querySelector(".dev-10").classList.add("-active");
    document.getElementById("QA").style.opacity = 1;
    document.querySelector(".dev-6").style.opacity = 1;
    document.querySelector(".dev-8").style.opacity = 1;
    dellclass();
})
document.getElementById("QA").addEventListener("mouseout", function () {
    document.querySelector(".dev-10").classList.remove("-active");
    document.getElementById("QA").style.opacity = 0.3;
    document.querySelector(".dev-6").style.opacity = 0.5;
    document.querySelector(".dev-8").style.opacity = 0.5;
})

var myDev = document.querySelectorAll('span[data-href]');
for (let i = 0; i < myDev.length; i++) {
    myDev[i].addEventListener("click", function () {
        if (myDev[i].classList.contains('-active')) {
            document.querySelector(".dev-" + [i + 1]).classList.remove("-active");
            document.querySelector(".dev_Team-rec-" + [i + 1]).classList.remove("-active");
        }
        else {
            dellclass();
            document.querySelector(".dev-" + [i + 1]).classList.add("-active");
            document.querySelector(".dev_Team-rec-" + [i + 1]).classList.add("-active");
        }
    })
}
// ------*****----------TEHNO----------*****------
let Arr_Top_320 = ['0px', '50px', '121px', '200px', '255px', '255px', '200px', '121px', '50px'];
let Arr_Left_320 = ['130px', '231px', '265px', '250px', '190px', '95px', '30px', '15px', '39px'];
let Arr_Top_768 = ['0px', '98px', '215px', '360px', '440px', '440px', '360px', '215px', '98px'];
let Arr_Left_768 = ['334px', '538px', '601px', '582px', '472px', '232px', '132px', '108px', '151px'];
let Arr_Top_1024 = ['0px', '98px', '215px', '360px', '440px', '440px', '360px', '215px', '98px'];
let Arr_Left_1024 = ['462px', '666px', '729px', '710px', '600px', '360px', '260px', '236px', '279px'];
let Arr_Text = ['Jira', 'Git', 'Photoshop', 'CSS', 'HTML', 'Java Script', 'Figma', 'TestRail', 'Microsoft Office'];
let Arr_Active_Techno = ['img/T1-active.svg', 'img/T2-active.svg', 'img/T3-active.svg', 'img/T4-active.svg', 'img/T5-active.svg', 'img/T6-active.svg', 'img/T7-active.svg', 'img/T8-active.svg', 'img/T9-active.svg'];
let Arr_Techno = ['img/T1.svg', 'img/T2.svg', 'img/T3.svg', 'img/T4.svg', 'img/T5.svg', 'img/T6.svg', 'img/T7.svg', 'img/T8.svg', 'img/T9.svg'];

let active = 1;
let activePrev = 9;
let activeNext = 2;
let none1 = 3;
let none4 = 7;

let move = function () {
    const myWindowWidth = window.innerWidth;
    var temp_top_320 = Arr_Top_320[Arr_Top_320.length - 1];
    var temp_left_320 = Arr_Left_320[Arr_Left_320.length - 1];
    var temp_top_768 = Arr_Top_768[Arr_Top_768.length - 1];
    var temp_left_768 = Arr_Left_768[Arr_Left_768.length - 1];
    var temp_top_1024 = Arr_Top_1024[Arr_Top_1024.length - 1];
    var temp_left_1024 = Arr_Left_1024[Arr_Left_1024.length - 1];

    document.querySelector(".dev_tehno_bl-" + active).classList.remove("-active");
    document.querySelector(".dev_tehno_bl-" + activeNext).classList.remove("-next");
    document.querySelector(".dev_tehno_bl-" + activePrev).classList.remove("-prev");

    if (active == 9) {
        active = 1;
    }
    else active++;
    if (activeNext == 9) {
        activeNext = 1;
    }
    else activeNext++;
    if (activePrev == 9) {
        activePrev = 1;
    }
    else activePrev++;
    if (none1 == 9) {
        none1 = 1;
    }
    else none1++;
    if (none4 == 9) {
        none4 = 1;
    }
    else none4++;

    document.querySelector(".dev_tehno_bl-" + active).classList.add("-active");
    document.querySelector(".dev_tehno_bl-" + active).children[0].src = Arr_Active_Techno[active - 1];
    document.querySelector(".dev_tehno_bl-" + activeNext).classList.add("-next");
    document.querySelector(".dev_tehno_bl-" + activePrev).classList.add("-prev");
    document.querySelector(".-prev").children[0].src = Arr_Techno[activePrev - 1];
    document.querySelector(".dev_tehno_bl-" + none4).classList.add("-none");
    document.querySelector(".dev_tehno_bl-" + (none1)).classList.remove("-none");

    var temp_top_320 = Arr_Top_320[Arr_Top_320.length - 1];
    var temp_left_320 = Arr_Left_320[Arr_Left_320.length - 1];
    var temp_top_768 = Arr_Top_768[Arr_Top_768.length - 1];
    var temp_left_768 = Arr_Left_768[Arr_Left_768.length - 1];
    var temp_top_1024 = Arr_Top_1024[Arr_Top_1024.length - 1];
    var temp_left_1024 = Arr_Left_1024[Arr_Left_1024.length - 1];

    for (let i = Arr_Top_320.length - 1; i > 0; i--) {
        Arr_Top_320[i] = Arr_Top_320[i - 1];
        Arr_Left_320[i] = Arr_Left_320[i - 1];
        Arr_Top_768[i] = Arr_Top_768[i - 1];
        Arr_Left_768[i] = Arr_Left_768[i - 1];
        Arr_Top_1024[i] = Arr_Top_1024[i - 1];
        Arr_Left_1024[i] = Arr_Left_1024[i - 1];
    }
    Arr_Top_320[0] = temp_top_320;
    Arr_Left_320[0] = temp_left_320;
    Arr_Top_768[0] = temp_top_768;
    Arr_Left_768[0] = temp_left_768;
    Arr_Top_1024[0] = temp_top_1024;
    Arr_Left_1024[0] = temp_left_1024;

    if (myWindowWidth >= 320 && myWindowWidth < 768) {
        for (let i = 0; i < Arr_Top_320.length; i++) {
            document.getElementById("devTeh" + (i + 1)).style.marginTop = Arr_Top_320[i];
            document.getElementById("devTeh" + (i + 1)).style.marginLeft = Arr_Left_320[i];
        }
    }
    if (myWindowWidth >= 768 && myWindowWidth < 1024) {
        for (let i = 0; i < Arr_Top_768.length; i++) {
            document.getElementById("devTeh" + (i + 1)).style.marginTop = Arr_Top_768[i];
            document.getElementById("devTeh" + (i + 1)).style.marginLeft = Arr_Left_768[i];
        }
    }
    if (myWindowWidth >= 1024) {
        for (let i = 0; i < Arr_Top_1024.length; i++) {
            document.getElementById("devTeh" + (i + 1)).style.marginTop = Arr_Top_1024[i];
            document.getElementById("devTeh" + (i + 1)).style.marginLeft = Arr_Left_1024[i];
        }
    }
    document.querySelector(".dev_texno_text-all").innerHTML = Arr_Text[active - 1];
    window.setTimeout(function () { document.querySelector(".dev_texno_text-all").classList.add("-active"); }, 700);
    window.setTimeout(function () { document.querySelector(".dev_texno_text-all").classList.remove("-active"); }, 1700);
}
var myInterval = setInterval(move, 2500);

//--------UP --------
window.onload = function () {
    var scrolled, timer;
    document.getElementById('myUP').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 200;
            timer = setTimeout(scrollToTop, 50);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}
// Delay the removal of the element to ensure it's available in the DOM

let Inter;
$('.arrow').on('mouseenter', function () {
    $('.hov-1').slideUp(300).fadeIn(100);
    $('.hov-2').slideUp(200).fadeIn(200);
    $('.hov-3').slideUp(100).fadeIn(300)
    Inter = setInterval(function () {
        $('.hov-1').slideUp(300).fadeIn(100);
        $('.hov-2').slideUp(200).fadeIn(200);
        $('.hov-3').slideUp(100).fadeIn(300)
    }, 600
    );

});
$('.arrow').on('click', function () {
    clearInterval(Inter);
});
$('.arrow').on('mouseleave', function () {
    clearInterval(Inter);
});