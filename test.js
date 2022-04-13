const arr = [
  { name: "a", age: 10 },
  { name: "b", age: 11 },
  { name: "c", age: 6 },
];
console.log((arr.find((e) => e.name === "a").age += 1));
console.log((arr.find((e) => e.name === "a").age += 1));
console.log(arr.includes({ name: "a", age: 10 }));
