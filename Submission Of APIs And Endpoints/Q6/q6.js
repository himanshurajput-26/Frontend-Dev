document.getElementById("reg").onclick = async function () {
  const n = document.getElementById("name").value;
  const e = document.getElementById("email").value;

  const r = await axios.get("http://localhost:3006/users?email=" + e);
  if (r.data.length > 0) {
    document.getElementById("msg").innerText = "Email already registered.";
    return;
  }

  await axios.post("http://localhost:3006/users", { name: n, email: e });
  document.getElementById("msg").innerText = "Registration Successful";
};
