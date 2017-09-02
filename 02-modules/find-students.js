const students = require('./students.json')

let studentId = process.argv[2]

// let studentName = 'Student not found!'

// for (var i = 0; i < students.length; i++) {
//     var student = students[i];
    
//     if(student.id == studentId){
//        studentName = student.name
//        break
//     }

// }

function findStudentById (student) {
    return function calback(student, index) {
        return studentId == student.id
    }
}

const student = students.find(findStudentById(studentId))
let output = student ? student.name : 'Student not found'
console.log(output)