//date and time inject to document head
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D"));

var timeUpdater = setInterval(function () {
  var today = dayjs();
  $("#currentTime").text(today.format("h:mm:ss a"));
});

//functions to save and load data into the correct blocks
$(saveData);

function saveData() {
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    $("#" + timeBlock + " textarea").text(localStorage.getItem(dayjs().format("hr") + timeBlock));
  });
  $(".saveBtn").on("click", saveTask);
}

function saveTask(e) {
  var hourId = $(this).parent().attr("id");
  localStorage.setItem(dayjs().format("hr") + hourId, $("#" + hourId + " textarea").val());
}
