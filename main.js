const _hours = document.querySelector(".hours");
const _minutes = document.querySelector(".minutes");
const _seconds = document.querySelector(".seconds");
const _season = document.querySelector(".season");

setInterval(() => {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    if(hours > 12) {
        hours = hours - 12;
        _season.innerText = 'PM';
    }else {
        _season.innerText = 'AM';
    }

    _hours.innerText = hours;
    _minutes.innerText = minutes;
    _seconds.innerText = seconds;

});