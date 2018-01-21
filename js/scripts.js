/*--------------------------------------------------------
* Filename: scripts.js
* Description: General scripts for [project]

* Author: R. Brian Redd 
--------------------------------------------------------*/

$(document).ready(function() {
	/*Global Variables*/
	$mtb = $("#mobiletabs");
	$dtb = $("#desktoptabs");
	$tct = $(".tab-content");
	$oml = $("a[target='modal_office']"); //office-modal-link
	$omd = $("#officeModal");
	
	/*Functions*/
	$mtb.change(function() {//when mobile drop changes, update visible tab-content and desktop tab
		var target = $(this).val();
		$tct.find(".show").removeClass("show");
		$tct.find(".active").removeClass("active");
		$tct.find("#" + target).tab("show");
		$dtb.find(".active").removeClass("active");
		$dtb.find("a[href='#" + target + "']").addClass("active");
	});
	
	$dtb.find(".nav-item").click(function() {//when desktop tab clicked, activate appropriate mobile dropdown option
		var target = $(this).find("a").attr("href").substr(1);
		$mtb.find("option[selected='selected']").removeAttr("selected");
		$mtb.find("option[value='" + target + "']").attr("selected","selected");
	});
	
	$oml.click(function() {
		$omd.modal("show");
	});
	
	$omd.find(".close-office-modal").click(function() {
		$omd.modal("hide");
	});
});
