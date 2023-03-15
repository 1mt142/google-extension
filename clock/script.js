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

// const toggleButton = document.getElementById("toggleButton");
// const myDiv = document.getElementById("myDiv");
// toggleButton.addEventListener("click", function () {
//   if (myDiv.style.display === "none") {
//     myDiv.style.display = "block";
//     toggleButton.textContent = "Hide Calender";
//   } else {
//     myDiv.style.display = "none";
//     toggleButton.textContent = "Show Calender";
//   }
// });

const myDiv = document.getElementById("myDiv");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
  // Get the current visibility state from localStorage (default to "visible")
  const isVisible = localStorage.getItem("isVisible") !== "false";
  if (isVisible) {
    toggleButton.textContent = "Show Prayer Times";
  } else {
    toggleButton.textContent = "Hide Prayer Times";
  }

  // Toggle the visibility state and save it to localStorage
  localStorage.setItem("isVisible", !isVisible);

  // Set the visibility of the div based on the new state
  myDiv.style.display = isVisible ? "none" : "block";
});

// On page load, set the initial visibility state of the div based on localStorage
const isVisible = localStorage.getItem("isVisible") !== "false";
myDiv.style.display = isVisible ? "block" : "none";
