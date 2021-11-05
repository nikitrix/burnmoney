let alarm = new Audio('alarm.mp3');
let timerStarted = false;
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

function startTimer() {
    if (!timerStarted) {

        let startTime = new Date().getTime();
        let fiveMinutes = 1000 * 60 * 5;
        let endTime = startTime + fiveMinutes;

        let salaryhour = 300;


        setInterval(function() {
            let timeLeft = endTime - new Date().getTime();
            let timePast = new Date().getTime();
            let moneySeconds = (timePast - startTime) / 1000
            let burningMoney = (salaryhour / 60) / 60
            
            moneySeconds = Math.round(moneySeconds);
            burningMoney = burningMoney * moneySeconds
            burningMoney = burningMoney.toFixed(2);

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ('0' + seconds).slice(-2);
                let text = '0'  +  minutes  +  ' : '  +  seconds;
                timer.innerHTML = text;
                money.innerHTML = burningMoney;
            } else {
                alarm.play();
                timer.innerHTML = '00 : 00';
            }
        }, 1000);
        timerStarted = true;
    }
}

function resetTimer() {
    window.location.reload(true);
}