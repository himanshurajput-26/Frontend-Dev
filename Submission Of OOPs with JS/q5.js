class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }
  calculateFare() {
    if (!this.distance || this.distance < 0) throw "Invalid distance";
    return this.distance * 10;
  }
}

try {
  const t = new Trip("A", "B", 12);
  console.log(t.calculateFare());
  const t2 = new Trip("A", "B", -5);
  console.log(t2.calculateFare());
} catch (e) {
  console.log(e);
}
