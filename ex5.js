let string = "Lucas Medici" // variável que deve ser alterada para o teste
let x = string.length - 1
let newString = ""

while (x != -1) {
    newString = newString + string[x]
    x = x -1
}


console.log(newString)

