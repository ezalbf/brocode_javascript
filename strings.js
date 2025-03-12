// //STRING METHODS
// let username = "Hamburger"
// console.log(username.charAt(3)) //gets the character at the specific index
// console.log(username.indexOf("r")) //gets the index of the 1st occurrence of a letter

// let ph_num = "123-456-9090"
// console.log(ph_num.replaceAll("-","")) // from 123-456 to 123456
// console.log(ph_num.padStart(15,"0"))  //like padding. 15 specifies the length you want the string to be. Next parameter is what you want to use as the padding


//STRING SLICING
let fullname = "Tim Tibble";
let firstname = fullname.slice(0, 3)
console.log(firstname)

let fulllnnn = "Timothy Gilbert"
let firsttt = fulllnnn.slice(0, fulllnnn.indexOf(" "))
console.log(firsttt)
let lasttt = fulllnnn.slice(fulllnnn.indexOf(" ") + 1)  //if you dont add + 1 then it includes a space
console.log(lasttt)

const email = "niko@gmail.com";
let username2 = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") +1)
console.log(`Username: ${username2}`)
console.log(`Extension: ${extension}`)