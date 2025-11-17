let count = 0;

function increment() {
 
  function doInc() {
    count++;
    console.log("Incremented: count =", count);
  }
  doInc();
}

function decrement() {
  function doDec() {
    count--;
    console.log("Decremented: count =", count);
  }
  doDec();
}

increment(); // 1
increment(); // 2
decrement(); // 1
increment(); // 2
