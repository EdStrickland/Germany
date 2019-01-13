$(document).ready(function(){
	$(".school-table tr").click(function(e){
		window.location.href="/pages/info.html?id=" + $(this).attr("target");
	});
});