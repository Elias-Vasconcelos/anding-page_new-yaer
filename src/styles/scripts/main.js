
const date = new Date("Dec 31, 2024 24:00:00");
const TimeToNewYear = date.getTime();

const countdown = setInterval(function(){
    const now = new Date();
    const Today = now.getTime();

    const timeLeft =  TimeToNewYear - Today;

    const monthsMS = 1000 * 60 * 60 * 24 * 31;
    const weekMS = 1000 * 60 * 60 * 24 * 7;
    const DaysMS = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;



    const month = Math.floor(timeLeft /monthsMS);
    const week = Math.floor((timeLeft / weekMS));
    const Days = Math.floor(timeLeft / DaysMS );
    const Day = Math.floor(timeLeft % weekMS / DaysMS  ); 
    const hours = Math.floor(timeLeft % DaysMS / hourMS );
    
    document.getElementById('contador').innerHTML = `Meses:${month}/ Semanas:${week}/ Dias:${Day}/ Horas:${hours} `;

    if(timeLeft < 0){
        clearInterval(countdown);
        document.getElementById('contador').innerHTML = 'Feliz ano Novoooo!'
    }

},1000)