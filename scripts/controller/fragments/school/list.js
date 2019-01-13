$(document).ready(function(){
	$(".school-table tr").click(function(e){
		window.navTo("/pages/info.html?id=" + $(this).attr("target"));
	});
});