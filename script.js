$(document).ready()
// update tasks by the hour

// check current time

// add to local storage
$(".save-btn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

// display the day

