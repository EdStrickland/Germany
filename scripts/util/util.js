function get (sUrl, fSuccess, fError) {
	$.get({
		url: sUrl,
		success: function(oData) {
			fSuccess(oData);
		},
		error: function(oData) {
			fError(oData);
		}
	})
	return null;
}

function post (sUrl, oData, fSuccess, fError) {
	$.post({
		url: sUrl,
		data: oData,
		success: function(oData) {
			fSuccess(oData);
		},
		error: function(oData) {
			fError(oData);
		}
	})
	return null;
}

function navigation() {
	return;
}