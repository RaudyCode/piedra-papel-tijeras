function getComputerChice(){
    // la computadora selecionara un numero aleatorio
    let numberOption = Math.floor((Math.random() * 3) + 1)
    
    // la computadora retornara ese numero

    return numberOption
}

function getHumanChoice(){
    // haz que usuario introdusca una opcion
    let numberOption = prompt("Elige: 1. Piedra, 2. Papel, 3. Tijeras: ")

    return numberOption
}

