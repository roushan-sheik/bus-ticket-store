"use strict";
// Total seat counter
const seatCounters = document.getElementById("total_seat");
let seatCount = parseInt(seatCounters.innerText);
console.log(seatCount);
// Get all seats button
const allSetas = document.getElementsByClassName("kbd");
//NOTE ============= Loop throw the all elements ====================
for (const seat of allSetas) {
  seat.addEventListener("click", (event) => {
    //   subtract the seat count
    seatCount -= 1;
    // set update seat count value
    seatCounters.innerText = seatCount;
    // change the button color
    chanBtnColor(event.target);
    console.log(event.target);
  });
}
//NOTE - Chang the button color function
function chanBtnColor(target) {
  console.log(target.parentNode.childNodes);
  target.parentNode.childNodes[1].classList.add("bg-green-primary");
 
  console.log(target);
  console.log("clicked");
}
