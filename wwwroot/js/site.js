// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//function adCloseButton() {
//    document.getElementById("ad-container").style.opacity = 0;
//    setTimeout(function () {
//        document.getElementById("ad-container").style.display = "none";
//    }, 500);
//    // document.getElementById("ad-container").style.display = "none";
//    document.body.style.opacity = 1;
//}

//function showAd() {
//    // document.getElementById("ad-container").style.visibility = "visible";
//    document.getElementById("ad-container").style.opacity = 1;
//}


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