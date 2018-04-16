var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}    

function timerLeft() {
	setInterval (function() {
		var hoursLeft = document.getElementById('timer-v-hours2'),
		    hoursText = document.getElementById('timer-v-hours__text2'),
		    minutesLeft = document.getElementById('timer-v-minutes2'),
		    minutesText = document.getElementById('timer-v-minutes__text2'),
		    secLeft = document.getElementById('timer-v-seconds2'),
		    secText = document.getElementById('timer-v-seconds__text2'),
		    dateNow = new Date().getTime(),
		    dateFinish = new Date(2018, 4, 9),
		    sec = Math.floor((dateFinish - dateNow) / 1000),
		    secToMinutes = sec % 3600,
		    hoursNumber = Math.floor(sec / 3600),
		    minutesNumber = Math.floor(secToMinutes / 60),
		    secondsNumber = Math.floor(secToMinutes % 60);
		    hoursLeft.innerHTML = hoursNumber;
		    minutesLeft.innerHTML = minutesNumber;
		    secLeft.innerHTML = secondsNumber;
	});
};
timerLeft();