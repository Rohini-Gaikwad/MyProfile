console.log("------------FE for Greatest number--------------");
var largenum=function(num1,num2)
{
    var result=num1>num2;
   console.log(`Greatest Number:${result}`);

}
largenum(10,-10);
largenum(800,899);

console.log("------------FE for Even Odd number--------------");
var show=function(num)
{
    //var result1=num%2;
    console.log(`Even or Odd Number:${result1=num%2==0}`);
}
show(29);
show(44);
show(0);
show(101);

console.log("-----------Even or Odd length of word------------------");
var wordlength=function(value)
{
    console.log("Given words:",value);
    console.log("Length of words:",value.length);
    temp=value.length;
    console.log(`Even or Odd length of word:${res=temp%2==0}`);
}
wordlength("JavaScript");
wordlength("Google");
wordlength("Developer");

const result = (number % 2  == 0) ? "even" : "odd";
