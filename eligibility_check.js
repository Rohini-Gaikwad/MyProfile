console.log(`--------Function for Male Marriage-----------`);
function maleMarriageEligibility(gender,age,boyName)
{
   var result=(age>=21) ? `Hey ${boyName} you are eligible for Marriage.` : `Not eligible for Marriage`;
   console.log(result);
}
maleMarriageEligibility(`Male`,25,`Billgates`);
maleMarriageEligibility(`Male`,17,`Stew jobs`);




console.log(`----------Function for Female Marriage-----------`);
function femaleMarriageEligibility(gender,age,girlName)
{
    if(age>=18)
    {
        console.log(`Hey ${girlName} you are eligible for Marriage.`);
    }
    else
    {
        console.log(`Not eligible for Marriage`);
    }

}
femaleMarriageEligibility(`Female`,16,`Jenifer`);
femaleMarriageEligibility(`Female`,27,`Malinda Gates`);

