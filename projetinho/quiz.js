function check() {
    var question1 = document.quiz.q1.value;
    var question2 = document.quiz.q2.value;
    var question3 = document.quiz.q3.value;
    var correct = 0;

    if (question1 == "Brasilia") {
        correct++
    }
    if (question2 == "cachorro") {
        correct++
    }
    if (question3 == "oxigenio") {
        correct++
    }

    var pictures = ["./img/parabens.gif", "./img/meh.gif", "./img/loser.gif"];
    var messages = ["Muito Bem!", "Mais ou Menos", "Tem que estudar mais!"];

    var range;
    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "Voce acertou: " + correct + " questoes";
    document.getElementById("picture").src = pictures[range];
}