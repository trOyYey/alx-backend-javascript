const express = require('express');
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    let ls = 0;
    const students = {};
    let output = 'This is the list of our students\n';
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
    output += `Number of students: ${ls}`;
    for (const [key, value] of Object.entries(students)) {
      output += `\nNumber of students in ${key}: ${
        value.length
      }. List: ${value.join(', ')}`;
    }
    return output;
  } catch (error) {
    return 'This is the list of our students\nCannot load the database';
  }
}

const arg = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send(countStudents(arg));
});

app.listen(1245);

module.exports = app;
