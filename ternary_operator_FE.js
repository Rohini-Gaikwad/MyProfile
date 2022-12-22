var student=function(gradScore,hscScore,sscScore,candidateName)
{
    
    if(`gradScore>=70%` || `hscScore>=80%` || `sscScore>90%`)
    {
        console.log(`Congratulations ${candidateName} you are eligible for TCS interview`)
    }
    else
    {
        console.log(`Unfortunately you are not eligible for interview`);
    }

}
student(80,86,90,`Ujjawala`);
student(70,65,55,`Bhagyashri`);
student(60,89,88,`Tejashri`);