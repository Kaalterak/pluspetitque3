$('document').ready(function() {
	var options = { videoId: '9DvQwv3RcZM', start: 180 };
	$('#wrapper').tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia


    var x = setTimeout(function() {
	$("#social").removeClass("none").addClass("animated fadeIn");
$("#menu").removeClass("none").addClass("animated fadeIn");
$("#infos").removeClass("none").addClass("animated fadeIn");
 }, 4500);   
    var y = setTimeout(function() { clearInterval(x);clearInterval(y); }, 5000);   

    var z = setTimeout(function() { $(".dontfuck").fadeIn(); }, 26500);   

    var toto = setTimeout(function() { $(".dontfuck").fadeOut();clearInterval(z);clearInterval(toto); }, 30000);   


    $(".aboutme").click(function() {
	$("#aboutme").removeClass("none");
	$("#aboutme").addClass("animated fadeInDown");
	var aboutme = setTimeout(function() { $("#aboutme").removeClass("fadeInDown");$("#aboutme").addClass("fadeOutDown") }, 5000);

	var aboutmekill = setTimeout(function() { clearInterval(aboutme);clearInterval(aboutmekill);$("#aboutme").addClass("none").removeClass("animated fadeOutDown"); }, 6000);
    });


    $(".pluspetitque3").click(function() {
	$("#pluspetitque3").removeClass("none");
	$("#pluspetitque3").addClass("animated fadeInDown");
	var love = setTimeout(function() { $("#pluspetitque3").removeClass("fadeInDown");$("#pluspetitque3").addClass("fadeOutDown") }, 15000);

	var killthelove = setTimeout(function() { clearInterval(love);clearInterval(killthelove);
						  $("#pluspetitque3").addClass("none").removeClass("animated fadeOutDown");
						}, 16000);
    });

});