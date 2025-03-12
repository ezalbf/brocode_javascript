//WAYS TO OUTPUT STUFF//
// console.log(`Jam is not ham, girll`)

// window.alert(`Pop up! Pop Up! Pop Up!`)
// window.alert(`Welcome!`)

// document.getElementById("MyH1").textContent = `Hello`
// document.getElementById("myP").textContent = `BroCode really likes pizza!`

// let age = 25;
// let price = 10.99;
// let gpa = 3.9;

// console.log(`that young man is ${age} years. Can you believe it?`)
// console.log(`the price is $${price}`)


// let age =25;
// let fullName = "Bro";
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`


///////////////////////////////////////

//WAYS TO ACCEPT USER INPUT

/*1.Use a window prompt
2.HTML Textbox
*/

//first method
// let username = window.prompt("Enter your username: ")
// console.log(username)

//2nd method
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("greeting").textContent = `Welcome, ${username}`
// }

// let age = window.prompt("how old are you?")
// age = Number(age)
// console.log(age +=1)

//why typecast an empty string? prolly in the case of accepting user input and checking if the user left the input field empty//


////////////////////////////////////
// //random number between 1 and 6
// let randomNum = Math.floor(Math.random() *6) +1;
// console.log(randomNum)

// //random number between any range of numbers
// const min = 50;
// const max = 100;

// let randonumbo = Math.floor(Math.random()*(max-min)) +min
// console.log(randonumbo)


///////////////////////////////////
// //SITE AGE ENTRY CHECKER
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = Number(myText.value);

//     if(age>100){
//         resultElement.textContent = `You are TOO OLD to enter this site`
//     }
//     else if(age == 0){
//         resultElement.textContent = `You cant enter this site. You were just born.`
//     }
//     else if(age>=18){
//         resultElement.textContent = `You are old enough to enter this site.`
//     }
//     else if(age<0){
//         resultElement.textContent = `You cant be below 0`
//     }
//     else{
//         resultElement.textContent = `You must be 18+ to enter this site.`
//     }
// }


// //use SWITCH instead of multiple if , else if statements.
// let day = 2;
// switch(day){
//     case 1:
//         console.log(`it's Monday.`)
//         break;
//     case 2:
//         console.log(`it's tuesday.`)
//         break;
//     default:
//         console.log(`${day} is not a day.`)
// }

// let testscore= 84;
// let lettergrade;

// switch(true){
//     case testscore>=90:
//         console.log("A");
//         break;
//     case testscore>=80:
//         console.log("B");
//         break;
//     case testscore>=70:
//         console.log("C");
//         break;
// }


//////////////////////////////
// //STRING METHODS
// let username = "Hamburger"
// console.log(username.charAt(3)) //gets the character at the specific index
// console.log(username.indexOf("r")) //gets the index of the 1st occurrence of a letter

// let ph_num = "123-456-9090"
// console.log(ph_num.replaceAll("-","")) // from 123-456 to 123456
// console.log(ph_num.padStart(15,"0"))  //like padding. 15 specifies the length you want the string to be. Next parameter is what you want to use as the padding


// //STRING SLICING
// let fullname = "Tim Tibble";
// let firstname = fullname.slice(0, 3)
// let lastname = fullname.slice(4)
// console.log(firstname)
// console.log(lastname)

// let fulllnnn = "Timothy Gilbert"
// let firsttt = fulllnnn.slice(0, fulllnnn.indexOf(" "))
// console.log(firsttt)
// let lasttt = fulllnnn.slice(fulllnnn.indexOf(" ") + 1)  //if you dont add + 1 then it includes a space
// console.log(lasttt)

// const email = "niko@gmail.com";
// let username2 = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@") +1)
// console.log(`Username: ${username2}`)
// console.log(`Extension: ${extension}`)



//////////////////////////////
//METHOD CHAINING

//----------NO METHOD CHAINING-------
// let username = window.prompt("Enter your username: ");
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

// //----------METHOD CHAINING-------
// let username = window.prompt("Enter your username: ");
// username = username.trim().charAt().toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);


//////////////////
// //WHILE LOOPS

// //LOGIN THINGY

// let isLoggedIn =false;
// let username;
// let password;

// while(!isLoggedIn){
//     username = window.prompt(`Enter your username:`)
//     password = window.prompt(`Enter your password:`)

//     if(username === "myUsername" && password === "myPassword"){
//         isLoggedIn = true;
//         console.log(`You are logged in!`)
//     }
//     else{
//         console.log(`Invalid credentials! Please try again.`)
//     }
// }


////////////////////////////////
// //NUMBER GUESSING GAME

// let minNum =1;
// let maxNum = 100;
// let answer = Math.floor(Math.random() * (maxNum-minNum)) + minNum;
// let running = true;
// let attempts =0;
// let guess;

// while(running){
//     guess = Number(window.prompt(`Guess a number between ${maxNum} and ${minNum}`))

//     if(isNaN(guess)){
//         window.alert("Enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Enter a number in the range");
//     }
//     else{
//         attempts++;
//         if(guess >answer){
//             window.alert("TOO HIGH. Try again.");
//         }
//         else if(guess <answer){
//             window.alert("TOO LOW. Try again.");
//         }
//         else{
//             window.alert(`${answer} is the correct guess. It took you ${attempts} attempts.`);
//             running=false;
//         }
//     }
// }


// //FUNCTIONSSSSSS
// email = window.prompt("Enter your email")
// extennn = email.slice(email.indexOf("@"))
// if(extennn.charAt(0) === "@"){
//     console.log(`${email} is a valid email`)
// }
// else{
//     console.log(`Enter a valid email`)
// }

// function isValidEmail(){
//     return email.includes("@") ? true : false; // do this instead of if and else
// }

// console.log(isValidEmail());


////////////////////////////////////////
// //ARRAYS

// let fruits = ["apple", "grape"]
// fruits.push("coconut") //to add to the end
// fruits.pop()  // to remove an element from the end
// fruits.unshift()  //add an element to the beginning
// fruits.shift() //remove an element from the beginning
// indexx = fruits.indexOf("apple")  //gets the index // *IF INDEX IS -1 THEN THAT ITEM DOESNT EXIST IN THE ARRAY//
// fruits.sort() //sort alphabetically
// fruits.sort().reverse() //reverse

// for(let fruit of fruits){ //not 'in fruits' like python
//     console.log(fruit)
// }

// //2D ARRAYS
// const matrix = [    [1, 2, 3], 
//                     [4, 5, 6], 
//                     [7, 8, 9]];

// //Tictactoe 
// // matrix[0][0] = 'X';
// // matrix[0][1] = 'O';
// // matrix[0][2] = 'X';

// // matrix[1][0] = 'O';
// // matrix[1][1] = 'X';
// // matrix[1][2] = 'O';

// // matrix[2][0] = 'X';
// // matrix[2][1] = 'O';
// // matrix[2][2] = 'X';

// for(let row of matrix){
//     const rowString = row.join(' ');
//     console.log(rowString);
// }


//SPREAD OPERATOR
// // spread operator = ... it 'spreads' an array or string
// numbers = [1,2,3]
// //let maxx = Math.max(numbers) // this wont workk
// let maxx = Math.max(...numbers)
// console.log(maxx)

// let fruits = ["apple", "grape", "orange"]
// let new_fruits = [...fruits]  //this creates an exact copy of the array
// let vegetables = ["tomato", "celery"]
// let foooodd  = [...fruits, ...vegetables, "egg"] // you can add 2 arrays together and even append the new array
// console.log(foooodd)


// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array
// //example 1
// function openFridge(...foods){
//     console.log(foods);
// }


// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5);

// //example 2
// function combineString(...strings){
//     return strings.join(" ");
// }
// let nAmE = combineString("Mr.", "Spongebob", "Squarepants");
// console.log(nAmE)


////////////////////////////////////
// //forEach() methoddd , the element, index,and array are provided when called (IN THAT ORDER)

// numbers =[1,2,3,4,5]

// //numbers.forEach(display);  //use the function as a callback

// function display(element){
//     console.log(element);
// }

// function double(element, index, array){ //IN THAT ORDER
//     array[index] = element * 2;
// }

// numbers.forEach(double); //doubles elements
// numbers.forEach(display);


// fruits =['apple','banana','orange','strawberry'];

// function lowerCasee(element,index, array){
//     array[index] = element.toLowerCase();
// }

// function upperCasee(element,index, array){
//     array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// fruits.forEach(capitalize);
// fruits.forEach(display);


///////////////////////////////////
// // .map() = accepts a callback and applies that function to each element of an array, then return a new array

// //example1
// numbers =[1,2,3,4,5];

// function square(element){
//     return Math.pow(element, 2)
// }

// let squares = numbers.map(square)
// console.log(squares)

// //example2
// const students = ['Songebob','Patrick','Sandy'];

// function stuUppercase(element){
//     return element.toUpperCase();
// }

// const studentUpp = students.map(stuUppercase)
// console.log(studentUpp)

// //example3
// const dates =['2024-1-10','2025-2-20','2026-3-30'];

// function splitDates(element){
//     let parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// const formattedDates = dates.map(splitDates);
// console.log(formattedDates)

////////////////////////////////
// //.filter() -> filters elements from an array

// //example1
// let numbers =[1,2,3,4,5];

// function isEven(element){
//     return element % 2 === 0;  //returns a boolean
// }
// function isOdd(element){
//     return element % 2 !== 0;  //returns a boolean
// }

// const evenNums = numbers.filter(isEven);
// console.log(evenNums)
// const oddNums = numbers.filter(isOdd);
// console.log(oddNums)

// //example 2
// const words =['apple','tornado','kid','luffy','lettuce']

// function isShort(element){
//     return element.length <=5;
// }

// const shortWords = words.filter(isShort)
// console.log(shortWords)


////////////////////////////////
// //.reduce() method -> reduces some values to single value

// //example 1
// const prices =[5, 80, 15, 28, 9.7]

// function summm(previousNum, nextNum){
//     return previousNum + nextNum;
// }

// const total = prices.reduce(summm);
// console.log(`$${total.toFixed(2)}`);

// //example 2 ...getting the min and max of an array of numbers
// let grades = [20,70,90,65,82,45]
// console.log(grades.max)       //this wont workkk

// function getMaxx(accumulator,element){
//     return Math.max(accumulator,element);
// }
// function getMin(accumulator,element){
//     return Math.min(accumulator,element);
// }
// let maxNum = grades.reduce(getMaxx)
// console.log(maxNum)

//////////////////////////////
// //FUNCTION EXPRESSIONS a way to define functions as values or variables

// const hello = function(){  /// you dont have to necessarily give the function a name
//     console.log('HeLl0!')
// }

// setTimeout(hello,3000)

//let numbers =[1,2,3,4,5];
// const evennnn = numbers.filter(function(element){
//     return element % 2 === 0;
// })
// console.log(evennnn)


////////////////////
// //ARROW EXPRESSIONS  -> good for simple functions that you use only once
// // const helloo = function(){
// //     console.log('Hello!')
// // }
// //the code below is a more simple way to write the one above:
// const helloo = () => {
//     console.log('Hello!')
// }
// helloo();

// //you can also add parameters
// const helloo_p = (name) => {
//     console.log(`Hello ${name}`)
// }
// helloo_p("Ruby");

// //example2
// setTimeout( () => {
//     console.log('time to go to bed')
// }, 3000);

// const squaredNums = numbers.map((element) => Math.pow(element,2)) //since its just a single line, the return & {} are ommited
// console.log(squaredNums)

// const total = numbers.reduce( (prev,next) =>  prev + next)




/////////////////////////
//objects -> go to that file!


///////////////////////////////////////////////
// //  DESTRUCTURING  -> extract values from arrays and objects,
// //                              then assign them to variables in a convenient way
// //                              [] = to perform array destructuring
// //                              {} = to perform object destructuring

// //example 1     swapping thw value of 2 variables
// let a = 2;
// let b = 5;

// [a, b] = [b,a]      //before the =, that's destructuring, and after the = is assigning the values into an array
// console.log(a)
// console.log(b)

// // ---------- EXAMPLE 2 ----------
// // SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);

// // ---------- EXAMPLE 3 ----------
// // ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors1 = ['red', 'green', 'blue', 'black', 'white'];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors1;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)

// // ---------- EXAMPLE 4 ----------
// // EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 20,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 26
// }

// const {firstName, lastName, age, job="Unemployed"} = person2  //default values can be set
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

// // ---------- EXAMPLE 5 ----------
// // DESTRUCTURING IN FUNCTION PARAMETERS

// function displayPerson({firstName,lastName,age,job = "unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`)
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }


// displayPerson(person1)



///////////////////////////////////////////////////////
// //          SORTING  = method used to sort elements of an array in place.
// //               Sorts elements as strings in lexicographic order, not alphabetical
// //               lexicographic = (alphabet + numbers + symbols) as strings

// let colors = ['yellow','red','blue','indigo']

// colors.sort();
// console.log(colors)

// let numbers = [2,6,1,7,10,3,5,4,9,8]
// //numbers.sort() // result = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] ...not sorted right

// numbers.sort((a,b) => a-b)  //If a-b is negative, a is considered smaller than b and should come first in the sorted  array.If a-b is positive, a is considered larger than b and should come after b.If a-b is zero, the order of a and b doesn't change with respect to each other.
// console.log(numbers)


// // ---------- EXAMPLE 2 ----------
// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//                 {name: "Patrick", age: 37, gpa: 1.5},
//                 {name: "Squidward", age: 51, gpa: 2.5},
//                 {name: "Sandy", age: 27, gpa: 4.0}]

// // people.sort((a,b) => a.age -b.age) 
// // people.sort((a,b) => b.age -a.age)   // reverse order; highest age to lowest

// // sorting strings in objects is different from the norm
// people.sort((a,b) => a.name.localeCompare(b.name))
// console.log(people)


//////////////////////////////////////
// //SHUFFLING AN ARRAY

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }


//////////////////////////////////////////
// //      CLOSURES = A function defined inside of another function, 
// //                  the inner function has access to the variables 
// //                  and scope of the outer function.
// //                  Allow for private variables and state maintenance

// function createCounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`)
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment,getCount}
// }

// const counterr = createCounter();
// counterr.increment()
// counterr.increment()
// counterr.increment()

// console.log(`the current count is ${counterr.getCount()}`)


// //example 2

// function createGame(){

//     let score = 0;

//     function increasePoints(points){
//         score += points
//         console.log(`+${points}pts`)
//     }

//     function decreasePoints(points){
//         score -= points
//         console.log(`-${points}pts`)
//     }

//     function getScore(){
//         return score;
//     }

//     return {increasePoints,decreasePoints,getScore}

// }

// let player1 = createGame();

// player1.increasePoints(5);
// player1.decreasePoints(9);
// player1.increasePoints(9);

// console.log(`the final score is ${player1.getScore()} pts`)



// //////////////////////////
// //setTimeout()

// let timeoutId

// function startTimer(){
//     timeoutId = setTimeout( () => {window.alert('Hello!')},4000)
//     console.log('STARTED')
// }

// function stopTimer(){
//     clearTimeout(timeoutId);
//     console.log('CLEARED')
// }


///////////////////////////////////////////////////
// //FORMATTING CURRENCY 
// //.toLocaleString() = returns a string with a language 
// //                                  sensitive representation of a number
// //                                  .toLocaleString("locale", {options});


// let num = 1234567.8910

// num = num.toLocaleString("en-US", {style: "currency", currency: "USD"})
// console.log(num)




////////////////////////////////////////////////
// //ERROR HANDLING

// try{
//     console.log(x)
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     console.log("this always executes")
// }

// //example 2
// try{
//     let dividend = Number(window.prompt('enter the dividend: '));
//     let divisor = Number(window.prompt('enter the divisor: '));

//     if(divisor == 0){
//         throw new Error("divisor cant be 0!")
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("values must be numbers!")
//     }

//     const result = dividend/divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error)
// }

// console.log("you have reached the end!")





//////////////////////////////////////////////////////////////
// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser 
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically 
//             change the content, structure, and style of a web page.




// ELEMENT SELECTORS = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST


// ---------- getElementsByClassName() ----------
// const fruits = document.getElementsByClassName("fruits")

// fruits[0].style.backgroundColor ="yellow"

// for(let fruit in fruits){
//     fruits[fruit].style.textAlign ="center"
// }

//you cant however use array methods with these selectors. anyway to use those methods:

// Array.from(fruits).forEach( fruit => fruit.style.backgroundColor ="red");

// ---------- getElementsByTagName() ----------   
//kinda similar to getElementByClassName()


// // ---------- querySelector() ----------
// const element = document.querySelector(".fruits")

// element.style.backgroundColor = "yellow";

// ---------- querySelectorAll() ----------
// the forEach() method can be used



/////////////////////////////////////////////////////
//CHANGING/ADDING HTML WITH JAVASCRIPT


// const newH1 = document.createElement("h1");

// newH1.textContent = "I like pizza";
// newH1.id= "newH1"
// newH1.style.textAlign = "center";


//document.body.append(newH1);
//document.body.prepend(newH1);

// const box1 = document.getElementById("box1");
// const box2 = document.getElementById("box2");
// box1.append(newH1)

//document.body.insertBefore(newH1,box2)

//in between two elements:
// const boxes = document.querySelectorAll(".box")
// document.body.insertBefore(newH1, boxes[2]) //try to makechanges to multiple things.

//remove an element:
//document.body.removeChild(newH1)

//box1.removeChild(newH1)


//example2
// const newListItem = document.createElement("li")
// const fruits =document.getElementById("fruits")

// newListItem.id = "newListItem"
// newListItem.textContent = "coconut"
// newListItem.style.backgroundColor ="lightgreen"
// //document.body.append(newListItem)


// //fruits.append(newListItem)
// // const orange = document.getElementById("orange")
// // fruits.insertBefore(newListItem,orange)

// //using querySelectorAll():
// const listItems = document.querySelectorAll("#fruits li");
// fruits.insertBefore(newListItem,listItems[2]) 

// //fruits.removeChild(newListItem)







///////////////////////////////
// //HIDE AND SHOW AN IMAGE

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event =>{

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide"
//     }
//     else{
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show"
//     }
    
// })


////////////////////////////////////////
//NODELISTS   = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach( button => {
//     button.style.backgroundColor = "green"
// })

// buttons.forEach( button => {
//     button.textContent += "😁"
// })

// // ---------- CLICK event listener ---------- 
// buttons.forEach( button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })


// // ----------  MOUSEOVER + MOUSEOUT event listener ---------- 
// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "hsl(205,100%,40%)"
//     })
// })

// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "hsl(205,100%,60%)"
//     })
// })


// //--------------ADD AN ELEMENT------------
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5"
// newButton.classList = "myButtons"
// document.body.appendChild(newButton)

// const newBtn2 = document.createElement("button")
// newBtn2.classList = "myButtons"
// newBtn2.textContent = "Button 6"
// document.body.appendChild(newBtn2)

// buttons = document.querySelectorAll(".myButtons")     //do this to 'offically' add the new element to the nodelist
// console.log(buttons)


// //----------REMOVE AN ELEMENT----------
// // document.body.removeChild(newBtn2)
// // console.log(buttons)  //the element was only removed from the DOM and not the nodelist, cause the nodelist still contains 6 elements.

// //remove a button every time we click on it:
// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.remove()
//         buttons = document.querySelectorAll(".myButtons") //do this to 'offically' remove the element from the nodelist
//         console.log(buttons)
//     })
// })





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Promise = An Object that manages asynchronous operations.  Helps avoid callback hell.
// //                    Wrap a Promise Object around {asynchronous code}
// //                    "I promise to return a value"
// //                    PENDING -> RESOLVED or REJECTED
// //                   new Promise((resolve, reject) => {asynchronous code})


// function walkTheDog(){

//     return new Promise((resolve,reject) =>{
//         setTimeout( ()=>{
//             const isWalked = true;
//             if(isWalked){
//                 resolve("You walked the dog");
//             }
//             else{
//                 reject("You didn't walk the dog!")
//             } 
//         },1000)
//     })
// }

// function cleanTheKitchen(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             const isCleaned = true;
//             if(isCleaned){
//                 resolve("You cleaned the kitchen")
//             }
//             else{
//                 reject("Ypu didnt clean ythe kitchen!")
//             }
//         },2500)
//     })
// }

// function takeOutTheTrash(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             const isTakenOut = true;
//             if(isTakenOut){
//                 resolve("You took out the trash")
//             }
//             else{
//                 reject("You didnt take out the trash")
//             }
//         },500)
//     })
// }

// walkTheDog().then(value => {console.log(value); return cleanTheKitchen();})
//             .then(value => {console.log(value); return takeOutTheTrash();})
//             .then(value => {console.log(value); console.log("You finished all the chores")})
//             .catch(error => console.error(error))






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Async/Await = Async = makes a function return a promise
// //                           Await = makes an async function wait for a promise

// // Allows you write asynchronous code in a synchronous manner
// // Async doesn't have resolve or reject set up as parameters
// // Everything after Await is placed in an event queue



// function walkTheDog(){

//     return new Promise((resolve,reject) =>{
//         setTimeout( ()=>{
//             const isWalked = true;
//             if(isWalked){
//                 resolve("You walked the dog");
//             }
//             else{
//                 reject("You didn't walk the dog!")
//             } 
//         },1000)
//     })
// }

// function cleanTheKitchen(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             const isCleaned = true;
//             if(isCleaned){
//                 resolve("You cleaned the kitchen")
//             }
//             else{
//                 reject("Ypu didnt clean ythe kitchen!")
//             }
//         },2500)
//     })
// }

// function takeOutTheTrash(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             const isTakenOut = true;
//             if(isTakenOut){
//                 resolve("You took out the trash")
//             }
//             else{
//                 reject("You didnt take out the trash")
//             }
//         },500)
//     })
// }

// async function doChores(){

//     try{
//         const walkTheDogResult = await walkTheDog();
//         console.log(walkTheDogResult);

//         const cleanKitchenResult = await cleanTheKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTheTrashResult = await takeOutTheTrash();
//         console.log(takeOutTheTrashResult);

//         console.log("Youre done with all the chores")
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// doChores();





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // JSON = (JavaScript Object Notation) data-interchange format 
// //               Used for exchanging data between a server and a web application
// //               JSON files {key:value} OR [value1, value2, value3]

// // JSON.stringify() = converts a JS object to a JSON string.
// // JSON.parse() = converts a JSON string to a JS object

// let names = ["Spongebob","Patrick","Squidward","Sandy"]

// let jsonNamesString = JSON.stringify(names) //converts to json format...puts it in a long string
// console.log(names)
// console.log(jsonNamesString)

// let personn = {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["Jellyfishing","Cooking","Driving"]
// }

// let jsonPersonnString = JSON.stringify(personn)
// console.log(personn)
// console.log(jsonPersonnString)

// let personn1 = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing","Cooking","Driving"]}`

// let jsonPersonn1Parsed = JSON.parse(personn1)  //converts string to an object
// console.log(personn1)
// console.log(jsonPersonn1Parsed)


// fetch()

// fetch("names.json")
//     .then(response => response.json())
//     .then(value => console.log(value))



//////////////////////////////////////////////
// // cookie = a small text file stored on your computer
// //                 used to remember information about the user
// //                 saved in name=value pairs

// // to check if you have cookies:
// //console.log(navigator.cookieEnabled)

// //to set/create a cookie:
// document.cookie = "firstName=Spongebob; expires= Sun, 1 January 2030 12:00:00 UTC,path=/";
// document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// // console.log(document.cookie)

// function setCookie(name, value, daysToLive){
//     const date = new Date();
//     date.setTime(date.getTime() + (daysToLive *24* 60* 60* 1000))
//     let expires = "expires=" + date.toUTCString();
//     document.cookie =`${name}=${value}; ${expires}; path=/`
// }

// setCookie("email", "Sponge@gmail.com",365)
// //console.log(document.cookie)

// function deleteCookie(name){
//     setCookie(name, null, null)
// }

// deleteCookie("email")
// deleteCookie("firstName")
// deleteCookie("lastName")


// function getCookie(name){
//     const cDecoded = decodeURIComponent(document.cookie)
//     const cArray = cDecoded.split("; ")
//     let result = null;

//     cArray.forEach(element =>{
//         if(element.indexOf(name) ==0){
//             result =element.substring(name.length +1)
//         }
//         return element;
//     })
// }

// setCookie("fname","Sponge",365)
// setCookie("lname","SquarePants",365)
// console.log(getCookie("fname"))



///////////////////////////////////////////////
// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

// //using just fetch() :
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource.")
//         }
//         else{
//             return response.json();
//         }
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error))

// using async/await :
async function fetchData(){
    try{
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")

        if(!response.ok){
            throw new Error("Could not fetch resource.")
        }
        else{
            let data = await response.json();
            console.log(data.name);
        }

    }
    catch(error){
        console.error(error);
    }
}

fetchData();
