$(document).ready(function() {

	introducing ();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken ()
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
		{'left' : '300px'},
		 500,
		function () {
			$(this).hide();
			$(this).css('left', '-212px');
			});	
		})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});//end of mouse events
	
	$('body').keydown(function(event) {
		if(event.which==88) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			$('.ryu-jump-kick').hide();
			}
		})
	.keyup(function(event) {
		if(event.which==88) {
			playTaunt ()
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-jump-kick').hide();
		}
	});//end of ryu-cool

		$('body').keydown(function(event) {
		if(event.which==74) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').hide();
			$('.ryu-jump-kick').show();
			}
		})
	.keyup(function(event) {
		if(event.which==74) {
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-jump-kick').hide();
		}
	});//end of ryu-jump-kick	
//	var oneTime = new Boolean(0);
	
//		$('body').keypress(function (event) {
//			if(event.which==106 && oneTime ==0) {
//				$('.ryu-throwing').hide();
//				$('.ryu-ready').hide();
//				$('.ryu-still').hide();
//				$('.ryu-cool').hide();
//				$('.ryu-jump-kick').show();
//				console.log("j key pressed");
//				
//		}
			
//	})//end Ryu-jump-kick
	
//	$('body').one("keypress", function (event) {
//			if(event.which==106) {
//				$('.ryu-throwing').hide();
//				$('.ryu-ready').hide();
//				$('.ryu-still').hide();
//				$('.ryu-cool').hide();
//				$('.ryu-jump-kick').show();
//				console.log("j key pressed");	//	}
			
//	})//end Ryu-jump-kick


//	var i=0;
//	$('body').keypress(function(event) {
//		if((event.which==106) || i>1) {
//			return;
//			};
//			i++;//increase counter
//			if(event.which==106) {
//				$('.ryu-throwing').hide();
//				$('.ryu-ready').hide();
//				$('.ryu-still').hide();
//				$('.ryu-cool').hide();
//				$('.ryu-jump-kick').show();
//				console.log("j key pressed");
//				
//			 } else {
//				$('.ryu-throwing').hide();
//				$('.ryu-ready').hide();
//				$('.ryu-still').show();
//				$('.ryu-cool').hide();
//				$('.ryu-jump-kick').hide();
//			}
//		});//end of ryu-jump-kick
});//end of Document Ready
function introducing () {
$('.street_fighter').fadeIn(3500,
	function () {
		$(this).fadeOut(1000,
			function () {
				$('.first').fadeIn(3500,
					function () {
					$('.second').fadeIn(3500)
				});
			});
		});
	}
function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
}
function playTaunt () {
		$('#taunt-sound')[0].volume = 0.3;
		$('#taunt-sound')[0].load();
		$('#taunt-sound')[0].play();
}
function playHurricane () {
		$('#hurricane-sound')[0].volume = 0.3;
		$('#hurricane-sound')[0].load();
		$('#hurricane-sound')[0].play();
}
		
//.keypress(function(event) {
	//	if(event.keyCode==120) {
	//		playTaunt ();
	//		}