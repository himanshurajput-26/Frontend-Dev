$(document).ready(function () {
  $("#search").keyup(function () {
    const t = $(this).val().toLowerCase();
    let c = 0;
    $(".course").each(function () {
      const m = $(this).text().toLowerCase().includes(t);
      $(this).toggle(m);
      if (m) c++;
    });
    $("#count").text(c);
  });
});
