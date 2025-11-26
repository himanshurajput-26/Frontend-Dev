jq1(function () {
  setInterval(() => jq1("#carousel").css("color", "red"), 2000);
});

jq2(function () {
  jq2("#modal").hover(() => jq2("#modal").fadeToggle());
});
