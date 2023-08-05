export default function groceriesList() {
  const myMap = new Map();
  const obj = {
    Apple: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(obj)) {
    myMap.set(key, obj[key]);
  }
  return myMap;
}
