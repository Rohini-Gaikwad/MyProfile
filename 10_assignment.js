console.log("-------------Function with no arguments and no return type---------------");
function show()
{
    console.log("Hello Everyone");
}
show();

function dispaly()
{
    console.log("Rohini Here..");
}
dispaly();

console.log("=========Function with arguments===============");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("firstName:Rohini \n" +  "lastName:Gaikwad \n"  +  "collegeName:SKN Sinhgad College of Engineering");

}
personalDetails();

console.log("------------Swap function----------------------");
function swap_values(value1,value2)
{
    console.log("Before swap values:",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap values:",value1,value2);

}
swap_values("Virat","Anushka");
swap_values(1000,2000);

console.log("******************Addition*************************");
function add(var1,var2,var3){
    console.log("Addition:",var1+var2+var3);

}
add(10.23,600,40);
add("Hello","Good","Morning");