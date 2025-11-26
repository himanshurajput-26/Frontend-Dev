$(document).ready(function () {
  $(".manager").click(function () {
    $(this).children(".emp").css("background", "yellow");
  });
  $(".emp").hover(function () {
    $(this).next().show();
  });
  $(".dep").click(function () {
    $(this).parent().children().css("background", "lightblue");
  });
  const r = Math.floor(Math.random() * $(".emp").length);
  $($(".emp")[r]).siblings().css("border", "2px solid red");
  $(".dep").click(function () {
    $(this).parent().find(".emp").toggle();
  });
});
