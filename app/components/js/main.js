
$(document).ready(function() {

	$("#nav-bar > li > a").click(function(event) {
		$("#nav-bar > li > a").removeClass("active");
		$(this).addClass("active");
	});

	// search btn
	$("#nav-search").click(function(event) {
		event.preventDefault();
		$("#search-bar").removeClass("hide");
		$("#nav-bar").addClass("hide");
		$("#search-input").focus();
	});

	// search bar close btn
	$("#search-bar > a:first-child").click(function(event) {
		event.preventDefault();
		$("#search-bar").addClass("hide");
		$("#nav-bar").removeClass("hide");
		$("#search-result").addClass("hide");
		$("#search-input").val('');
	});

	$("#search-result a").click(function(event) {
		event.preventDefault;
		$("#search-result").addClass("hide");
	});

	// more btn
	$("#nav-more").click(function(event) {
		event.preventDefault();
		var optionsList = $("#more-options");
		if (optionsList.hasClass("hide")) {
			optionsList.removeClass("hide");
		} else {
			optionsList.addClass("hide");
			$(this).removeClass("active");
		}
	});

	$("#more-options a").click(function(event) {
		event.preventDefault;
		$("#more-options").addClass("hide");
	});

	// signup btn
	$("#signup-btn").click(function(event) {
		event.preventDefault;
		$(".login-regist-modal").removeClass("hide");
		$("#signup").addClass("is-selected");
		$("#login").removeClass("is-selected");
		$("#reset-password").removeClass("is-selected");
		$(".switcher li:first-child a").removeClass("selected");
		$(".switcher li:last-child a").addClass("selected");
	});

	// login btn
	$("#login-btn").click(function(event) {
		event.preventDefault;
		$(".login-regist-modal").removeClass("hide");
		$("#login").addClass("is-selected");
		$("#signup").removeClass("is-selected");
		$("#reset-password").removeClass("is-selected");
		$(".switcher li:first-child a").addClass("selected");
		$(".switcher li:last-child a").removeClass("selected");
	});

	// sign in
	$(".switcher li:first-child a").click(function() {
		event.preventDefault;
		$("#login").addClass("is-selected");
		$("#signup").removeClass("is-selected");
		$("#reset-password").removeClass("is-selected");
		$(".switcher li:first-child a").addClass("selected");
		$(".switcher li:last-child a").removeClass("selected");
	});

	// new account
	$(".switcher li:last-child a").click(function() {
		event.preventDefault;
		$("#login").removeClass("is-selected");
		$("#signup").addClass("is-selected");
		$("#reset-password").removeClass("is-selected");
		$(".switcher li:last-child a").addClass("selected");
		$(".switcher li:first-child a").removeClass("selected");
	});

	$("#login .form-bottom-message a").click(function() {
		event.preventDefault;
		$("#login").removeClass("is-selected");
		$("#reset-password").addClass("is-selected");
	});

	$("#reset-password .form-bottom-message a").click(function() {
		event.preventDefault;
		$("#login").addClass("is-selected");
		$("#reset-password").removeClass("is-selected");
	});

	$("#close-form").click(function(event) {
		event.preventDefault;
		$(".login-regist-modal").addClass("hide");
	});

	//==========================================
	// ----------- user-panel.html -------------
	//==========================================

	$("#user-photo").click(function(event) {
		event.preventDefault;
		var menu = $("#user-menu")
		if (menu.hasClass("hide")) {
			menu.removeClass("hide");
		} else {
			menu.addClass("hide");
		}
	});

	$("#user-menu a").click(function(event) {
		event.preventDefault;
		$("#user-menu").addClass("hide");
	});

	$("#tweet-text").focus(function() {
		$("#counter").removeClass("hide");
	});

	$("#tweet-text").blur(function() {
		$("#counter").addClass("hide");
	});

	$("#tweet-text").keyup(function() {
		var len = ("#tweet-text").val();
		alert(len);
		if (($this).val().length > 10) {
			($this).css('color', 'red');
		}
	});

	// Create image preview when upload

	function createPreview(input) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();
			var div = $('<div class="upload-image">');
			var icon = $('<a class="img-close" href="#"><i class="fa fa-times"></a>');
			icon.appendTo(div);
			var img = $('<img src="">');
			img.appendTo(div);
			reader.onload = function(e) {
				img.attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
			div.appendTo("#preview");
		}
	}

	function previewDisplay() {
		var imgNum = $(".upload-image").length;
		if (imgNum > 0) {		
			$("#preview").removeClass("hide");
		} else {
			$("#preview").addClass("hide");
		}
	}

	$("#tweet-pictures").change(function() {
		createPreview(this);
		$(".img-close").click(function(event) {
			event.preventDefault;
			$(this).parent().remove();
			previewDisplay();
		});
		previewDisplay();
	});
	
});
