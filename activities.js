var x=document.getElementById("quizTime");
x.style.display = "none";

function runQuizConversions() {
    var x=document.getElementById("quizTime");
    
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}


let num1 = 0;


function loadQuestion() {
    answer = document.getElementById("answer");
    answer.value = "";
    document.getElementById("next").disabled = true;
    num1 = Math.floor(Math.random() * 201);
    document.getElementById("question").textContent = "Convert " + String(num1)+"°F to °C";
}

function checkAnswer(answer) {
    document.getElementById("next").disabled = false;
    let solution = Math.floor((num1-32)*5/9);
    if (answer == solution) {
        $("#result").show();
        $("#result").text("Correct!🎉");
    } else {
      $("#result").show();
      $("#result").text(`Wrong 😢 The correct answer was: ${solution}.`);
    }
}


document.getElementById("next").addEventListener("click", function () {
    loadQuestion();
    $("#result").hide();
});


document.getElementById("checkAnswer").addEventListener("click", function () {
    answer = document.getElementById("answer").value;
    checkAnswer(answer);
});

loadQuestion();