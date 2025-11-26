function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.2 ? reject("A failed") : resolve("Server A done"), 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random() < 0.2 ? reject("B failed") : resolve("Server B done"), 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(e => console.log(e));

Promise.race([serverA(), serverB()])
  .then(result => console.log("Fastest response:", result))
  .catch(err => console.log(err));
