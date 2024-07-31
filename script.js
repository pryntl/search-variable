// main variable that we wanna search in.
let string = "sponge bob square pants.";
// the targeted words.
(target1 = "square"), (target2 = "yellow");
//printing the variables.
console.log("string:", string);
console.log("target1:", target1);
console.log("is target1 in the string?");
// using "if" to see if the word exist in the main variable.
if (string.includes(target1)) {
  console.log(true);
} else {
  console.log(false);
}
//printing the variable.
console.log("target2:", target2);
console.log("is target2 in the string?");
// using "if" to see if the word exist in the main variable.
if (string.includes(target2)) {
  console.log(true);
} else {
  console.log(false);
}
