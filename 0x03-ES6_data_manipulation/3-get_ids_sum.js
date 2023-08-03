export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const arr = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
  return arr;
}
