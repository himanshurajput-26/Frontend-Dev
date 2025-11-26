$(document).ready(function () {
  $(".product").click(function () {
    $(this).toggleClass("highlight");
    if ($(this).data("stock") === "no") alert("Out of stock");
  });
  $(".product").hover(function () {
    $(this).append("<p class='info'>Extra details</p>");
  }, function () {
    $(this).find(".info").remove();
  });
  $(".fav").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });
  $("[data-discount='true']").addClass("discount");
});
