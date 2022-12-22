function countCharA(str)
{
    console.log(str);
    var counter=0;
    for(var i=0;i<str.length;i++)
    {
        var char=str.charAt(i);
        if(char==`a` || char==`A`)
        {
            console.log(char);
            counter=counter+1;
        }
    }
    console.log(`Total number of characters in string is : ${counter}`);
}
countCharA(`I AM Learning JavaScript,The Language of internet`);
countCharA(`My favourite movie is LAggAn`);