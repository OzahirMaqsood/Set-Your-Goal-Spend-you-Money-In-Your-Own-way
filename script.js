let spendingLimit = 0;
let totalExpenses = 0;

function openSetLimitPage() {
  const welcomeHeading = document.getElementById("welcome-heading");
  welcomeHeading.innerHTML = "Spend Your Money in Your Own Way";

  setTimeout(() => {
    welcomeHeading.innerHTML = "Welcome to Save your Money in Your Way";
    const setLimitPage = document.getElementById("set-limit-page");
    setLimitPage.classList.remove("hidden");
  }, 3000);
}

function setLimit() {
  const limitInput = document.getElementById("spending-limit");
  spendingLimit = parseFloat(limitInput.value);
  limitInput.value = "";

  const setLimitPage = document.getElementById("set-limit-page");
  setLimitPage.classList.add("hidden");

  const expenseTracker = document.getElementById("expense-tracker");
  expenseTracker.classList.remove("hidden");
}

function addExpense() {
  const expenseInput = document.getElementById("expense-input");
  const expenseAmount = parseFloat(expenseInput.value);
  expenseInput.value = "";

  totalExpenses += expenseAmount;

  const expenseLog = document.getElementById("expense-log");
  expenseLog.innerHTML += `<p>Expense: $${expenseAmount.toFixed(2)}</p>`;

  checkLimits(expenseAmount);
}

function checkLimits(expenseAmount) {
  if (totalExpenses >= spendingLimit) {
    const difference = totalExpenses - spendingLimit;
    playBeepSound("beep-sound");
    showAlert(`You've spent a lot! 😱\nYou spent $${difference.toFixed(2)} more than the given limit.`);
  } else {
    const savings = spendingLimit - totalExpenses;
    playBeepSound("success-sound");
    showAlert(`Congratulations! You've saved $${savings.toFixed(2)}! 🙂`);
  }
}

function playBeepSound(soundId) {
  const audio = document.getElementById(soundId);
  audio.play();
}

function showAlert(message) {
  const alertSound = document.getElementById("alert-sound");
  alertSound.play();
  alert(message);
}

function goBack() {
  const setLimitPage = document.getElementById("set-limit-page");
  setLimitPage.classList.remove("hidden");

  const expenseTracker = document.getElementById("expense-tracker");
  expenseTracker.classList.add("hidden");

  totalExpenses = 0;
  const expenseLog = document.getElementById("expense-log");
  expenseLog.innerHTML = "";
}
