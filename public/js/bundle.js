(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
