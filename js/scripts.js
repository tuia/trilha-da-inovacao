$('#instituicoes-carousel').carousel({
	interval: 5000
});

$('.casa').mouseenter(function() {
	var targettip = $(this).attr("data-href") + "-tip";

	$('.casa').addClass('oculta');
	$(this).removeClass('oculta');
	$(targettip).stop().fadeIn();

}).mouseout( function() {
	$('.casa').removeClass('oculta');
	$('.tip').stop().fadeOut();

}).click( function() {
	var targetmodal = $(this).attr("data-href") + "-modal";
	$(targetmodal).fadeIn();
});



$('.casa:last-child').mouseenter(function() {
	$('.seta').stop().show();
}).mouseout( function() {
	$('.seta').stop().hide();
});



$('.modal').click( function(e) {
	if ($(e.target).hasClass("modal")) {
		$('.modal').fadeOut();
	}
});
$('.close').click( function() {
	$(this).parents('.modal').fadeOut();
});