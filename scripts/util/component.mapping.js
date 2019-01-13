function getPageMapping(sKey, fSuccess, fError){
	var aKeys = ('app.' + sKey).split('.');
	get("/Germany/manifest.json", function(oMapping){
		sResult = "";
		for (i = 0; i < aKeys.length; i++) {
			sResult = sResult + oMapping[aKeys[i]]["route"];
			oMapping = oMapping[aKeys[i]]["contents"];
		}
		fSuccess(sResult);	
	}, function(oData){
		fError(oData);
	});
}