var scrollSpeed = 100; 	// Speed in milliseconds
var step = 1; 			// How many pixels to move per step
var current = 0;		// The current pixel col
var imageW = 2020;		// Background image width
var headerW = 850;		// Header width

//The pixel row where to start a new loop
var restartPosition = -(imageW - headerW);
	function scrollBg(){
//Go to next pixel row.
	current -= step;
//If at the end of the image, then go to the top.
	if (current == restartPosition){
		current = 0;
		}
//Set the CSS of the header.
	$('#masthead').css("background-position",current+"px"+" 0");
		}
//Calls the scrolling function repeatedly
	var init = setInterval("scrollBg()", scrollSpeed);