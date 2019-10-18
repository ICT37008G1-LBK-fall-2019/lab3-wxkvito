var x = prompt ("შეიყვანეთ თანხა");
var y;
var money = 2.6
y = x.substr(0,1); // show witch simbol using
if(y = "L" ){
    alert (x.substr(1)/ money + "დოლარი")
}
else if(y = "$"){
    alert (x.substr(1) * money + " ლარი")
}