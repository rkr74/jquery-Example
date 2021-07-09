$(document).ready(function(){
	// alert
	$('#btn_alert').click(function(){
		alert("Welcome to my website");
	});
	// hide
	$('#btn_hide').click(function(){
		$('p').hide();
	});
	// show
	$('#btn_show').click(function(){
		$('p').show();
	});
	// toggle
	$('#btn_Toggle').click(function(){
		$('p').toggle();
	});
	// fade out
	$('#fade_out').click(function(){
		$('.fade_c').fadeOut();
	});
	// fade in
	$('#fade_in').click(function(){
		$('.fade_c').fadeIn();
	});
	// fade toggle
	$('#fade_toggle').click(function(){
		$('.fade_c').fadeToggle();
	});
	// sliding
	$('.Slide_c').click(function(){
		$('.text_c').slideToggle();
	});
	// add_method
	$('.div_c').css( "border", "2px solid red" ).add(document.getElementsByClassName('div_c_p')).css( "background", "green" );
	// animation_method
	// Using multiple unit types within one animation.
 
	$( ".btn_animate_s" ).hover(function() {
	  $( ".div_animate" ).animate({
	    width: "20%",
	    height: "10%",
	    opacity: 0.4,
	    marginLeft: "50%",
	    border: "2px solid red"
	  }, 1500 );
	});


	
});