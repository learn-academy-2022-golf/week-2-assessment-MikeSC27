// ASSESSMENT 2: Coding Practical Questions with Jest

// const { number } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("multByThree", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         const numbers1Output = [18, 21, 24, 27, 30]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         const numbers2Output = [72, 81, 90, 99, 108]
//         expect(multByThree(numbersArray1)).toEqual(numbers1Output)
//         expect(multByThree(numbersArray2)).toEqual(numbers2Output)
//     })
// })

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divByThree", () => {
//     it("A function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
//         const object1 = {number: 15}
//         const object1Output = ("15 is divisible by three")
//         const object2 = {number: 0}
//         const object2Output = ("0 is divisible by three")
//         const object3 = {number: -7}
//         const object3Output = ("-7 is not divisible by three")
//         expect(divByThree(object1)).toEqual(object1Output)
//         expect(divByThree(object2)).toEqual(object2Output)
//         expect(divByThree(object3)).toEqual(object3Output)
//     })
// })
// Jest Test RTN:
// ReferenceError: divByThree is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.206 s


// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
// *** stuck on this one way to long.  I did get the math to work but did not get the function to work with the new array. I made the array of objects and tried to use the destructuring type for Objects.values to do the math %3 === 0 to determine if it was divisible by 3***
    //Pseudo Code:
        //Create an array named numbers with the given 3 objects.
        //Create a function called divByThree that will do math, % 3 ===0, on the object value and determine if each value is divisible by 3.
        //Inputs: array numbers, made of object1 = { number: 15 }, 
        // object2 = { number: 0 },  
        // object3 = { number: -7 }
        //Return an output of ${} is divisible by three or if its not it will output ${} is not divisible by three.
    // console.log(15 % 3) --> 0  &  console.log(-7 % 3)  --> -1
// const object1 = {number: 15}
// const object2 = {number: 0}
// const object3 = {number: -7}

// let numbers = {
//     object1,
//     object2,
//     object3
// }
// const divByThree = () => {
//     if(Object.values.numbers % 3 === 0){
//         return `${numbers.values} is divisible by three.`
//     } else {
//         return `${numbers.values} is not divisible by three.`
//             }
// }

// console.log(divByThree())
//*** on Jest I received the below msg:
// Expected: "15 is divisible by three"
// Received: "undefined is not divisible by three."
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.228 s




// *** Below are my other failed attempts

        // let numbers = {
        //     object1,
        //     object2,
        //     object3
        // }
        // const secondDivByThree = () => {
        //     if(Object.values(numbers).map % 3 === 0){
        //         return `${numbers.value} is divisible by three.`
        //     } else {
        //         return `${numbers.value} is not divisible by three.`
        //             }
        // }
        // console.log(secondDivByThree())


        //     numArray: () => {
        //      return Object.values(numbers)
        //         }if(numArray.value % 3 === 0) {
        //             return `${this.number} is divisible by three.`
        //                 } else {
        //                     return `${this.number} is not divisible by three.`
        //                         }
        // }
        // console.log(numbers.numArray())

        // const divByThree = Object.values(numbers).map (); {
        //         if(numbers.number % 3 === 0){
        //             return `${numbers.number} is divisible by three.`
        //         } else {
        //             return `${numbers.number} is not divisible by three.`
        //                 }       
        // }
        // console.log(divByThree()) 
        

        // console.log(numbers.divByThree())       
        // const trial = () => {
        //     if(object1.number % 3 === 0){
        //         return `${object1.number} is divisible by three.`
        //     } else {
        //         return `${object1.number} is not divisible by three.`
        //             }
        // }
        // console.log(trial())

        // console.log(Object.values(numbers))
        // above console.log --> [ { number: 15 }, { number: 0 }, { number: -7 } ]

        // const divByThree = (Object.values(numbers).filter().lenght) % 3 === 0, {
        //     return "is divisible by three."
        // }


        // (() => {
        //     return numbers.map((value)) % 3 {
                
        //     }
        // })


        // const numbers = Object.values(object1); Object.values(object2); Object.values(object3)
        // console.log(numbers)


        // const numbers = [{object1, object2, object3,
        //  divByThree : numbers.filter((value) => value.divByThree % 3) {
        //     if(this.number % 3 === 0);{
        //         return ${numbers[i]} "is divisible by three.";
        //             } else {
        //                 return ${number[i]} "is not divisible by three."
        //                 }
        //     }
        // }]
        // console.log(divByThree)

        // const divByThree = ((numbers) => {
        //     for(let i=0; i < numbers.length; i++){
        //     numbers.forEach(divByThree(),
        //     if((numbers[i]) % 3 === 0){
        //         return (numbers[i]) ("is divisible by three.");
        //              } else {
        //                 return (numbers[i]) ("is not divisible by three.");
        //                 }
        //   })
        // return `${this.number} "is divisible by three."`
        // console.log(divByThree())
        // const divByThree =(array) => {
        //     for(let i=0; i < numbers.lentgh; i++){
        //     }
        //     if(numbers.[0] % 3 === 0);{
        //         return ${numbers[i]} "is divisible by three.";
        //         } else {
        //             return ${number[i]} "is not divisible by three."
        //         }
        // }
        // console.log(divByThree)
        // if(numbers.[0] % 3 === 0);{
        //             return ${numbers[i]} "is divisible by three.";
        //             } else {
        //                 return ${number[i]} "is not divisible by three."


        // const numbers = [{number: 15, number: 0, number: -7}]
        // const numbers = [object1, object2, object3]



// 2---------------------------------------------------------------------------2

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capsOne", () => {
//   it("returns an array with all the words capitalized", () => {
//     const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion","nephew"]
//     const randomNouns1Output = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//     const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//     const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango"]
//     expect(capsOne(randomNouns1)).toEqual(randomNouns1Output)
//     expect(capsOne(randomNouns2)).toEqual(randomNouns2Output)
//   })
// })

// Jest Test RTN:
// ReferenceError: capsOne is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.198 s

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
    //Pseudo Code:
        //Create a function named capsOne that will take the given 2 arrays, randomNouns1 and randomNouns2, and return an array with all the words capitalized utilizing the .toUpperCase method.
        //Inputs: Arrays randomNouns1 and randomNouns2.
        //Output: A new array with all the words capitalized.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

// const capsOne = (array) => {
//     return array.map(value => {
//         return `${value[0].toUpperCase()}${value.slice(1)}`
//     })
// }
// console.log(capsOne(randomNouns1))
// console.log(capsOne(randomNouns2))
//*** on Jest I received the below msg:
// PASS  ./code-challenges.test.js
// capsOne
//   ✓ returns an array with all the words capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.2 s
// Ran all test suites.
// ✨  Done in 1.02s.


//3------------------------------------------------------------------------3

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// describe("firstVowelIndex", () => {
//     it("returns the index of the first vowel in the string", () => {
//       const vowelTester1 = "learn"
//       const vowelTester1Output = 1
//       const vowelTester2 = "academy"
//       const vowelTester2Output = 0
//       const vowelTester3 = "challenges"
//       const vowelTester3Output = 2
//       expect(firstVowelIndex(vowelTester1)).toEqual(vowelTester1Output)
//       expect(firstVowelIndex(vowelTester2)).toEqual(vowelTester2Output)
//       expect(firstVowelIndex(vowelTester3)).toEqual(vowelTester3Output)
//     })
//   })

// Jest Test RTN:
// ReferenceError: firstVowelIndex is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.212 s, estimated 1 s
// Ran all test suites.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2

// b) Create the function that makes the test pass.
//Pseudo Code:
    //*** This one really upset me because I initially thought it was going to be quick.  I know the idea to search via .indexOf and figured it would work. I also tried making it an array to add .map() since the for loop did not work out, (my terminal did not like the for loop).  I also tried boolean thinking either || or && might allow indexOf() to keep searching.  I knew "a"+"e" would not work because its like just typing "ae", but I still tried that too.  Not sure what other direction I could have gone in, although I did try to make the string into an array .split and then .join() back but I think I am turning my "syntactical sugar" into gooey stuff not to be confused with GUI stuff.
        //Create a function called firstVowelIndex, that takes in a string and returns the index of the first vowel of the given string utilizing the .indexOf method.
        //A new array of vowels, const vowels = [`a`, `e`, `i`, `o`, `u`, `y`], will need to be created to be placed into the firstVowelIndex function for search purposes. 
        //Inputs: Strings vowelTester1, vowelTester2, & vowelTester3.
        //Output: The index of the first vowel of the input string.

const vowelTester1 = "learn"
const vowelTester2 = "academy"
const vowelTester3 = "challenges"


function firstVowelIndex (string) {
    // const vowels = [`a`, `e`, `i`, `o`, `u`,`y`, `A`, `E`, `I`, `O`, `U`,`Y`]
    // const vowels = ["a","e","i","o","u","y","A","E","I","U","Y"]
    // ("a"),("e"),("a","e","i","o","u","y")
    // const vowels = (`a`, `e`, `i`, `o`, `u`,`y`, `A`, `E`, `I`, `O`, `U`,`Y`)
    // let vowels =  "a", "e","i","o","u","y"
    // ("a"||"e"||"i"||"o"||"u"||"y") 
//    let array = string.split(), 
    // if (string.indexOf("a") &&
    //     string.indexOf("e")){
            return string.indexOf(("a"),("e"),("a","e","i","o","u","y"))

      
}
console.log(firstVowelIndex(vowelTester1))
console.log(firstVowelIndex(vowelTester2))
console.log(firstVowelIndex(vowelTester3))

//*** What am I not remembering or utilizing, to fix 1 & 3?  I feel it is something more simple on 3, however I dont feel to far off on 1 either. ***

// node code-challenges.test.js