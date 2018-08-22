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

(function ($) {
  'use strict';

  // Elevator - Scroll back to top utility JS
  // ========================================

  // append necessary class
  // should have already contain wrapper on a page.
  // <div class="elevator-wrapper"></div>
  $('.elevator-wrapper').append('<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>');

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    // duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    // grab the "back to top" link
    $back_to_top = $('.elevator');

  // hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible') : $back_to_top.removeClass('elevator-is-visible');
  });

  // smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
      }, scroll_top_duration
    );
  });

})(jQuery);


// Navbar slowscroll to part
