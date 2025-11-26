function load(f = "") {
  let u = "http://localhost:3003/tasks";
  if (f) u += f === "true" ? "?completed=true" : "?priority=" + f;
  $.get(u, function (data) {
    let h = "";
    data.forEach(t => {
      h += `<div>
        <input type="checkbox" data-id="${t.id}" ${t.completed ? "checked" : ""}> 
        ${t.title} - ${t.priority}
      </div>`;
    });
    $("#tasks").html(h);
  });
}

$(document).ready(function () {
  load();
  $("#filter").change(function () {
    load($(this).val());
  });
  $("#tasks").on("change", "input", function () {
    const id = $(this).data("id");
    $.ajax({
      url: "http://localhost:3003/tasks/" + id,
      method: "PATCH",
      data: { completed: this.checked }
    });
  });
});
