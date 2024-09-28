console.log("Here we go")

let x = 20

if (x > 20) {
    console.log("x is greater than 10");

}else if(x>7){
    console.log("x is smaller than 10 but bigger then 7");

}else if (x > 18) {
    console.log("x is bigger then 7 but smaller then 20")

}

var day = '5';

switch (day) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday')
        break;
    case '7':
        console.log('Sunday')
        break;
    default:
        console.log('Unknown day');
        
}


  var height = 2; 

while (height < 5) {
    console.log(" You are height "  + height + ". You cannot go on the rollercoasters.");
    height++; //Add 1 to the 'height' in each round.
}

console.log("You are now at the required height 5 or taller and You can start going on the rollercoasters!");


var LaneSwimReps = 0;

do {
    console.log("Lane Swim reps " + (LaneSwimReps + 1));
    LaneSwimReps++;
} while (LaneSwimReps < 30);

console.log("Sauna time after 30 reps");


var person = {firstName: "The", lastName: "Joker", age: 31, saying: "Here We Go"};

for (var key in person) {
    console.log(key + ": " + person[key]);
}

for (var i = 1; i <= 10; i++) {
    if (i === 3) {
        break; // Exit the loop when i = 3
    }
    console.log(i);
}
console.log("Loop exited at i = 3");

var person = {
    firstName: "The",
    lastName: "Joker",
    age: 30
};

with (person) {
    console.log(firstName + " " + lastName + " is " + age + " years old.. or is he?");
}

