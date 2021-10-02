// const question = document.querySelector(".question");
const question = document.getElementsByClassName("question");
question.addEventListener("click", faq);

function faq() {
  console.log("I was clicked.");
}

const question = document.querySelector("question");

question.addEventListener("click", (event) => {
  console.log("I was clicked");
});
