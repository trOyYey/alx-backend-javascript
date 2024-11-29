const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, blob) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const data = blob.split('\n');
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
          console.log(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', ',
            )}`,
          );
        }
        resolve();
      }
    });
  });
};

