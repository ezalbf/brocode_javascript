// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);

//---MOUSE EVENTS EXAMPLE--------
// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", 
//                 event =>{
//                     event.target.style.backgroundColor = "tomato";
//                     event.target.textContent = "OUCH! 🤕"
//                 }
// )

// myBox.addEventListener("mouseover",
//                 event =>{
//                     event.target.style.backgroundColor = "yellow";
//                     event.target.textContent ="DON'T DO IT 😮"
//                 }
// )

// myBox.addEventListener("mouseout",
//                 event =>{
//                     event.target.style.backgroundColor = "lightgreen";
//                     event.target.textContent = "Click Me 😊"
//                 }
// )



// //-------KEY EVENTS EXAMPLE1--------
const myBox1 = document.getElementById("myBox1");

// document.addEventListener("keydown", event =>{
//     myBox1.style.backgroundColor ="tomato";
//     myBox1.textContent ="😮"
// })


// document.addEventListener("keyup", event =>{
//     myBox1.style.backgroundColor ="lightblue";
//     myBox1.textContent ="😊"
// })


//EXAMPLE 2  ------moving face game
const moveAmount = 10;
let x =0;
let y =0;

document.addEventListener("keydown", event =>{

    myBox1.textContent ="😮";
    myBox1.style.backgroundColor ="tomato";

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown" :
                y += moveAmount;
                break;

            case("ArrowRight"):
                x += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;
        }

        myBox1.style.top = `${y}px`;
        myBox1.style.left = `${x}px`;
    }
})

document.addEventListener("keyup", event =>{
    myBox1.textContent = "😊";
    myBox1.style.backgroundColor ="lightblue";
})