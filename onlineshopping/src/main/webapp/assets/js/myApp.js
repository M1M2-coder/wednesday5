(function(){
	
	switch (menu) {
	case "Home":
		$('#about').removeClass("active");
		$('#contact').removeClass("active");
		$('#home').addClass("active");
		break;
	case "About Us":
		$('#home').removeClass("active");
		$('#contact').removeClass("active");
		$('#about').addClass("active");
		break;
	case "Contact Us":
		$('#home').removeClass("active");
		$('#about').removeClass("active");
		$('#contact').addClass("active");
		break;
	default:
		$('#home').addClass("active");
		break;
	}
})();