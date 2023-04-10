const currentDay = document.getElementById("currentDay");
const hour9 = document.getElementById("hour-9");
let date = new Date();
let hour = date.getHours();



$('.time-block').each(function() {

  if (parseInt($(this).attr("id")) == hour) {
    $(this).addClass("present"); 
    $(this).removeClass("past"); 
    $(this).removeClass("future"); 
  }
    else if (parseInt($(this).attr("id")) >= hour) {
      $(this).removeClass("present"); 
      $(this).removeClass("past"); 
      $(this).addClass("future"); 
  }
      else if (parseInt($(this).attr("id")) <= hour) {
        $(this).removeClass("present"); 
        $(this).addClass("past"); 
        $(this).removeClass("future"); 
      }
  });
  

$(document).ready(function() {
  $('#hour-9').addClass("inactive"); 
  showDateTime();
});

function showDateTime() {
  var dayList = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = [
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
    "December"
  ];
  var dayName = dayList[date.getDay()];
  var monthName = monthNames[date.getMonth()];
  var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  
  currentDay.innerText = today;

}
