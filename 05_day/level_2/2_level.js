let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
mystring = text.replace(/[.,]/g, "");
console.log(mystring.split(" "));
console.log(mystring.split(" ").length);

//3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "green tea";
console.log(shoppingCart);

//4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countriess = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

if (countriess.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countriess.push("Ethipia");
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechss = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechss.includes("sass")) {
  console.log("sass is a preprocessor");
} else {
  webTechss.push("sass");
}

//6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
console.log(frontEnd.concat(backEnd));
