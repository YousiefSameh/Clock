const Clock = document.getElementById("clock");
const diaplayDate = document.getElementById("date");

function DisplayTime() {
    let Time = new Date();
    let Hours = Time.getHours();
    let Minutes = Time.getMinutes();
    let Seconds = Time.getSeconds();
    Hours = (Hours < 10 ? "0" : "") + Hours;
    Minutes = (Minutes < 10 ? "0" : "") + Minutes;
    Seconds = (Seconds < 10 ? "0" : "") + Seconds;
    Clock.innerHTML = Hours + ":" + Minutes + ":" + Seconds;
}

function DisplayDate() {
    let FullDate = new Date();
    let Year = FullDate.getFullYear();
    let Month = FullDate.getMonth();
    let Day = FullDate.getDate();
    let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let yearMonth = Months[Month];
    diaplayDate.innerHTML = Year + ", " + yearMonth + ", " + Day;
}

setInterval(DisplayTime, 1000);
setInterval(DisplayDate, 1000);