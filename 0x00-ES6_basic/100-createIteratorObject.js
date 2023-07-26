export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const item of Object.values(report.allEmployeees)) {
    allEmployees = [
      ...allEmployees,
      ...item,    
    ];
  }
  return allEmployees;
}
