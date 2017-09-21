$(document).ready(function() {
	//плавный скрол
	$(".navigation a[href*='#'], .f_content a[href*='#']").mPageScroll2id();
    //плитка с изображениями
	$("#portfolio_grid").mixItUp();
	//навигация портфолио
	$(".s_portfolio_content li").click(function () {
		$(".s_portfolio_content li").removeClass("active");
		$(this).addClass("active");
	});
	//просмотр работ
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});
	//анимирование элементов
	$(".top_title h1").animated("fadeInDown", "fadeOutUp");
	$(".top_title p").animated("fadeInUp", "fadeOutDown");
	$("section h2").animated("fadeInDown", "fadeOutUp");
	$(".person").animated("flipInY", "flipOutY");
	$(".btn").animated("fadeInUp", "fadeOutDown");
	$(".circular_bar").animated("zoomIn", "zoomOut");
	$(".pricing_item_on").animated("flipInY", "flipOutY");
	//слайдер
	$('.bxslider').bxSlider();
	//счетчик размера окна браузера
    function heightDetect() {
        $('.main_head').css('height', $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    //меню
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
    //прелоадер сайта
	$(window).load(function() {
    	$(".loader_inner").fadeOut();
    	$(".loader").delay(400).fadeOut("slow");
	});
});