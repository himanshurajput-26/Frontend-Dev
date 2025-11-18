"use strict";

function outer() {
  console.log("outer-before:", count);
  var count = 5;
  function inner() {
    console.log("inner-before:", count);
    var count = 10;
    console.log("inner-after:", count);
  }
  inner();
  console.log("outer-after:", count);
}

outer();

function outerArrow() {
  var count = 5;
  const inner = () => {
    console.log("arrow inner:", count);
  };
  inner();
}

outerArrow();
