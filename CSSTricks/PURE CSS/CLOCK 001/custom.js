var countDate = new Date("Jan 1, 2023 00:00:00").getTime();

function newYear() {
	var now = new Date().getTime();
	gap = countDate - now;

	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;

	var d = Math.floor(gap / day);
	var h = Math.floor((gap % day) / hour);
	var m = Math.floor((gap % hour) / minute);
	var s = Math.floor((gap % minute) / second);

	d = d < 10 ? "0" + d : d;
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	document.getElementById("day").innerText = d;
	document.getElementById("hour").innerText = h;
	document.getElementById("minute").innerText = m;
	document.getElementById("second").innerText = s;
}

setInterval(() => {
	newYear();
}, 1000);
