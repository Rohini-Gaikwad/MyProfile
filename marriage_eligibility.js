function marriageEligibility(name,gender,age)
{
   
    if(gender==`Other` || gender==`null` || age==`null`)
     {
        console.log(`Gender:${gender} Age:${age} ${name} Please provide the valid gender`);
     }
     else
     {
    if(age>=21 || age>=18)
    {
        console.log(`Gender:${gender} Age:${age} ${name} you are eligible for Marriage.`);
     }
     else
     {
         console.log(`Gender:${gender} Age:${age} ${name} Not eligible for Marriage`);
     }
    }

    

   //console.log(`Female Marriage Eligibility`);
    //if(age>=18  && gender==`Female`)
    //{
        //console.log(`Hey ${name} you are eligible for Marriage.`);
   // }
    //else
    //{
        //console.log(`${name} Not eligible for Marriage`);
    //}



}
marriageEligibility(`Ram`,`Male`,17);
marriageEligibility(`Raj`,`Male`,25);
marriageEligibility(`Sita`,`Female`,28);
marriageEligibility(`Geeta`,`Female`,16);
marriageEligibility(`X`,`Other`,35);
marriageEligibility(`Y`,`Other`,41);
marriageEligibility(`Z`,`null`,null);

