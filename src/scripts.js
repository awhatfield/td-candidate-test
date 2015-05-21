$(".message").hover(
	function(){
		$(".write-reply").addClass("btn-primary");
	},function(){
		$(".write-reply").removeClass("btn-primary");
	}
);

$(".write-reply").click(function(){
		$(".user-reply").css("display","block");
		$(".user-reply").addClass("active");
		$(this).remove();
		$(".send-reply").show();
	}
);

$(".send-reply").click(function(){
		$(".progress-bar").animate({width: "100%"}, 5000, function(){
			$(".progress").hide();
		});
});