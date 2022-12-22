function stringTemplateAssig()
{
    var hobby1=`Listening music`;
    var hobby2=`Travelling`;
    var hobby3=`Cooking`;
    console.log(`Hobbies: ${hobby1} ${hobby2} ${hobby3}`);
    var result=hobby1.concat(hobby2,hobby3);
    console.log(`Concate String:${result}`);

}
stringTemplateAssig();