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
    // nextStepButtons[0].preventDefault();
    // event.target.preventDefault()
  } else {
    nameLabel.classList.remove("error");
    nameInput.classList.remove("error");
  }
  if (emailInput.value == "") {
    emailLabel.classList.add("error");
    emailInput.classList.add("error");
    // nextStepButtons[0].preventDefault();
  } else {
    emailLabel.classList.remove("error");
    emailInput.classList.remove("error");
  }
  if (phoneNumberInput.value == "") {
    phoneNumberLabel.classList.add("error");
    phoneNumberInput.classList.add("error");
    // nextStepButtons[0].preventDefault();
  } else {
    phoneNumberLabel.classList.remove("error");
    phoneNumberInput.classList.remove("error");
  }
}
// stepInfoValidations();
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
      stepInfoInputs.forEach((input) => {
        if (input.value === "") {
          return false;
        }
      });
      // console.log(e)
      numberContains[0].classList.remove("active");
      numberContains[1].classList.add("active");
      stepInfo.classList.add("no-show");
      stepPlan.classList.remove("no-show");
    } else if (button.dataset.step == "plan") {
      numberContains[1].classList.remove("active");
      numberContains[2].classList.add("active");
      stepPlan.classList.add("no-show");
      stepAddon.classList.remove("no-show");
    } else if (button.dataset.step == "add-on") {
      numberContains[2].classList.remove("active");
      numberContains[3].classList.add("active");
      stepAddon.classList.add("no-show");
      stepSummary.classList.remove("no-show");
    } else if (button.dataset.step == "summary") {
      alert("summary");
    }
  });
});
