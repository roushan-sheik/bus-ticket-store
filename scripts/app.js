"use strict";
// Total seat counter
const totaSeats = document.getElementById("total_seat");
const seatCountsValue = document.getElementById("seat_count");
let seatCount = parseInt(seatCountsValue.innerText);
let totalSeat = parseInt(totaSeats.innerText);

// Get all seats button
const allSetas = document.getElementsByClassName("seat");

//NOTE ============= Loop throw the all elements ====================
const tempArr = [];
for (const seat of allSetas) {
  seat.addEventListener("click", (event) => {
    if (tempArr.length > 3) {
      alert("You cannot buy more than 4 tickets!");
      return;
    }
    //   subtract the seat count
    totalSeat -= 1;
    seatCount += 1;

    // set update seat count value
    totaSeats.innerText = totalSeat;
    // update count
    seatCountsValue.innerText = seatCount;
    // change the button color
    chanBtnColor(event.target);
    // append the seat to the list
    if (event.target.nodeName == "SPAN" || event.target.nodeName == "DIV") {
      tempArr.push(event.target);
    }
  });
}
// create element function
function createElement(tagName) {
  return document.createElement(tagName);
}
//NOTE - Chang the button color function
function chanBtnColor(target) {
  if (target.nodeName == "SPAN") {
    target.parentNode.classList.add("bg_primary");
    target.parentNode.classList.add("bg_primary");
    target.classList.add("btn_color");
  } else if (target.nodeName == "DIV") {
    target.classList.add("bg_primary");
    target.childNodes[1].classList.add("btn_color");
  }
}
