$(document).ready(function(){

	window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);



	
var flag = true;
	$("#boton1").click(function(){
		if (flag) {
			$("#cartel1").slideDown("fast");
			$(this).html("<span><img id='icon1' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Menos");
			$("#icon1").css({"transform":"rotate(90deg)"});
			flag = false;
		}else{
			$("#cartel1").slideUp("fast");
			$(this).html("<span><img id='icon1' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Mas");
			$("#icon1").css({"transform":"rotate(270deg)"});
			flag = true;
		}
	});

var flag1 = true;
	$("#boton2").click(function(){
		if (flag1) {
			$("#cartel2").slideDown("fast");
			$(this).html("<span><img id='icon2' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Menos");
			$("#icon2").css({"transform":"rotate(90deg)"});
			flag1 = false;
		}else{
			$("#cartel2").slideUp("fast");
			$(this).html("<span><img id='icon2' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Mas");
			$("#icon2").css({"transform":"rotate(270deg)"});
			flag1 = true;
		}
	});

	var flag2 = true;
	$("#boton3").click(function(){
		if (flag2) {
			$("#cartel3").slideDown("fast");
			$(this).html("<span><img id='icon3' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Menos");
			$("#icon3").css({"transform":"rotate(90deg)"});
			flag2 = false;
		}else{
			$("#cartel3").slideUp("fast");
			$(this).html("<span><img id='icon3' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Mas");
			$("#icon3").css({"transform":"rotate(270deg)"});
			flag2 = true;
		}
	});

	var flag3 = true;
	$("#boton4").click(function(){
		if (flag3) {
			$("#cartel4").slideDown("fast");
			$(this).html("<span><img id='icon4' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Menos");
			$("#icon4").css({"transform":"rotate(90deg)"});
			flag3 = false;
		}else{
			$("#cartel4").slideUp("fast");
			$(this).html("<span><img id='icon4' class='icon-toggle' src='img/icon-next.png' alt='toggle'></span>Ver Mas");
			$("#icon4").css({"transform":"rotate(270deg)"});
			flag3 = true;
		}
	});
});
