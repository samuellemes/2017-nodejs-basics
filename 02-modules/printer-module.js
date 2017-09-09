// console.log('My Other Module')

function printNmae(student) {
    console.log(student.name)
}

function fancyPrint(student) {
    console.log("---> " + student.name + " <---")
}

module.exports = { 
    printNmae,
    fancyPrint
}