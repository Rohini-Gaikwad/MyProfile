var stringHandsOn=function()
{
    console.log("Hey you are doing good,keep it up");
    var str="Hey you are doing good,keep it up";
    console.log("String Length:",str.length);
    var strlength=str.length;
    
    console.log("-------- For Remove leading and tariling extra spaces---------");
    var result=str.trim();
    console.log("Removing extra spaces:",result);

    console.log("--------For space count----------");
    var countspace=result.split("").length-1;
    console.log("Total no.of extra spaces:",countspace);

    console.log("---------Using String methods----------")
    console.log("First character in the string:",str.charAt(0));
    console.log("Last character in the string:",str.charAt(strlength-1));
    console.log("Index of char good:",str.indexOf("good"));

    console.log("----------------Used substring() and slice() functions---------");
    console.log("Substring:",str.substring(22));
    console.log("Slice:",str.slice(22));

    console.log("-------------Used endswith() and startswith() methods-----------");
    console.log("String ends with ",str.endsWith("up"));
    console.log("String starts with ",str.startsWith("Hey"));

    
}
stringHandsOn();
