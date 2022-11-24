//date and time inject to document head with dayjs, i added the time instead of just the date on an extra line in the document
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));

var timeUpdater = setInterval(function () {
  var today = dayjs();
  $("#currentTime").text(today.format("h:mm:ss a"));
});

//setting colours of time to load before rest... but the thing isnt working..... commenting out til debugged



// function timeColour() {
//   $(".time-block").each(function() {
//     var blockTime = parseInt($(this).attr("id").replace("hour", ""));
//     var currentTime = parseInt(dayjs().format("hr"));
//     if (blockTime < currentTime) {
//       $(this).addClass(".past");
//     } else if (blockTime = currentTime) {
//       $(this).addClass(".present");
//     } else {
//       $(this).addClass(".future");
//     }
//   });
// }



//functions to save and load data into the correct blocks
$(saveData);

function saveData() {
  $(".time-block").each(function() {
    //below line is calling the id in (this) timeBlock being the number of hour
    var timeBlock = $(this).attr("id");
    //below line is calling to input the info into hour text area from local storage, # being the hour, then dayjs is adding what hour it was input to help js determine what is to be put
    $("#" + timeBlock + " textarea").text(localStorage.getItem(dayjs().format("h mm ") + timeBlock));
  });
// below is calling the next function
  $(".saveBtn").on("click", saveTask);
}


function saveTask(e) {
  //making sure page does not reload
  event.preventDefault();
  var hourId = $(this).parent().attr("id");
  //this is saving the array information to local storage
  localStorage.setItem(dayjs().format("h mm ") + hourId, $("#" + hourId + " textarea").val());
}