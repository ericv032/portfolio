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
$("i").click(function(e) {
	e.preventDefault();
	var $figcaption = $(this).next('figcaption');
	$("figcaption").not($figcaption).hide();
	  if ($figcaption.is(":visible")) {
		  $figcaption.hide()
	  }  else {
		 $figcaption.fadeIn('fast');
	  }
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
		$( '.slide-panel-wrap' ).hide('slide' , { direction: 'down' }, 400  );
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
