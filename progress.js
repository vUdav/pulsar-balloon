// Const
var color = '#cccccc';
var time = 5; //seconds

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cw = canvas.width;
var ch = canvas.height;

ctx.beginPath();
ctx.lineWidth = cw * .04;
ctx.strokeStyle = color;
ctx.arc(cw/2, ch/2, cw * .45, 0, Math.PI+(Math.PI*1)/2, true);
ctx.stroke();

// Countdown
var countdown = setInterval(function () {
}, 1000);

// Stop countdown
setTimeout(function() {
	clearInterval(countdown);
}, time*1000);