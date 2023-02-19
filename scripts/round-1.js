// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";

const jeopardyRow = document.querySelectorAll(".jeopardy-row");
    for (let i = 0; i < jeopardyRow.length; i++) {
      jeopardyRow[i].addEventListener("click", function() {
        jeopardyRow[i].innerHTML = "new text!"
     });
    }

