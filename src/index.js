const container = document.querySelector("[data-container]");
const form = document.querySelector("[data-form]");
const template = document.querySelector("[data-template]");

function selectRating(event) {
  event.preventDefault();

  const rating = targetRating(event.target).get("rating");
}

function submitPop(rating) {
  const clone = document.importNode(template.textContent, true);
  wrapper.addEventListener("click", myFunction);
  container.appendChild(clone);

  function myFunction() {}
}

form.addEventListener("submit", selectRating);
form.addEventListener("submit", submitPop);
