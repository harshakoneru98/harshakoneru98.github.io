$(document).ready(function () {
	console.log("ready!");
	$(".dontshowme").hide();
	$("#loader-wrapper").show();
	$(".spellLoader").show(1500);
	$(".navbar ").hide();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

setTimeout(function () {
	$("#loader-wrapper").hide();
	$(".navbar ").show();
	$("#section0").show();
	$(function () {

		var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date();
		var secondDate = new Date(2019, 05, 13);

		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

		// var expY = (diffDays / 365).toFixed(1);
		var expY = 2
		function calculate_age(dob) {
			var diff_ms = Date.now() - dob.getTime();
			var age_dt = new Date(diff_ms);

			return Math.abs(age_dt.getUTCFullYear() - 1970);
		}

		$(".animated-intro").typed({
			strings: ["I'm <b>" + calculate_age(new Date(1998, 5, 2)) + "</b>. I live in <b>Los Angeles, California</b>. <br> I worked as Full Stack Developer for <b>" + expY + " years</b>. ",
				"Experienced with all stages of the development cycle for dynamic web projects", "DataScience Enthusiast</b>.",
			], 			//just wrote what text you want to appear
			typeSpeed: 0,
			backSpeed: 0,
			loop: true,
			startDelay: 1500,
			backDelay: 2000,
		});
	});

	$(".dontshowme").show();
	$('body').css('height', 'auto');
}, 5000);

// function clickMenL() {
// 	$("#menuBtnL").trigger("click");
// }

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Scroll by JQuery

function scrollToAnchor(aid) {
	var aTag = $("section[id='" + aid + "']");
	$('html,body').animate({ scrollTop: aTag.offset().top }, 1200);
}


function scrollToAnchorHome(aid) {
	var aTag = $("div[id='" + aid + "']");
	$('html,body').animate({ scrollTop: aTag.offset().top - 100 }, 1200);
}

$("#myBtnHome").click(function () {
	scrollToAnchorHome('topScroll');
});

$("#myBtn").click(function () {
	scrollToAnchorHome('topScroll');
});

$("#1h").click(function () {
	scrollToAnchor('skills');
});

$("#2h").click(function () {
	scrollToAnchor('education');
});

$("#3h").click(function () {
	scrollToAnchor('experience');
});

$("#4h").click(function () {
	scrollToAnchor('projects');
});


$("#5h").click(function () {
	scrollToAnchor('interest');
});


$("#6h").click(function () {
	scrollToAnchor('contact');
});