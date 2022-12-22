
console.log(`=========Function Expression for Voting Eligibility================`);
var votingEligibility = function (age) {

    if (age <= 0 || age > 120) {
        console.log(`Age: ${age}, Invalid data`);
    }
    if (age >= 18 && age <= 120) {
        console.log(`Age: ${age}, you can vote`);
    }
    if (age < 18 && age > 0) {
        console.log(`Age: ${age}, you can not vote`);
    }
}

votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`=========Function for Grade Calculation================`);
function gradeCalculation(marks) {
    if (typeof marks == "number") {
        console.log(`Input type:number ${marks}`);
    
        if(marks<=0 || marks>100)
        {
        console.log(`Please provide the valid marks`);
        }

        if (marks >= 90 && marks <= 100) {
            console.log(`Fansactic marks: ${marks} your grade is A+`);
        }
        if (marks >= 75 && marks < 90) {
            console.log(`Excellent marks: ${marks} your grade is A`);
        }
        if (marks >= 50 && marks < 75) {
            console.log(`Good marks: ${marks} your grade is B`);
        }
        if (marks >= 35 && marks < 50) {
            console.log(`Marks: ${marks} your grade is c, Need improvement`);
        }
        if(marks<35)
        {
            console.log(`Failed`);
        }
    }
    else{
        console.log(`Please provide the valid marks, ${marks}`);
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
gradeCalculation("91");
gradeCalculation("Eighty")