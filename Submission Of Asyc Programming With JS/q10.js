function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject(name + " failed") : resolve(name);
    }, 1000 + Math.random() * 1000);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await step("Step 1: Order taken"));
    console.log(await step("Step 2: Food prepared"));
    console.log(await step("Step 3: Package ready"));
    console.log(await step("Step 4: Out for delivery"));
    console.log("Delivery completed!");
  } catch {
    console.log("Pipeline failed!");
  }
}

runPipeline();
