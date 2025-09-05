const array = [7, 6, 1, 2, 3, 4];

array.forEach((e) => {
  console.log(e);
})

let map = array.map((e) => {
  return e * 2
})
console.log('map: ', map);

let filter = array.filter((e) => {
  return e % 2 === 0;
})
console.log('filter: ', filter);

let sum = array.reduce((a, b) => {
  return a + b
})
console.log("reduce", sum);

let find = array.find((e) => {
  return e > 2; //  only first match
})
console.log('find: ', find);

let findIndex = array.findIndex((e) => {
  return e > 2 // only first match index
})
console.log('findIndex: ', findIndex);

let some = array.some((e) => {
  return e > 2 // any true?
})
console.log("some", some);

let every = array.every((e) => {
  return e > 2 // every true?
})
console.log('every: ', every);

array.push(7) // add on last
console.log("push", array);

array.pop() // remove last
console.log("pop", array);

array.unshift(5) // add on start
console.log("unshift", array);

array.shift() // remove on first
console.log("shift", array);

let slice = array.slice(1, 3); // copy part (not change original)
console.log('slice', slice);

array.splice(2, 0, 3); // startIndex, deleteCount, add
console.log('splice ', array);

let concat = array.concat([3, 4]);
console.log('concat: ', concat);

let include = array.includes(2); // if value exist given true othervise false
console.log('include: ', include);

let sort = array.sort(); // ascending order
console.log('sort: ', sort);

let reverse = array.reverse(); // descending order
console.log('reverse: ', reverse);

let flat = [1, 2, [3, 4]].flat(); // create a new array with all sub-array elements concatenated 
console.log('flat: ', flat);

let join = array.join("-")
console.log('join: ', join);



