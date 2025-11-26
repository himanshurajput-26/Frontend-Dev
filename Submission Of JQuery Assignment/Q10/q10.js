$(document).ready(function () {
  const emails = ["test@gmail.com"];
  $("#submit").click(function () {
    const n = $("#name").val();
    const e = $("#email").val();
    const p = $("#pass").val();
    let ok = true;

    if (!n) {
      $("#name").css("border", "2px solid red");
      ok = false;
    } else $("#name").css("border", "");

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    if (!validEmail || emails.includes(e)) {
      $("#email").css("border", "2px solid red");
      ok = false;
    } else $("#email").css("border", "");

    if (p.length < 8) {
      $("#pass").css("border", "2px solid red");
      ok = false;
    } else $("#pass").css("border", "");

    if (ok) $("#msg").text("Registration Successful");
  });
});
