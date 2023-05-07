const stepPersonalInfo = document.querySelector("#step-personal-info");
const numberContains = document.querySelectorAll(".number-contain");
document
  .querySelector(".next-btn")
  .addEventListener("click", () => {
    numberContains.forEach(numberContain => console.log(numberContain)
    )
  });
