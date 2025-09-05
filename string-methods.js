let str = "Hello";

let include = str.includes("He");
console.log('include: ', include);

let startsWith = str.startsWith("Hee");
console.log('startsWith: ', startsWith);

let endsWith = str.endsWith("o");
console.log('endsWith: ', endsWith);

let slice = str.slice(1, 4)
console.log('slice: ', slice);

let split = ("a,b,c").split(",");
console.log('split: ', split);

let replace = "hi hi".replace("hi", "yo") // only first replace
console.log('replace: ', replace);

let replaceAll = "hi hi".replaceAll("hi", "yo") // only first replace
console.log('replaceAll: ', replaceAll);

let uppercase = str.toUpperCase();
console.log('uppercase: ', uppercase);

let lowercase = str.toLowerCase();
console.log('lowercase: ', lowercase);

let trim = ("     hello ").trim();
console.log('trim: ', trim);

let padStart = ("h".padStart(4,"o")) // add o in start 3 time
console.log('padStart: ', padStart);

let padEnd = ("h".padEnd(4,"o")) // add o in last 3 time
console.log('padEnd: ', padEnd);

