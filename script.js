const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const check = document.querySelector(".check-button");
const message = document.querySelector("#err-message");
const nextButton = document.querySelector(".next-button");
const cashSection = document.querySelector(".cash-section");
const noOfNotes = document.querySelectorAll(".notes");
const notes = document.querySelectorAll(".note");
const tableContainer = document.querySelector(".table-container");

// Hiding
tableContainer.style.display = "none";
message.style.display = "none";
cashSection.style.display = "none";

nextButton.addEventListener("click", () => {
  nextButton.style.display = "none";
  cashSection.style.display = "block";
});

check.addEventListener("click", () => {
  // Hiding
  tableContainer.style.display = "none";
  message.style.display = "none";

  const bill = Number(billAmount.value);
  const cash = Number(cashGiven.value);

  // Validating bill-amount
  if (bill > 0) {
    // Comparing cash-amount with bill-amount
    if (cash > bill) {
      const amountToBeReturn = cash - bill;
      calculate(amountToBeReturn);
    } else if (cash === bill) {
      showMess("No need to return");
    } else {
      showMess("Do you wanna wash Plates? 😂😂 ");
    }
  } else {
    showMess("Invalid Amount!! ❌");
  }
});

function showMess(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculate(amount) {
  tableContainer.style.display = "block";
  for (let i = 0; i < notes.length; i++) {
    noOfNotes[i].innerText = Math.trunc(amount / Number(notes[i].innerText));
    amount = amount % Number(notes[i].innerText);
  }
}
