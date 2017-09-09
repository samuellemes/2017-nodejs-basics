const students = require('./students.json')
const { getStudentName, findStudentByName } = require('./student-module')
const {printNmae} = require('./printer-module')

const studentName = getStudentName()
const studentsFound = students.filter(findStudentByName(studentName))

studentsFound.forEach(printNmae)

if(studentsFound.length === 0) console.log('Student not found!')
    
// if(studentsFound.length > 0) {
//     studentsFound.forEach(printNmae)
// }
// else {
//     console.log('Student not found!')
// }