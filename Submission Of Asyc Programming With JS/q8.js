function submitOrder() {
  return new Promise((resolve, reject) => {
    Math.random() < 0.5 ? reject("Fail") : resolve("Success");
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await submitOrder();
      console.log("Attempt", i + ":", res);
      return;
    } catch {
      console.log("Attempt", i + ":", "Failed");
    }
  }
  throw "Order could not be processed";
}

processOrder().catch(e => console.log(e));
