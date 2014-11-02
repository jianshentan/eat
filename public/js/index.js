$( document ).ready( function() {
	// activate buttons

	$( ".product-cell" ).each( function() {
		var handle = $( this ).attr( "data-handle" );
		$( this ).find( ".button" ).click( function() {
			location.href = "/product:" + handle;
		});
	});

	$( ".product .left .button" ).click( function() {
		location.href = "/subscription";
	});

	$( ".logo" ).click( function() {
		location.href = "/";
	});

	$( ".product-box" ).click( function() {
		location.href = "/products";
	});

	$( ".index-subscribe .button" ).click( function() {
		location.href = "/subscription";
	});
});