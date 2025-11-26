$(document).ready(function () {
  $("#add").click(() => $("#posts").append("<p class='post'>New Post</p>"));
  $("#top").click(() => $("#posts").prepend("<p class='post'>Featured Post</p>"));
  $("#remove").click(() => $("#posts").children().last().remove());
  $("#posts").on("mouseenter", ".post", function () {
    if ($(this).text().includes("New")) $(this).css("background", "yellow");
  });
});
