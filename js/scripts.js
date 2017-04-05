$('#instituicoes-carousel').carousel();

$('.casa').mouseenter(function() {
	var targettip = $(this).attr("data-href") + "-tip";

	$('.casa').addClass('oculta');
	$(this).removeClass('oculta');
	$(targettip).fadeIn();
}).mouseout( function() {
	var targettip = $(this).attr("data-href") + "-tip";

	$('.casa').removeClass('oculta');
	$(targettip).fadeOut();
}).click( function() {
	var targetmodal = $(this).attr("data-href") + "-modal";
	$(targetmodal).fadeIn();
});

$('.modal').click( function(e) {
	if ($(e.target).hasClass("modal")) {
		$('.modal').fadeOut();
	}
});
$('.close').click( function() {
	$(this).parents('.modal').fadeOut();
});