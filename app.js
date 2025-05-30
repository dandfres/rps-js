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

// Obtiene la eleccion del jugador
function getHumanChoice() {
    let choice = (prompt("Que elijes piedra, papel o tijera??")).toLowerCase();
    return choice;
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

// Inicia el juego y lleva la cuenta
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = defineWinner(humanSelection, computerSelection);
    
    console.log("Elegiste: " + humanSelection + "\nLa computadora: " + computerSelection + "\n" +result);
};

for (let i = 0; i < 5; i++) {
    playGame()
}

console.log("==================\nRESULTADO FINAL\nTu: " + humanScore + " | Computadora: " + computerScore)

if (humanScore > computerScore) {
    console.log("GANASTE EL JUEGO :D");
} else if (humanScore < computerScore){
    console.log("PERDISTE EL JUEGO :(");
} else {
    console.log("EMPATE !!")
}


