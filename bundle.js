(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
