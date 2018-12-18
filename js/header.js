$(function(){
	var imgW,imgH;
	$("#my_carousel img").one("load", function(){
		$img = this;
		var img = new Image();
		img.src = $img.src;
		imgW = img.width;
		imgH = img.height;
		setCarouselHeight();
	});
	window.onresize = function(){
		setCarouselHeight();
	}
	function setCarouselHeight(){
		$("#my_carousel").height(document.body.clientWidth / imgW * imgH);
	}
	function changeImg(){
		$this = $("#my_carousel img:last");
		$this.animate({
			width: "100%"
		}, 5000, "linear", function(){
			$(this).fadeOut(1000, function(){
				$(this).width("110%").prependTo("#my_carousel").show();
				changeImg();
			});
		});
	}
	changeImg();
});
