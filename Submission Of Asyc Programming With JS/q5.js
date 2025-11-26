function step(msg, next) {
  setTimeout(() => {
    console.log(msg);
    next && next();
  }, 1000);
}

step("design", () => {
  step("build", () => {
    step("test", () => {
      step("deploy", () => {
        step("celebrate");
      });
    });
  });
});
function wait(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

async function pipeline() {
  await wait("design");
  await wait("build");
  await wait("test");
  await wait("deploy");
  await wait("celebrate");
}

pipeline();
