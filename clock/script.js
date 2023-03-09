function digitalClock() {
  var todayHTML = document.getElementById("today-js");
  var monthHTML = document.getElementById("month-js");
  var timeHTML = document.getElementById("time-js");
  var dateHTML = document.getElementById("date-js");
  var yearHTML = document.getElementById("year-js");
  let ddmmMMyyyy = document.getElementById("dd-mm-MM-yyyy");

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var date = d.getDate();
  date = addZero(date);
  var today = d.getDay();
  var dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("clock-data").innerHTML = d.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }
  );
  todayHTML.innerHTML = dayName[today];
  dateHTML.innerHTML = date;
  monthHTML.innerHTML = monthName[month];
  yearHTML.innerHTML = year;

  ddmmMMyyyy.innerHTML = `Today is ${dayName[today]} ,${date} ${monthName[month]} of ${year}`;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(digitalClock, 1000);
