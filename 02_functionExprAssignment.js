
console.log("-------Function Expression for square----------------------");
var square=function(num)
{
    console.log("Square:",num*num);
}

square(5);
square(6);
square(25);
square(100);
console.log("typeof:",typeof square);

console.log("=======Function Expression for area of rectangle============");
var area=function(length,width)
{
    var temp=length*width;
console.log("Area of rectangle:",temp);
}
area(499,917);

console.log("-------------Function Expression for swapping----------------");
var swap_values=function(value1,value2)
{
    console.log("Before swap values:",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap values:",value1,value2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("===========Function Expression for String====================");

var str=function(value)
{
    console.log("Given String:",value);
    console.log("Total character available in the string:",value.length);
    var strlength=value.length;
    console.log("Index of char S:",value.indexOf("S"));
    console.log("Index of char lang:",value.indexOf("lang"));
    console.log("Last character in the string:",value.charAt(strlength-1));
    console.log("3rd last character:",value.charAt(strlength-3));
}
str("JavaScript the most popular language");

