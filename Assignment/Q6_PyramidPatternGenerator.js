"use strict";

function generatePyramid(limit = 5) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

generatePyramid();
