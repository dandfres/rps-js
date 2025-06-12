// Genera la opcion de la computadora
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "piedra";
    } else if (choice === 2){
        return "papel";
    } else {
        return "tijera";
    };
};

// Define el ganador de la ronda
function defineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "EMPATE !!";
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        humanScore++
        return "GANASTE !!"
    } else {
        computerScore++
        return "PERDISTE !!"
    }
};

let humanScore = 0;
let computerScore = 0;

// ESCUCHA EL CONTENEDOR DE LOS BOTONES
let option = document.querySelector('#hand-options')
option.addEventListener('click', playGame);

// FUNCION PRINCIPAL DEL JUEGO
function playGame(event) {
    const clickedButton = event.target.closest('button');
    if (!clickedButton)  return;

    const humanSelection = clickedButton.dataset.choice;
    const computerSelection = getComputerChoice();
    const result = defineWinner(humanSelection, computerSelection);

    const outcome = document.querySelector(".outcome");
    const newElement = document.createElement('span');
    const message = `Elegiste: ${humanSelection}\nLa computadora: ${computerSelection}\n${result}`;

    newElement.textContent = message;
    outcome.appendChild(newElement);

    console.log(message);
};