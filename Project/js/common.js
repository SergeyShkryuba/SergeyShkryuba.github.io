$(document).ready(function() {
	//fluent scroll
	$(".navigation a[href*='#'], .f_content a[href*='#']").mPageScroll2id();
    //images grid
	$("#portfolio_grid").mixItUp();
	//portfolio navigation
	$(".s_portfolio_content li").click(function () {
		$(".s_portfolio_content li").removeClass("active");
		$(this).addClass("active");
	});
	//popup
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});
	//elements animation
	$(".top_title h1").animated("fadeInDown", "fadeOutUp");
	$(".top_title p").animated("fadeInUp", "fadeOutDown");
	$("section h2").animated("fadeInDown", "fadeOutUp");
	$(".person").animated("flipInY", "flipOutY");
	$(".btn").animated("fadeInUp", "fadeOutDown");
	$(".circular_bar").animated("zoomIn", "zoomOut");
	$(".pricing_item_on").animated("flipInY", "flipOutY");
	//slider
	$('.bxslider').bxSlider();
	//browser window resize counter
    function heightDetect() {
        $('.main_head').css('height', $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    //navigation
    $(".navigation ul li a").click(function() {
		$(".navigation").fadeOut(600);
	});
    $(".toggle_btn").click(function () {
    	if ($(".navigation").is(":visible")) {
    		$(".navigation").fadeOut(600);
    		$(".navigation ul li a").addClass("fadeInUp animated");
    	} else {
    		$(".navigation").fadeIn(600);
    		$(".navigation ul li a").addClass("fadeInUp animated");
    	}
    });
    //preloading
	$(window).load(function() {
    	$(".loader_inner").fadeOut();
    	$(".loader").delay(400).fadeOut("slow");
	});
});