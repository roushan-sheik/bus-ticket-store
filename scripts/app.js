"use strict";
// Total seat counter
let totaSeats = document.getElementById("total_seat");
let seatCountsValue = document.getElementById("seat_count");
let seatCount = parseInt(seatCountsValue.innerText);
let totalSeat = parseInt(totaSeats.innerText);

// Get all seats button
const allSetas = document.getElementsByClassName("seat");

//NOTE ============= Loop throw the all elements ====================
const tempArr = [];
for (const seat of allSetas) {
  seat.addEventListener("click", (event) => {
    // button dubble click checking
    let curSeatName = getSeatName(event);
    if (tempArr.includes(curSeatName)) {
      removeBtnColor(event.target);
      // updateCounter
      totalSeat += 1;
      seatCount -= 1;
      // delete seat form list
      let targetSeat = document.getElementById(curSeatName);
      targetSeat.remove();
      console.log(tempArr);
      // remove form temp Array
      let indx = tempArr.indexOf(curSeatName);
      tempArr.splice(indx, 1);
      updateTotalPrice();
      updateGrandTotal();
      updateTalSeats();
      updateCount();
      return;
    }
    // 4 items is or not
    if (tempArr.length >= 4) {
      alert("You cannot buy more than 4 tickets!");
      return;
    }
    //   subtract the seat count
    totalSeat -= 1;
    seatCount += 1;

    // set update seat count value
    function updateTalSeats() {
      totaSeats.innerText = totalSeat;
    }
    updateTalSeats();
    // update count
    function updateCount() {
      seatCountsValue.innerText = seatCount;
    }
    updateCount();
    // change the button color
    changeBtnColor(event.target);
    // append the seat to the list
    if (event.target.nodeName == "DIV") {
      tempArr.push(event.target.childNodes[1].innerText);
    } else if (event.target.nodeName == "SPAN") {
      tempArr.push(event.target.innerText);
    }
    console.log(tempArr);
    // ++++++++++++++++++++ Append seat ========================>
    const append_box = document.getElementById("append_box");
    // get seat name
    let seatName = getSeatName(event);
    // Unique key
    let key = getSeatName(event);
    let div = createElement("div");
    div.setAttribute("id", key);
    console.log(div);
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
    // append to the main div
    append_box.appendChild(div);
    // ============= Show total price =================>
    const show_total_box = document.getElementById("show_total_box");
    let ticketPrice = show_total_box.innerText;
    let curTotal = parseInt(ticketPrice);
    curTotal += 550;
    show_total_box.innerText = curTotal;
    // deselect update price
    function updateTotalPrice() {
      const show_total_box = document.getElementById("show_total_box");
      let ticketPrice = show_total_box.innerText;
      let curTotal = parseInt(ticketPrice);
      curTotal -= 550;
      show_total_box.innerText = curTotal;
    }
    // ============= Show Grand total price =================>
    const grand_total_box = document.getElementById("grand_total_box");
    let grandTotal = parseInt(show_total_box.innerText);
    grand_total_box.innerText = grandTotal;
    // update grand total value
    function updateGrandTotal() {
      const show_total_box = document.getElementById("show_total_box");
      const grand_total_box = document.getElementById("grand_total_box");
      let grandTotal = parseInt(show_total_box.innerText);
      grand_total_box.innerText = grandTotal;
    }
    // next btn enable by onClick and adding phone number
    const nextBtn = document.getElementById("next_btn");
    enableNextBtn(nextBtn);
    // Apply button enable
    if (tempArr.length == 4) {
      const coupon_box = document.getElementById("coupon_box");
      const cpn_btn = document.getElementById("coupon_btn");
      cpn_btn.disabled = false;
      // On submit functionality apply coupon
      const new_fif = "NEW15";
      const cupple = "Couple 20";
      const input_coupon = document.getElementById("input_coupon");
      input_coupon.addEventListener("keyup", (e) => {
        let coupon = e.target.value;
        cpn_btn.addEventListener("click", (e) => {
          if (coupon == new_fif) {
            let grandTotal = parseInt(grand_total_box.innerText);
            let discountTotal = grandTotal * 0.15;
            const total = grandTotal - discountTotal;
            grand_total_box.innerText = total;
            coupon_box.classList.add("hidden");
            // display:  safeMoney
            appendSafe(grandTotal - total);
            // display Toast
            displayToast("success_new");
          } else if (coupon == cupple) {
            let grandTotal = parseInt(grand_total_box.innerText);
            let discountTotal = grandTotal * 0.2;
            const total = Math.round(grandTotal - discountTotal);
            grand_total_box.innerText = total;
            coupon_box.classList.add("hidden");
            // new discount price
            const safeMoney = grandTotal - total;
            appendSafe(safeMoney);
            // display Toast
            displayToast("success_cupple");
          } else if (coupon != new_fif || coupon != cupple) {
            displayToast("invalid_coupon");
          }
        });
      });
    }
  }); // Loop end
}
//* ================== end main code ========================
//* ================== utils start ========================
// NOTE - append safe money
function appendSafe(safeMoney) {
  const append_discount = document.getElementById("append_discount");
  const discount_box = createElement("div");
  const discount_text = createElement("p");
  discount_text.innerText = "Total Discount (Safe BDT)";
  discount_box.appendChild(discount_text);
  const discount_price = createElement("p");
  discount_price.innerText = parseInt(safeMoney);
  discount_box.appendChild(discount_price);
  //append to the box
  discount_box.classList.add("appendElement");
  console.log(discount_box);
  append_discount.appendChild(discount_box);
}
// NOTE Display Toast message
function displayToast(id) {
  const toast = document.getElementById(id);
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}
//NOTE - Next btn enabled features
function enableNextBtn(button) {
  const numberInput = document.getElementById("input_number");
  numberInput.addEventListener("keyup", (event) => {
    let num = Number(event.target.value);
    let tempNum = num.toString();
    if (tempNum.includes("NaN") || tempNum.length < 10) {
      const error_box = document.getElementById("error_box");
      error_box.innerText = "Invalid number";
    } else {
      error_box.innerText = "";
      button.disabled = false;
    }
  });
}
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
function changeBtnColor(target) {
  if (target.nodeName == "SPAN") {
    target.parentNode.classList.add("bg_primary");
    target.classList.add("btn_color");
  } else if (target.nodeName == "DIV") {
    target.classList.add("bg_primary");
    target.childNodes[1].classList.add("btn_color");
  }
}
// NOTE Deselect button
function removeBtnColor(target) {
  if (target.nodeName == "SPAN") {
    target.parentNode.classList.remove("bg_primary");
    target.classList.remove("btn_color");
  } else if (target.nodeName == "DIV") {
    target.classList.remove("bg_primary");
    target.childNodes[1].classList.remove("btn_color");
  }
}
