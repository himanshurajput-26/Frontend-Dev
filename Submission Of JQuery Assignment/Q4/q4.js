$(document).ready(function () {
  let i = 0;
  $("#hide").click(() => $(".banner").hide());
  $("#show").click(() => $(".banner").show());
  $("#slide").click(() => $(".banner").slideToggle());
  $("#fade").click(() => $(".banner").fadeToggle());
  setInterval(() => {
    $(".banner").fadeOut();
    $($(".banner")[i]).fadeIn();
    i = (i + 1) % $(".banner").length;
  }, 5000);
});
