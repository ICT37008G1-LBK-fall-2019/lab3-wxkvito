var tanxa = prompt ("შეიყვანეთ თანხა");
var x = tanxa.substring(1);
if (tanxa.substring(0,1)== "L" )
{
    alert (+x / 2.6);
}
else if (tanxa.substring(0,1)== "$" ){
    alert (+x * 2.6);
}