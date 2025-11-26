function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() < 0.25;
      if (failed) reject("Failed to fetch bugs");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.log(err));
