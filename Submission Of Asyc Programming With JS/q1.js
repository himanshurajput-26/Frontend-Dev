function delay() {
  return 1000 + Math.random() * 1000;
}

function fail() {
  return Math.random() < 0.2;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => fail() ? reject("Boiling failed") : resolve("boiled"), delay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fail() ? reject("Brewing failed") : resolve("coffee"), delay());
  });
}

function pourCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fail() ? reject("Pouring failed") : resolve("cup"), delay());
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(e => console.log(e));
