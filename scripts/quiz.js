var question1 = document.getElementById("question1");
var correct1 = document.getElementById("correct1");
var incorrect1 = document.getElementById("incorrect1");
var question2 = document.getElementById("question2");
var correct2 = document.getElementById("correct2");
var incorrect2 = document.getElementById("incorrect2");
var question3 = document.getElementById("question3");
var correct3 = document.getElementById("correct3");
var incorrect3 = document.getElementById("incorrect3");
var question4 = document.getElementById("question4");
var correct4 = document.getElementById("correct4");
var incorrect4 = document.getElementById("incorrect4");
var question5 = document.getElementById("question5");
var correct5 = document.getElementById("correct5");
var incorrect5 = document.getElementById("incorrect5");
var question6 = document.getElementById("question6");
var correct6 = document.getElementById("correct6");
var incorrect6 = document.getElementById("incorrect6");

var score = 0;
var submitButton = document.getElementById("submitbutton");
var scoreBox = document.getElementById("score");

function submit() {
  if (correct1.checked) {
    question1.classList.add("text-success");
    correct1.classList.add("radio-success");
    incorrect1.setAttribute("disabled", "");
    score++;
  } else if (incorrect1.checked) {
    question1.classList.add("text-error");
    incorrect1.classList.add("radio-error");
    correct1.setAttribute("disabled", "");
  }
  if (correct2.checked) {
    question2.classList.add("text-success");
    correct2.classList.add("radio-success");
    incorrect2.setAttribute("disabled", "");
    score++;
  } else if (incorrect2.checked) {
    question2.classList.add("text-error");
    incorrect2.classList.add("radio-error");
    correct2.setAttribute("disabled", "");
  }
  if (correct3.checked) {
    question3.classList.add("text-success");
    correct3.classList.add("radio-success");
    incorrect3.setAttribute("disabled", "");
    score++;
  } else if (incorrect3.checked) {
    question3.classList.add("text-error");
    incorrect3.classList.add("radio-error");
    correct3.setAttribute("disabled", "");
  }
  if (correct4.checked) {
    question4.classList.add("text-success");
    correct4.classList.add("radio-success");
    incorrect4.setAttribute("disabled", "");
    score++;
  } else if (incorrect4.checked) {
    question4.classList.add("text-error");
    incorrect4.classList.add("radio-error");
    correct4.setAttribute("disabled", "");
  }
  if (correct5.checked) {
    question5.classList.add("text-success");
    correct5.classList.add("radio-success");
    incorrect5.setAttribute("disabled", "");
    score++;
  } else if (incorrect5.checked) {
    question5.classList.add("text-error");
    incorrect5.classList.add("radio-error");
    correct5.setAttribute("disabled", "");
  }
  if (correct6.checked) {
    question6.classList.add("text-success");
    correct6.classList.add("radio-success");
    incorrect6.setAttribute("disabled", "");
    score++;
  } else if (incorrect6.checked) {
    question6.classList.add("text-error");
    incorrect6.classList.add("radio-error");
    correct6.setAttribute("disabled", "");
  }

  submitButton.classList.add("hidden");
  scoreBox.classList.remove("hidden");
  scoreBox.innerHTML = "Score: " + score + "/6";
}
