$(document).ready(function() {
   //('.button').on('click', function(e){
   	//console.log(e);
   	//debugger;
   	$( ".button" ).hide();
   	$('#char-count ').hide();
   		
 });
   
	$('.tweet-content').click(function()){
		$(this).animate({
			"width" : '100%',
			"height" : '50px'
		}, 5000, function() {

		});
 	});
  
   //});

//});

