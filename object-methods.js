let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    x: 1
}

console.log("keys", Object.keys(obj1)); // [ 'a', 'b' ]
console.log("values", Object.values(obj1)); // [ 1, 2 ]
console.log("entries", Object.entries(obj1)); // [ [ 'a', 1 ], [ 'b', 2 ] ]
console.log("assign", Object.assign(obj1, obj2)) //{ a: 1, b: 2, x: 1 }

Object.freeze(obj1);
obj1.a = 3;
console.log('freeze ', obj1.a); // 1


