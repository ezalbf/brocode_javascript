// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()


// //----Example 1----

// let btn = document.getElementById("myButton")

// btn.classList.add("enabled")  //add a new class to an element
// btn.classList.remove("enabled")

//btn.classList.add("hover")
// btn.addEventListener("mouseover",event =>{
//     event.target.classList.add("hover")
// })

// btn.addEventListener("mouseout",event =>{
//     event.target.classList.remove("hover")
// })

// //toggle can do the same as the code above:
// btn.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover")
// })

// btn.addEventListener("mouseout",event =>{
//     event.target.classList.toggle("hover")
// })


// //------remove()-------------
//btn.classList.add("enabled")

// btn.addEventListener("click", event =>{
//     event.target.classList.replace("enabled","disabled");
// })


// btn.addEventListener("click", event =>{

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled");
//     }
// })


// //------Example 2----

let buttons = document.querySelectorAll(".myButtons")

buttons.forEach(button =>{
    button.classList.add("enabled");
})

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😗"
        }
        else{
            event.target.classList.replace("enabled","disabled")
        }  
    })
})


