



window.onload = function () {
    document.getElementById("ad-container").style.visibility = "hidden";
   /* console.log(localStorage);*/
    if (!sessionStorage.getItem('messageShown')) {
        document.getElementById("ad-container").style.visibility = "visible";
        setTimeout(showAd, 200);
        sessionStorage.setItem('messageShown', 'false');

    }
    
};
//window.addEventListener('close', function () {
//    console.log(localStorage);
//    localStorage.clear();
//});
function adCloseButton() {
    document.getElementById("ad-container").style.opacity = 0;
    setTimeout(function () {
        document.getElementById("ad-container").style.display = "none";
    }, 500);
    // document.getElementById("ad-container").style.display = "none";
    document.body.style.opacity = 1;
}

function showAd() {
    // document.getElementById("ad-container").style.visibility = "visible";
    document.getElementById("ad-container").style.opacity = 1;
}


function slowScroll(id) {
    $("html, body").animate(
        {
            scrollTop: $(id).offset().top,
        },
        1000
    );
}

$(document).on("scroll", function () {
    if ($(window).scrollTop() === 0) $("header").removeClass("fixed");
    else $("header").attr("class", "fixed");
});

