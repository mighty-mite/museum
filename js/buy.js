const form = document.querySelector(".buy");
const formBtn = document.querySelector(".tickets__button");
const closeBtn = document.querySelector(".buy__close");
const modalOverlay = document.querySelector(".modal-overlay");
const cvv = document.querySelector(".buy__card-cvv");
const monthInput = document.querySelector(".buy__card-month");
const yearInput = document.querySelector(".buy__card-year");
const cardNumberInput = document.querySelector(".buy__card-number");
const nameInput = document.querySelector(".buy__card-name");
const submit = document.querySelector(".buy__book");

function appendTextForThreeSeconds(text) {
  const div = document.createElement("div");
  div.classList.add("buy__success-msg");

  div.textContent = text;

  div.style.position = "fixed";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.padding = "10px 20px";
  div.style.borderRadius = "5px";
  div.style.zIndex = "9999";

  document.body.appendChild(div);

  setTimeout(() => {
    document.body.removeChild(div);
  }, 2000);
}

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.left = "50%";
  form.style.top = "50%";
  form.style.transform = "translate(-50%, -50%)";
  modalOverlay.classList.add("open");
  document.documentElement.style.overflow = "hidden";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.left = -300 + "%";
  modalOverlay.classList.remove("open");
  document.body.style.height = "auto";
  document.documentElement.style.overflow = "auto";
});

modalOverlay.addEventListener("click", () => {
  form.style.left = -300 + "%";
  modalOverlay.classList.remove("open");
  document.body.style.height = "auto";
  document.documentElement.style.overflow = "auto";
});

cvv.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  e.target.value = value.replace(/\D/g, "");
});

monthInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  e.target.value = value.replace(/\D/g, "");
});

yearInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  e.target.value = value.replace(/\D/g, "");
});

cardNumberInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  e.target.value = value.replace(/\D/g, "");
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  monthInput.value = "";
  yearInput.value = "";
  cvv.value = "";
  cardNumberInput.value = "";
  nameInput.value = "";
  form.style.left = -300 + "%";
  modalOverlay.classList.remove("open");
  document.body.style.height = "auto";
  document.documentElement.style.overflow = "auto";
  appendTextForThreeSeconds("Success!");
});
