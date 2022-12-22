console.log(`------------------FE for Voting----------------------`);
var voting=function(age)
{
   
    var result =
        (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet"; 
        console.log(result);
       
}
voting(45);
voting(17);
voting(8);
voting(20);
voting(-10);
voting(200);
voting(0);

console.log(`----------------Function for Grade System---------------------------------`);
function gradeCalculation(marks)
{
    if(marks>=90)
    {
        console.log(`Fansactic marks:${marks} your grade is A+ `);
    }
    else if(marks>=75 && marks<90)
    {
        console.log(`Excellent marks:${marks} your grade is A`);
    }
    else if(marks>=50 && marks<75)
    {
        console.log(`Good marks:${marks} your grade is B`);
    }
    else if(marks>=35 && marks<50)
    {
        console.log(`Marks:${marks} your grade is c,Need improvement`);
    }
    else if(marks==0 || marks<0 || marks>100)
    {
        console.log(`${marks} Please provide the valid marks`);
    }
    else{
        console.log(`Default case:`);
    }

}
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);

