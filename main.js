const btnActive = document.querySelector(".button-active");
const container = document.querySelector(".container");
const submitted = document.querySelector(".submitted");
const ratings = document.querySelectorAll(".radio");
const selectedInfo = document.querySelector(".selected-info");

btnActive.addEventListener("click", function (e) {
  e.preventDefault();

  let selectedValue = null;

  let selected = false;
  ratings.forEach((element) => {
    if (element.checked) {
      selectedValue = element.value;
      selected = true;
    }
  });

  if (selected) {
    container.classList.add("hidden");
    submitted.classList.remove("hidden");
    selectedInfo.textContent = `Your selected ${selectedValue} out of 5`;
  } else {
    alert("Please rating for me");
  }
});
