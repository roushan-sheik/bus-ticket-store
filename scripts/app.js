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
    tempArr.push(event.target);
    // ++++++++++++++++++++ Append seat ========================>
    const append_box = document.getElementById("append_box");
    // get seat name
    let seatName = getSeatName(event);
    let div = createElement("div");
    let p1 = createElement("p");
    p1.innerText = seatName;
    let p2 = createElement("p");
    p2.innerText = "Economy";
    let p3 = createElement("p");
    p3.innerText = 550;
    //append child
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    //   add style class
    div.classList.add("appendElement");
    console.log(div);
    // append to the main div
    append_box.appendChild(div);
  });
}
//* ================== end main code ========================
//* ================== utils start ========================
//NOTE - get seat name
function getSeatName(event) {
  let seatName = "";
  if (event.target.nodeName == "DIV") {
    seatName = event.target.childNodes[1].innerText;
  } else if (event.target.nodeName == "SPAN") {
    seatName = event.target.innerText;
  }
  return seatName;
}
//NOTE - create element function
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
