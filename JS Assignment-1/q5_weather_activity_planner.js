const temperature = 22;     
const isRaining = false;    
const windSpeed = 15;       

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
