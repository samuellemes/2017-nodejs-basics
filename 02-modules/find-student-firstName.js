const students = require('./students.json')
const studentName = process.argv[2]

// Dica: Utilizar o método filter() do array.

function findStudentByName(studentName){
    return function callback(student) {
        return student.name.toLowerCase().includes(studentName.toLowerCase())
    }
}

function printNmae(student) {
    console.log(student.name)
}

const studentsFound = students.filter(findStudentByName(studentName))

if(studentsFound.length > 0) {
    studentsFound.forEach(printNmae)
}
else {
    console.log('Student not found!')
}