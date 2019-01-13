function getPageMapping(sKey){
	var aKeys = ('app.' + sKey).split('.');
	if (!mapPromise){
		var mapPromise = new Promise(function(resolve, reject) {
			get("/manifest.json", function(oMapping){
				sResult = "";
				for (i = 0; i < aKeys.length; i++) {
					sResult = sResult + oMapping[aKeys[i]]["route"];
					oMapping = oMapping[aKeys[i]]["contents"];
				}
				resolve(sResult);	
			}, function(oData){
				reject(oData);
			});
		});
	}
	return mapPromise;
}