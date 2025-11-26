$(document).ready(function () {
  $("#search").on("keyup", function () {
    const v = $(this).val();
    $("#loading").show();
    $.ajax({
      url: "http://localhost:3001/products?q=" + v,
      method: "GET",
      success: function (data) {
        $("#loading").hide();
        if (data.length === 0) {
          $("#results").html("No products found");
          return;
        }
        let h = "";
        data.forEach(p => {
          h += `<div><img src="${p.image}" width="50"> ${p.name} - ${p.price}</div>`;
        });
        $("#results").html(h);
      }
    });
  });
});
