// registra las puntuaciones de los jugadores
let humanScore = 0
let computerScore = 0


function getComputerChice(){
    // la computadora selecionara un numero aleatorio
    let numberOption = Math.floor((Math.random() * 3) + 1)
    
    // la computadora asignara el elemento que representa ese numero
    let elemento;

    if(numberOption == 1){
        elemento = "piedra"
    }else if(numberOption == 2){
        elemento = "papel"
    }else if(numberOption == 3){
        elemento = "tijeras"
    }

    return elemento
}

function getHumanChoice(){
    // haz que usuario introdusca una opcion
    let option = prompt("Escriba su opciòn: 1. Piedra, 2. Papel, 3. Tijeras: ")

    // retorna siempre en minuscula
    return option.toLowerCase()
}


function playRound(humanChoice, computerChoice){
    // si el usuario elige una opcion igual a la computadora es empate
    // si el usuario elige una opcion que la opcion de la computadora puede vencer perdiste
    // las demas posibilidades el usuario gano 
    if(humanChoice===computerChoice){
        alert(`
            Tu elegiste ${humanChoice} y la Pc eligio ${computerChoice}. Es un Empate!
            El puntaje es User: ${humanScore} y Pc: ${computerScore}
        `)
    }else if(humanChoice === "papel" && computerChoice === 'tijeras'){
        computerScore++
        alert(`
            Tu elegiste ${humanChoice} y la Pc eligio ${computerChoice}. Perdiste!
            El puntaje es User: ${humanScore} y Pc: ${computerScore}
        `)
        
    }else if(humanChoice === "piedra" && computerChoice === "papel"){
        computerScore++
        alert(`
            Tu elegiste ${humanChoice} y la Pc eligio ${computerChoice}. Perdiste!
            El puntaje es User: ${humanScore} y Pc: ${computerScore}
        `)
    }else if(humanChoice==="tijeras" && computerChoice === "piedra"){
        computerScore++
        alert(`
            Tu elegiste ${humanChoice} y la Pc eligio ${computerChoice}. Perdiste!
            El puntaje es User: ${humanScore} y Pc: ${computerScore}
        `)
    }else{
        humanScore++
        alert(`
            Tu elegiste ${humanChoice} y la Pc eligio ${computerChoice}. Ganaste!
            El puntaje es User: ${humanScore} y Pc: ${computerScore}
        `)
    }
}


function playGame(){

    for(let i = 0; i <=5; i++){
        // guardar las opciones de cada usuario en una variable
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChice()

        playRound(humanSelection, computerSelection)
    }

    if(humanScore > computerScore){
        alert(`Felicidades has ganado con un puntaje de: ${humanScore}`)
    }else{
        alert(`Lo siento has perdido, la computadora gano con un puntaje de: ${computerScore}`)
    }
}

playGame()




