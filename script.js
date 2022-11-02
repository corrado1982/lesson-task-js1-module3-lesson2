//Question 1

function greet(name = "john") {
    return `Hello ${name}!`;
}
//const logGreet = greet(); or
console.log(greet());




//Question 2

const messageInHtml = document.querySelector(".someStyle");

const insertMessage = dinamicFunction("success", "Everithing OK!");

messageInHtml.innerHTML = insertMessage;






//Question 3

//                  RIGHT ONE

// async function getFact() {
//     try {
//         const response = await fetch("https://cat-fact.herokuapp.com/facts");
//         const results = await response.json();
//         console.log(results[8].text);
//     }
//     catch(error) {
//         console.log(error);
//     }
//     finally {
//         console.log("did you find?")
//     }
// }
// getFact();











// const url = "https://cat-fact.herokuapp.com/facts";

// async function getFact() {
//     const response = await fetch(url);
//     const results = await response.json();
//     const fact = results.all;
//     for (let i = 0; i < fact.length; i++) {
//         console.log(results[8].text);
//     }
   
// }
// getFact();
