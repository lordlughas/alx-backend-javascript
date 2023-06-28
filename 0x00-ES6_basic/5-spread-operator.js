export default function concatArrays(array1, array2, ...args) {
  return Array.from(array1 + array2 + args);
}
