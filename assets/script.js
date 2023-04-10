const currentDay = document.getElementById("currentDay");
const hour9 = document.getElementById("hour-9");
let date = new Date();
let hour = date.getHours();


//Criteria for color selection of past, present and future
$('.time-block').each(function() {
  let block = parseInt($(this).attr("id"));
  if (block == hour) {
    $(this).addClass("present"); 
    $(this).removeClass("past"); 
    $(this).removeClass("future"); 
  }
    else if (block >= hour) {
      $(this).removeClass("present"); 
      $(this).removeClass("past"); 
      $(this).addClass("future"); 
  }
      else  { 
        $(this).removeClass("present"); 
        $(this).addClass("past"); 
        $(this).removeClass("future"); 
      }
  });
  

$(document).ready(function() {
  //Add click functionality to saveBtn and save
  $('.saveBtn').on("click", function(e) {
    e.preventDefault();
    let id = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    localStorage.setItem(id, text);
  });
  //On Load load local storage relevant to time slot.
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  console.log("Saved!");
  showDateTime();
});

//Display date on screen
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
