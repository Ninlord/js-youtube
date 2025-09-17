//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "tanay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname:{
            firstname: "tanay",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const ud=sers = [
    [
    {
        id:1,
        email:"hh"
    },
    {

    }
    ]
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    courseName:" js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

//course.courseInstructor

const {courseinstructor: instructor} = course

//console.log(courseinstructor);
console.log(instructor);

