function load(d) {
  fetch("http://localhost:3005/timetable?day=" + d)
    .then(r => r.json())
    .then(data => {
      if (data.length === 0) {
        document.getElementById("table").innerHTML = "No classes today.";
        return;
      }
      let h = "";
      data.forEach(c => {
        h += `<div>${c.subject} - ${c.faculty} - ${c.time}</div>`;
      });
      document.getElementById("table").innerHTML = h;
    });
}

document.getElementById("day").addEventListener("change", function () {
  load(this.value);
});

load("Monday");
