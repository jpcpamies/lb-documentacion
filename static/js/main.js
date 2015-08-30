var num = 600; //number of pixels before modifying styles

      $(window).bind('scroll', function () {
          if ($(window).scrollTop() > num) {
              $('.boton').addClass('arriba');
          } else {
              $('.boton').removeClass('arriba');
          }
      });



// $(document).ready(function(){

// $(window).resize(function(){
// 	  if(window.innerWidth>600){
// 	    $('.few-tags').removeClass('iconography__module--horizontal');
// 	    $('.few-tags').addClass('iconography__module--vertical')
// 	  } else if(window.innerWidth<600){
// 	    $('.few-tags').removeClass('iconography__module--vertical');
// 	    $('.few-tags').addClass('iconography__module--horizontal')
// 	  }
// 	});

// }