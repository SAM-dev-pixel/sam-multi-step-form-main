const numberContains = document.querySelectorAll(".number-contain");
const stepInfo = document.querySelector(".step-info");
const stepPlan = document.querySelector(".step-plan");
const stepAddon = document.querySelector(".step-add-on");
const stepSummary = document.querySelector(".step-summary");
const backButtons = document.querySelectorAll(".back-btn");
const nextStepButtons = document.querySelectorAll(".next-btn");

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
  button.addEventListener("click", () => {
    if (button.dataset.step == "info") {
      // alert("info");
      numberContains[0].classList.remove("active");
      numberContains[1].classList.add("active");
      stepInfo.classList.add("no-show");
      stepPlan.classList.remove("no-show");
      // stepAddon.classList.add("no-show")
      // stepSummary.classList.add("no-show")
    } else if (button.dataset.step == "plan") {
      // alert("plan");
      numberContains[1].classList.remove("active");
      numberContains[2].classList.add("active");
      // stepInfo.classList.add("no-show")
      stepPlan.classList.add("no-show");
      stepAddon.classList.remove("no-show");
      // stepSummary.classList.add("no-show")
    } else if (button.dataset.step == "add-on") {
      // alert("addon");
      numberContains[2].classList.remove("active");
      numberContains[3].classList.add("active");
      // stepInfo.classList.add("no-show")
      // stepPlan.classList.add("no-show")
      stepAddon.classList.add("no-show");
      stepSummary.classList.remove("no-show");
    } else if (button.dataset.step == "summary") {
      alert("summary");
    }
  });
});
