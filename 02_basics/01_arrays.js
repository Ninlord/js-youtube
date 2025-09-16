// array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[2]);

const myName = ["Ninlord", "Lordxom"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2);

// Array Methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0); // insert at the start 
console.log(myArr);

myArr.shift() // pop_first
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr); // type: Object
console.log(newArr); // type: String

//slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // splice manipulate original array 
console.log("C ", myArr);

console.log(myn2);

