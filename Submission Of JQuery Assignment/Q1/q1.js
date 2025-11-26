$(document).ready(function () {
  const h = new Date().getHours();
  $("#greet").text(h < 12 ? "Good Morning" : h < 17 ? "Good Afternoon" : "Good Evening");
  $("#change").click(() => $("#greet").text("Keep working hard!"));
  $("#toggle").click(() => $("#welcome").toggle());
  $("#greet").click(() => alert("Greeting clicked"));
});
