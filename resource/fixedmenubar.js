	// set the navgation bar fixed when scrolling
	var $navbar = $('.navbar'); var $navbarList = $('.navbar-nav>li');
	var $navbarLink = $('.navbar-default .navbar-nav>li>a');
	var $menuBar = $('#menubar');
	var $scrollBtn = $('#scrolltotop');
	var fixmeTop = $navbar.offset().top;       // get initial position of the element
	
	function adjustMenu () {                  // assign scroll event listener
		
		var currentScroll = $(window).scrollTop();   // get current position
		
		if (currentScroll >= fixmeTop) {           // apply position: fixed if you
			
			if ($scrollBtn.css('height') == '40px') {
				$navbar.slideUp(500); $menuBar.fadeIn(500);
				$navbar.css({                      // scroll to that element or below it
					position: 'fixed', top: '0', left: '0', right: '0', height: '114px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '37px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '8px 25px 9px', transition: '.5s ease-in-out'});
			}
			
			if ($scrollBtn.css('height') == '50px') {
				$navbar.slideUp(500); $menuBar.fadeIn(500);
				$navbar.css({                      // scroll to that element or below it
					position: 'fixed', top: '0', left: '0', right: '0', height: '77px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '37px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '8px 25px 9px', transition: '.5s ease-in-out'});
			}
			
			if ($scrollBtn.css('height') == '60px') {
				$navbar.slideDown(500); $menuBar.fadeOut(500);
				$navbar.css({                      // scroll to that element or below it
					position: 'fixed', top: '0', left: '0', right: '0', height: '40px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '37px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '8px 25px 9px', transition: '.5s ease-in-out'});
			} 
			} else {                                   // apply position: static
			
			if ($scrollBtn.css('height') == '40px') {
				$navbar.css({                      // scroll to that element or below it
					position: 'static', top: '0', left: '0', right: '0', height: '153px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '50px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '15px 25px 15px', transition: '.5s ease-in-out'});
			}
			
			if ($scrollBtn.css('height') == '50px') {
				$navbar.css({                      // scroll to that element or below it
					position: 'static', top: '0', left: '0', right: '0', height: '103px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '50px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '15px 25px 15px', transition: '.5s ease-in-out'});
			}
			
			if ($scrollBtn.css('height') == '60px') {
				$navbar.css({                      // scroll to that element or below it
					position: 'static', top: '0', left: '0', right: '0', height: '53px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '50px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '15px 25px 15px', transition: '.5s ease-in-out'});
			}
		}		
	}
	
	function menuPopUp () {                  // assign scroll event listener		
		
		var currentScroll = $(window).scrollTop();
		
		if (currentScroll >= fixmeTop)  {
			
			if ($('#scrolltotop').css('height') == '50px') {
				
				$navbar.hide();                      // scroll to that element or below it
				
				$navbar.css({                      // scroll to that element or below it
					height: '53px'
				});
				$navbarList.css({height: '50px'});
				$navbarLink.css({padding: '15px 25px 15px'});
				
				$menuBar.fadeIn(500);
				
			}
			if ($('#scrolltotop').css('height') == '60px') {
				$navbar.css({                      // scroll to that element or below it
					position: 'fixed', top: '0', left: '0', right: '0', height: '40px', transition: '.5s ease-in-out'
				});
				$navbarList.css({height: '37px', transition: '.5s ease-in-out'});
				$navbarLink.css({padding: '8px 25px 9px', transition: '.5s ease-in-out'});
				$navbar.show();
				$menuBar.fadeOut(500);
			}
		} else { return; }
	}
	
	$(window).resize(menuPopUp);
	
	$(window).scroll(adjustMenu);