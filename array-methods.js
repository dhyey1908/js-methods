const array = [7, 6, 1, 2, 3, 4];

array.forEach((e) => {
  console.log(e);  // 7 6 1 2 3 4
})

let map = array.map((e) => {
  return e * 2
})
console.log('map: ', map); // [ 14, 12, 2, 4, 6, 8 ]

let filter = array.filter((e) => {
  return e % 2 === 0;
})
console.log('filter: ', filter); // [ 6, 2, 4 ]

let sum = array.reduce((a, b) => {
  return a + b
})
console.log("reduce", sum); // 23

let find = array.find((e) => {
  return e > 2; //  only first match
})
console.log('find: ', find); // 7

let findIndex = array.findIndex((e) => {
  return e > 2 // only first match index
})
console.log('findIndex: ', findIndex); // 0

let some = array.some((e) => {
  return e > 2 // any true? 
})
console.log("some", some); // true

let every = array.every((e) => {
  return e > 2 // every true?
})
console.log('every: ', every); // false

array.push(7) // add on last
console.log("push", array); // [ 7, 6, 1, 2, 3, 4, 7]

array.pop() // remove last
console.log("pop", array); // [ 7, 6, 1, 2, 3, 4]

array.unshift(5) // add on start
console.log("unshift", array); // [ 5, 7, 6, 1, 2, 3, 4 ]

array.shift() // remove on first
console.log("shift", array); // [ 7, 6, 1, 2, 3, 4 ]

let slice = array.slice(1, 3); // copy part (not change original)
console.log('slice', slice); // [ 6, 1 ]

array.splice(2, 0, 3); // startIndex, deleteCount, add
console.log('splice ', array); // [ 7, 6, 3, 1, 2, 3, 4 ]

let concat = array.concat([3, 4]);
console.log('concat: ', concat); // [ 7, 6, 3, 1, 2, 3, 4, 3, 4 ]

let include = array.includes(2); // if value exist given true othervise false
console.log('include: ', include); // true

let sort = array.sort(); // ascending order
console.log('sort: ', sort); // [ 1, 2, 3, 3, 4, 6, 7]

let reverse = array.reverse(); // descending order
console.log('reverse: ', reverse); // [7, 6, 4, 3, 3, 2, 1 ]

let flat = [1, 2, [3, 4]].flat(); // create a new array with all sub-array elements concatenated 
console.log('flat: ', flat); // [ 1, 2, 3, 4 ]

let join = array.join("-")
console.log('join: ', join); // 7-6-4-3-3-2-1



