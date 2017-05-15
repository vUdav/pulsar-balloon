// Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cw = canvas.width;
var ch = canvas.height;

// Const
var color = '#cccccc';
var time = canvas.getAttribute('data-time'); //seconds

// Interval
var interval = 2/time;
var start = interval;

function init () {
	ctx.beginPath();
	ctx.lineWidth = cw * .04;
	ctx.strokeStyle = color;
	ctx.arc(cw/2, ch/2, cw * .45, 0, 2*Math.PI, true);
	ctx.stroke();

	// Countdown
	var countdown = setInterval(function () {
		draw(start*Math.PI);
		start += interval;
	}, 1000);
	
	// Stop countdown
	setTimeout(function() {
		clearInterval(countdown);
		draw(0*Math.PI);
	}, time*1000);
}

function draw(end) {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
	ctx.arc(cw/2, ch/2, cw * .45, 0, end, true);
	ctx.stroke();
}

init ();