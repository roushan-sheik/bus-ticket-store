"use strict";
// Total seat counter
const seatCounters = document.getElementById("total_seat");
let seatCount = parseInt(seatCounters.innerText);
console.log(seatCount);
// Get all seats button
const allSetas = document.getElementsByClassName("kbd");
// ============== Loop throw the all elements ====================
for (const seat of allSetas) {
  seat.addEventListener("click", (event) => {
    //   subtract the seat count
    seatCount -= 1;
    // set update seat count value
    seatCounters.innerText = seatCount;
    console.log(event.target);
  });
}
