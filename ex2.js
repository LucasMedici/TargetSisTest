let array = [0,1]


let numX = 144  // NÚMERO QUE DEVE SER ALTERADO PARA O TESTE


while (array[array.length-1] < numX) {
    y = array[array.length-1] + array[array.length - 2]
    array.push(y)
}

let cond = array.includes(numX)

console.log('Fibo:' + array)

if(cond == true) {
    console.log('O número pertence a sequência!')
} else {
    console.log('O número NÃO pertence a sequência!')
}