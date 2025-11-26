$(document).ready(function () {
  $("#sub").click(() => $("#msg").text("Notifications Enabled"));
  $("#unsub").click(() => $("#msg").text("Notifications Disabled"));
  $("#add").click(() => {
    $("#topics").append("<p class='topic'>New Topic</p>");
    $(".topic").on("click", function () {
      $(this).css("color", "green");
    });
  });
});
