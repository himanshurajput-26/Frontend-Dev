const menu = {
  pizza: 200,
  burger: 120,
  coffee: 80,
  fries: 60
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(i => {
      if (!menu[i]) throw "Invalid item: " + i;
      return menu[i];
    });
    const total = prices.reduce((a, b) => a + b, 0);
    console.log("Total:", total);
  } catch (e) {
    console.log(e);
  }
}

calculateBill(["pizza", "coffee"]);
calculateBill(["pizza", "juice"]);
