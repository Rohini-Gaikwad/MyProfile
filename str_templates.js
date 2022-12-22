
console.log("----------- FE for String length and Square----------------")
var wordLengthSquare=function(value)
{
    console.log("Given words:",value);
    console.log("Length of words:",value.length);
    var wordlength=value.length;
    console.log("Square of length:",wordlength*wordlength);
}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");
console.log("---------Function with no arguments and no value---------------")
function strname()
{
    console.log("I am Angular Developer");
    var str="I am Angular Developer";
   var length= str.length;
   console.log("String Length:",length);
   
   console.log("String division:",length/length);
   console.log("String Multiplication:",length*length);
}
strname();