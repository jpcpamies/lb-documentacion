var num = 600; //number of pixels before modifying styles

      $(window).bind('scroll', function () {
          if ($(window).scrollTop() > num) {
              $('.boton').addClass('arriba');
          } else {
              $('.boton').removeClass('arriba');
          }
      });