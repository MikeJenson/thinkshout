(function($) {
  // Mobile Menu
  $('.mobile-menu-icon').click(function() {
    $(this).toggleClass('active');
    $('header nav .main-menu').slideToggle(300);
    $(this).find('.fa').toggleClass('fa-bars fa-remove');
  });

  // Waypoints
  $('.case-study').each(function() {
    var current_item = $(this);
    $(this).waypoint(function(direction) {
      if (direction == 'down') {
        current_item.addClass('active');
      } else {
        current_item.removeClass('active');
      }
    }, { offset: '25%' });
  });

// Navbar animation
  $('body').waypoint(function(direction) {
    if (direction == 'down') {
      $('header').animate({"padding":"0"}, 600);
      $('header .header-logo img').animate({"width":"10rem", "margin-top": "6px"}, 600);
      $('.main-menu li').css({"padding": "1.1rem 0"});
    } else {
      $('header').animate({"padding":"2rem 0"}, 600);
      $('header .header-logo img').animate({"width":"13rem"}, 600);
      $('.main-menu li').css({"padding": "3.125rem 0"});
    }
  }, { offset: '50px' });

  // Blog posts
  $('.post').matchHeight();
  $('.blogs-toggle').click(function() {
    $('.post:nth-child(-n+3)').css({ display: "none" });
    $('.post').slideToggle(800);
    $('.post').css({ display: "inline-block"});

    $('body, html').animate({
      scrollTop: $('.team-member-blog' ).offset().top - 70
    }, 800, function() {
    // Animation complete.
      $('.post').matchHeight();
    });

    $('.see-all-blogs').toggle();
    $('.view-less-blogs').toggle();
  });

  $('#blog-filter').chosen({
    disable_search: true
  });

  $("#blog-filter").change(function(evt, params) {
    $('.blog-list').find('li').hide();
    if (params.selected != 'all') {
      $('.blog-list').find('li.'+params.selected).fadeIn();
    } else {
      $('.blog-list').find('li').fadeIn();
    }
  });

  function getParam(key) {
    var value=RegExp(""+key+"[^&]+").exec(window.location.search);
    return unescape(!!value ? value.toString().replace(/^[^=]+./,"") : "");
  }

  if ( getParam('category').length ) {
    $('.blog-list').find('li').hide();
    $('.blog-list').find('li.'+getParam('category')).fadeIn();
    $('html, body').stop().animate( {
        'scrollTop': $('#filter-wrapper').offset().top-100
    }, 700);
  }

})(jQuery);
