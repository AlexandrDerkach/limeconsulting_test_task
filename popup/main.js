var startBtn = $('.start-btn')
	, popupfirst = $('.popupfirst')
	, popupSec = $('.popupSec')
	, popupBtn1 = $('.popup-btn1')
	, popupBtn2 = $('.popup-btn2');
var minutes, secondsRemaining, intervalHandle;
startBtn.on('click', function () {
	popupfirst.removeClass('none').addClass('active').fadeIn(200);
	if (popupSec.hasClass('active')) {
		popupSec.removeClass('active').addClass('none');
	}
	startCountdown();
});
popupBtn1.on('click', function () {
	popupfirst.removeClass('active').addClass('none').fadeOut(200);
	popupSec.removeClass('none').addClass('active').fadeIn(200);
	startCountdown();
	clearInterval(intervalHandle);
});
popupBtn2.on('click', function () {
	popupSec.removeClass('active').addClass('none').fadeOut(200);
	popupfirst.removeClass('none').addClass('active').fadeIn(200);
	startCountdown();
	clearInterval(intervalHandle);
});
$('.close').on('click', function () {
	$('.close').parent().addClass('none').removeClass('active');
	secondsRemaining == 0;
	clearInterval(intervalHandle);
})

function tick() {
	if (popupSec.hasClass('active')) {
		var timeDisplay = document.getElementsByClassName('time')[1];
	}
	else if (popupfirst.hasClass('active')) {
		var timeDisplay = document.getElementsByClassName('time')[0];
	}
	var min = Math.floor(secondsRemaining / 60)
		, sec = secondsRemaining - (min * 60);
	if (sec < 10) {
		sec = "0" + sec;
	}
	var message = min.toString() + ":" + sec;
	timeDisplay.innerHTML = message;
	if (secondsRemaining === 0) {
		clearInterval(intervalHandle);
		popupfirst.removeClass('active').addClass('none').fadeOut(200);
		popupSec.removeClass('none').addClass('active').fadeIn(200);
		startCountdown();
	}
	if (popupfirst.hasClass('none')) {
		clearInterval(intervalHandle);
	}
	else {
		secondsRemaining--;
	}
	if (popupSec.hasClass('active')) {
		secondsRemaining--;
	}
	if (secondsRemaining === 0 && popupSec.hasClass('active')) {
		clearInterval(intervalHandle);
		popupSec.removeClass('active').addClass('none').fadeOut(200);
		popupfirst.removeClass('none').addClass('active').fadeIn(200);
		startCountdown();
	}
}

function startCountdown() {
	minutes = 2;
	secondsRemaining = minutes * 60;
	intervalHandle = setInterval(tick, 1000);
}