$(document).ready(function () {
	
	// calling navbar
	// dropdown menu hover delay effect
	
	var delay = 500; var show = 100;
	var $dropdownMenu = $('.dropdown');
	var $subMenu = $('.submenu')
	
	$dropdownMenu.add($subMenu).mouseenter(function () {
		$(this).children('ul, div').stop(true,true).delay(delay).show(show);
	});
	$dropdownMenu.add($subMenu).mouseleave(function () {
		$(this).children('ul, div').stop(true,true).delay(delay).hide(show);
	});
	$dropdownMenu.add($subMenu).on('touchstart', function () {
		$(this).children('ul, div').stop(true,true).delay(delay).toggle(show);
	});
	
	
	
	//headings fade in
	//configuration
	var $tennisOne = $('.tennis > .slideheading1'); var $tennisTwo = $('.tennis > .slideheading2'); var $tennisThree = $('.tennis > .slideheading3');
	var $fitnessOne = $('.fitness > .slideheading1'); var $fitnessTwo = $('.fitness > .slideheading2'); var $fitnessThree = $('.fitness > .slideheading3');
	var $volleyballOne = $('.volleyball > .slideheading1'); var $volleyballTwo = $('.volleyball > .slideheading2'); var $volleyballThree = $('.volleyball > .slideheading3');
	var delayTime = 500; var delayTime2 = 1000; var fadeInTime = 500;
	$tennisOne.fadeIn(fadeInTime); $tennisTwo.delay(delayTime).fadeIn(fadeInTime); $tennisThree.delay(delayTime2).fadeIn(fadeInTime);
	
	//calling mainslider	
	//configuration
	var width = '100%';
	var animationSpeed = 1000;
	var pause = 5000;
	var currentSlide = 1;
	//cache DOM
	var $mainslider = $('#mainslider');
	var $mainslideContainer = $mainslider.find('.mainslides');
	var $mainslide = $mainslideContainer.find('.mainslide');
	var $mainsliderbtn = $('.mainslider-btn'); var $mainsliderbtnPlay = $('.mainslider-btnplay');
	var $prev = $('#prev'); var $next = $('#next'); var $pause = $('#pause'); var $play = $('#play');
	var firstSlideMove = '-600%';
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
					$volleyballOne.fadeOut(0); $volleyballTwo.fadeOut(0); $volleyballThree.fadeOut(0);
					$tennisOne.fadeIn(fadeInTime); $tennisTwo.delay(delayTime).fadeIn(fadeInTime); $tennisThree.delay(delayTime2).fadeIn(fadeInTime);
					} else if (currentSlide === 3) {
					$tennisOne.fadeOut(0); $tennisTwo.fadeOut(0); $tennisThree.fadeOut(0);
					$fitnessOne.fadeIn(fadeInTime); $fitnessTwo.delay(delayTime).fadeIn(fadeInTime); $fitnessThree.delay(delayTime2).fadeIn(fadeInTime);
					} else if (currentSlide === 5) {
					$fitnessOne.fadeOut(0); $fitnessTwo.fadeOut(0); $fitnessThree.fadeOut(0);
					$volleyballOne.fadeIn(fadeInTime); $volleyballTwo.delay(delayTime).fadeIn(fadeInTime); $volleyballThree.delay(delayTime2).fadeIn(fadeInTime);
				}
			});
			currentMargin = $mainslideContainer.css('margin-left');
		}, pause);
	}
	
	startSlider();
	
	function stopSlider() {
		clearInterval(interval);
	}
	var toggleTime = 200; var appearTime = 0;
	$mainslider.mouseenter(function() { $mainsliderbtn.stop(true,true).show(toggleTime); });
	$mainslider.mouseleave(function() { $mainsliderbtn.stop(true,true).hide(toggleTime); });
	
	$mainsliderbtn.add($play).hover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$pause.click(function() {
		stopSlider(); $(this).hide(appearTime);	$play.show(appearTime, function() {
			$mainslider.mouseleave(function() { $play.stop(true,true).hide(toggleTime); 
			});
			$mainslider.mouseenter(function() { $play.stop(true,true).show(toggleTime); 
			});
		});
	});
	
	$play.click(function() {
		startSlider(); $(this).hide(appearTime); $pause.show(appearTime, function() {
			$mainslider.mouseenter(function() { $play.stop(true,true).hide(appearTime);
			});
		});
	});
	
	$prev.click(function() {
		if (currentSlide === 1) {
			currentSlide = 7;
			$mainslideContainer.css('margin-left', firstSlideMove);
		}
		$mainslideContainer.animate({'margin-left': '+='+width}, animationSpeed, function(){
			currentSlide--;
			if (currentSlide === 2) {
				$fitnessOne.fadeOut(0); $fitnessTwo.fadeOut(0); $fitnessThree.fadeOut(0);
				$tennisOne.fadeIn(fadeInTime); $tennisTwo.delay(delayTime).fadeIn(fadeInTime); $tennisThree.delay(delayTime2).fadeIn(fadeInTime);
				} else if (currentSlide === 4) {
				$volleyballOne.fadeOut(0); $volleyballTwo.fadeOut(0); $volleyballThree.fadeOut(0);
				$fitnessOne.fadeIn(fadeInTime); $fitnessTwo.delay(delayTime).fadeIn(fadeInTime); $fitnessThree.delay(delayTime2).fadeIn(fadeInTime);
				} else if (currentSlide === 6) {
				$tennisOne.fadeOut(0); $tennisTwo.fadeOut(0); $tennisThree.fadeOut(0);
				$volleyballOne.fadeIn(fadeInTime); $volleyballTwo.delay(delayTime).fadeIn(fadeInTime); $volleyballThree.delay(delayTime2).fadeIn(fadeInTime);
			}
		});
	});
	
	$next.click(function() {
		$mainslideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
			currentSlide++;
			if (currentSlide === $mainslide.length) {
				currentSlide = 1;
				$mainslideContainer.css('margin-left', 0);
				$volleyballOne.fadeOut(0); $volleyballTwo.fadeOut(0); $volleyballThree.fadeOut(0);
				$tennisOne.fadeIn(fadeInTime); $tennisTwo.delay(delayTime).fadeIn(fadeInTime); $tennisThree.delay(delayTime2).fadeIn(fadeInTime);
				} else if (currentSlide === 3) {
				$tennisOne.fadeOut(0); $tennisTwo.fadeOut(0); $tennisThree.fadeOut(0);
				$fitnessOne.fadeIn(fadeInTime); $fitnessTwo.delay(delayTime).fadeIn(fadeInTime); $fitnessThree.delay(delayTime2).fadeIn(fadeInTime);
				} else if (currentSlide === 5) {
				$fitnessOne.fadeOut(0); $fitnessTwo.fadeOut(0); $fitnessThree.fadeOut(0);
				$volleyballOne.fadeIn(fadeInTime); $volleyballTwo.delay(delayTime).fadeIn(fadeInTime); $volleyballThree.delay(delayTime2).fadeIn(fadeInTime);
			}
		});
	});
	
	//listen for mouseenter and pause
	//resume after mouseleave
	
	
	
	// call small slider
	var current = 1; var next = 2;
	var count = $('.smslide').length;
	var $first = $('#smslide1'); $firstDot = $('#dot1');
	//var $allPages = $("img[id^='smslide']");
	var $allDots = $('.smslider ol li'); var $allSmslides = $('.smslides img');
	var imgTitle = '#smslide'; var dotTitle = '#dot';
	var activeClass = 'active';
	var loop;
	var index;
	
	// reference-$allPages.fadeOut(0);
	$first.fadeIn(fadeInTime);
	//$first.addClass(activeClass);
	$firstDot.addClass(activeClass);
	
	function startLoop () {	
		loop = setInterval (function () {
			
			$(imgTitle+current).fadeOut(0);
			$(imgTitle+current).removeClass(activeClass);
			$(dotTitle+current).removeClass(activeClass);
			$(imgTitle+next).fadeIn(fadeInTime);
			$(imgTitle+next).addClass(activeClass);
			$(dotTitle+next).addClass(activeClass);
			(current === count) ? current = 1 : current++;
			(next === count) ? next = 1 : next++;
			
		}, pause)
	}
	
	startLoop();
	function stopLoop () {
		clearInterval(loop);
	}	
	// call dot navigation
	$('.smslider ol li').on('click', function() {
		stopLoop();
		index = $(this).index() + 1;
		
		// fadeout img
		$allSmslides.fadeOut(0);
		$allSmslides.removeClass(activeClass);
		// fadein clicked img
		$(imgTitle+index).fadeIn(fadeInTime);
		$(imgTitle+index).addClass(activeClass);
		// change active dots
		$allDots.removeClass(activeClass);
		$(this).addClass(activeClass);
		
		//set again current with index for restart loop
		if (index === count) {
			next = 1; current = index;
			} else {
			next = index + 1; current = index;
		}
		startLoop();
	});
	
	
	
	// call ftslider footer slider
	
	var ftCurrent = 1; var ftNext = 2;
	var ftLength = $('.ftslide').length;
	var $firstFtPage = $('#ftslide1'); $firstFtDot = $('#ftdot1');
	//var $allPages = $("img[id^='smslide']");
	var $allFtDots = $('.ftslider ol li'); var $allFtslides = $('.ftslide');
	var divName = '#ftslide'; var dotName = '#ftdot';
	var ftLoop;
	var ftIndex;
	
	$firstFtPage.show('slide', {direction: 'right'}, fadeInTime);
	$firstFtDot.addClass(activeClass);
	
	function startFtLoop () {	
		ftLoop = setInterval (function () {
			
			$(divName+ftCurrent).hide(0);
			$(divName+ftCurrent).removeClass(activeClass);
			$(dotName+ftCurrent).removeClass(activeClass);
			$(divName+ftNext).show('slide', {direction: 'right'}, fadeInTime);
			$(divName+ftNext).addClass(activeClass);
			$(dotName+ftNext).addClass(activeClass);
			(ftCurrent === ftLength) ? ftCurrent = 1 : ftCurrent++;
			(ftNext === ftLength) ? ftNext = 1 : ftNext++;
			
		}, pause)
	}
	
	startFtLoop();
	function stopFtLoop () {
		clearInterval(ftLoop);
	}	
	// call dot navigation
	$('.ftslider ol li').on('click', function() {
		stopFtLoop();
		ftIndex = $(this).index() + 1;
		
		// fadeout img
		$allFtslides.hide(0);
		$allFtslides.removeClass(activeClass);
		// fadein clicked img
		$(divName + ftIndex).show('slide', {direction: 'right'}, fadeInTime);
		$(divName + ftIndex).addClass(activeClass);
		// change active dots
		$allFtDots.removeClass(activeClass);
		$(this).addClass(activeClass);
		
		//set again current with index for restart loop
		if (ftIndex === ftLength) {
			ftNext = 1; ftCurrent = ftIndex;
			} else {
			ftNext = ftIndex + 1; ftCurrent = ftIndex;
		}
		startFtLoop();
	});
	
	
	
	// set the navgation bar fixed when scrolling
	var $navbar = $('.navbar'); var $navbarList = $('.navbar-nav>li');
	var $navbarLink = $('.navbar-default .navbar-nav>li>a');
	var $menuBar = $('#menubar');
	var $scrollBtn = $('#scrolltotop');
	var fixmeTop = $navbar.offset().top;       // get initial position of the element
	
	function adjustMenu () {                  // assign scroll event listener
		
		var currentScroll = $(window).scrollTop();   // get current position
		
		if (currentScroll >= fixmeTop && $scrollBtn.css('height') == '60px') {           // apply position: fixed if you
			
			$navbar.css({                      // scroll to that element or below it
				position: 'fixed', top: '0', left: '0', right: '0', height: '40px', transition: '.5s ease-in-out'
			});
			$navbarList.css({height: '37px', transition: '.5s ease-in-out'});
			$navbarLink.css({padding: '8px 25px 9px', transition: '.5s ease-in-out'});
			} else {                                   // apply position: static
			$navbar.css({                      // scroll to that element or below it
				position: '', height: '', transition: ''
			});
			$navbarList.css({height: '', transition: ''});
			$navbarLink.css({padding: '', transition: ''});
		}
	}
	
	
	function menuPopUp () {                  // assign scroll event listener		
		
		if ($('#scrolltotop').css('height') == '60px') {
			
			$('.menu').show();
			$menuBar.fadeOut(500);
		}
		
		if ($('#scrolltotop').css('height') == '50px') {
			
			$navbar.css({                      // scroll to that element or below it
				position: '', height: '', transition: ''
			});
			$navbarList.css({height: '', transition: ''});
			$navbarLink.css({padding: '', transition: ''});
			
		}
		
		
	}
	
	$(window).resize(menuPopUp);
	$(window).scroll(adjustMenu);
	
	$menuBar.click(function() {
		$('.menu').toggle(200);
	});
	
	$('body').on('touchstart', function() {
		if ($('#scrolltotop').css('height') == '40px') {
			$('.menu').fadeOut(500);
		}
	});
	
	var $dropdownDiv = $('#dropdown-div');
	$menuBar.add('.menu').add($dropdownDiv).add($dropdownMenu).add($subMenu).on('touchstart', function (e) {
		e.stopPropagation();
	});
	
	var scrollTime = 800;
	var $mainPage = $('html, body');
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$scrollBtn.fadeIn(animationSpeed);
			} else {
			$scrollBtn.fadeOut(animationSpeed);
		}		
	})
	
	$scrollBtn.click(function() {
		$mainPage.animate({scrollTop: 0}, scrollTime);
		return false;
	});
	
	
	
	// filter panel
	var $filterOption = $('.filter-panel li a');
	var $filterList = $('.filter-panel li');
	var $galleryItem = $('.gallery-item');
	
	$('.filter-panel li:nth-child(1)').addClass('active');
	$filterOption.click(function() {
		
		//find the clicked class
		var ourClass = $(this).attr('class');
		
		//remove li class and add clicked li active
		$filterList.removeClass('active');
		$(this).parent().addClass('active');
		
		if(ourClass == 'all') {
			$galleryItem.children().fadeIn(animationSpeed);
			} else {
			$galleryItem.children('div:not(.'+ourClass+')').fadeOut(animationSpeed);
			$galleryItem.children('div.'+ourClass).fadeIn(animationSpeed);
		}
		return false;
	});
	
	
	
	// add images to the overlay and show them
	var $overlayImage = $('.imgoverlay img'); var $imgOverlay = $('.imgoverlay')
	var $overlayContainer = $('.overlay-container');
	var $nextBtn = $('#gallerynext'); var $prevBtn = $('#galleryprev');
	
	$('.imgbox').click(function() {  //triggers when you click on one of your gallery images
		
		getCurrentImage(this);
		$overlayContainer.fadeIn(1000);
	});
	
	function getCurrentImage (event) {
		presentImage = $(event).children('img');
		presentImageSrc = presentImage.attr('src');
		$overlayImage.attr('src', presentImageSrc);
	}
	
	// next and prev button
	
	function getNextImage () {		
		nextImageBox = $(presentImage).parent().parent().next().children();
		nextImageSrc = $(nextImageBox).children('img').attr('src');
		getCurrentImage(nextImageBox);
	}
	
	function getPrevImage () {		
		prevImageBox = $(presentImage).parent().parent().prev().children();
		prevImageSrc = $(nextImageBox).children('img').attr('src');
		getCurrentImage(prevImageBox);
	}
	
	
	
	$nextBtn.click(function() {
		setTimeout(getNextImage,500);
		$imgOverlay.fadeOut(500);
		$imgOverlay.fadeIn(500);
	});
	
	$prevBtn.click(function() {
		setTimeout(getPrevImage,500);
		$imgOverlay.fadeOut(500);
		$imgOverlay.fadeIn(500);
	});
	
	// cancel img
	$overlayContainer.click(function(e) {
		if (e.target !== this) return;
		$overlayContainer.fadeOut(1000);
	});
	
	
	
	// Comment box
	function addComment () {
		$('.comment-btn').click(function() {
			var comment = $('#comment').val();
			$('.comment-list li').text(comment).prependTo('.comment-list');
			$('#comment').val('');
			$('.counter').text(400);
		});
		$('#comment').keyup(function() {
			postLength = $(this).val().length;
			characterLeft = 400 - postLength;
			$('.counter').text(characterLeft);
			if (characterLeft < 0) {
				$('.comment-btn').addClass('disabled');
				} else if (characterLeft == 400) {
				$('.comment-btn').addClass('disabled');
				} else {
				$('.comment-btn').removeClass('disabled');
			}
		});
		$('.comment-btn').addClass('disabled');
	}
	
	addComment();
	
});

//var imgSrc = $(this).children('img').attr('src');
//	var imgSrcNext = $(this).parent().next().find('img').attr('src');
//	var imgSrcPrev = $(this).parent().prev().find('img').attr('src');


//simplest example of a slideshow
//$(function(){
//    $('.fadein img:gt(0)').hide();
//    setInterval(function(){
//      $('.fadein :first-child').fadeOut()
//         .next('img').fadeIn()
//         .end().appendTo('.fadein');}, 
//      3000);
//});				