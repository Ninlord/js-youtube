//Object.create
// singleton---made when constructor is used

// object literals
const mySym = Symbol('key1');
const JsUser = {
    name: "tanay",
    'full_name': "Tanay chaudhary", 
    age: 22,
    [mySym]: "mykey1",
    email: "tanay@gmail.com",
    location: "Agra",
    isLoggedIn: false, 
    lastLogindays: ["Monday", "saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.full_name);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

// JsUser.email = "wizlord@gmail.com"
// // Object.freeze(JsUser)
// JsUser.email = "aaaa"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());

