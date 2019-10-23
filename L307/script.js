var x1 = prompt("რამდენი სახელის შეტანა გსურთ პირველ მასივში");
var y1 = [];
var money1;
var s1;
var y2 = [];
var money2;
var s2;
var y3 = [];
var s3;
var money3;
for (money1 = 0; money1 < x1; money1++) {
    s1 = prompt("შეიყვანეთ სახელი")
    y1.push(s1)
}
alert("მეორე მასივი");
var x2 = prompt("რამდენი სახელის შეტანა გსურთ მეორე მასივში მასივში");
for (money2 = 0; money2 < x2; money2++) {
    s2 = prompt("შეიყვანეთ სახელი")
    y2.push(s2)
}
var y4=y1.concat(y2);
alert("მესამე მასივი");
for (var x = 0; x < y4.length; x++) {
    if (y3.indexOf(y4[x]) == -1){
        y3.push(y4[x])

}}
alert (y3);