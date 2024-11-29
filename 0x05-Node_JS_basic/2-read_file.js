const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    let ls = 0;
    const students = {};
    for (let i = 1; i < data.length - 1; i += 1) {
      if (data[i].length !== 0) {
        ls += 1;
        const student = data[i].split(',');
        if (!students[student[3]]) {
          students[student[3]] = [];
        }
        students[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${ls}`);
    for (const [key, value] of Object.entries(students)) {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(
        ', ',
      )}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
