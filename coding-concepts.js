// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: "G","o","l",f", "", "2","0","2","2"

// b) Verify and explain: I was wrong, I did not remember that .split("") would take the string, split it at an optional argument if required and ultimatly return an array, leaving the original string unchanged. 

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined

// b) Verify and explain: The log was undefined because there was not invocation/call/return.

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]

// b) Verify and explain: The HOF .map will take the *2 to each item in the array and return an array of the same length.

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]

// b) Verify and explain: The HOF .filter looks at each item in the array and compared the %2 !==0, which means it will return only the odd numbers in the array. 

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"

// b) Verify and explain: Object Destructuring works by calling the declared name and then the key: and index number inside the key.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name,
//     this.cohort = "Foxtrot",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: student: name ,  cohort: "George" , year: 2022

// b) Verify and explain: I know the new command is injecting a new student named George. I did type everything off due to not paying strict attention to detail and confusing the "" on the Foxtrot in the cohort section and the George in the question.  I should not have missed this. 
