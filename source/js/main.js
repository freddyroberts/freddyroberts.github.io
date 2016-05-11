// var vue = require('vue');

// Vue.config.devtools = true
// new Vue({
//   el: '#app',
//   data: {
//     title: 'Freddy Roberts'
//   }
// })
window.addEventListener("scroll", function(evt) {
    var pos_top = $(window).scrollTop();
     if(pos_top > 50){
       $( ".header" ).fadeIn( "slow", function(){});
   } else {
      $( ".header" ).fadeOut( "fast", function(){});
   }
});

$( "#bottom" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#top").offset().top
  }, 1180);
});

$( "#aboutLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 850);
});

$( "#skillsLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#skills").offset().top
  }, 850);
});
$( "#projectsLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#projects").offset().top
  }, 850);
});

$( "#portfolioLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#portfolio").offset().top
  }, 850);
});

$( "#contactLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#contact").offset().top
  }, 850);
});
