

      // StickyNavBAR


      //The following code executes when the window is scrolled,thus add the features of black to the nav

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');   // adds the property of black to the nav
            }

            else {
                  $('nav').removeClass('black');
            }
      })


