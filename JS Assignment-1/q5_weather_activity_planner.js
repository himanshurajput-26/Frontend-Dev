// Q5: Weather Activity Planner
// File: q5_weather_activity_planner.js

// Example inputs (change values to test)
const temperature = 22;     // degrees Celsius
const isRaining = false;    // boolean
const windSpeed = 15;       // km/h or similar unit

let advise;

if (isRaining) {
  advise = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advise = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advise = "Too cold and windy — stay home.";
} else {
  advise = "Perfect day for a walk.";
}

console.log(advise);
