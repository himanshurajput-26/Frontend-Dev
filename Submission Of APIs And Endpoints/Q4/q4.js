const u = fetch("http://localhost:3004/users");
const o = fetch("http://localhost:3004/orders");
const p = fetch("http://localhost:3004/products");

Promise.all([u, o, p])
  .then(res => Promise.all(res.map(r => r.json())))
  .then(data => {
    document.getElementById("users").innerHTML = "Total Users: " + data[0].length;
    document.getElementById("orders").innerHTML = "Total Orders: " + data[1].length;
    document.getElementById("products").innerHTML = "Total Products: " + data[2].length;
  })
  .catch(() => {
    document.getElementById("users").innerHTML = "Some data could not be loaded.";
    document.getElementById("orders").innerHTML = "";
    document.getElementById("products").innerHTML = "";
  });
