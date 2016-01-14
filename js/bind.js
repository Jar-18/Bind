
var $$ = {
	bind: (data) => {
		$('[bind]').each(function() {
			var prop = $(this).attr('bind');
			if(prop.indexOf('.') < 0) {
				$(this).text(data[prop]);
			}
		});

		$('[repeat]').each(function() {
			var repeat = $(this).attr('repeat');
			var params = repeat.trim().split(' ');
			var iter = params[0];
			var arr = data[params[2]];

			if(arr.length < 1) {
				$(this).remove();
			}
			else if(1 === arr.length) {
				console.log(this);
				$(this).children().find('[bind]').each(function() {
					var prop = $(this).attr('bind');
					var curIter, curProp;
					curIter = prop.split()[0];
					curProp = prop.split()[1];
					if(curIter && curIter === iter) {
						$(this).text(data[arr][0][curProp]);
					}
				});
			}
			else if(arr.length > 1) {
				elems = $(this).find('[bind]');
			}
		})
	}
};