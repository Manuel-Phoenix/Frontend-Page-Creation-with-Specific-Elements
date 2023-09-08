var daySpan = document.getElementById("day");
var timeSpan = document.getElementById("time");
function updateDayAndTime() {
  var now = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = days[now.getDay()];
  var time = now.toUTCString();
  daySpan.textContent = day;
  timeSpan.textContent = time;
}
updateDayAndTime();
setInterval(updateDayAndTime, 1000);