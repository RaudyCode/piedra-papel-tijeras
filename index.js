// registra las puntuaciones de los jugadores
let humanScore = 0
    computerScore = 0


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



