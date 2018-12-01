// let title=document.getElementById('nycda-title');

// title.innerText = "Welcome to NYCDA"

// let helpMsg = document.getElementById('nyda-help-message');

// helpMsg.innerText = "Ask People in NYCDA for help if you're struggling"

// let classes = document.getElementsByClassName("nycda-class");
// length = classes.length;
// console.log(classes[length - 1]);

// let p = document.getElementsByTagName("p");
// console.log(p[1]);

// let input = document.querySelector("input");

// input.style.borderColor = 'red';

// let submitButton = document.getElementById("submit-button")

// submitButton.addEventListener("click", (event) => {
//   alert(input.value);
// })

let sections = document.getElementsByTagName("section");
let firstSection = sections[0];
let secondSection = sections[1];
let thirdSection = sections[2];
let lastSection = sections[3];

document.addEventListener("DOMContentLoaded", (event) => {
  firstSection.classList.add("show");
})

// run this code on window scroll
window.addEventListener("scroll", event => {
  // when the page scrolls 100px down then do the following
   
   



  // when the page scrolls 800px down then do the following
  if (window.scrollY > 1000) {
  secondSection.classList.add("show");
    // secondSection.style.zIndex = 8;
  }

  // when the page scrolls 1600px down then do the following
  if (window.scrollY > 2000) {
    thirdSection.classList.add("show");

    // secondSection.style.zIndex = 7;
  }

  // when the page scrolls 2400px down then do the following
  if (window.scrollY > 3000) {
  lastSection.classList.add("show");
    // secondSection.style.zIndex = 6;
  }
});

// // define a target element
// let changeColorButton = document.querySelector("#change-color");
// let button = document.querySelector("a");

// changeColorButton.addEventListener("click", (event)=> {
//   let paragraph = document.querySelector("p");
//   paragraph.style.color = "red";
// })

// button.addEventListener("click", (event) => {
//   // included to prevent anchor from reloading page
//   event.preventDefault();

//   alert("I clicked on this button!")

//   console.log("abc");
// });

// // let paragraph = document.createElement("p");

// // paragraph.innerHTML = "abcdefghijk";
// // document.body.appendChild(paragraph);

// let anchorButton = document.querySelector("a");
// let secondButton = document.querySelector("#second-button");
// let buttons = document.querySelectorAll("button");

// // secondButton.addEventListener("click", (event) => {
// //   alert("Clicked second button")
// // })

// // assign an even listen to more than one element
// for(let i = 0 ; i < buttons.length; i++){
//   buttons[i].addEventListener("click", (event) => {
//     alert("Clicked one of the buttons")
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = "abcdefghijk";
//     document.body.appendChild(paragraph);

//   })
// }

// // We can condense this code into a for loop as above

// // buttons[0].addEventListener("click", (event) => {
// //   alert("Clicked a button")
// // })

// // buttons[1].addEventListener("click", (event) => {
// //   alert("Clicked a button")
// // })
// let sections = document.getElementsByTagName("section");
// let firstSection = sections[0];
// let secondSection = sections[1];
// let thirdSection = sections[2];
// let lastSection = sections[3];

// // run this code on window scroll
// window.addEventListener("scroll", event => {
//   // when the page scrolls 100px down then do the following
//   if (window.scrollY > -100) {
//     firstSection.classList.add("show");
//   }

//   // when the page scrolls 800px down then do the following
//   if (window.scrollY > 500) {
//     secondSection.classList.add("show");
//   }

//   // when the page scrolls 1600px down then do the following
//   if (window.scrollY > 1400) {
//     thirdSection.classList.add("show");
//   }

//   // when the page scrolls 2400px down then do the following
//   if (window.scrollY > 2200) {
//     lastSection.classList.add("show");
//   }
// });

// // define a target element
// let changeColorButton = document.querySelector("#change-color");
// let button = document.querySelector("a");

// changeColorButton.addEventListener("click", (event)=> {
//   let paragraph = document.querySelector("p");
//   paragraph.style.color = "red";
// })

// button.addEventListener("click", (event) => {
//   // included to prevent anchor from reloading page
//   event.preventDefault();

//   alert("I clicked on this button!")

//   console.log("abc");
// });

// // let paragraph = document.createElement("p");

// // paragraph.innerHTML = "abcdefghijk";
// // document.body.appendChild(paragraph);

// let anchorButton = document.querySelector("a");
// let secondButton = document.querySelector("#second-button");
// let buttons = document.querySelectorAll("button");

// // secondButton.addEventListener("click", (event) => {
// //   alert("Clicked second button")
// // })

// // assign an even listen to more than one element
// for(let i = 0 ; i < buttons.length; i++){
//   buttons[i].addEventListener("click", (event) => {
//     alert("Clicked one of the buttons")
//     let paragraph = document.createElement("p");
//     paragraph.innerHTML = "abcdefghijk";
//     document.body.appendChild(paragraph);

//   })
// }

// // We can condense this code into a for loop as above

// // buttons[0].addEventListener("click", (event) => {
// //   alert("Clicked a button")
// // })

// // buttons[1].addEventListener("click", (event) => {
// //   alert("Clicked a button")
// // })
