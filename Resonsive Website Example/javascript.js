$(document).ready(function() {
	var n = '#nav', no = 'nav-open';

		$('#nav-menu').click(function() {

			// CHECK IF WE ALREADY HAVE NAV OPEN 
			if ($(n).hasClass(no)) {
				$(n).animate({height:0},300);
				setTimeout(function() {
					$(n).removeClass(no).removeAttr('style');
				},320);
			}
			else {
				
				// EXPANDS THE MENU TO THE FULL HEIGHT 
				var newH = $(n).css('height','auto').height();
				$(n).height(0).animate({height:newH},300);

				// A BUFFER TO WAIT FOR ANIMATION TO COMPLETE
				setTimeout(function() {
					$(n).addClass(no).removeAttr('style');
				},320);
			}
	});
});