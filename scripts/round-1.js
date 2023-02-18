// Do not change the import statement
import placeholderQuestions from "../scripts/placeholder-questions.js";
console.log({ placeholderQuestions });

// do not change above

//all the table boxes 
let gameBoxes = document.querySelectorAll(".jeopardy-row")

let row = document.querySelectorAll(".row-1 row-2 row-3 row-4 row-5")
let col = document.querySelectorAll(".col-1 col-2 col-3 col-4 col-5 col-6")
function getQuestion() {

}
// click event listener added to each box
gameBoxes.addEventListener("click", event =>{
    console.log(gameBoxes)
})

