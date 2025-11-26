const box = document.getElementById("emp");
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3002/employees");
xhr.onload = function () {
  const data = JSON.parse(xhr.responseText);
  data.forEach(e => {
    const d = document.createElement("div");
    d.innerHTML = `${e.name} - ${e.status} 
      <button data-id="${e.id}" data-status="${e.status}">Toggle</button>`;
    box.appendChild(d);
  });
};
xhr.send();

box.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;
    const cur = e.target.dataset.status;
    const upd = cur === "active" ? "inactive" : "active";
    e.target.dataset.status = upd;
    e.target.parentElement.innerHTML = e.target.parentElement.innerHTML.replace(cur, upd);

    const p = new XMLHttpRequest();
    p.open("PATCH", "http://localhost:3002/employees/" + id);
    p.setRequestHeader("Content-Type", "application/json");
    p.onerror = function () {
      e.target.dataset.status = cur;
      e.target.parentElement.innerHTML = e.target.parentElement.innerHTML.replace(upd, cur);
      alert("Error updating");
    };
    p.send(JSON.stringify({ status: upd }));
  }
});
