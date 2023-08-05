export default function hasValuesFromArray(set, array) {
  return array.every((items) => set.has(items));
}
