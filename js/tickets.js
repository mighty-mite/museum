const tickets = document.querySelector(".tickets__form"),
  btnBasicDown = tickets.querySelector(".basic-down"),
  btnBasicUp = tickets.querySelector(".basic-up"),
  btnSeniorDown = tickets.querySelector(".senior-down"),
  btnSeniorUp = tickets.querySelector(".senior-up");

let amount = tickets.querySelector(".tickets__total-amount");
let basicAmount = document.querySelector(".basic-amount");
let seniorAmount = document.querySelector(".senior-amount");

/*          POPUP FORM          */

let basicAmountBuy = document.querySelector(".buy__basic"),
  seniorAmountBuy = document.querySelector(".buy__senior"),
  amountOfBasicTickets = document.querySelector(".basic-amount-buy"),
  amountOfSeniorTickets = document.querySelector(".senior-amount-buy"),
  selectTicketType = document.getElementById("select"),
  exhibitionType = document.querySelector(".exhibition-type"),
  ticketPrices = document.querySelectorAll(".ticket-price"),
  subtotal = document.querySelectorAll(".subtotal"),
  total = document.querySelector(".total");

const permanent = 20,
  temporary = 25,
  combined = 40;

let radios = tickets.querySelectorAll(".tickets__radio");

let money;

function updateAmountOfTickets() {
  basicAmountBuy.value = basicAmount.value;
  seniorAmountBuy.value = seniorAmount.value;
  amountOfBasicTickets.textContent = basicAmount.value;
  amountOfSeniorTickets.textContent = seniorAmountBuy.value;
}

function changeSum() {
  if (radios[0].checked) {
    money =
      basicAmount.value * permanent + (seniorAmount.value * permanent) / 2;
    updateAmountOfTickets();
    selectTicketType.selectedIndex = 0;
    ticketPrices[0].textContent = permanent;
    ticketPrices[1].textContent = permanent / 2;
    ticketPrices[2].textContent = permanent;
    ticketPrices[3].textContent = permanent / 2;
    subtotal[0].textContent =
      Number(amountOfBasicTickets.textContent) * permanent;
    subtotal[1].textContent =
      (Number(amountOfSeniorTickets.textContent) * permanent) / 2;
  } else if (radios[1].checked) {
    money =
      basicAmount.value * temporary + (seniorAmount.value * temporary) / 2;
    updateAmountOfTickets();
    selectTicketType.selectedIndex = 1;
    ticketPrices[0].textContent = temporary;
    ticketPrices[1].textContent = temporary / 2;
    ticketPrices[2].textContent = temporary;
    ticketPrices[3].textContent = temporary / 2;
    subtotal[0].textContent =
      Number(amountOfBasicTickets.textContent) * temporary;
    subtotal[1].textContent =
      (Number(amountOfSeniorTickets.textContent) * temporary) / 2;
  } else {
    money = basicAmount.value * combined + (seniorAmount.value * combined) / 2;
    updateAmountOfTickets();
    selectTicketType.selectedIndex = 2;
    ticketPrices[0].textContent = combined;
    ticketPrices[1].textContent = combined / 2;
    ticketPrices[2].textContent = combined;
    ticketPrices[3].textContent = combined / 2;
    subtotal[0].textContent =
      Number(amountOfBasicTickets.textContent) * combined;
    subtotal[1].textContent =
      (Number(amountOfSeniorTickets.textContent) * combined) / 2;
  }
  amount.textContent = money;
  exhibitionType.textContent =
    selectTicketType.options[selectTicketType.selectedIndex].value;
  total.textContent = money;
}

changeSum();

btnBasicDown.addEventListener("click", () => {
  btnBasicDown.nextElementSibling.stepDown();
  changeSum();
});
btnBasicUp.addEventListener("click", () => {
  btnBasicUp.previousElementSibling.stepUp();
  changeSum();
});

btnSeniorDown.addEventListener("click", () => {
  btnSeniorDown.nextElementSibling.stepDown();
  changeSum();
});

btnSeniorUp.addEventListener("click", () => {
  btnSeniorUp.previousElementSibling.stepUp();
  changeSum();
});

tickets.addEventListener("change", (e) => {
  if (e.target.className !== "tickets__radio") return;
  changeSum();
});

/*          POP UP FORM          */

const btnFormBasicDown = document.querySelector(".btn-form-basic-down"),
  btnFormBasicUp = document.querySelector(".btn-form-basic-up"),
  btnFormSeniorDown = document.querySelector(".btn-form-senior-down"),
  btnFormSeniorUp = document.querySelector(".btn-form-senior-up");

function showFinalPrices() {
  amountOfBasicTickets.textContent = basicAmountBuy.value;
  amountOfSeniorTickets.textContent = seniorAmountBuy.value;

  switch (selectTicketType.options[selectTicketType.selectedIndex].value) {
    case "Permanent exhibition":
      subtotal[0].textContent = basicAmountBuy.value * permanent;
      subtotal[1].textContent = (seniorAmountBuy.value * permanent) / 2;
      total.textContent = +subtotal[0].textContent + +subtotal[1].textContent;
      break;
    case "Temporary exhibition":
      subtotal[0].textContent = basicAmountBuy.value * temporary;
      subtotal[1].textContent = (seniorAmountBuy.value * temporary) / 2;
      total.textContent = +subtotal[0].textContent + +subtotal[1].textContent;
      break;
    case "Combined Admission":
      subtotal[0].textContent = basicAmountBuy.value * combined;
      subtotal[1].textContent = (seniorAmountBuy.value * combined) / 2;
      total.textContent = +subtotal[0].textContent + +subtotal[1].textContent;
      break;
  }
}

btnFormBasicDown.addEventListener("click", () => {
  showFinalPrices();
});
btnFormBasicUp.addEventListener("click", () => {
  showFinalPrices();
});
btnFormSeniorDown.addEventListener("click", () => {
  showFinalPrices();
});
btnFormSeniorUp.addEventListener("click", () => {
  showFinalPrices();
});

/* CHANGE EXHIBITION TYPE AFTER SELECT */

function showSelectChanges() {
  exhibitionType.textContent =
    selectTicketType.options[selectTicketType.selectedIndex].value;
  switch (selectTicketType.options[selectTicketType.selectedIndex].value) {
    case "Permanent exhibition":
      ticketPrices[0].textContent = permanent;
      ticketPrices[1].textContent = permanent / 2;
      ticketPrices[2].textContent = permanent;
      ticketPrices[3].textContent = permanent / 2;
      showFinalPrices();
      break;
    case "Temporary exhibition":
      ticketPrices[0].textContent = temporary;
      ticketPrices[1].textContent = temporary / 2;
      ticketPrices[2].textContent = temporary;
      ticketPrices[3].textContent = temporary / 2;
      showFinalPrices();
      break;
    case "Combined Admission":
      ticketPrices[0].textContent = combined;
      ticketPrices[1].textContent = combined / 2;
      ticketPrices[2].textContent = combined;
      ticketPrices[3].textContent = combined / 2;
      showFinalPrices();
      break;
  }
}

selectTicketType.addEventListener("input", showSelectChanges);

/*          DATE            */

let dayOfWeek = document.querySelector(".day-of-week");
let dayOfMonth = document.querySelector(".day-of-month");
let month = document.querySelector(".month");

const inputDate = document.querySelector(".buy__date");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = new Date();

inputDate.valueAsDate = today;

let min = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

inputDate.setAttribute("min", min);

function updateTime() {
  let date = new Date(inputDate.value);
  dayOfWeek.textContent = days[date.getDay()];
  month.textContent = months[date.getMonth()];
  dayOfMonth.textContent = date.getDate();
}

updateTime();

inputDate.addEventListener("input", updateTime);

let timeChosen = document.querySelector(".time");
let selectTime = document.getElementById("time");

function showTimeChange() {
  timeChosen.textContent = selectTime.options[selectTime.selectedIndex].value;
}

selectTime.addEventListener("input", showTimeChange);

/*          PHONE VALIDATION            */

let regexp = /\d{3,15}/;

const tel = document.querySelector(".buy__tel");
let phoneNumber = [];
tel.addEventListener("input", (e) => {
  if (typeof +e.data === "number") {
    phoneNumber.push(e.data);
  }
});
