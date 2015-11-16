	//calling mainslider
		
	//configuration
	var width = '100%';
	var animationSpeed = 1000;
	var pause = 1000;
	var currentSlide = 1;
	//cache DOM
	var $mainslider = $('#mainslider');
	var $mainslideContainer = $mainslider.find('.mainslides');
	var $mainslide = $mainslideContainer.find('.mainslide');
	var $currentMargin;
	var $mainsliderbtn = $('.mainslider-btn');
	var $prev = $('#prev'); var $next = $('#next'); var $pause = $('#pause'); var $play = $('#play');
	//animate margin-left
	var interval;
	function startSlider () {
		interval = setInterval(function () {
			$mainslideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
	//slide back at the end			
				currentSlide++;
				if (currentSlide === $mainslide.length) {				
					currentSlide = 1;
					$mainslideContainer.css('margin-left', 0);				
				}
				$currentMargin = $mainslideContainer.css('margin-left');
			});		
		}, pause);
		}
		
	$mainsliderbtn.hover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$prev.click(function() {
		$mainslideContainer.animate({'margin-left': $currentMargin'+'width}, animationSpeed);
	});
	$next.click(function() {
		$mainslideContainer.animate({'margin-left': $currentMargin'-'width}, animationSpeed);
	});
	
	function stopSlider() {
		clearInterval(interval);
	}

	$pause.click(function() {
		stopSlider(); $(this).hide(0);	$play.show(0);
	});
	
	$play.click(function() {
		startSlider(); $(this).hide(0);	$pause.show(0);
	});
	
	startSlider();
	//listen for mouseenter and pause
	//resume after mouseleave