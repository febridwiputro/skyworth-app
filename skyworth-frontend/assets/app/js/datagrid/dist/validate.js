(function ( $ ) {

	$.fn.validate = function(array, borderClass, errorClass) {

		var form = $(this);

		// Append error sesuai array
		var validate = (function() 
		{
			$(form).find('.' + errorClass).each(function () {
				$(this).remove();
			});

        	$(form).find('input[type=text]').each(function () {
        		$(this).removeClass(borderClass);
        		for (var key in array) {
					if(this.name == key) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);
					}
				}
			});

			$(form).find('input[type=email]').each(function () {
        		$(this).removeClass(borderClass);
        		for (var key in array) {
					if(this.name == key) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});

			$(form).find('input[type=password]').each(function () {
        		$(this).removeClass(borderClass);
        		for (var key in array) {
					if(this.name == key) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});

			$(form).find('textarea').each(function () {
        		$(this).removeClass(borderClass);
				for (var key in array) {
					if(this.name == key) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});

			$(form).find('select').each(function () {
        		$(this).removeClass(borderClass);
				for (var key in array) {
					if(this.name == key) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});

			$(form).find('input[type=checkbox]').each(function () {
        		$(this).removeClass(borderClass);
				for (var key in array) {
					if(this.name == key && this.value == array[key]) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});

			$(form).find('input[type=radio]').each(function () {
        		$(this).removeClass(borderClass);
				for (var key in array) {
					if(this.name == key && this.value == array[key]) {
						$(this).addClass(borderClass);
						error_info($(this), errorClass, array[key]);	
					}
				}
			});
		})();

		function error_info(element, errorClass, text) {
			if (element.parent().hasClass('input-group')) {
				element.parent().after('<span class="' + errorClass + '">' + text + '</span>');
			} else {
				element.after('<span class="' + errorClass + '">' + text + '</span>');
			}
		}
	};

}( jQuery ));