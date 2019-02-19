import Toster from 'toastr';
import $ from 'jquery'

Toster.options = {
	closeButton: true,
	timeOut: 8000,
	extendedTimeOut: 30000,
	showMethod: 'slideDown',
	hideMethod: 'slideUp',
	hideDuration: 300,
	progressBar: true,
	onShown: function () {
		var toasts = $('#toast-container .toast');
		if (toasts.length > 3) toasts.slice(3).click();
	}
};

class TosterMessenger {
	succ = (message: string) => Toster.success(message);
	err = (message: string) => Toster.error(message);
	info = (message: string) => Toster.info(message);
	warn = (message: string) => Toster.warn(message);
}

export const toster = new TosterMessenger();