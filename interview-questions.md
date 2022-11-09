# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the placeholder name inside a function.
    An argument is data passed into a function when invoked/called.

Researched answer: A parament is a variable placehoder that is shown inside the functions parenthesis or (). It can be used again and again in the function once in the parenthesis or ().  
An argument though is the value assigned to the parameter or the inputs of the function, and there has to be an equal number of parameters as arguments.  

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: Ok Value, Index, and the Array are required for .map() and I think that the Index is not always required as long as you have the array and the value.  

Researched answer: the .map() method takes Value, Index, and Array as parameters, and the value is required to hold the value of the element. The Index and Array of the HOG are not required paramenters, both are optional for the .map(), if you know the value you will have the index as it goes in order from left to right starting count at zero.  

3. What is the difference between map and filter?

Your answer: The main difference between .map() & .filter() is that .filter() will always try to return an array shorter than the original array. 

Researched answer: .map() and .filter() both work on HOF however .map() after iterating through the array will do something to each item and  return a new array of the same length similar to a for loop.  .filter() also iterates through the array but returns a new shorter array and it requires an eval that returns a boolean type logic value which is how it filters the original array. 

4. What is iteration?

Your answer: An iteration is the output of a For Loop Function. 

Researched answer: Iteration is doing a certain action over and over again until a certain predetermined condition is met or it will continue as long as boolean eval is still true an only stop iterating when it changes to false, such as in a for loop.

5. What is the difference between a class and an object?

Your answer: A Class is the blueprint of the object. 

Researched answer: Objects are data that are made of a combo key/value pair and are inside curly braces.  The key is the datatype name and the value is the actual value of the given datatype.  Where Classes are a type of function that have data and behavior, they are the blueprints of objects allowing more objects to be made via the constuctor and the command, new. 


6. STRETCH: What is hoisting in JavaScript?

Your answer: At first I want to say it is what my pair programming partner does for me during the challenges, but let me research that and respond more appropriatly.

Researched answer: After looking into Javascript hoisting, it is a method of moving variable declarations up to the top which can help to avoid bugs by returning an undefined output instead of an otherwise dreaded error. It seems to work mostly with var and not so easily with let or const though.  Also some functions can be hoisted in Javascript but that is only the declarations not the expressions. Which truthfully I am still a little grey on the topic and sometimes consfused on what will be hoisted and what will be an error. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: They should follow the K.I.S.S methodology. 
    1. Does your software have a customer base, and name?
    2. Does your software have function and usability for the scope of the customer?
    3. Does your software provide an end product to the customer to make them purchase?

2. Spread operator: Syntax is (...) and it can expand a string or array.  Objects it can recite them all and adds key/value pairs to an object being created. This syntax can be used with function arguments, and in arrays, and objects, although I think those arrays and objects need to be able to to have iterable qualities which I am not dually familiar with. 

3. React: Its a Javascript library that assists in building UIs.  Everything inside it is a component.   It utilizes JSX syntax or input data.  It can also use Babel, a translater for Javascript which converts JavaScript XML (JSX) into Javascript. It also has its own built in methods call React Hooks.

4. React props: React Properties are speacial React objects that pass info between components, from nested to parent components, via the components invocatoion. They can't be changed, like immutable or read only.

5. DOM events: User interactions are all considered Document Object Model (DOM) events. Clicks, hovers, and keyboard inputs are all DOM events and need the software or webpage to respond accordanly. Ways to register or record DOM events is with an event listener. 
