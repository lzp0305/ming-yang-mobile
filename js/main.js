// 二级菜单
function showMenu(){
	var wh = $(window).height();
	$('.fir_menu').css('height', wh);
	$('.menu').children('.show').addClass('rotateOut').css('z-index', '1');
	$('.menu').children('.hide').addClass('rotateIn').css('z-index', '10');
	setTimeout("$('.menu').find('.rotateOut').removeClass('rotateOut').css('opacity', '0');",400);
	setTimeout("$('.menu').find('.rotateIn').removeClass('rotateIn').css('opacity', '1');",400);
	$('.fir_menu').slideDown(300);
	$(document.body).css({
		"overflow-y": "hidden"
	});
}
function hideMenu(){
	$('.menu').children('.hide').addClass('rotateOut').css('z-index', '1');
	$('.menu').children('.show').addClass('rotateIn').css('z-index', '10');
	setTimeout("$('.menu').find('.rotateOut').removeClass('rotateOut').css('opacity', '0');",400);
	setTimeout("$('.menu').find('.rotateIn').removeClass('rotateIn').css('opacity', '1');",400);
	$('.fir_menu').slideUp(300);
	$(document.body).css({
		"overflow-y": "auto"
	});
}

$('.fir_item').click(function() {
	if ($(this).find('.sec_menu').css('display') == 'none') {
		$(this).find('.sec_menu').slideDown(300);
	} else {
		$(this).find('.sec_menu').slideUp(300);
	}
});