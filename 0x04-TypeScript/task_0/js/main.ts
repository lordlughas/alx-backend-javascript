interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Charles',
  lastName: 'Lughas',
  age: 27,
  location: 'Lagos',
}

const student2: Student {
  firstName: 'Kenneth',
  lastName: 'Enenmuo',
  age: 23,
  location: 'Awka',
}

const studentsList: Array<Student> = [ student1, student2 ];

const body: HTMLBodyElement = document.getElementByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.innerRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
