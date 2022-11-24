//date and time inject to document head
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));

var timeUpdater = setInterval(function () {
  var today = dayjs();
  $("#currentTime").text(today.format("h:mm:ss a"));
});

