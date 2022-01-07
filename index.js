$(document).ready(function(){
	$("#all_content").hide();
});

function load_resume() {
	$("td").hide();
	$("th").hide();
	$("[id*='_details']").each(function() {
		$(this).hide();
	});
	$("#all_content").delay("fast").fadeIn("slow", function() {
		$("td#resume_title").fadeIn("slow", function(){
			$("td#resume_slogan").fadeIn("slow", function(){
				$("td").fadeIn("slow");
				$("th").fadeIn("slow");
				
			});	
		});
	});
}

function accordian(detail_id) {
	$('*[id*=' + detail_id + ']').each(function() {
		if ($(this).is(":hidden")) 
			$(this).slideDown("fast");
		else
			$(this).slideUp("fast");
	});
}

function accordian_all() {
	if(typeof all_expanded === 'undefined' || !all_expanded)
	{
		$("[id*='_details']").each(function() {
			$(this).slideDown("fast");
		});
		all_expanded = true;
	} else {
		$("[id*='_details']").each(function() {
			$(this).slideUp("fast");
			all_expanded = false;
		});	
	}
}

$(function() {
    $(".resume td").click(function() {
		if(this.id != "")
			accordian(this.id + "_details");
	});
});

$(window).bind("load", function() {
	$(".loading_ring_css > div").delay("slow").fadeOut("slow", function(){
		$("#loader").fadeOut("slow", load_resume());
	});

});