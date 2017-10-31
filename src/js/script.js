//event

$('.page-scroll').on('click', function(){
	//href
	var tujuan = $(this).attr('href');
	//grap
	var elemenTujuan = $(tujuan);


	$('body').animate({
		scrollTop: elemenTujuan.offset().top
	});




});
