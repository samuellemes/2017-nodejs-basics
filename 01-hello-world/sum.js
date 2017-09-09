

let numberOne = parseInt(process.argv[2])
let numberTwo = parseInt(process.argv[3])

function sum (number1, number2){
    return number1+number2
}

let result = sum(numberOne, numberTwo)

console.log("Result sum: " + result)