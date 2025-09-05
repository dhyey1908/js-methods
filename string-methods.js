let str = "Hello";

let include = str.includes("He");
console.log('include: ', include); // true

let startsWith = str.startsWith("Hee");
console.log('startsWith: ', startsWith); // false

let endsWith = str.endsWith("o");
console.log('endsWith: ', endsWith); // true

let slice = str.slice(1, 4)
console.log('slice: ', slice); // ell

let split = ("a,b,c").split(",");
console.log('split: ', split); //  [ 'a', 'b', 'c' ]

let replace = "hi hi".replace("hi", "yo") // only first replace
console.log('replace: ', replace); // yo hi

let replaceAll = "hi hi".replaceAll("hi", "yo") // only first replace
console.log('replaceAll: ', replaceAll); // yo yo

let uppercase = str.toUpperCase();
console.log('uppercase: ', uppercase); //  HELLO

let lowercase = str.toLowerCase();
console.log('lowercase: ', lowercase); //hello

let trim = ("     hello ").trim(); // remove the space
console.log('trim: ', trim); // hello

let padStart = ("h".padStart(4,"o")) // add o in start 3 time
console.log('padStart: ', padStart); // oooh

let padEnd = ("h".padEnd(4,"o")) // add o in last 3 time
console.log('padEnd: ', padEnd); // hooo

