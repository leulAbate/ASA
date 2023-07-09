function toggleMenu() {
	var fullMenu = document.querySelector('.full-menu');
	var nav = document.querySelector('nav');
  
	var computedStyle = window.getComputedStyle(fullMenu);
	var display = computedStyle.getPropertyValue('display');
  
	if (display === 'none') {
	  fullMenu.style.display = 'block';
	  nav.classList.remove('scroll-hide');
	} else {
	  fullMenu.style.display = 'none';
	  nav.classList.add('scroll-hide');
	}
  }
