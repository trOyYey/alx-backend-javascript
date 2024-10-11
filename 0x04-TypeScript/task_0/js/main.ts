interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Spody",
  lastName: "bskal",
  age: 27,
  location: "Zuwara Libya",
};

const student2: Student = {
  firstName: "ali",
  lastName: "gandoz",
  age: 29,
  location: "Zuwara Libya",
};

const students: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const th1: HTMLTableCellElement = document.createElement("th");
const th2: HTMLTableCellElement = document.createElement("th");

tableHead.style.background = "#9AC8CD";

th1.innerText = "First Name";
th2.innerText = "Location";

th1.style.padding = "8px";
th2.style.padding = "8px";

th1.style.border = "1px solid black";
th2.style.border = "1px solid black";

th1.style.fontSize = "18px";
th2.style.fontSize = "18px";

tableHead.append(th1, th2);

table.style.border = "1px solid black";
table.style.textAlign = "center";

table.style.width = "270px";
table.style.height = "150px";

table.style.borderCollapse = "collapse";

table.append(tableHead);

students.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const fName: HTMLTableCellElement = document.createElement("td");
  const location: HTMLTableCellElement = document.createElement("td");

  fName.style.padding = "8px";
  location.style.padding = "8px";

  fName.style.border = "1px solid black";
  location.style.border = "1px solid black";

  fName.style.fontSize = "18px";
  location.style.fontSize = "18px";

  fName.innerText = student.firstName;
  location.innerText = student.location;

  row.style.background = "#E1F7F5";
  row.append(fName, location);
  table.append(row);
});

body.style.display = "flex";
body.style.height = "95vh";
body.style.alignItems = "center";
body.style.justifyContent = "center";

body.append(table);
