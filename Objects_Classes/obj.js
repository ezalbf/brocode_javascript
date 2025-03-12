// // //OBJECTS -> have properties and methods(kinda like functions)

// // const person1 = {
// //     firstName: "Spongebob",
// //     lastName: " SquarePants",
// //     age: 30,
// //     sayAddress: () => console.log("I live in a pineapple!")
// // }

// // const person2 = {
// //     firstName: "Patrick",
// //     lastName: "Star",
// //     age: 35,
// //     sayAddress: () => console.log("I live under a rock!")
// // }

// // console.log(person1.age);
// // person1.sayAddress();
// // console.log(person2.firstName);
// // person2.sayAddress();

// // // "this"  -> person1.name == this.name   //doesnt work with arrow functions
// // const person3 = {
// //     name: "Mr. Krabbs",
// //     age: 35,
// //     sayHello: function(){console.log(`My name is ${this.name}`)}
// // }
// // person3.sayHello()

// // // constructor = special method for defining the properties and methods of objects. Good for reusability(avoid creation of multiple objects)

// // function Car(make,model,year,color){            //the constructor should start with a capital letter
// //     this.make =make;
// //     this.model = model;
// //     this.year =year;
// //     this.color = color;
// //     this.drive = function(){console.log(`You drive the ${this.model}`)}
// // }

// // const car1 = new Car("toyato","camry",2019,"red");
// // car1.drive();
// // console.log(car1.make)

// // const car2 = new Car("Ford","Mustang",2023,"blue");
// // car2.drive();



// // //CLASSES   =provides a more structured and cleaner way to work with objects compared to traditional constructor functions

// // class Product{                          //start class names with capital letters
// //     constructor(name,price){            //do this instead of creating a function like we did before
// //         this.name = name;
// //         this.price = price;
// //     }

// //     displayProduct(){       // you dont need to add 'function' to the start when youre dealing with classes
// //         console.log(`Name: ${this.name}`);
// //         console.log(`Price: ${this.price.toFixed(2)}`);
// //     }

// //     calculateTotal(salesTax){
// //         return this.price + (this.price*salesTax);
// //     }
// // }

// // const product1 = new Product("Shirt",8.99);
// // const product2 = new Product("Pants",20);
// // product1.displayProduct();

// // const salesTax = 0.05
// // const total = product2.calculateTotal(salesTax)
// // console.log(`Total price(with tax): ${total.toFixed(2)}`)


// // //STATIC KEYWORD = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// // //example 1

// // class MathUtil{
// //     static PI =3.14159;

// //     static getDiameter(radius){
// //         return radius *2;
// //     }

// //     static getArea(radius){
// //         return this.PI * radius * radius;
// //     }
// // }

// // console.log(MathUtil.PI);
// // console.log(MathUtil.getArea(19));

// // //example 2
// // class User{
    
// //     static userCount = 0;

// //     constructor(username){
// //         this.username = username;
// //         User.userCount++;
// //     }

// //     sayHello(){
// //         console.log(`Hello, my username is ${this.username}`);
// //     }

// //     static getUserCount(){
// //         console.log(`there are ${User.userCount} users online`)
// //     }
// // }

// // const user1 = new User("Spongebob");
// // const user2 = new User("Patrick");
// // console.log(user1.username);
// // console.log(user2.username);
// // console.log(User.userCount)

// // user1.sayHello();
// // User.getUserCount();


// // //INHERITANCE = allows a new class to inherit properties and methods from an existing class. Helps with code reusability


// // class Animal{
// //     alive = true;

// //     eat(){
// //         console.log(`this ${this.name} is eating`)
// //     }

// //     sleep(){
// //         console.log(`this ${this.name} is sleeping`)
// //     }
// // }

// // class Rabbit extends Animal{
// //     name ="rabbit";

// //     run(){
// //         console.log(`this ${this.name} is running`)
// //     }
// // }

// // class Fish extends Animal{
// //     name ="fish";

// //     swim(){
// //         console.log(`this ${this.name} is swimming`)
// //     }
// // }

// // class Hawk extends Animal{
// //     name ="hawk";
    
// //     fly(){
// //         console.log(`this ${this.name} is flying`)
// //     }
// // }

// // const rabbit = new Rabbit();
// // const fish = new Fish();
// // const hawk = new Hawk();

// // console.log(rabbit.alive)
// // rabbit.eat()
// // fish.sleep()
// // fish.swim()
// // hawk.fly()


// //SUPER METHOD FOR CLASSES

// class Animal{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`this ${this.name} can move at a speed of ${speed}mph`)
//     }
// }

// class Rabbit extends Animal{

//     constructor(name,age,runSpeed){        
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runSpeed)
//     }
// }

// class Fish extends Animal{

//     constructor(name,age,swimSpeed){        
//         super(name,age);
//         this.swimSpeed =swimSpeed;
//     }

//     swim(){
//         console.log(`this ${this.name} can swim`);
//         super.move(this.swimSpeed)
//     }
// }

// class Hawk extends Animal{

//     constructor(name,age,flySpeed){        
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`this ${this.name} can fly`);
//         super.move(this.flySpeed)
//     }
// }

// const rabbit = new Rabbit("rabbit",4,50);
// const fish = new Fish("fish",7,20);
// const hawk = new Hawk("hawk",5,100);

// console.log(rabbit.runSpeed)
// console.log(hawk.age)
// console.log(fish.swimSpeed)

// console.log(hawk.fly())



// //GETTERS & SETTERS    -> // getter = special method that makes a property readable
//                         // setter = special method that makes a property writeable
//                         // are used to validate and modify a value when reading/writing a property

// class Rectangle{

//     constructor(width, height){
//         this.width =width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Enter a positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Enter a positive number")
//         }
//     }

//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }

// }

// const rectangle = new Rectangle(90,10)
// console.log(rectangle.width)
// console.log(rectangle.height)

// //example 2

// class Person{

//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName =  lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error('first name must be a string')
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error('last name must be a string')
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >0){
//             this._age = newAge;
//         }
//         else{
//             console.error('age must be a number above 0!')
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName
//     }
//     get age(){
//         return this._age
//     }
// }

// const personn = new Person("Patrick","Star", 20)

// console.log(personn.firstName)
// console.log(personn.lastName)
// console.log(personn.fullName)
// console.log(personn.age)




///////////////////////////////////////////////////////
//          NESTED OBJECTS          Objects inside of other Objects.
//                              Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

const person ={
    name: "Spongebob Squarepants",
    age: 30,
    hobbies: ['jellyfishing','cooking','karate'],
    address: {
        street: "124 Conch Street",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.name)
console.log(person.hobbies)
console.log(person.hobbies[0])
console.log(person.address)
console.log(person.address.street)

for(let property in person.address){
    console.log(person.address[property])
}


//example 2

class Person{

    constructor(name,age, ...address){
        this.name =name,
        this.age = age,
        this.address = new Address(...address)
    }
}

class Address{

    constructor(street,city,country){
        this.street =street;
        this.city = city;
        this.country =country;
    }
}

const person1 = new Person("Spongebob Squarepants",30,"124 Conch Street","Bikini Bottom","Int. Waters")

console.log(person1.name)
console.log(person1.address)
console.log(person1.address.street)



///ARRAYS OF OBJECTS
const fruits = [{name: "apple", color: "red", calories: 97},
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}]

console.log(fruits[0])
console.log(fruits[0].name)

fruits.push({name: "grapes", color: "purple", calories: 30})
fruits.pop()
console.log(fruits.splice(1,3)) //removes items with specific index in bracket


fruits.forEach(fruit => console.log(fruit.name))
const fruitNames = fruits.map(fruit => fruit.name)
console.log(fruitNames)

fruits.push({name: "orange", color: "orange", calories: 45})
fruits.push({name: "grapes", color: "purple", calories: 30})
console.log(fruits)

const maxFruit = fruits.reduce((prev,next) => next.calories > prev.calories
                                ? next : prev)

console.log(maxFruit.calories)

