$(document).ready(function() {
    $('.web').addClass('animated fadeInDown');
    $(".background-color").animate({
        opacity: 0.75,
    }, 3000, function() {});
    $('.scroll-down').addClass('animated fadeIn');
});

window.addEventListener("scroll", function(e) {
    e.preventDefault();
    var pos_top = $(window).scrollTop();
    if (pos_top >= 400) {
        $(".header").fadeIn("slow", function() {});
    } else {
        $(".header").fadeOut("fast", function() {});
    }
});

$("#bottom").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#top").offset().top
    }, 1180);
});
$(".scroll-down").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#contact").offset().top
    }, 1480);
    $('.scroll-down').addClass('animated fadeOut');
});

$("#aboutLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#about").offset().top
    }, 850);
});

$("#skillsLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#skills").offset().top
    }, 850);
});
$("#projectsLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#projects").offset().top
    }, 850);
});

$("#contactLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#contact").offset().top
    }, 850);
});