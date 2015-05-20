$( ".message" ).hover(
	function() {
		$( ".write-reply" ).addClass( "btn-primary" );
	}, function() {
		$( ".write-reply" ).removeClass( "btn-primary" );
	}
);

$(".write-reply").click(
	function() {
		$(".user-reply").addClass("active");
	}
);