
  var user = {
    name: "Heba",
    number: "+0947136653",
    age: 20,
    email: "hebaabbas991@gmail.com"
    };

    console.log(user);

    console.table({"Name: " :user.name,
    "number:  " : user.number,
    "Age: " : user.age,
    "E-mail: " : user.email,})
    document.write("<p>user : " + user+ "</p>");
    document.write("<p>Name : " + user.name+ "</p>");
    document.write("<p>Number : " + user.number+ "</p>");
    document.write("<p>Age :" +user.age+ "</p>");
    document.write("<p>E-mail:" + user.email + "</p>");
var numbers = [];
for (var i = 0; i < 10; i++) {
numbers.push(Math.floor(Math.random() * 10));
}


var evenSum = 0;
for (var i = 0; i < numbers.length; i++) {
if (numbers[i] % 2 === 0) {
evenSum += numbers[i];
}
}


var lessThanFiveSum = 0;
for (var i = 0; i < numbers.length; i++) {
if (numbers[i] < 5) {
lessThanFiveSum += numbers[i];
}
}

console.log("random array :" + numbers);
console.log("even number :" + evenSum);
console.log( "the number which index less 5:" + lessThanFiveSum);
document.write("random array : " + numbers + "<br>");
document.write("even number :" + evenSum + "<br>");
document.write("the number which index less 5:" + lessThanFiveSum + "<br>");

