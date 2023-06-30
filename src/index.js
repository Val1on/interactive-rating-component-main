const container = document.querySelector("main");
const form = document.querySelector("[data-form]");
const template = document.getElementsByClassName("main__result");

function selectRating(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rating = formData.get("rating");
  if (rating) {
    submitTap(rating);
  }
}

// function submitPop(rating) {
//   const newContent = container.importNode(template.content, true);
//   const putRating = newContent.querySelector("[data-rating]");
//   putRating.textContent = rating;

//   container.innerHTML = "";
//   container.appendChild(newContent);
// }
function submitTap(rating) {
  const number = template.classList;
  number.remove("none");
  const removeClass = container.classList;
  removeClass.add("none");
  const ratingTemp = template.querySelector("[data-rating]");
  ratingTemp.textContent = rating;
}

form.addEventListener("submit", selectRating);
