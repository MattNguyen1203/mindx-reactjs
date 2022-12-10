// 1: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

                        //Answer

// function filterRange(arr, a, b){
//     let newArr = [];
//     for(let item of arr){
//         if(item >= a && item <= b){
//             newArr.push(item)
//         }
//     }
//     return newArr
// }


// 2: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

                        //Answer

// function filterRangeInPlace(arr, a, b){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] >= a && arr[i] <=b){
//             arr.splice(i,1)
//         }
//     }
// }

// 3:We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

                        //Answer

// function copySorted(arr){
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     return newArr.sort()
    
// }


// 4: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

                        //Answer

// let names = users.map((item)=>{
//     return item.name
// })

// console.log( names ); // John, Pete, Mary


// 5: You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

                        //Answer
// let usersMapped = users.map((item)=>{
//     return {fullName :`${item.name} ${item.surname}`, id: item.id}
// })

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


// 6: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];


                        //Answer

// function sortByAge(arr){
//     for(let i = 0; i< arr.length - 1; i++){
//         let temp;
//         if(arr[i].age > arr[i+1].age){
//             temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;       
//         }
//     }
// }
// sortByAge(arr)

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete



// 7: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:


// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.


                        //Answer
// let arr = [1, 2, 3,];
// function shuffle(arr){
//     arr.sort(() => Math.random() - 0.5);
//     console.log(arr)
// }
// shuffle(arr)


// 8*: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

                        //Answer
// function getAverageAge(users){
//     let total = 0;
//     for(user of users){
//         total += user.age
//     }
//     return total/users.length
// }                      


// 9: Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

                        //Answer
// function unique(arr) {
//   for(let i = 0; i< arr.length; i++){
//     for(let j = 1; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             arr.splice(j,1);
//         }
//     }
//   }
//   return arr
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O



// 10*: Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.


// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

                        //Answer
// function groupById(arr){
//     return arr.reduce((total, item)=>{
//         total[item.id] = item;
//         return total
//     },{})
// }
// let usersById = groupById(users)

// console.log(usersById)


// ===================================Destructuring assignment===================

// 1: We have an object:
// let user = {
//   name: "John",
//   years: 30
// };

// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:

// let user = { name: "John", years: 30 };

// // your code to the left side:
// // ... = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false

                        //Answer
// let user = {
//         name: "John",
//         years: 30
// };
// let {name, years:age, isAdmin=false,} = user;
// console.log( name ); // John 
// console.log( age ); 
// console.log( isAdmin );


// 2: There is a salaries object:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.


                        //Answer

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function topSalary(salaries){
//     let userSalary = Object.entries(salaries);
//     let maxSalary = 0;
//     let maxName = null;
//     for(let user of userSalary){
//        if(Number(user[1]) > Number(maxSalary)){
//             maxSalary = user[1];
//             maxName = user[0];
//         } 
//     }
//     return maxName
// }
// console.log(topSalary(salaries))

