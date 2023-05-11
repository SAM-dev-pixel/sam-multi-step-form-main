// save the data here
const database = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  plan: {
    planName: "",
    planPrice: "",
  },
  addOns: [
    {
      addOnName: "",
      addOnPrice: "",
    },
  ],
};

const numberContains = document.querySelectorAll(".number-contain");
const stepInfoInputs = document.querySelectorAll(".step-info input");
const stepInfo = document.querySelector(".step-info");
const stepPlan = document.querySelector(".step-plan");
const stepAddon = document.querySelector(".step-add-on");
const stepSummary = document.querySelector(".step-summary");
const backButtons = document.querySelectorAll(".back-btn");
const nextStepButtons = document.querySelectorAll(".next-btn");

function stepInfoValidations(event) {
  const nameInput = document.getElementById("name");
  const nameLabel = nameInput.previousElementSibling;
  const emailInput = document.getElementById("email");
  const emailLabel = emailInput.previousElementSibling;
  const phoneNumberInput = document.getElementById("phone-number");
  const phoneNumberLabel = phoneNumberInput.previousElementSibling;
  if (nameInput.value == "") {
    nameLabel.classList.add("error");
    nameInput.classList.add("error");
  } else {
    nameLabel.classList.remove("error");
    nameInput.classList.remove("error");
  }
  if (emailInput.value == "") {
    emailLabel.classList.add("error");
    emailInput.classList.add("error");
  } else {
    emailLabel.classList.remove("error");
    emailInput.classList.remove("error");
  }
  if (phoneNumberInput.value == "") {
    phoneNumberLabel.classList.add("error");
    phoneNumberInput.classList.add("error");
  } else {
    phoneNumberLabel.classList.remove("error");
    phoneNumberInput.classList.remove("error");
  }
}
backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.step == "plan") {
      numberContains[0].classList.add("active");
      numberContains[1].classList.remove("active");
      stepInfo.classList.remove("no-show");
      stepPlan.classList.add("no-show");
    } else if (button.dataset.step == "add-on") {
      numberContains[1].classList.add("active");
      numberContains[2].classList.remove("active");
      stepPlan.classList.remove("no-show");
      stepAddon.classList.add("no-show");
    } else if (button.dataset.step == "summary") {
      numberContains[2].classList.add("active");
      numberContains[3].classList.remove("active");
      stepAddon.classList.remove("no-show");
      stepSummary.classList.add("no-show");
    }
  });
});

nextStepButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.dataset.step == "info") {
      stepInfoValidations(e);
      // stepInfoInputs.forEach((input) => {
      //   if (input.value === "") {
      //     console.log("ok")
      //   } else {
      //     console.log("no")
      //   }
      // })
      if (
        stepInfoInputs[0].value == "" ||
        stepInfoInputs[1].value == "" ||
        stepInfoInputs[2].value == ""
      ) {
        return false;
      }
      numberContains[0].classList.remove("active");
      numberContains[1].classList.add("active");
      stepInfo.classList.add("no-show");
      stepPlan.classList.remove("no-show");
      // save the data has been input to the database
      database.name = stepInfoInputs[0].value;
      database.emailAddress = stepInfoInputs[1].value;
      database.phoneNumber = stepInfoInputs[2].value;
    } else if (button.dataset.step == "plan") {
      numberContains[1].classList.remove("active");
      numberContains[2].classList.add("active");
      stepPlan.classList.add("no-show");
      stepAddon.classList.remove("no-show");
      // save the data has been input to the database
      database.plan.planName = document.querySelector(
        ".plan-box.choosed .plan-box-title"
      ).textContent;
      database.plan.planPrice = document.querySelector(
        ".plan-box.choosed .plan-box-price"
      ).textContent;
    } else if (button.dataset.step == "add-on") {
      numberContains[2].classList.remove("active");
      numberContains[3].classList.add("active");
      stepAddon.classList.add("no-show");
      stepSummary.classList.remove("no-show");
      // save the data has been input to the database
      // console.log(database.addOns.push("OBJ"))
      // const addOnBoxesChoosed = document.querySelectorAll(".add-on-box.choosed");
      // addOnBoxesChoosed.forEach(box => {
      //   console.log(box)
      // })
    } else if (button.dataset.step == "summary") {
      alert("summary");
    }
  });
});

const planBoxes = document.querySelectorAll(".plan-box");
// plan box clicked on
planBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    planBoxes.forEach((box) => box.classList.remove("choosed"));
    box.classList.add("choosed");
  });
});

const planBoxPrices = document.querySelectorAll(".plan-box-price");
const twoMonthsFreeTexts = document.querySelectorAll(".two-months-free");
const monthYearSwitcherContain = document.querySelector(
  ".monthly-yearly-switcher-contain"
);
const monthly = document.querySelector(".month");
const yearly = document.querySelector(".year");
const switcher = document.querySelector(".switcher");
// swticher button clicked on
switcher.addEventListener("click", () => {
  monthYearSwitcherContain.classList.toggle("yearly");
  if (monthYearSwitcherContain.classList.contains("yearly")) {
    // yearly activated
    planBoxPrices[0].textContent = "$90/yr";
    planBoxPrices[1].textContent = "$120/yr";
    planBoxPrices[2].textContent = "$150/yr";
    twoMonthsFreeTexts.forEach((txt) => (txt.style.display = "inline"));
    monthly.classList.remove("active");
    yearly.classList.add("active");
  } else {
    // monthly activated
    planBoxPrices[0].textContent = "$9/yr";
    planBoxPrices[1].textContent = "$12/yr";
    planBoxPrices[2].textContent = "$15/yr";
    twoMonthsFreeTexts.forEach((txt) => (txt.style.display = "none"));
    monthly.classList.add("active");
    yearly.classList.remove("active");
  }
  checkPlanMonthlyYearly();
});

// check the user choosed plan monthly or yearly
function checkPlanMonthlyYearly() {
  const addOnPrices = document.querySelectorAll(".add-on-price");
  if (monthYearSwitcherContain.classList.contains("yearly")) {
    addOnPrices[0].textContent = "+$10/yr";
    addOnPrices[1].textContent = "+$20/yr";
    addOnPrices[2].textContent = "+$20/yr";
  } else {
    addOnPrices[0].textContent = "+$1/mo";
    addOnPrices[1].textContent = "+$2/mo";
    addOnPrices[2].textContent = "+$2/mo";
  }
}

// when add-on box clicked on
const addOnBoxes = document.querySelectorAll(".add-on-box");
addOnBoxes.forEach((addon) => {
  addon.addEventListener("click", () => {
    addon.classList.toggle("choosed");
    if (addon.classList.contains("choosed")) {
      addon.children[0].checked = true;
    } else {
      addon.children[0].checked = false;
    }
  });
});

// change button clicked on
const changeButton = document.querySelector(".change-btn");
changeButton.addEventListener("click", () => {
  numberContains[0].classList.add("active");
  numberContains[3].classList.remove("active");
  stepInfo.classList.remove("no-show");
  stepSummary.classList.add("no-show");
});

// confirm button clicked on
const confirmButton = document.getElementById("confirm-btn");
confirmButton.addEventListener("click", () => {
  console.log(database);
});
