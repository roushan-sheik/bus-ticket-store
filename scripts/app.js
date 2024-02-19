"use strict";
// Total seat counter
const totaSeats = document.getElementById("total_seat");
const seatCountsValue = document.getElementById("seat_count");
let seatCount = parseInt(seatCountsValue.innerText);
let totalSeat = parseInt(totaSeats.innerText);

// Get all seats button
const allSetas = document.getElementsByClassName("seat");

//NOTE ============= Loop throw the all elements ====================
for (const seat of allSetas) {
  seat.addEventListener("click", (event) => {
    event.stopPropagation();
    //   subtract the seat count
    totalSeat -= 1;
    seatCount += 1;
    // set update seat count value
    totaSeats.innerText = totalSeat;
    // update count
    seatCountsValue.innerText = seatCount;
    // change the button color
    if (event.target.nodeName == "DIV" || event.target.nodeName == "SPAN") {
      chanBtnColor(event.target);
    }
  });
}
//NOTE - Chang the button color function
function chanBtnColor(target) {
  if (target.nodeName == "SPAN") {
    target.parentNode.classList.add("bg_primary");
    target.parentNode.classList.add("bg_primary");
  } else if (target.nodeName == "DIV") {
    target.classList.add("bg_primary");
  }
}
