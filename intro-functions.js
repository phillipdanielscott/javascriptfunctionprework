var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */


function max(a, b){
if(typeof a === "number" && typeof b === "number" ) {
  if (a>b){
    return a;
  } else if (a < b) {
    return b;
  }
} else if (typeof  a !== "number" && typeof b !== "number") {
  return NaN;
}
else if (typeof a !== "number") {
  return b;
}else if (typeof b !== "number") {
  return a;
}

}


console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */


function maxOfThree(a, b, c){
  if (a < b && b > c) {
    return b;
  } else if (a < c || b < c) {
    return c;
  } else if (a > b && a > c)
  return a;

}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
if (char === "a" && "A") {
 return true;
 } else if (char === "e" || char === "E") {
   return true;
 } else if (char === "i" && char === "I" ) {
   return true;
 } else if (char === "o" && char === "O" ) {
   return true;
 }
 else if (char === "i" && char === "I" ) {
   return true;
}
 else {
   return false;
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){
   var vowelArr = ["a", "e", "i", "o", "u"];
   var newString = "";
   for(var i = 0; i < text.length; i+1) {
     if (vowelArr.indexOf(text[i])===-1) {
     newString = newString + text[i] + "o" + text[i]
   } else {
    newString = newString + text[i]   }
   }
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  return str.split(""). reverse ().join("")
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
// var arr = [1,3,4,5,7]
arr[2]
var sturdents = [ 'damon','phillip','winston','amanda','caleb','geoff','gabe','logan','riggan','david']


function randomStudent (anyListOfStudents) {
var randomNum = Math.random(); // number between 0 and 1
var lengthofStudentlist = anyListOfStudents.length;
var lastIndexOfStudentList = lengthofStudentlist -1; //Last index of the array
var guessNumber = Math.floor(randomNum * lengthofStudentlist)
return anyListOfStudents [guessNumber] ;
}

function SpanishColorUsingObject (colorName) {
  var colorObject = {
    rojo: '#ff0000',
    blanco: '#fffff',
    azul: '#00ff00',
    negro: '#000000'
  }
  return colorObject[colorName]
}
function sum (arr) {
  var sumOfNum = 0;
  for(var i = 0; i < arr.length; i++) {
    sumofNum = sumOfNum + arr[i];
  }
  return sumOfNum
}
