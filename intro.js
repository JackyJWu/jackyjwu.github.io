/*
function sHide(){
  $(document).off('scroll');
}


function scroll(){
  introEl.slideUp(1000, sHide());
}

function intro(){
  var introEl = $('div.intro');
  var introHeadingH = introEl.find('h1').height();
  var windowH = $(window).height();

  introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');

  $(document).on('scroll', scroll());
}


intro();
*/
function intro(){
  var introEl = $('div.intro');
  var introHeadingH = introEl.find('h1').height();
  var windowH = $(window).height();

  introEl.css('padding', (windowH-introHeadingH)/2 + 'px 0');

  $(document).on('scroll',function(){
    introEl.slideUp(1500, function(){$(document).off('scroll');} )
  });
};

intro()

/* scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink" */
$('.scrollLink').click( function() {
     $('html, body').animate({
          scrollTop: $('#scrollToThis').offset().top
     }, 400);
});

/* scroll to the top of the page */
if ($('.scrollToTop')[0]){
     $('.scrollToTop').click(function(){
          $('html,body').animate({ scrollTop: 0 }, 400);
     });
}
