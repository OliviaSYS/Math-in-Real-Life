function runQuizTime() {
    var x=document.getElementById("quizTime");
    
    if (x.style.display === "none") {
        x.style.display = "block";
        generateQuestion();
      } else {
        x.style.display = "none";
      }
}

function generateQuestion() {
    const randomFahrenheit = Math.floor(Math.random() * 201) - 100;
    const correctCelsuis = ((randomFahrenheit - 32) * 5 / 9);
    document.getElementById("question").textContent = `Convert ${randomFahrenheit} °Fahrenheit to Celsius.`;
    document.getElementById("question").dataset.correctAnswer = correctCelsius.toFixed(2);
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
  }
function checkAnswer() {
const userAnswer = parseFloat(document.getElementById("answer").value);
const correctAnswer = parseFloat(document.getElementById("question").dataset.correctAnswer);

if (isNaN(userAnswer)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
}

if (Math.abs(userAnswer - correctAnswer) < 0.01) {
    document.getElementById("result").textContent = "Correct! 🎉";
} else {
    document.getElementById("result").textContent = `Incorrect. The correct answer is ${correctAnswer.toFixed(2)} °C.`;
}
}
document.getElementById("checkAnswer").addEventListener("click", checkAnswer);
window.onload = generateQuestion;    

