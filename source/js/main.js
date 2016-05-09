function Instalimit() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return 4;
  } else {
    return 16;
  }
};
var userFeed = new Instafeed({
  get: 'user',
  userId: 6782497,
  limit: Instalimit(),
  accessToken: '6782497.1313689.73f45627cbc747af95d8f37b667b3e78'
});
// INSTAGRAM
userFeed.run();

// Twitter Script
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

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

$( "#socialLnk" ).on( "click", function( event ) {
  $("html, body").animate({
    scrollTop: $("#social").offset().top
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
