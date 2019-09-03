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
 
  $("i").click(function(e) {
	e.preventDefault();
	var $div = $(this).next('.row div');
	$(".row div").not($div).hide();
	if ($div.is(":visible")) {
	  $div.hide()
	} else {
	  $div.fadeIn;
	}
  });
 
 
  // Back to top
  $(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 100) {
		$('#back-top').fadeIn();
	  } else {
		$('#back-top').fadeOut();
	  }
	});
	$('#back-top').click(function() {
	  $('body,html').animate({
		scrollTop: 0
	  }, 300);
	  return false;
	});
  });
 