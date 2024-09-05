function startQuiz() {
    let choice = prompt("Welcome to the Quiz Game! Choose a topic:\n1. Strings\n2. Variables\n3. Math");

    let question = "";
    let answer = "";
  
    switch (choice) {
      case "1":
let userAnswer1 = prompt("რა არის რა არის typeof(5)?").trim();
let correctAnswer1 = ["number", "NUMBER", "NumBeR"];
if (correctAnswer1.includes(userAnswer1)) {
  alert("პასუხი სწორია");
} else {
  alert("სამწუხაროდ ვერ გამოიცანით");
}
        break;
        
      case "2":
    let userAnswer2 = prompt("შეიძლება თუ არა let-ის რედეკლალირება").trim();
    let correctAnswer2 = ["Yes", "yes", "YeS"];
    if (correctAnswer2.includes(userAnswer2)) {
          alert("პასუხი სწორია");
        } else {
          alert("სამწუხაროდ ვერ გამოიცანით");
        }
        break;
        
      case "3":
    let userAnswer3 = prompt("რას აბრუნებს console.log(Math.floor(2.1))").trim();
    let correctAnswer3 = ["ori", "ORI", "oRi"];
    if (correctAnswer3.includes(userAnswer3)) {
              alert("პასუხი სწორია");
            } else {
              alert("სამწუხაროდ ვერ გამოიცანით");
            }
            break;
        }
    }
  startQuiz();
    