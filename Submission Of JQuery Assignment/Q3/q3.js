$(document).ready(function () {
  $(".a").hide();
  $(".q").click(function () {
    $(this).next(".a").toggle();
  });
  $(".q").hover(function () {
    $(this).css("color", "blue");
  }, function () {
    $(this).css("color", "black");
  });
  $(".q").dblclick(function () {
    $(".a").slideUp();
  });
  $(".inputBox").focus(function () {
    $(this).parent().css("background", "yellow");
  });
  $(".inputBox").blur(function () {
    $(this).parent().css("background", "");
  });
});
