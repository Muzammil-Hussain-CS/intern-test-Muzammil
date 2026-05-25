function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const deepcopy = Array.isArray(obj) ? [] : {};
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    deepcopy[key[i]] = deepClone(obj[key[i]]);
  }
  return deepcopy;
}
let obj = { profile: { address: { city: "New York" } } };
let newcopy = deepClone(obj);
console.log(newcopy);
console.log(obj);
