function getPageComponent(sComponent, fSuccess, fError){
	getPageMapping(sComponent).then(function (sRoute){
		get(sRoute, function(oData){
			fSuccess($(oData));
		}, function(oData){
			console.log(oData);
			fError(oData)
		})
	}).catch(function(oData){
		console.log(oData);
		fError(oData)
	});
}

function generatePage() {
	window.oFragPromise = createFragPromise();
	function createFragPromise() {
		if ($("fragment").length) {
			return new Promise(function(resolve, reject){
				getPageComponent($($("fragment")[0]).attr("target"), resolve, reject);
			}).then(replaceFragment);
		}
	}
	function replaceFragment(oFrame){
		var oObj = $($("fragment")[0]).children().clone();
		$($("fragment")[0]).after(oFrame);
		$($("fragment")[0]).remove();
		oFrame.append(oObj);
		window.oFragPromise = createFragPromise();
	}
}