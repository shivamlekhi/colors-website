$(document).ready(function() {
	$(document).find('.box').each(function() {
		var colors = [];
		$(this).click(function() {
			$(this).find('.color').each(function() {
				var color = $(this).css('background');

				var rgb = color.match(/\d+/g);
				var hex = '#'+ String('0' + Number(rgb[0]).toString(16)).slice(-2) + String('0' + Number(rgb[1]).toString(16)).slice(-2) + String('0' + Number(rgb[2]).toString(16)).slice(-2);
				colors.push(hex);
				
				clipboard.copy(colors);
			});
			clipboard.copy(colors.toString());
			var notification = alertify.notify('Colors Copied to Clipboard', 'success', 5, function(){  });
		});
	});
});

