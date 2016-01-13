
var $$ = {
	bind: (data) => {
		$('[bind]').each(function() {
			var property = $(this).attr('bind');
			$(this).text(data[property]);
		});
	}
};