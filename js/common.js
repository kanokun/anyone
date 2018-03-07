
$(window).resize(function(){

	var _height = $(".carousel").width() * 560 / 1200;
	
	if(_height > 560)
		_height = 560;

	$(".carousel-bg-1").height(_height);
	$(".carousel-bg-2").height(_height);
	$(".carousel-bg-3").height(_height);
	$(".carousel-bg-4").height(_height);
	$(".carousel-bg-5").height(_height);
});

$(window).resize();


var margin_left = 0;

$(".index-container-slide-arrow").click(function(){

	var slide_width = $(".index-container-slide").width();
	var slide_width_inside = $(".index-container-slide-inside").width();

	if($(this).hasClass("index-container-slide-left")){
		// left
		margin_left = margin_left * 1 + 300;

		if(margin_left > 0)
			margin_left = -(slide_width_inside - 1800);

	}else{
		// right
		margin_left -= 300;

		if(-margin_left >= slide_width_inside-1500)
			margin_left = 0;
	}

	$(".index-container-slide-inside").stop();
	$(".index-container-slide-inside").animate({
		marginLeft: margin_left + 'px'
	}, 500);
});

