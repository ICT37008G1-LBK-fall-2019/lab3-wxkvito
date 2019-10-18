var x1 = prompt("რამდენი სახელის შეტანა გსურთ პირველ მასივში");
var y1 = [];
var money1;
var s1;
var y2 = [];
var money2;
var s2;
var y3 = [];
var s3;
for (money1 = 0; money1 < x1; money1++) {
    s1 = prompt("შეიყვანეთ სახელი")
    y1.push(s1)
}
y1.sort();
alert("მეორე მასივი");
var x2 = prompt("რამდენი სახელის შეტანა გსურთ მეორე მასივში მასივში");
for (money2 = 0; money2 < x2; money2++) {
    s2 = prompt("შეიყვანეთ სახელი")
    y2.push(s2)
}
y2.sort();

alert("მესამე მასივი");
y3.push(y1+y2);
y3.sort();
alert(y3);