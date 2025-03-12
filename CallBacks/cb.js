//CALLBACKS  -> used to make sure a function is called after an another executes

//Example 1
function hello(callback){
    console.log("Hello, friend!");
    callback();
}

function bye(){
    console.log("Goodbyeee");
}

hello(bye); //dont add the brackets to the callback function otherwise it'll be invoked right away

//Example 2
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}

sum(displayConsole,2,3)

const myH1 = document.getElementById("myH1")

function displayPage(result){
    myH1.textContent = result;
}

sum(displayPage,2,3)