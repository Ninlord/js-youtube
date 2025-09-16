const name = "tanay"
const repoCount = 50

// console.log(name + repoCount);

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('ninlord-lordxom-lordnin')

console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("o"));

const newString = gameName.substring(0,4)
console.log(newString);
 
const anotherString = gameName.slice(-7, 4 )
console.log(anotherString);

const newStringOne = " tanay  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanay.com/tanay%20chaudhary"

url.replace('%20', '-')

console.log(url.replace('%20', '-'));

console.log(url.includes('tanay'));

console.log(gameName.split('-'));

