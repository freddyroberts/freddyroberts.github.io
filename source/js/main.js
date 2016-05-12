$(document).ready(function() {
    $('.web').addClass('animated fadeInDown');
    $(".background-color").animate({
        opacity: 0.75,
    }, 4400, function() {});
    $('.scroll-down').addClass('animated fadeInDown');
});

window.addEventListener("scroll", function(e) {
    e.preventDefault();
    var pos_top = $(window).scrollTop();
    if (pos_top >= 400) {
        $(".header").fadeIn("slow", function() {});
        $('.scroll-down').addClass('animated fadeOutDown');
    } else {
        $(".header").fadeOut("fast", function() {});
        $('.scroll-down').removeClass('animated fadeOutDown').addClass('animated fadeInDown');
    }
});

$("#bottom").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: ($("#top").offset().top - 70)
    }, 1180);
});
$(".scroll-down").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: ($("#contact").offset().top - 70)
    }, 1480);
});

$("#aboutLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: ($("#about").offset().top - 70)
    }, 850);
});

$("#skillsLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: ($("#skills").offset().top - 70)
    }, 850);
});
$("#projectsLnk").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: ($("#projects").offset().top - 70)
    }, 850);
});

$("#contactLnk").on("click", function(e) {
    e.preventDefault();
    $('html, body').animate({
    scrollTop: ($( $.attr(this, 'href') ).offset().top - 70)
  }, 850);
});
