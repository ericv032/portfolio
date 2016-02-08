(function() {

    var introText = $(".introText");
    var introIndex = -1;
    
    function showNextIntroText() {

        ++introIndex;

        introText.eq(introIndex % introText.length)

            .fadeIn(1000)

            .delay(1000)

            .fadeOut(1000, showNextIntroText);
    }
    
    showNextIntroText();
    
})();


// Nav Toggle

	$(function() {
	$( '#toggle' ).click(function() {
		
		$( 'header nav' ).toggle( 'slide' , { direction: 'left' }, 400  );
			
		
	  });
  
	});
	
	
// Portfolio Toggle

	$(function() {
		
	$( '.tglOne' ).click(function() {
		
		$('.one').toggle( 'slide' , { direction: 'right' }, 200  );
			
	  });
  
	});
	
	
		$(function() {
	$( '.tglTwo' ).click(function() {
		
		$('.two').toggle( 'slide' , { direction: 'right' }, 200  );
		

	  });
  
	});
	
	
		$(function() {
	$( '.tglThree' ).click(function() {
		
		
	$('.three').toggle( 'slide' , { direction: 'right' }, 200  );

		
		
	  });
  
	});
	
	
	$(function() {
		
	$( '.tglFour' ).click(function() {
		
		$('.four').toggle( 'slide' , { direction: 'right' }, 200  );

	  });
  
	});
	
	
	
	$(function() {
		
	$( '.tglFive' ).click(function() {
		
		$('.five').toggle( 'slide' , { direction: 'right' }, 200  );
		
		
	  });
  
	});
	
	
	$(function() {
	$( '.tglSix' ).click(function() {
		
		$('.six').toggle( 'slide' , { direction: 'right' }, 200  );
		
	  });
  
	});
	
	$(function() {
		$( '.tglSeven' ).click(function() {
		
		$('.seven').toggle( 'slide' , { direction: 'right' }, 200  );
		
	  });
  
	});
	
	$(function() {
		$( '.tglEight' ).click(function() {
		
		$('.eight').toggle( 'slide' , { direction: 'right' }, 200  );
		
	  });
  
	});
	
		$(function() {
		
	$( '.tglNine' ).click(function() {
		
		$('.nine').toggle( 'slide' , { direction: 'right' }, 200  );
			
	  });
  
	});
	
			$(function() {
		
	$( '.tglTen' ).click(function() {
		
		$('.ten').toggle( 'slide' , { direction: 'right' }, 200  );
			
	  });
  
	});
	
	

	
	
	

// Slide-in panel Toggle
	
	$(function() {
			
	$( '#open-panel, #open-panel1' ).click(function() {
		
		$( '.slide-panel-wrap' ).toggle( 'slide' , { direction: 'down' }, 200  );
	  });
  
	});
	
	
	// AJAX
	
	$(function() {
	
	$("#about-page").load("about.html");
	
	});   
		
	
	
	$(function() {
	
	$('#close-btn').click(function() {
		
		$( '.slide-panel-wrap' ).fadeOut('fast');


		
	});
	
	
	
});
	
	
	// Back to top
	$(function () {
	
		$(window).scroll(function () {
		
			if ($(this).scrollTop() > 100) {
			
				$('#back-top').fadeIn();
				
			} else {
			
				$('#back-top').fadeOut();
			}
		});

		$('#back-top').click(function () {
		
			$('body,html').animate({
			
				scrollTop: 0
				
			}, 300);
			
			return false;
		});
	}); 
